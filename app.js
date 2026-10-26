    const esriGray = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: 'Esri, DeLorme, NAVTEQ'
    });
    const esriTopo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Esri & OpenStreetMap contributors'
    });
    const esriSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Esri World Imagery'
    });

    const map = L.map('map', {
      center: [33.305, 131.480],
      zoom: 13,
      layers: [esriTopo],
      zoomControl: true
    });

    L.control.layers({
      "🌙 Mapa oscuro (Esri)": esriGray,
      "🗺️ Mapa claro (Esri)": esriTopo,
      "🛰️ Vista Satélite (Esri)": esriSatellite
    }, null, { position: 'topright' }).addTo(map);

    const markersMap = {};
    const cardsMap = {};
    const markerLayerGroup = L.layerGroup().addTo(map);
    const routeLayerGroup = L.layerGroup().addTo(map);
    const routeArrowLayerGroup = L.layerGroup().addTo(map);

    function getStopCode(place) {
      if (place.type === 'start') return 'S';
      const dayStop = place.code.match(/^[DFO][1-6]-(\d+)$/);
      if (dayStop) return dayStop[1];
      return place.code.replace('-', '');
    }

    function getParkingMarker(place) {
      if (place.region === 'fukuoka' || (place.region === 'okinawa' && !parkingInfo[place.id])) return '';
      if (place.type === 'parking') return '';
      const info = parkingInfo[place.id];
      if (!info) return '<span class="parking-badge parking-unknown" title="Parking sin confirmar">P?</span>';
      const summary = info.summary.toLowerCase();
      const details = info.details.toLowerCase();
      if (summary.includes('sin parking propio') || summary.includes('sin parking asignado') || summary.includes('tarifa no publicada')) {
        return '<span class="parking-badge parking-unknown" title="Sin parking propio; consulta la parada">P?</span>';
      }
      if (summary.includes('de pago') || /¥\s?\d/.test(summary) || /tarifa general: ¥\s?\d/.test(details)) {
        return '<span class="parking-badge parking-paid" title="Parking de pago o condicionado">P¥</span>';
      }
      if (summary.includes('gratis')) {
        return '<span class="parking-badge parking-free" title="Parking gratuito">P</span>';
      }
      return '<span class="parking-badge parking-unknown" title="Tarifa o disponibilidad por confirmar">P?</span>';
    }

    function createCustomLabelIcon(place) {
      const markerKind = place.type === 'parking' ? 'parking' : place.type === 'hotel' ? 'hotel' : place.type === 'start' ? 'start' : '';
      return L.divIcon({
        className: '',
        html: `<div class="map-stop-marker ${markerKind}" style="--stop-color:${place.color}">${getStopCode(place)}${getParkingMarker(place)}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -17]
      });
    }

    function parkingInfoMarkup(placeId) {
      const info = parkingInfo[placeId];
      if (!info) return '';
      const sourceLink = info.source
        ? `<a href="${info.source}" target="_blank" rel="noopener">${info.sourceLabel}</a>`
        : '';
      const useLink = info.sourceUse
        ? `<a href="${info.sourceUse}" target="_blank" rel="noopener">${info.sourceUseLabel}</a>`
        : '';
      return `<section class="parking-info">
        <strong>🅿️ Parking</strong>
        <span>${info.summary}</span>
        <details><summary>Cómo aparcar, tarifa y pago</summary>
          <p>${info.details}</p><div class="parking-sources">${sourceLink}${useLink}</div>
        </details>
      </section>`;
    }

    function photoMarkup(place) {
      if (!place.photo) return '';
      const photo = place.photo;
      return `<figure class="place-photo">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('figure').remove()">
        <figcaption>Foto: <a href="${photo.source}" target="_blank" rel="noopener">${photo.credit}</a></figcaption>
      </figure>`;
    }

    function activityMarkup(place) {
      if (!place.activity) return '';
      return `<div class="activity-summary"><strong>Qué haremos</strong><p>${place.activity}</p></div>`;
    }

    function officialSourceMarkup(place) {
      if (!place.sourceUrl) return '';
      return `<a class="official-source" href="${place.sourceUrl}" target="_blank" rel="noopener">Fuente oficial: ${place.sourceLabel || 'ver información'}</a>`;
    }

    function setSelectedPlace(id) {
      Object.values(cardsMap).forEach(card => card.classList.remove('is-selected'));
      Object.values(markersMap).forEach(marker => marker.getElement()?.querySelector('.map-stop-marker')?.classList.remove('is-selected'));
      if (cardsMap[id]) cardsMap[id].classList.add('is-selected');
      markersMap[id]?.getElement()?.querySelector('.map-stop-marker')?.classList.add('is-selected');
    }

    function renderMapAndSidebar(filter = 'all') {
      markerLayerGroup.clearLayers();
      routeLayerGroup.clearLayers();
      routeArrowLayerGroup.clearLayers();
      Object.keys(markersMap).forEach(id => delete markersMap[id]);
      Object.keys(cardsMap).forEach(id => delete cardsMap[id]);
      const container = document.getElementById('view-itinerary');
      container.innerHTML = '';
      const parkingNote = document.createElement('p');
      parkingNote.className = 'parking-date-note';
      parkingNote.textContent = filter === 'fukuoka'
        ? 'Base Fukuoka · 5 noches en Hakata (hotel pendiente). Aquí se agrupan los cinco días de visitas; Nanzoin queda como opción para la salida si hay tiempo. Horarios y pases de 2028 por confirmar.'
        : filter === 'okinawa'
          ? 'Plan basado en «Guía de Viaje a Okinawa» (34 fuentes). Base Naha: Día 1 sin coche; recógelo el Día 2 para norte, costa central y sur. Kerama queda flexible por el mar; si cancelan el ferry, intercambia ese día con una ruta terrestre. El parking separado de Sefa-Utaki aparece como P verde. Tarifas y horarios deben confirmarse para 2028.'
        : filter === 'beppu'
          ? 'Base Beppu · tres días: Kannawa, Monte y Centro, y Yufuin. Aquí se agrupan las visitas, los trayectos y los alojamientos de esta etapa.'
          : filter === 'hotel'
          ? 'Opciones de alojamiento en Beppu; el hotel de Hakata queda pendiente. Al elegirlos, ajustaremos las salidas diarias.'
            : 'En Beppu, la insignia P indica el parking: verde = gratis; ámbar = de pago o condicionado; gris = sin parking propio o dato por confirmar. Los cuadrados naranjas son parkings separados. Tarifas consultadas el 26 oct 2026; pueden cambiar.';
      container.appendChild(parkingNote);

      const filtered = filter === 'all' ? places : filter === 'fukuoka'
        ? places.filter(p => p.region === 'fukuoka' && p.type !== 'hotel')
        : filter === 'okinawa'
          ? places.filter(p => p.region === 'okinawa' && p.type !== 'hotel')
        : filter === 'beppu'
          ? places.filter(p => p.region !== 'fukuoka' && p.type !== 'hotel')
          : filter === 'hotel'
            ? places.filter(p => p.type === 'hotel')
            : places.filter(p => p.day === filter);
      const bounds = [];

      // Una línea continua por cada tramo; las flechas indican el sentido.
      Object.keys(routesData).forEach(dayKey => {
        const showRoute = filter === 'all' || filter === dayKey
          || (filter === 'beppu' && ['day1', 'day2', 'day3'].includes(dayKey));
        if (!showRoute) return;
        (routesData[dayKey] || []).forEach(seg => {
          const lineColor = ({ car: '#368ca5', walk: '#d18b37', rail: '#8055ad', bus: '#438c7a', boat: '#3975b7' })[seg.type] || '#368ca5';
          const lineDash = seg.type === 'walk' ? '7, 8' : ['rail', 'boat'].includes(seg.type) ? '3, 7' : null;
          const modeLabel = ({ car: 'En coche', walk: 'A pie', rail: 'En tren', bus: 'En bus', boat: 'En barco' })[seg.type] || 'Trayecto';
          const points = [seg.from, seg.to];
          L.polyline(points, {
            color: '#fffdf8', weight: 8, opacity: 0.95, lineCap: 'round'
          }).addTo(routeLayerGroup);
          L.polyline(points, {
            color: lineColor, weight: 4, opacity: 0.95,
            dashArray: lineDash, lineCap: 'round'
          }).bindTooltip(`${modeLabel}${seg.duration ? ` · ${seg.duration}` : ''}`, { sticky: true })
            .addTo(routeLayerGroup);

          const middle = [(seg.from[0] + seg.to[0]) / 2, (seg.from[1] + seg.to[1]) / 2];
          const angle = Math.atan2(
            -(seg.to[0] - seg.from[0]),
            (seg.to[1] - seg.from[1]) * Math.cos(middle[0] * Math.PI / 180)
          ) * 180 / Math.PI;
          const arrowIcon = L.divIcon({
            className: '',
            html: `<span class="route-direction" style="color:${lineColor};transform:rotate(${angle}deg)">➜</span>`,
            iconSize: [18, 18], iconAnchor: [9, 9]
          });
          L.marker(middle, { icon: arrowIcon, interactive: false, keyboard: false, zIndexOffset: -100 })
            .addTo(routeArrowLayerGroup);
        });
      });
      let previousDay = null;
      filtered.forEach(place => {
        if (['beppu', 'fukuoka', 'okinawa'].includes(filter) && place.day !== previousDay) {
          const heading = document.createElement('h2');
          heading.className = 'fukuoka-day-heading';
          const beppuDayTitles = { day1: 'Día 1 · Kannawa', day2: 'Día 2 · Monte y Centro', day3: 'Día 3 · Yufuin' };
          heading.textContent = filter === 'beppu' ? beppuDayTitles[place.day] : place.dayLabel;
          container.appendChild(heading);
          previousDay = place.day;
        }
        bounds.push([place.lat, place.lng]);

        const marker = L.marker([place.lat, place.lng], {
          icon: createCustomLabelIcon(place)
        }).addTo(markerLayerGroup);

        marker.on('click', () => {
          setSelectedPlace(place.id);
          cardsMap[place.id]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        });

        const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.title + ' ' + place.jp + ' ' + (place.city || 'Beppu'))}`;

        marker.bindPopup(`
          <div class="p-1 max-w-[240px]">
            <div class="text-[10px] font-bold uppercase tracking-wider mb-0.5" style="color:${place.color}">${place.dayLabel}</div>
            <div class="font-bold text-sm text-white">${place.title}</div>
            <div class="text-xs text-slate-400 mb-2">${place.jp} • ${place.time}</div>
            <p class="text-xs text-slate-300 leading-snug mb-2">${place.desc}</p>
            ${activityMarkup(place)}
            ${officialSourceMarkup(place)}
          ${parkingInfoMarkup(place.id)}
            <div class="bg-slate-900/90 p-2 rounded border border-slate-700 text-[11px] text-amber-300 mb-2">
              💡 ${place.tip}
            </div>
            <a href="${gmapsUrl}" target="_blank" rel="noopener" class="block text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-1.5 px-3 rounded-lg transition">
              📍 Abrir en Google Maps
            </a>
          </div>
        `);

        markersMap[place.id] = marker;

        const card = document.createElement('div');
        card.className = "bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl p-3.5 cursor-pointer transition group";
        card.dataset.placeId = place.id;
        card.onclick = () => focusPlace(place.id);
        card.innerHTML = `
          <div class="flex items-start justify-between gap-2 mb-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-[11px] font-bold text-white" style="background:${place.color}">${getStopCode(place)}</span>
              <span class="text-[11px] font-semibold text-slate-400">${place.dayLabel}</span>
            </div>
            <span class="text-[11px] text-amber-400 font-medium">${place.time}</span>
          </div>
          ${photoMarkup(place)}
          <h3 class="font-bold text-sm text-slate-100 group-hover:text-amber-400 transition">${place.title} <span class="text-xs font-normal text-slate-400">(${place.jp})</span></h3>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">${place.desc}</p>
          ${activityMarkup(place)}
          ${officialSourceMarkup(place)}
          ${parkingInfoMarkup(place.id)}
          <div class="mt-2 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
            <span class="text-slate-400">${place.type === 'start' ? '↗️ Salida' : `🎟️ ${place.price}`}</span>
            <span class="text-amber-400 font-semibold group-hover:underline">Ver en mapa →</span>
          </div>
        `;
        container.appendChild(card);
        cardsMap[place.id] = card;
      });

      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [45, 45], maxZoom: 15 });
        setSelectedPlace(null);
      }
    }

    function focusPlace(id) {
      const place = places.find(p => p.id === id);
      const marker = markersMap[id];
      if (place && marker) {
        setSelectedPlace(id);
        map.flyTo([place.lat, place.lng], 16, { duration: 0.8 });
        setTimeout(() => marker.openPopup(), 400);
      }
    }

    function filterMap(filter) {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === filter) {
          btn.classList.add('ring-2', 'ring-amber-400');
        } else {
          btn.classList.remove('ring-2', 'ring-amber-400');
        }
      });
      switchTab('itinerary');
      renderMapAndSidebar(filter);
    }

    function switchTab(tab) {
      const itView = document.getElementById('view-itinerary');
      const tipsView = document.getElementById('view-tips');
      const itBtn = document.getElementById('tab-itinerary');
      const tipsBtn = document.getElementById('tab-tips');

      if (tab === 'itinerary') {
        itView.classList.remove('hidden');
        tipsView.classList.add('hidden');
        itBtn.className = "flex-1 py-2.5 text-center border-b-2 border-amber-400 text-amber-400";
        tipsBtn.className = "flex-1 py-2.5 text-center border-b-2 border-transparent text-slate-400 hover:text-slate-200";
      } else {
        itView.classList.add('hidden');
        tipsView.classList.remove('hidden');
        tipsBtn.className = "flex-1 py-2.5 text-center border-b-2 border-amber-400 text-amber-400";
        itBtn.className = "flex-1 py-2.5 text-center border-b-2 border-transparent text-slate-400 hover:text-slate-200";
      }
    }

    renderMapAndSidebar('all');
    const initialRegionBounds = L.latLngBounds([30.5, 126.0], [37.8, 141.5]);
    map.fitBounds(initialRegionBounds, { padding: [16, 16], maxZoom: 8 });











