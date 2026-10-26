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
      const dayStop = place.code.match(/^[DFOH][1-6]-(\d+)$/);
      if (dayStop) return dayStop[1];
      return place.code.replace('-', '');
    }

    function getParkingMarker(place) {
      if (place.region === 'fukuoka' || (['okinawa', 'hiroshima'].includes(place.region) && !parkingInfo[place.id])) return '';
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
        <strong>🅿️ Parking / Transporte</strong>
        <span>${info.summary}</span>
        <details><summary>Detalles de acceso y tarifas</summary>
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
          { id: "day1", tag: "D1", title: "Cocodrilos y Cocina Volcánica", color: "#f43f5e" },
          { id: "day2", tag: "D2", title: "Monte, Momias de Arena y Sangre", color: "#0ea5e9" },
          { id: "day3", tag: "D3", title: "Yufuin Ghibli & Lago", color: "#10b981" }
        ]
      },
      fukuoka: {
        name: "Fukuoka",
        icon: "🏙️",
        baseTitle: "Base Fukuoka · 5 noches",
        days: [
          { id: "fukuoka1", tag: "F1", title: "Yatai & Ramen Callejero", color: "#f43f5e" },
          { id: "fukuoka2", tag: "F2", title: "Parques y Bahía", color: "#0ea5e9" },
          { id: "fukuoka3", tag: "F3", title: "Gundam 1:1, Mandarake & Ramen", color: "#14b8a6" },
          { id: "fukuoka4", tag: "F4", title: "Dazaifu y Yanagawa", color: "#f59e0b" },
          { id: "fukuoka5", tag: "F5", title: "Mojiko Yaki-Curry & Kokura", color: "#a855f7" },
          { id: "fukuoka6", tag: "F6", title: "Nanzoin (Salida)", color: "#8b5cf6" }
        ]
      },
      okinawa: {
        name: "Okinawa",
        icon: "🌺",
        baseTitle: "Base Okinawa · 5 días",
        days: [
          { id: "okinawa1", tag: "O1", title: "Shuri, Habu-shu & Pokémon", color: "#e56f8b" },
          { id: "okinawa2", tag: "O2", title: "Norte y Churaumi", color: "#4788c7" },
          { id: "okinawa3", tag: "O3", title: "Islas Kerama & Snorkel", color: "#8061af" },
          { id: "okinawa4", tag: "O4", title: "American Village Retro-Kitsch", color: "#4a9d91" },
          { id: "okinawa5", tag: "O5", title: "Sur Sagrado, Cuevas y Serpientes", color: "#e59b39" }
        ]
      },
      hiroshima: {
        name: "Hiroshima",
        icon: "⛩️",
        baseTitle: "Base Hiroshima · 4 días",
        days: [
          { id: "hiroshima1", tag: "H1", title: "Paz, Otaku & Pizza Vending", color: "#d84315" },
          { id: "hiroshima2", tag: "H2", title: "Miyajima Bizarra & Templo Oscuro", color: "#ea580c" },
          { id: "hiroshima3", tag: "H3", title: "Samuráis, Donki & Ekinishi", color: "#f59e0b" },
          { id: "hiroshima4", tag: "H4", title: "165 Helados & Serpientes Sagradas", color: "#10b981" }
        ]
      },
      nagasaki: {
        name: "Nagasaki",
        icon: "⚓",
        baseTitle: "Base Nagasaki · 3 noches",
        days: [
          { id: "nagasaki1", tag: "N1", title: "Historia Holandesa & Vistas Top 3 Mundial", color: "#0284c7" },
          { id: "nagasaki2", tag: "N2", title: "Paz, Capibaras de Bio Park & Torre Parfait 120 cm", color: "#059669" },
          { id: "nagasaki3", tag: "N3", title: "Isla Fantasma Gunkanjima & Colina Glover", color: "#d97706" }
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
        allBtn.innerHTML = `🗺️ Todo el viaje (21 jornadas)`;
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
      } else if (['beppu', 'fukuoka', 'okinawa', 'hiroshima', 'nagasaki'].includes(currentBase)) {
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
        note.textContent = 'Opciones en Beppu, Hakata, Naha, Hiroshima y Nagasaki';
        container.appendChild(note);
      }
    }

    function updateTripCounterUI() {
      const counterEl = document.getElementById('trip-day-counter');
      const breakdownEl = document.getElementById('trip-breakdown-bar');
      if (!counterEl) return;
      const totalDays = Object.values(tripStructure).reduce((sum, b) => sum + b.days.length, 0);
      const totalStops = places.filter(p => p.type !== 'hotel').length;

      if (currentBase === 'all' && currentDay === 'all') {
        counterEl.textContent = `${totalDays} días planificados`;
        if (breakdownEl) {
          breakdownEl.innerHTML = `<span>Bases planificadas:</span> <span class="font-medium text-slate-700">♨️ Beppu (3d) · 🏙️ Fukuoka (6d) · 🌺 Okinawa (5d) · ⛩️ Hiroshima (4d) · ⚓ Nagasaki (3d)</span> <span class="text-slate-400">· ${totalStops} paradas</span>`;
        }
      } else if (currentDay !== 'all') {
        let dayObj = null;
        let baseName = '';
        for (const b of Object.values(tripStructure)) {
          const found = b.days.find(d => d.id === currentDay);
          if (found) { dayObj = found; baseName = b.name; break; }
        }
        const dayStops = places.filter(p => p.day === currentDay).length;
        if (dayObj) {
          counterEl.textContent = `${dayObj.tag} · ${dayObj.title} (${dayStops} paradas)`;
          if (breakdownEl) {
            breakdownEl.innerHTML = `<span>Jornada activa:</span> <span class="font-medium text-slate-700">${baseName} · ${dayObj.title}</span> <span class="text-slate-400">· Total viaje: ${totalDays} días</span>`;
          }
        }
      } else if (tripStructure[currentBase]) {
        const struct = tripStructure[currentBase];
        const baseStops = places.filter(p => p.region === currentBase && p.type !== 'hotel').length;
        counterEl.textContent = `${struct.days.length} días en ${struct.name}`;
        if (breakdownEl) {
          breakdownEl.innerHTML = `<span>Base activa:</span> <span class="font-medium text-slate-700">${struct.icon} ${struct.name} (${struct.days.length} jornadas · ${baseStops} paradas)</span> <span class="text-slate-400">· Total viaje: ${totalDays} días</span>`;
        }
      } else if (currentBase === 'hotel') {
        const totalHotels = places.filter(p => p.type === 'hotel').length;
        counterEl.textContent = `${totalHotels} alojamientos previstos`;
        if (breakdownEl) {
          breakdownEl.innerHTML = `<span>Alojamientos recomendados en Beppu, Hakata, Naha, Hiroshima y Nagasaki</span>`;
        }
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
      updateTripCounterUI();
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
      updateTripCounterUI();
      switchTab('itinerary');
      renderMapAndSidebar(dayId === 'all' ? currentBase : dayId);
    }

    function filterMap(filter) {
      if (['all', 'beppu', 'fukuoka', 'okinawa', 'hiroshima', 'nagasaki', 'hotel'].includes(filter)) {
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
        day1: 'Beppu · Día 1 (Cocodrilos y Cocina Volcánica): Infierno azul Umi Jigoku (98°C), fumarolas de Kamado Jigoku, la bizarra colonia de 80 cocodrilos tropicales en aguas volcánicas de Oniyama Jigoku, cocinar con guantes en las chimeneas geotérmicas de Jigoku Mushi Kobo, descanso en Hyotan Onsen (3★ Michelin) y mirador de vapor de Yukemuri.',
        day2: 'Beppu · Día 2 (Monte, Momias de Arena y Sangre): Subida en teleférico al monte Tsurumi, cabañas de azufre medicinal en Myoban Yunosato, el estanque rojo sangre de Chinoike Jigoku con su pomada milagrosa de barro, enterrarse en arena negra volcánica caliente en el histórico Takegawara Onsen y cena de toriten crujiente en Toyotsune.',
        day3: 'Beppu · Día 3 (Yufuin Ghibli & Lago): Cueva de vapor con hierbas medicinales en Kannawa Mushi-yu, excursión escénica a Yufuin, paseo por la delirante aldea de fantasía Yufuin Floral Village (inspirada en Studio Ghibli con tiendas frikis y búhos) y entorno humeante del lago Kinrin.',
        fukuoka1: 'Fukuoka · Día 1 (Llegada & Yatai Callejeros): Llegada a Hakata, paseo por la galería Kawabata, santuario Kushida y cena hombro con hombro en los míticos carritos yatai junto al río en Nakasu con ramen tonkotsu hiperdenso, mentaiko tamagoyaki flambeado y brochetas yakitori.',
        fukuoka2: 'Fukuoka · Día 2 (Parques y Bahía): Ruinas del Castillo de Fukuoka y parque Maizuru, estanque de Ōhori, mirador acristalado de la Torre de Fukuoka y atardecer frente al mar en Momochihama.',
        fukuoka3: 'Fukuoka · Día 3 (Gundam 1:1, Mandarake & Ramen): Gran Buda sentado de Tōchōji y su túnel a oscuras, santuario Sumiyoshi, almuerzo en el Ramen Stadium de Canal City (8 maestros compitiendo) y tiendas Jump Shop, peregrinación a los pies del colosal mecha a escala real 1:1 RX-93ff ν Gundam (24.8 m con luces y movimiento en LaLaport), safari otaku en Mandarake Fukuoka (videojuegos retro y manga vintage) y cena en Daimyo/Tenjin.',
        fukuoka4: 'Fukuoka · Día 4 (Dazaifu & Yanagawa): Excursión en tren Nishitetsu al santuario Dazaifu Tenmangu, museo nacional, y navegación en barca tradicional por los canales arbolados de Yanagawa degustando anguila al vapor seiro-mushi.',
        fukuoka5: 'Fukuoka · Día 5 (Mojiko Yaki-Curry & Kokura): Murallas feudales del Castillo de Kokura y paseo nostálgico por el puerto histórico de Mojiko Retro para devorar el mítico plato bizarro Yaki Curry (curry horneado con queso fundido y huevo en cazuela caliente).',
        fukuoka6: 'Fukuoka · Día 6 (Nanzoin Salida): Mañana de salida opcional para visitar el impresionante templo de montaña Nanzōin y su gigantesco Buda de bronce reclinado de 41 metros.',
        okinawa1: 'Okinawa · Día 1 (Shuri, Habu-shu & Pokémon): Palacio y murallas reales de Shuri, mausoleo Tamaudun, calzada empedrada Kinjocho, cerámica artesanal en Tsuboya y noche en la extravagante Kokusai-dori: caza de botellas del licor bizarro Habu-shu con la víbora entera dentro, helados locos de Blue Seal (sal marina o boniato morado), sándwich Potama de carne SPAM recién frita y regalos frikis de Pokémon Okinawa.',
        okinawa2: 'Okinawa · Día 2 (Costa Norte & Churaumi): Excursión en coche cruzando el puente panorámico de Kouri, los gigantescos tiburones ballena del acuario Churaumi, sendero tradicional de árboles Fukugi en Bise y atardecer en el acantilado con forma de elefante de Cabo Manzamo.',
        okinawa3: 'Okinawa · Día 3 (Islas Kerama & Snorkel): Salida en ferry desde el puerto Tomari a la isla Zamami; snorkel en las aguas turquesas "Kerama Blue" de Furuzamami y avistamiento de tortugas marinas en la playa Ama (sujeto al estado del mar).',
        okinawa4: 'Okinawa · Día 4 (American Village Retro-Kitsch): Talleres de cerámica en Yachimun no Sato, casas tradicionales y danzas eisa en Ryukyu Mura, y tarde-noche en Mihama American Village: neones gigantes de los 80, tiendas vintage militares y de cultura pop, recreativos japoneses y cena frente al mar.',
        okinawa5: 'Okinawa · Día 5 (Sur Sagrado, Cuevas y Serpientes): Senda sagrada en Sefa-Utaki frente a la isla divina, descenso a la cueva de estalactitas de Gyokusendo y visita al curioso Habu Park (museo de serpientes y destilería tradicional de víboras) en Okinawa World, Parque de la Paz en Mabuni y memorial Himeyuri en Itoman.',
        hiroshima1: 'Hiroshima · Día 1 (Paz, Otaku & Pizza Vending): Llegada a la nueva terminal minamoa y visita al Pokémon Center, Cúpula de la Bomba Atómica (Genbaku Dome), Parque Conmemorativo, Museo de la Paz, mirador de la Torre Orizuru con su tobogán espiral de madera gigante, banquete en el laberinto de 4 plantas de Okonomimura, safari otaku en Hondori (Animate, Lashinbang y la delirante tienda Village Vanguard), cabinas antisociales de Ichiran y la máquina callejera de pizzas recién horneadas.',
        hiroshima2: 'Hiroshima · Día 2 (Miyajima Bizarra & Templo Oscuro): Ferry con vistas al Gran Torii flotante, pasarelas de Itsukushima entre ciervos sika, safari de street food bizarro en Omotesando (Pettara Pottara con ostra caramelizada, panecillo de okonomiyaki completo, Age-Momiji frito y la colosal pala de arroz de Godzilla de 7,7 m), adentrarse a ciegas en la oscuridad absoluta de la cueva Tadan-do en Daisho-in entre 500 estatuas con gorros de lana, teleférico al monte Misen y cóctel de ron con ositos Haribo en Bar Gebura.',
        hiroshima3: 'Hiroshima · Día 3 (Samuráis, Donki & Ekinishi): Fortaleza samurái del Castillo de Hiroshima y árboles que sobrevivieron a la bomba atómica, jardín tradicional Shukkei-en, desafío picante de Shirunashi Tantanmen King-ken (fideos con pimienta sansho anestésica al gusto), inmersión kitsch en el macro-bazar de Don Quijote Hacchobori y ruta clandestina nocturna por las tabernas en miniatura de los callejones de la posguerra de Ekinishi.',
        hiroshima4: 'Hiroshima · Día 4 (165 Helados & Serpientes Sagradas): Excursión al histórico puente samurái de madera de cinco arcos Kintai-kyo en Iwakuni, reto gastronómico extremo en Musashi Soft Cream (165 sabores bizarros: wasabi, curry, ajo, ramen, natto o salsa de soja), visita a las míticas serpientes albinas sagradas Shirohebi veneradas por la fortuna y compras de despedida con dulces Nama Momiji en minamoa / ekie.',
        nagasaki1: 'Nagasaki · Día 1 (Historia Holandesa & Vistas Top 3 Mundial): Llegada en el tren bala Kamome, inmersión en la factoría holandesa de Dejima, banquete de Champon y Sara Udon en el barrio chino Shinchi más antiguo de Japón, reto de las 20 piedras corazón en el puente Meganebashi y atardecer mágico subiendo en teleférico panorámico al Monte Inasa (galardonado como una de las 3 mejores vistas nocturnas del planeta).',
        nagasaki2: 'Nagasaki · Día 2 (Paz, Capibaras de Bio Park & Torre Parfait 120 cm): Homenaje en la icónica Estatua de la Paz y la Fuente de la Paz, excursión a Nagasaki Bio Park para acariciar y alimentar capibaras gigantes en libertad absoluta y verlos bañarse en aguas termales con cítricos, y reto gastronómico friki en Cafe Olympic: devorar Toruko Rice y enfrentarse a su colosal torre de helado y pasteles de hasta 1,20 metros.',
        nagasaki3: 'Nagasaki · Día 3 (Isla Fantasma Gunkanjima & Colina Glover): Expedición en barco y desembarco entre las ruinas de hormigón y rascacielos fantasma de la isla minera Hashima (Gunkanjima, escenario de James Bond Skyfall), almuerzo en el palacio culinario de Shikairou, subida a la Basílica gótica de Ōura y paseo entre las mansiones occidentales del siglo XIX de Glover Garden buscando losas corazón.'
      };

      const parkingNote = document.createElement('p');
      parkingNote.className = 'parking-date-note';
      if (dayDescriptions[filter]) {
        parkingNote.textContent = dayDescriptions[filter];
      } else if (filter === 'fukuoka') {
        parkingNote.textContent = 'Base Fukuoka · 5 noches en Hakata (hotel pendiente). Cinco días de visitas y salida con Nanzoin opcional. Pases y horarios por reconfirmar para 2028.';
      } else if (filter === 'okinawa') {
        parkingNote.textContent = 'Base Okinawa · 5 días por la isla principal con base en Naha. Día 1 sin coche; coche desde Día 2. Excursión a Kerama flexible por el estado del mar.';
      } else if (filter === 'hiroshima') {
        parkingNote.textContent = 'Base Hiroshima · 4 días (Eje de la Paz, isla sagrada de Miyajima, Castillo feudal/Shukkei-en y excursión al puente Kintai-kyo en Iwakuni). Plan basado en el cuaderno oficial de viaje.';
      } else if (filter === 'nagasaki') {
        parkingNote.textContent = 'Base Nagasaki · 3 noches (Llegada en Shinkansen Kamome, Dejima, Shinchi Chinatown, Monte Inasa, Parque de la Paz, Bio Park con capibaras libres, torre parfait de 120 cm, expedición a Gunkanjima y colina Glover).';
      } else if (filter === 'beppu') {
        parkingNote.textContent = 'Base Beppu · tres días: Kannawa, Monte y Centro, y Yufuin. Visitas, rutas y alojamientos de la etapa.';
      } else if (filter === 'hotel') {
        parkingNote.textContent = 'Opciones de alojamiento en Beppu, Hakata, Naha, Hiroshima y Nagasaki. Al elegirlos, ajustaremos las salidas diarias.';
      } else {
        parkingNote.textContent = 'Mapa completo de Japón 2028 (Kyushu, Okinawa, Hiroshima y Nagasaki). Selecciona una ciudad o un día concreto en la cabecera para filtrar paradas y trayectos.';
      }
      container.appendChild(parkingNote);

      const filtered = filter === 'all'
        ? places
        : filter === 'fukuoka'
          ? places.filter(p => p.region === 'fukuoka' && p.type !== 'hotel')
          : filter === 'okinawa'
            ? places.filter(p => p.region === 'okinawa' && p.type !== 'hotel')
            : filter === 'hiroshima'
              ? places.filter(p => p.region === 'hiroshima' && p.type !== 'hotel')
              : filter === 'nagasaki'
                ? places.filter(p => p.region === 'nagasaki' && p.type !== 'hotel')
                : filter === 'beppu'
                  ? places.filter(p => !['fukuoka', 'okinawa', 'hiroshima', 'nagasaki'].includes(p.region) && p.type !== 'hotel')
                  : filter === 'hotel'
                    ? places.filter(p => p.type === 'hotel')
                    : places.filter(p => p.day === filter);
      const bounds = [];

      // Dibujar rutas
      Object.keys(routesData).forEach(dayKey => {
        let showRoute = false;
        if (filter === 'all') {
          showRoute = !['beppu', 'fukuoka', 'okinawa', 'hiroshima', 'nagasaki'].includes(dayKey);
        } else if (filter === 'beppu') {
          showRoute = ['day1', 'day2', 'day3'].includes(dayKey);
        } else if (filter === 'fukuoka') {
          showRoute = ['fukuoka1', 'fukuoka2', 'fukuoka3', 'fukuoka4', 'fukuoka5', 'fukuoka6'].includes(dayKey);
        } else if (filter === 'okinawa') {
          showRoute = ['okinawa1', 'okinawa2', 'okinawa3', 'okinawa4', 'okinawa5'].includes(dayKey);
        } else if (filter === 'hiroshima') {
          showRoute = ['hiroshima1', 'hiroshima2', 'hiroshima3', 'hiroshima4'].includes(dayKey);
        } else if (filter === 'nagasaki') {
          showRoute = ['nagasaki1', 'nagasaki2', 'nagasaki3'].includes(dayKey);
        } else {
          showRoute = (filter === dayKey);
        }
        if (!showRoute) return;

        (routesData[dayKey] || []).forEach(seg => {
          const lineColor = ({ car: '#368ca5', walk: '#d18b37', rail: '#8055ad', bus: '#438c7a', boat: '#3975b7' })[seg.type] || '#368ca5';
          const lineDash = seg.type === 'walk' ? '7, 8' : ['rail', 'boat'].includes(seg.type) ? '3, 7' : null;
          const modeLabel = ({ car: 'En coche', walk: 'A pie', rail: 'En tren / tranvía', bus: 'En bus', boat: 'En ferry' })[seg.type] || 'Trayecto';
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
        if (['beppu', 'fukuoka', 'okinawa', 'hiroshima', 'nagasaki'].includes(filter) && place.day !== previousDay) {
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

        const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.title + ' ' + place.jp + ' ' + (place.city || 'Hiroshima'))}`;

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
    updateTripCounterUI();
    renderMapAndSidebar('all');
    const initialRegionBounds = L.latLngBounds([25.8, 126.0], [35.5, 134.0]);
    map.fitBounds(initialRegionBounds, { padding: [16, 16], maxZoom: 8 });
