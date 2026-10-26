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
      if (id && cardsMap[id]) cardsMap[id].classList.add('is-selected');
      if (id && markersMap[id]) markersMap[id].getElement()?.querySelector('.map-stop-marker')?.classList.add('is-selected');
    }

    const tripStructure = {
      beppu: {
        name: "Beppu",
        icon: "♨️",
        baseTitle: "Base Beppu · 3 días",
        days: [
          { id: "day1", tag: "D1", title: "Kannawa y Onsen", color: "#f43f5e" },
          { id: "day2", tag: "D2", title: "Monte y Centro", color: "#0ea5e9" },
          { id: "day3", tag: "D3", title: "Yufuin", color: "#10b981" }
        ]
      },
      fukuoka: {
        name: "Fukuoka",
        icon: "🏙️",
        baseTitle: "Base Fukuoka · 5 noches",
        days: [
          { id: "fukuoka1", tag: "F1", title: "Llegada y Nakasu", color: "#f43f5e" },
          { id: "fukuoka2", tag: "F2", title: "Parques y Bahía", color: "#0ea5e9" },
          { id: "fukuoka3", tag: "F3", title: "Hakata y Tenjin", color: "#14b8a6" },
          { id: "fukuoka4", tag: "F4", title: "Dazaifu y Yanagawa", color: "#f59e0b" },
          { id: "fukuoka5", tag: "F5", title: "Mojiko y Kokura", color: "#a855f7" },
          { id: "fukuoka6", tag: "F6", title: "Nanzoin (Salida)", color: "#8b5cf6" }
        ]
      },
      okinawa: {
        name: "Okinawa",
        icon: "🌺",
        baseTitle: "Base Okinawa · 5 días",
        days: [
          { id: "okinawa1", tag: "O1", title: "Naha y Shuri", color: "#e56f8b" },
          { id: "okinawa2", tag: "O2", title: "Norte y Churaumi", color: "#4788c7" },
          { id: "okinawa3", tag: "O3", title: "Islas Kerama", color: "#8061af" },
          { id: "okinawa4", tag: "O4", title: "Costa Central", color: "#4a9d91" },
          { id: "okinawa5", tag: "O5", title: "Sur Sagrado", color: "#e59b39" }
        ]
      }
    };

    let currentBase = 'all';
    let currentDay = 'all';

    function renderDayFilterBar() {
      const container = document.getElementById('day-filter-container');
      if (!container) return;
      container.innerHTML = '';

      if (currentBase === 'all') {
        const allBtn = document.createElement('button');
        allBtn.className = `day-filter-btn ${currentDay === 'all' ? 'active' : ''}`;
        allBtn.innerHTML = `🗺️ Todo el viaje (14 jornadas)`;
        allBtn.onclick = () => filterDay('all');
        container.appendChild(allBtn);

        Object.entries(tripStructure).forEach(([baseKey, struct]) => {
          const sep = document.createElement('span');
          sep.className = 'day-filter-label ml-2';
          sep.innerHTML = `${struct.icon} ${struct.name}:`;
          container.appendChild(sep);

          struct.days.forEach(d => {
            const btn = document.createElement('button');
            btn.className = `day-filter-btn ${currentDay === d.id ? 'active' : ''}`;
            btn.innerHTML = `<span class="day-tag" style="background:${d.color};color:#fff">${d.tag}</span><span>${d.title}</span>`;
            btn.onclick = () => {
              currentBase = baseKey;
              filterDay(d.id);
            };
            container.appendChild(btn);
          });
        });
      } else if (['beppu', 'fukuoka', 'okinawa'].includes(currentBase)) {
        const struct = tripStructure[currentBase];
        const label = document.createElement('span');
        label.className = 'day-filter-label';
        label.innerHTML = `${struct.icon} Días en ${struct.name}:`;
        container.appendChild(label);

        const allCityBtn = document.createElement('button');
        allCityBtn.className = `day-filter-btn ${currentDay === 'all' ? 'active' : ''}`;
        allCityBtn.innerHTML = `Todos (${struct.days.length} jornadas)`;
        allCityBtn.onclick = () => filterDay('all');
        container.appendChild(allCityBtn);

        struct.days.forEach(d => {
          const btn = document.createElement('button');
          btn.className = `day-filter-btn ${currentDay === d.id ? 'active' : ''}`;
          btn.innerHTML = `<span class="day-tag" style="background:${d.color};color:#fff">${d.tag}</span><span>${d.title}</span>`;
          btn.onclick = () => filterDay(d.id);
          container.appendChild(btn);
        });
      } else if (currentBase === 'hotel') {
        const label = document.createElement('span');
        label.className = 'day-filter-label';
        label.innerHTML = `🏨 Alojamientos:`;
        container.appendChild(label);

        const note = document.createElement('span');
        note.className = 'text-xs text-slate-500 py-1';
        note.textContent = 'Opciones en Beppu y base de Hakata (Kyushu)';
        container.appendChild(note);
      }
    }

    function updateBaseButtonsUI() {
      document.querySelectorAll('#filter-buttons .filter-btn').forEach(btn => {
        if (btn.dataset.filter === currentBase) {
          btn.classList.add('ring-2', 'ring-amber-400');
        } else {
          btn.classList.remove('ring-2', 'ring-amber-400');
        }
      });
    }

    function setBaseFilter(base) {
      currentBase = base;
      currentDay = 'all';
      updateBaseButtonsUI();
      renderDayFilterBar();
      switchTab('itinerary');
      renderMapAndSidebar(base);
    }

    function filterDay(dayId) {
      currentDay = dayId;
      if (dayId !== 'all') {
        for (const [baseKey, struct] of Object.entries(tripStructure)) {
          if (struct.days.some(d => d.id === dayId)) {
            currentBase = baseKey;
            break;
          }
        }
      }
      updateBaseButtonsUI();
      renderDayFilterBar();
      switchTab('itinerary');
      renderMapAndSidebar(dayId === 'all' ? currentBase : dayId);
    }

    function filterMap(filter) {
      if (['all', 'beppu', 'fukuoka', 'okinawa', 'hotel'].includes(filter)) {
        setBaseFilter(filter);
      } else {
        filterDay(filter);
      }
    }

    function renderMapAndSidebar(filter = 'all') {
      markerLayerGroup.clearLayers();
      routeLayerGroup.clearLayers();
      routeArrowLayerGroup.clearLayers();
      Object.keys(markersMap).forEach(id => delete markersMap[id]);
      Object.keys(cardsMap).forEach(id => delete cardsMap[id]);
      const container = document.getElementById('view-itinerary');
      container.innerHTML = '';

      const dayDescriptions = {
        day1: 'Beppu · Día 1: Zona termal de Kannawa, infiernos Umi y Kamado, comida al vapor volcánico en Jigoku Mushi, descanso en Hyotan Onsen y mirador de Yukemuri.',
        day2: 'Beppu · Día 2: Vistas desde el teleférico del Monte Tsurumi, aguas medicinales de Myoban Yunosato, Chinoike Jigoku y paseo por el centro histórico y Takegawara.',
        day3: 'Beppu · Día 3: Excursión al pueblo balneario de Yufuin, paseo por la calle Yunotsubo y entorno del lago Kinrinko.',
        fukuoka1: 'Fukuoka · Día 1: Llegada a Hakata, paseo por la galería cubierta Kawabata, santuario Kushida y cena en los puestos yatai junto al río en Nakasu.',
        fukuoka2: 'Fukuoka · Día 2: Ruinas del Castillo de Fukuoka y parque Maizuru, estanque de Ōhori, mirador de la Torre de Fukuoka y atardecer en Momochihama.',
        fukuoka3: 'Fukuoka · Día 3: Hakata histórico (Gran Buda de Tōchōji, santuario Sumiyoshi), paseo por Canal City y compras por Tenjin y Daimyo.',
        fukuoka4: 'Fukuoka · Día 4: Excursión en tren Nishitetsu al santuario Dazaifu Tenmangu, Museo Nacional de Kyushu y paseo en barca por los canales de Yanagawa.',
        fukuoka5: 'Fukuoka · Día 5: Excursión a Kitakyushu: murallas del Castillo de Kokura y arquitectura histórica en el puerto de Mojiko Retro.',
        fukuoka6: 'Fukuoka · Día 6: Mañana de salida opcional con visita al templo de montaña Nanzōin y su colosal Buda reclinado en Sasaguri.',
        okinawa1: 'Okinawa · Día 1: Naha y Shuri (sin coche). Parque del Castillo de Shuri, mausoleo real Tamaudun, calzada Kinjocho, talleres cerámicos de Tsuboya y noche en Kokusai-dori.',
        okinawa2: 'Okinawa · Día 2: Costa norte (coche de alquiler). Puente e isla de Kouri, Acuario Churaumi, sendero de árboles Fukugi de Bise y atardecer en Cabo Manzamo.',
        okinawa3: 'Okinawa · Día 3: Excursión marítima a las islas Kerama (Zamami) desde el puerto Tomari; playas de aguas turquesas de Furuzamami y Ama (sujeto al mar).',
        okinawa4: 'Okinawa · Día 4: Costa central (coche). Aldea alfarera Yachimun no Sato, casas tradicionales en Ryukyu Mura y tarde en American Village de Chatan.',
        okinawa5: 'Okinawa · Día 5: Sur sagrado e histórico. Sitio sagrado Sefa-Utaki (parking separado), cueva Gyokusendo en Okinawa World, Parque Memorial de la Paz en Mabuni y Museo Memorial Himeyuri en Itoman.'
      };

      const parkingNote = document.createElement('p');
      parkingNote.className = 'parking-date-note';
      if (dayDescriptions[filter]) {
        parkingNote.textContent = dayDescriptions[filter];
      } else if (filter === 'fukuoka') {
        parkingNote.textContent = 'Base Fukuoka · 5 noches en Hakata (hotel pendiente). Cinco días de visitas y salida con Nanzoin opcional. Pases y horarios por reconfirmar para 2028.';
      } else if (filter === 'okinawa') {
        parkingNote.textContent = 'Base Okinawa · 5 días por la isla principal con base en Naha. Día 1 sin coche; coche desde Día 2. Excursión a Kerama flexible por el estado del mar.';
      } else if (filter === 'beppu') {
        parkingNote.textContent = 'Base Beppu · tres días: Kannawa, Monte y Centro, y Yufuin. Visitas, rutas y alojamientos de la etapa.';
      } else if (filter === 'hotel') {
        parkingNote.textContent = 'Opciones de alojamiento en Beppu; el hotel de Hakata queda pendiente. Al elegirlos, ajustaremos las salidas diarias.';
      } else {
        parkingNote.textContent = 'Mapa completo de Japón 2028 (Kyushu y Okinawa). Selecciona una ciudad o un día concreto en la cabecera para filtrar paradas y trayectos.';
      }
      container.appendChild(parkingNote);

      const filtered = filter === 'all'
        ? places
        : filter === 'fukuoka'
          ? places.filter(p => p.region === 'fukuoka' && p.type !== 'hotel')
          : filter === 'okinawa'
            ? places.filter(p => p.region === 'okinawa' && p.type !== 'hotel')
          : filter === 'beppu'
            ? places.filter(p => p.region !== 'fukuoka' && p.region !== 'okinawa' && p.type !== 'hotel')
            : filter === 'hotel'
              ? places.filter(p => p.type === 'hotel')
              : places.filter(p => p.day === filter);
      const bounds = [];

      // Dibujar rutas
      Object.keys(routesData).forEach(dayKey => {
        let showRoute = false;
        if (filter === 'all') {
          showRoute = !['beppu', 'fukuoka', 'okinawa'].includes(dayKey);
        } else if (filter === 'beppu') {
          showRoute = ['day1', 'day2', 'day3'].includes(dayKey);
        } else if (filter === 'fukuoka') {
          showRoute = ['fukuoka1', 'fukuoka2', 'fukuoka3', 'fukuoka4', 'fukuoka5', 'fukuoka6'].includes(dayKey);
        } else if (filter === 'okinawa') {
          showRoute = ['okinawa1', 'okinawa2', 'okinawa3', 'okinawa4', 'okinawa5'].includes(dayKey);
        } else {
          showRoute = (filter === dayKey);
        }
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
        const beppuDayTitles = { day1: 'Día 1 · Kannawa', day2: 'Día 2 · Monte y Centro', day3: 'Día 3 · Yufuin' };
        if (['beppu', 'fukuoka', 'okinawa'].includes(filter) && place.day !== previousDay) {
          const heading = document.createElement('h2');
          heading.className = 'fukuoka-day-heading';
          heading.textContent = filter === 'beppu' ? (beppuDayTitles[place.day] || place.dayLabel) : place.dayLabel;
          container.appendChild(heading);
          previousDay = place.day;
        } else if (filter !== 'all' && filter !== 'hotel' && place.day !== previousDay) {
          const heading = document.createElement('h2');
          heading.className = 'fukuoka-day-heading';
          heading.textContent = beppuDayTitles[place.day] || place.dayLabel;
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

    renderDayFilterBar();
    renderMapAndSidebar('all');
    const initialRegionBounds = L.latLngBounds([30.5, 126.0], [37.8, 141.5]);
    map.fitBounds(initialRegionBounds, { padding: [16, 16], maxZoom: 8 });
