const hiroshimaPlaces = [
  // --- DÍA 1: Eje Histórico y Conmemorativo de la Paz ---
  {
    id: 70, code: "H0", shortName: "Estación Hiroshima", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Estación de Hiroshima · complejo minamoa", jp: "広島駅",
    lat: 34.3976, lng: 132.4753, color: "#d84315", type: "start",
    city: "Hiroshima", time: "Llegada · 10:00", price: "Transporte público",
    activity: "Llegaremos en Shinkansen a la renovada estación de Hiroshima (complejo minamoa). Tomaremos el tranvía Hiroden directo desde la 2.ª planta.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima%20Station%20South%20Gate%202024.jpg?width=900", alt: "Nueva terminal de la Estación de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Station_South_Gate_2024.jpg", credit: "Wikimedia Commons" },
    desc: "Principal centro de transporte de la prefectura. El tranvía Hiroden conecta directamente con el centro y el Parque de la Paz.",
    tip: "Deja el equipaje en el hotel o en taquillas de la estación antes de empezar las visitas."
  },
  {
    id: 71, code: "H1-1", shortName: "Okonomiyaki Nagataya", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Almuerzo de Okonomiyaki estilo Hiroshima", jp: "お好み焼 長田屋",
    lat: 34.3934, lng: 132.4538, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "11:30 - 12:45", price: "~¥1.200 - 1.800",
    activity: "Comeremos el tradicional okonomiyaki en capas preparado al momento sobre plancha de teppan (con fideos yakisoba crujientes, cerdo y col).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_style_Okonomiyaki_001.jpg?width=900", alt: "Okonomiyaki estilo Hiroshima con fideos en plancha", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_style_Okonomiyaki_001.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Junto al río Motoyasu y el Parque de la Paz. Famoso por su masa fina en capas y rica salsa.",
    tip: "Suele tener cola; si está muy lleno, Teppanyaki Acchan o Okonomimura son excelentes alternativas."
  },
  {
    id: 72, code: "H1-2", shortName: "Cúpula de la Bomba", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Cúpula de la Bomba Atómica (Genbaku Dome)", jp: "原爆ドーム",
    lat: 34.3929, lng: 132.4526, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "13:00 - 13:45", price: "Gratis (exterior)",
    activity: "Contemplaremos el monumento Patrimonio de la Humanidad por la UNESCO que resistió a escasos metros del hipocentro de la explosión del 6 de agosto de 1945.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Atomic_Bomb_Dome_in_Hiroshima_2022.jpg?width=900", alt: "Genbaku Dome iluminado al borde del río", source: "https://commons.wikimedia.org/wiki/File:Atomic_Bomb_Dome_in_Hiroshima_2022.jpg", credit: "Wikimedia Commons" },
    desc: "Antiguo Salón de Promoción Industrial de Hiroshima. Mantiene su estructura intacta como memoria y alegato por la paz.",
    tip: "Se puede rodear a pie; la parada del tranvía Genbaku Dome-mae queda justo al lado."
  },
  {
    id: 73, code: "H1-3", shortName: "Parque de la Paz", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Monumentos del Parque Conmemorativo de la Paz", jp: "平和記念公園",
    lat: 34.3940, lng: 132.4533, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "13:45 - 14:45", price: "Gratis",
    activity: "Recorreremos a pie el Cenotafio para las Víctimas, la Llama de la Paz y el Monumento a la Paz de los Niños (dedicado a Sadako Sasaki y sus grullas de papel).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Peace_Memorial_Park_Cenotaph.jpg?width=900", alt: "Cenotafio de las víctimas con la Llama de la Paz al fondo", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Peace_Memorial_Park_Cenotaph.jpg", credit: "Wikimedia Commons" },
    desc: "Diseñado por el célebre arquitecto Kenzo Tange entre los ríos Motoyasu y Honkawa.",
    tip: "Alinea la vista del Cenotafio para ver enmarcada la Llama de la Paz y la Cúpula al fondo."
  },
  {
    id: 74, code: "H1-4", shortName: "Museo de la Paz", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Museo Conmemorativo de la Paz de Hiroshima", jp: "広島平和記念資料館",
    lat: 34.3916, lng: 132.4523, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "14:45 - 16:45", price: "¥200 adulto",
    activity: "Visita sobria e introspectiva a las exposiciones del edificio principal y este, con testimonios, fotografías y pertenencias de los supervivientes (hibakusha).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Peace_Memorial_Museum_Building.jpg?width=900", alt: "Fachada del Museo de la Paz de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Peace_Memorial_Museum_Building.jpg", credit: "Wikimedia Commons" },
    desc: "El museo histórico más conmovedor e importante del viaje. La audioguía en español está muy recomendada.",
    tip: "Calcula al menos dos horas completas para recorrerlo con calma y respeto."
  },
  {
    id: 75, code: "H1-5", shortName: "Torre Orizuru", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Torre Hiroshima Orizuru", jp: "おりづるタワー",
    lat: 34.3951, lng: 132.4542, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "17:00 - 18:15", price: "¥2.200 adulto",
    activity: "Subiremos al mirador exterior de madera con vistas a la Cúpula y la ciudad, y podremos plegar una grulla de origami para soltarla por el muro de cristal.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Orizuru_Tower_Hiroshima.jpg?width=900", alt: "Vistas panorámicas desde el mirador de la Torre Orizuru", source: "https://commons.wikimedia.org/wiki/File:Orizuru_Tower_Hiroshima.jpg", credit: "Wikimedia Commons" },
    desc: "Complejo contemporáneo con cafetería y terraza de madera al aire libre que domina todo el Parque de la Paz.",
    tip: "Momento ideal para acudir al atardecer antes de ir a cenar."
  },
  {
    id: 76, code: "H1-6", shortName: "Hondori & Okonomimura", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Llegada y Paz",
    title: "Galería Hondori y cena en Okonomimura", jp: "本通・お好み村",
    lat: 34.3913, lng: 132.4604, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "18:45 - 21:00", price: "Paseo y cena según consumo",
    activity: "Pasearemos por la concurrida galería comercial cubierta Hondori y cenaremos en Okonomimura (edificio con más de 20 puestos tradicionales de plancha).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Okonomimura_Building_Hiroshima.jpg?width=900", alt: "Entrada del edificio gastronómico Okonomimura", source: "https://commons.wikimedia.org/wiki/File:Okonomimura_Building_Hiroshima.jpg", credit: "Wikimedia Commons" },
    desc: "Corazón comercial y gastronómico del centro urbano de Hiroshima.",
    tip: "Pruébate un postre en las tiendas locales: el pastel Momiji Manju o pudding artesanal en un konbini."
  },

  // --- DÍA 2: Isla Sagrada de Miyajima y Monte Misen ---
  {
    id: 77, code: "H2-0", shortName: "Muelle Miyajimaguchi", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Isla de Miyajima",
    title: "Estación y Muelle de Miyajimaguchi", jp: "宮島口",
    lat: 34.3123, lng: 132.3040, color: "#ea580c", type: "start",
    city: "Hatsukaichi, Hiroshima", time: "08:30 - 09:00", price: "Tren JR cubierto por JR Pass",
    activity: "Llegaremos en tren JR Línea Sanyo desde Hiroshima (25 min) y caminaremos al muelle para embarcar.",
    desc: "Punto de embarque hacia la isla de Miyajima. Muy accesible con transporte público.",
    tip: "Si usas el ferry JR Miyajima, está incluido en el JR Pass (se añade la tasa de visitante de ¥100)."
  },
  {
    id: 78, code: "H2-1", shortName: "Santuario Itsukushima", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Isla de Miyajima",
    title: "Santuario Itsukushima y Gran Torii Flotante", jp: "厳島神社",
    lat: 34.2959, lng: 132.3197, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "09:30 - 11:30", price: "¥300 santuario",
    activity: "Cruzaremos las pasarelas de madera sobre el mar del santuario sintoísta y fotografiaremos el icónico torii bermellón sobre las aguas de Setouchi.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Itsukushima_torii_angle.jpg?width=900", alt: "El gran torii flotante de Itsukushima en marea alta", source: "https://commons.wikimedia.org/wiki/File:Itsukushima_torii_angle.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Patrimonio de la Humanidad por la UNESCO fundado en el siglo VI, una de las tres vistas más célebres de Japón (Nihon Sankei).",
    tip: "Comprueba las tablas de mareas: con marea alta el santuario parece flotar; con marea baja puedes caminar hasta la base del torii."
  },
  {
    id: 79, code: "H2-2", shortName: "Omotesando Miyajima", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Isla de Miyajima",
    title: "Calle Omotesando Shotengai · Ostras y dulces", jp: "宮島表参道商店街",
    lat: 34.2988, lng: 132.3218, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "11:30 - 13:00", price: "Según consumo",
    activity: "Almorzaremos ostras frescas a la brasa (yaki-gaki), brochetas de pescado frito y probaremos el Age-Momiji (pastel de arce frito).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Omotesando_Shotengai_Miyajima.jpg?width=900", alt: "Calle comercial Omotesando en la isla de Miyajima", source: "https://commons.wikimedia.org/wiki/File:Omotesando_Shotengai_Miyajima.jpg", credit: "Wikimedia Commons" },
    desc: "Calle principal con tiendas de artesanía de madera, pastelerías artesanales y los amigables ciervos sika en libertad.",
    tip: "Cuidado con los ciervos: son pacíficos pero intentan comerse mapas, folletos y comida de las manos."
  },
  {
    id: 80, code: "H2-3", shortName: "Teleférico y Monte Misen", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Isla de Miyajima",
    title: "Teleférico de Miyajima y cumbre del Monte Misen", jp: "弥山・宮島ロープウェイ",
    lat: 34.2796, lng: 132.3194, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "13:30 - 16:00", price: "¥2.000 teleférico ida/vuelta",
    activity: "Subiremos en el teleférico por el valle de Momijidani y caminaremos al mirador de la cumbre de Misen con vistas de 360° al Mar Interior de Seto.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Misen_Observatory_View.jpg?width=900", alt: "Vistas del Mar Interior de Seto desde el observatorio del Monte Misen", source: "https://commons.wikimedia.org/wiki/File:Mount_Misen_Observatory_View.jpg", credit: "Wikimedia Commons" },
    desc: "Punto más alto de la isla sagrada (535 m). Alberga el fuego eterno del templo Reikado que se usó para encender la Llama de la Paz de Hiroshima.",
    tip: "Lleva calzado cómodo: desde la estación superior del teleférico a la cima hay unos 20-30 min de subida a pie."
  },
  {
    id: 81, code: "H2-4", shortName: "Templo Daisho-in", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Isla de Miyajima",
    title: "Templo Daisho-in y Parque Momijidani", jp: "大書院・大聖院",
    lat: 34.2934, lng: 132.3157, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "16:15 - 17:30", price: "Entrada libre",
    activity: "Descenderemos entre cientos de estatuas Jizo con gorritos de lana, ruedas de oración budistas y pagodas entre la vegetación de la ladera.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Daisho-in_Temple_Miyajima_Statues.jpg?width=900", alt: "Hileras de pequeñas estatuas budistas con gorritos de lana en Daisho-in", source: "https://commons.wikimedia.org/wiki/File:Daisho-in_Temple_Miyajima_Statues.jpg", credit: "Wikimedia Commons" },
    desc: "Uno de los templos budistas Shingon más venerados de Japón, con jardines tranquilos y gran atmósfera zen.",
    tip: "Gira las ruedas de sutra a lo largo de las escaleras para atraer buena fortuna según la tradición."
  },
  {
    id: 82, code: "H2-5", shortName: "Cena Anago-meshi", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Isla de Miyajima",
    title: "Cena tradicional de Anago-meshi en Miyajimaguchi", jp: "あなごめし うえの",
    lat: 34.3120, lng: 132.3045, color: "#ea580c", type: "attraction",
    city: "Hatsukaichi, Hiroshima", time: "18:00 - 19:30", price: "~¥2.500 - 3.500",
    activity: "Cenaremos el plato estrella de la bahía: anguila de mar asada sobre arroz con caldo de huesos y salsa especial de más de 120 años de historia.",
    desc: "Ueno Anagomeshi es una institución centenaria frente a la estación de Miyajimaguchi.",
    tip: "Si prefieres quedarte a dormir en Miyajima, alojarse en un ryokan como Itsukushima Iroha o Jukeiso es una experiencia mágica."
  },

  // --- DÍA 3: Castillo Feudal, Jardín Histórico y Regeneración Urbana ---
  {
    id: 83, code: "H3-1", shortName: "Castillo de Hiroshima", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Castillo y Tradición",
    title: "Castillo de Hiroshima (Carp Castle) y árboles supervivientes", jp: "広島城",
    lat: 34.4039, lng: 132.4593, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "09:30 - 11:30", price: "¥370 torre principal",
    activity: "Pasearemos por las murallas de piedra, los puentes y el foso original, y veremos los árboles que sobrevivieron al bombardeo atómico (hibakujumoku).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Castle_Keep_2021.jpg?width=900", alt: "Torre principal de madera del Castillo de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Castle_Keep_2021.jpg", credit: "Wikimedia Commons" },
    desc: "Fortaleza feudal construida originalmente en 1589 por Mori Terumoto, apodada 'Castillo de la Carpa'.",
    tip: "El eucalipto superviviente se encuentra en el recinto a solo 740 metros del hipocentro."
  },
  {
    id: 84, code: "H3-2", shortName: "Jardín Shukkei-en", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Castillo y Tradición",
    title: "Jardín tradicional Shukkei-en", jp: "縮景園",
    lat: 34.4005, lng: 132.4678, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "11:45 - 13:00", price: "¥260 adulto",
    activity: "Pasearemos entre paisajes tradicionales en miniatura: estanques con carpas koi, puentes arqueados de piedra Koko-kyo y casas de té.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shukkeien_Garden_Bridge_Hiroshima.jpg?width=900", alt: "Puente de piedra sobre el estanque del Jardín Shukkei-en", source: "https://commons.wikimedia.org/wiki/File:Shukkeien_Garden_Bridge_Hiroshima.jpg", credit: "Wikimedia Commons" },
    desc: "Jardín señorial del periodo Edo construido en 1620 para el clan Asano.",
    tip: "Conecta a pie en unos 10 minutos desde la puerta este del castillo."
  },
  {
    id: 85, code: "H3-3", shortName: "Almuerzo Mazemen", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Castillo y Tradición",
    title: "Almuerzo de Mazemen local o mariscos", jp: "汁なし担々麺・まぜ麺",
    lat: 34.3948, lng: 132.4630, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "13:15 - 14:15", price: "~¥1.000",
    activity: "Almorzaremos el famoso mazemen (fideos gruesos sin sopa con salsa concentrada y huevo) o tantanmen picante sin caldo.",
    desc: "Una de las especialidades urbanas preferidas de los vecinos de Hiroshima para comer entre semana.",
    tip: "Mezcla enérgicamente los fideos con la salsa antes del primer bocado para integrar el sabor."
  },
  {
    id: 86, code: "H3-4", shortName: "EDION Peace Wing & HiroPa", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Castillo y Tradición",
    title: "EDION Peace Wing Hiroshima y parque HiroPa", jp: "エディオンピースウイング広島・HiroPa",
    lat: 34.4007, lng: 132.4522, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "14:45 - 16:30", price: "Parque gratuito",
    activity: "Descubriremos el gran proyecto de regeneración urbana de la ciudad: un vanguardista estadio integrado en jardines ribereños con terrazas y cafés.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Edion_Peace_Wing_Hiroshima_Exterior.jpg?width=900", alt: "Exterior del nuevo estadio EDION Peace Wing Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Edion_Peace_Wing_Hiroshima_Exterior.jpg", credit: "Wikimedia Commons" },
    desc: "Nuevo hito arquitectónico inaugurado en 2024 junto al río Ota, símbolo de la Hiroshima moderna y vibrante.",
    tip: "Excelente lugar para tomar un café al aire libre en la pradera verde Shibafu Hiroba."
  },
  {
    id: 87, code: "H3-5", shortName: "Callejones Ekinishi", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Castillo y Tradición",
    title: "Noche en los callejones retro de EKINISHI", jp: "エキニシ",
    lat: 34.3972, lng: 132.4727, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "18:00 - 21:30", price: "Izakaya según consumo",
    activity: "Pasearemos y cenaremos entre pequeñas tabernas izakaya y bistrós en casas de madera rehabilitadas de la posguerra junto a la estación.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ekinishi_Alley_Hiroshima_Night.jpg?width=900", alt: "Farolillos y tabernas en las callejuelas de Ekinishi", source: "https://commons.wikimedia.org/wiki/File:Ekinishi_Alley_Hiroshima_Night.jpg", credit: "Wikimedia Commons" },
    desc: "El barrio con más encanto nocturno de la ciudad, frecuentado por locales y con cocina de autor en miniatura.",
    tip: "Pide ternera local de Hiroshima o brochetas yakitori acompañadas de sake de Saijo."
  },

  // --- DÍA 4: Excursión a Iwakuni (Kintai-kyo) y Despedida en minamoa ---
  {
    id: 88, code: "H4-1", shortName: "Puente Kintai-kyo", day: "hiroshima4", region: "hiroshima", dayLabel: "Día 4 · Iwakuni y Despedida",
    title: "Excursión al Puente Kintai-kyo en Iwakuni", jp: "錦帯橋",
    lat: 34.1677, lng: 132.1786, color: "#10b981", type: "attraction",
    city: "Iwakuni, Yamaguchi", time: "09:30 - 13:00", price: "¥310 cruzar puente",
    activity: "Viajaremos en tren Sanyo a Iwakuni para admirar y cruzar el asombroso puente de cinco arcos de madera sobre pilares de piedra sin clavos metálicos.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kintaikyo_bridge_in_Iwakuni.jpg?width=900", alt: "Los cinco arcos de madera del histórico puente Kintai-kyo", source: "https://commons.wikimedia.org/wiki/File:Kintaikyo_bridge_in_Iwakuni.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Obra maestra de ingeniería civil construida en 1673 sobre el río Nishiki. El parque Kikko al otro lado alberga antiguas residencias samurái.",
    tip: "A solo 50 minutos de Hiroshima; se toma bus local de 15 minutos desde la estación JR Iwakuni hasta el puente."
  },
  {
    id: 89, code: "H4-2", shortName: "Complejo minamoa", day: "hiroshima4", region: "hiroshima", dayLabel: "Día 4 · Iwakuni y Despedida",
    title: "Complejo comercial de la Estación · minamoa y ekie", jp: "ミナモア・エキエ",
    lat: 34.3976, lng: 132.4753, color: "#10b981", type: "attraction",
    city: "Hiroshima", time: "14:00 - 16:30", price: "Compras y comida",
    activity: "Almorzaremos en minamoa DINING y compraremos recuerdos gastronómicos típicos (como el Nama Momiji de masa mochi de la confitería Nishikido).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Station_Building_minamoa.jpg?width=900", alt: "Complejo comercial y estación minamoa de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Station_Building_minamoa.jpg", credit: "Wikimedia Commons" },
    desc: "Edificio de 10 plantas inaugurado en 2025/2026 con más de 220 comercios de diseño y productos de Setouchi.",
    tip: "Sube a la azotea ajardinada Soramore Plaza antes de abordar el Shinkansen para la última panorámica de la ciudad."
  }
];

places.push(...hiroshimaPlaces);

Object.assign(parkingInfo, {
  70: { summary: "Parking estación · de pago subterráneo", details: "El complejo minamoa de la Estación de Hiroshima dispone de aparcamientos vinculados de pago con tarifa horaria (~¥400/h). Para moverse por la ciudad es más rápido y cómodo usar el tranvía Hiroden." },
  72: { summary: "Sin parking propio · usa tranvía Hiroden", details: "El Parque de la Paz no dispone de parking para coches particulares. Llegar en tranvía Hiroden (Línea 2 o 6 hasta Genbaku Dome-mae) o autobús turístico Meipuru-pu." },
  74: { summary: "Sin parking propio · parkings públicos en Otemachi", details: "Usa parkings de pago en el distrito de Otemachi (como Hiroshima City Peace Memorial Hall Parking) con tarifa aproximada de ¥200/30 min." },
  75: { summary: "Parking Orizuru de pago", details: "Dispone de plazas limitadas mecánicas en el sótano con tarifa por hora (~¥300/30 min)." },
  77: { summary: "Parkings de pago en Miyajimaguchi (¥800 - 1.500/día)", details: "Dejar el coche en los aparcamientos frente al muelle de Miyajimaguchi antes de tomar el ferry. En la isla de Miyajima apenas hay tráfico y el acceso con coche de visitantes no es recomendable." },
  78: { summary: "Isla peatonal · sin coches de visitantes", details: "La isla de Miyajima se recorre íntegramente a pie o mediante el teleférico. El coche debe permanecer en Miyajimaguchi." },
  83: { summary: "Parking Castillo de Hiroshima de pago (¥360/h)", details: "Aparcamiento del recinto del castillo junto a la puerta sur para turismos." },
  84: { summary: "Sin parking propio de Shukkei-en", details: "Aparcamientos públicos de pago próximos al Museo de Arte de la Prefectura de Hiroshima." },
  86: { summary: "Parking HiroPa subterráneo de pago", details: "Parking del estadio EDION Peace Wing Hiroshima con tarifa horaria." },
  88: { summary: "Parking Kintai-kyo Riverside (¥300 día / festivos)", details: "Amplio aparcamiento junto a la orilla del río Nishiki con acceso directo peatonal al puente." }
});

routesData.hiroshima1 = [
  { from: [34.3976, 132.4753], to: [34.3934, 132.4538], type: "rail", duration: "Tranvía Hiroden · 15 min" },
  { from: [34.3934, 132.4538], to: [34.3929, 132.4526], type: "walk", duration: "A pie · 3 min" },
  { from: [34.3929, 132.4526], to: [34.3940, 132.4533], type: "walk", duration: "Paseo por el parque" },
  { from: [34.3940, 132.4533], to: [34.3916, 132.4523], type: "walk", duration: "A pie · 5 min" },
  { from: [34.3916, 132.4523], to: [34.3951, 132.4542], type: "walk", duration: "A pie · 5 min" },
  { from: [34.3951, 132.4542], to: [34.3913, 132.4604], type: "walk", duration: "Hondori a pie · 7 min" }
];

routesData.hiroshima2 = [
  { from: [34.3976, 132.4753], to: [34.3123, 132.3040], type: "rail", duration: "Tren JR Sanyo · 25 min" },
  { from: [34.3123, 132.3040], to: [34.2959, 132.3197], type: "boat", duration: "JR Ferry · 10 min panorámico" },
  { from: [34.2959, 132.3197], to: [34.2988, 132.3218], type: "walk", duration: "Omotesando · 5 min" },
  { from: [34.2988, 132.3218], to: [34.2796, 132.3194], type: "rail", duration: "Teleférico + sendero Misen" },
  { from: [34.2796, 132.3194], to: [34.2934, 132.3157], type: "walk", duration: "Descenso a Daisho-in" },
  { from: [34.2934, 132.3157], to: [34.3120, 132.3045], type: "boat", duration: "Ferry de vuelta a Miyajimaguchi" }
];

routesData.hiroshima3 = [
  { from: [34.3976, 132.4753], to: [34.4039, 132.4593], type: "rail", duration: "Tranvía Hiroden · 12 min" },
  { from: [34.4039, 132.4593], to: [34.4005, 132.4678], type: "walk", duration: "A pie · 10 min" },
  { from: [34.4005, 132.4678], to: [34.3948, 132.4630], type: "walk", duration: "Hacia almuerzo · 8 min" },
  { from: [34.3948, 132.4630], to: [34.4007, 132.4522], type: "walk", duration: "Paseo hacia EDION Peace Wing" },
  { from: [34.4007, 132.4522], to: [34.3972, 132.4727], type: "rail", duration: "Tranvía a Ekinishi · 15 min" }
];

routesData.hiroshima4 = [
  { from: [34.3976, 132.4753], to: [34.1677, 132.1786], type: "rail", duration: "Tren JR Sanyo + bus · 50 min" },
  { from: [34.1677, 132.1786], to: [34.3976, 132.4753], type: "rail", duration: "Regreso a Hiroshima · 50 min" }
];

routesData.hiroshima = [
  ...routesData.hiroshima1,
  ...routesData.hiroshima2,
  ...routesData.hiroshima3,
  ...routesData.hiroshima4
];
