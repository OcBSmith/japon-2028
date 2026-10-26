const hiroshimaPlaces = [
  // --- DÍA 1: Eje de la Paz, Caos Otaku en Hondori y Comida Bizarra ---
  {
    id: 70, code: "H0", shortName: "Estación & Pokémon Center", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Estación de Hiroshima · Pokémon Center & minamoa", jp: "広島駅・ポケモンセンター",
    lat: 34.3976, lng: 132.4753, color: "#d84315", type: "start",
    city: "Hiroshima", time: "Llegada · 10:00", price: "Transporte público",
    activity: "Llegada en Shinkansen a la terminal minamoa. Parada obligatoria en el Pokémon Center Hiroshima para cazar merchandising exclusivo antes de empezar.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Sta_South_Exit_Area.jpg?width=900", alt: "Zona de la salida sur de la Estación de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Sta_South_Exit_Area.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Principal centro de transporte de la prefectura. El tranvía Hiroden conecta directamente desde la planta 2 hacia el centro urbano.",
    tip: "Deja el equipaje en taquillas o en el hotel antes de comenzar la jornada."
  },
  {
    id: 71, code: "H1-1", shortName: "Okonomimura", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Almuerzo en Okonomimura · La 'Aldea del Okonomiyaki'", jp: "お好み村",
    lat: 34.3912, lng: 132.4610, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "11:30 - 12:45", price: "~¥1.200 - 1.800",
    activity: "Subiremos al laberíntico edificio de 4 plantas repleto con más de 20 puestos tradicionales de plancha teppan humeante compitiendo entre sí.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Signboard_of_Okonomimura_Building.jpg?width=900", alt: "Cartel y fachada del emblemático edificio Okonomimura", source: "https://commons.wikimedia.org/wiki/File:Signboard_of_Okonomimura_Building.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Una experiencia inmersiva retro: te sientas en la barra frente al cocinero para ver cómo monta el okonomiyaki en capas con fideos yakisoba crujientes.",
    tip: "Elige el puesto que más te llame la atención en las plantas 2, 3 o 4; pide el especial con queso o con ostras si te atreves."
  },
  {
    id: 72, code: "H1-2", shortName: "Cúpula de la Bomba", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Cúpula de la Bomba Atómica (Genbaku Dome)", jp: "原爆ドーム",
    lat: 34.3929, lng: 132.4526, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "13:00 - 13:45", price: "Gratis (exterior)",
    activity: "Contemplaremos el monumento Patrimonio de la Humanidad por la UNESCO que sobrevivió a escasos metros del hipocentro de la explosión del 6 de agosto de 1945.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/A-Bomb_Dome.jpg?width=900", alt: "Cúpula de la Bomba Atómica (Genbaku Dome) en Hiroshima", source: "https://commons.wikimedia.org/wiki/File:A-Bomb_Dome.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Antiguo Salón de Promoción Industrial. Mantiene su esqueleto metálico intacto como símbolo mundial de paz.",
    tip: "Rodéalo a pie con tranquilidad; la perspectiva desde el puente Aioi permite captar toda su magnitud."
  },
  {
    id: 73, code: "H1-3", shortName: "Parque de la Paz", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Parque Conmemorativo de la Paz & Grullas de Sadako", jp: "平和記念公園",
    lat: 34.3940, lng: 132.4533, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "13:45 - 14:45", price: "Gratis",
    activity: "Recorreremos a pie el Cenotafio para las Víctimas, la Llama de la Paz y el Monumento a la Paz de los Niños (rodeado de miles de grullas de origami).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Peace_Memorial_Park_and_Cenotaph,_Hiroshima,_South_view_20190417_1.jpg?width=900", alt: "Cenotafio y llama de la paz en el Parque Conmemorativo de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Peace_Memorial_Park_and_Cenotaph,_Hiroshima,_South_view_20190417_1.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Diseñado por Kenzo Tange. La historia de Sadako Sasaki y sus 1.000 grullas de papel es el alma emotiva del parque.",
    tip: "Alinea la vista del Cenotafio para ver enmarcada la Llama de la Paz y la Cúpula al fondo."
  },
  {
    id: 74, code: "H1-4", shortName: "Museo de la Paz", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Museo Conmemorativo de la Paz de Hiroshima", jp: "広島平和記念資料館",
    lat: 34.3916, lng: 132.4523, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "14:45 - 16:45", price: "¥200 adulto",
    activity: "Visita sobria e indispensable a las exposiciones del edificio principal y este, con testimonios, fotografías y pertenencias de supervivientes (hibakusha).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Peace_Memorial_Museum_2008_01.JPG?width=900", alt: "Fachada del Museo Conmemorativo de la Paz de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Peace_Memorial_Museum_2008_01.JPG", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "El testimonio histórico más conmovedor de Japón. La audioguía en español aporta un contexto sobrecogedor.",
    tip: "Calcula dos horas completas para recorrerlo con calma y respeto antes de cambiar de tercio."
  },
  {
    id: 75, code: "H1-5", shortName: "Torre Orizuru & Tobogán", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Torre Orizuru · Mirador y tobogán gigante en espiral", jp: "おりづるタワー",
    lat: 34.3951, lng: 132.4542, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "17:00 - 18:00", price: "¥2.200 adulto",
    activity: "Subiremos al mirador de madera al aire libre con vistas directas a la Cúpula... ¡y bajaremos por el tobogán gigante en espiral interior!",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/HIROSHIMA_ORIZURU_TOWER_2016-0923-1.jpg?width=900", alt: "Edificio y mirador de la Torre Orizuru de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:HIROSHIMA_ORIZURU_TOWER_2016-0923-1.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Un rascacielos vanguardista con una cafetería panorámica, un conducto acristalado para soltar grullas de origami y un divertido tobogán de evacuación lúdico.",
    tip: "No bajes en ascensor: pide la esterilla para lanzarte por el tobogán de varias plantas."
  },
  {
    id: 76, code: "H1-6", shortName: "Ruta Otaku Hondori", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Ruta Friki Hondori · Animate, Lashinbang, Village Vanguard & Arcade", jp: "本通・アニメイト・ヴィレッジヴァンガード",
    lat: 34.3918, lng: 132.4585, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "18:15 - 20:00", price: "Entrada libre / compras",
    activity: "Incursión friki por el centro: Animate y Lashinbang (figuras y manga), la delirante tienda Village Vanguard en PARCO (frikadas y humor absurdo japonés) y arcade en Taito Station.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima-Hondori_Shopping_Street_at_night.jpg?width=900", alt: "Galería comercial Hondori iluminada por la noche en Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima-Hondori_Shopping_Street_at_night.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "El epicentro de la cultura pop en Hiroshima. Plantas enteras de UFO catchers, máquinas de ritmo Taiko no Tatsujin y cápsulas gachapon.",
    tip: "En Village Vanguard encontrarás las chucherías más raras y libros gráficos bizarros de Japón."
  },
  {
    id: 90, code: "H1-7", shortName: "Ichiran & Pizza Vending", day: "hiroshima1", region: "hiroshima", dayLabel: "Día 1 · Historia & Cultura Friki",
    title: "Cena en cabinas antisociales de Ichiran y Máquina de Pizzas", jp: "一蘭 広島本通店・自動販売機ピザ",
    lat: 34.3915, lng: 132.4595, color: "#d84315", type: "attraction",
    city: "Hiroshima", time: "20:00 - 21:30", price: "~¥1.000 - 1.500",
    activity: "Cenaremos en las cabinas individuales individuales de Ichiran (pides por máquina y te sirven tras una cortinilla sin hablar con nadie), y buscaremos la famosa máquina callejera de pizzas recién horneadas.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ichiran_Ramen_at_Causeway_Bay_%2820181030141257%29.jpg?width=900", alt: "Cabinas individuales de degustación en Ichiran Ramen", source: "https://commons.wikimedia.org/wiki/File:Ichiran_Ramen_at_Causeway_Bay_(20181030141257).jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "La quintaesencia de las excentricidades urbanas japonesas: aislamiento robótico para saborear ramen tonkotsu y pizza artesanal por botón.",
    tip: "Pide el pudding de té matcha en Ichiran para cerrar con broche de oro."
  },

  // --- DÍA 2: Miyajima Salvaje, Street Food Bizarro y Templo Daisho-in ---
  {
    id: 77, code: "H2-0", shortName: "Muelle Miyajimaguchi", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Miyajima Bizarra & Sagrada",
    title: "Estación y Muelle de Miyajimaguchi", jp: "宮島口",
    lat: 34.3123, lng: 132.3040, color: "#ea580c", type: "start",
    city: "Hatsukaichi, Hiroshima", time: "08:30 - 09:00", price: "Tren JR cubierto por JR Pass",
    activity: "Llegaremos en tren JR Línea Sanyo desde Hiroshima (25 min) y caminaremos al muelle para embarcar hacia la isla sagrada.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Miyajimaguchi_Ferry_Terminal_001.jpg?width=900", alt: "Terminal de ferris de Miyajimaguchi hacia la isla de Miyajima", source: "https://commons.wikimedia.org/wiki/File:Miyajimaguchi_Ferry_Terminal_001.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Punto de embarque hacia la isla de Miyajima. Muy accesible con transporte público.",
    tip: "Si usas el ferry JR Miyajima, está incluido en el JR Pass (se abona la tasa de visitante de ¥100)."
  },
  {
    id: 78, code: "H2-1", shortName: "Itsukushima & Gran Torii", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Miyajima Bizarra & Sagrada",
    title: "Santuario Itsukushima flotante y ciervos sika", jp: "厳島神社",
    lat: 34.2959, lng: 132.3197, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "09:30 - 11:15", price: "¥300 santuario",
    activity: "Cruzaremos las pasarelas flotantes del santuario sobre el mar, fotografiaremos el Gran Torii bermellón y sortearemos a los traviesos ciervos carteristas.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Itsukushima_torii_angle.jpg?width=900", alt: "El gran torii flotante de Itsukushima en marea alta", source: "https://commons.wikimedia.org/wiki/File:Itsukushima_torii_angle.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Patrimonio de la Humanidad por la UNESCO. Los ciervos campan libres por la playa y el pueblo.",
    tip: "Guarda billetes, folletos y mapas: ¡a los ciervos les encanta masticar papel!"
  },
  {
    id: 79, code: "H2-2", shortName: "Street Food Bizarro", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Miyajima Bizarra & Sagrada",
    title: "Street Food Bizarro en Omotesando · Pettara Pottara, Pan-Okonomiyaki & Pala Godzilla", jp: "宮島表参道商店街・ぺったらぽったら",
    lat: 34.2988, lng: 132.3218, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "11:15 - 13:00", price: "Según consumo",
    activity: "Safari gastronómico bizarro: probaremos Pettara Pottara (mochi a la brasa con una ostra entera caramelizada), el koppe-pan relleno entero de Okonomiyaki en Bakery Katsutani-pan, el pastel Age-Momiji frito en brocheta y veremos la colosal Pala de Arroz de Godzilla de 7,7 metros.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Miyajima_Deer_Sep08.jpg?width=900", alt: "Ciervo sika libre en la concurrida calle de Miyajima", source: "https://commons.wikimedia.org/wiki/File:Miyajima_Deer_Sep08.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Puestos callejeros llenos de creatividad loca, ostras gratinadas con queso y el estanque secreto de carpas gigantes al fondo de la tienda Daikonya.",
    tip: "Pide el Age-Momiji relleno de queso o chocolate recién salido de la freidora."
  },
  {
    id: 81, code: "H2-3", shortName: "Templo Daisho-in & Cueva Tadan-do", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Miyajima Bizarra & Sagrada",
    title: "Templo Daisho-in · Los 500 Rakan y la Cueva en Oscuridad Total", jp: "大聖院・戒壇めぐり",
    lat: 34.2934, lng: 132.3157, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "13:15 - 14:45", price: "Entrada libre",
    activity: "El templo más insólito de la isla: 500 estatuas de piedra con gorros de lana, ruedas giratorias mecánicas de sutras y la experiencia Tadan-do: caminar a tientas en completa y absoluta oscuridad subterránea para 'renacer'.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Miyajima,_daisho-in,_05.jpg?width=900", alt: "Escalinata y faroles del templo budista Daisho-in en Miyajima", source: "https://commons.wikimedia.org/wiki/File:Miyajima,_daisho-in,_05.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Un complejo budista esotérico fascinante encaramado en la ladera del bosque sagrado.",
    tip: "Quítate los zapatos para entrar en la cámara subterránea a oscuras: apoya la mano izquierda en la pared y déjate llevar."
  },
  {
    id: 80, code: "H2-4", shortName: "Monte Misen & Teleférico", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Miyajima Bizarra & Sagrada",
    title: "Teleférico de Miyajima y Cumbre del Monte Misen", jp: "弥山・宮島ロープウェイ",
    lat: 34.2796, lng: 132.3194, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "15:00 - 17:30", price: "¥2.000 teleférico ida/vuelta",
    activity: "Subiremos en el teleférico por el valle de Momijidani hasta el mirador de Misen (535 m) y visitaremos el fuego sagrado eterno del templo Reikado (con el que se encendió la Llama de la Paz).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Misen-01.jpg?width=900", alt: "Vistas panorámicas desde la cima del Monte Misen en Miyajima", source: "https://commons.wikimedia.org/wiki/File:Mount_Misen-01.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "El punto más alto de la isla sagrada con vistas panorámicas sobre las islas del Mar Interior de Seto.",
    tip: "Comprueba el horario del último viaje de bajada del teleférico para no tener que descender a pie de noche."
  },
  {
    id: 82, code: "H2-5", shortName: "Bar Gebura & Anago-meshi", day: "hiroshima2", region: "hiroshima", dayLabel: "Día 2 · Miyajima Bizarra & Sagrada",
    title: "Cócteles en Bar Gebura y cena centenaria de Anago-meshi", jp: "GEBURA・あなごめし うえの",
    lat: 34.2985, lng: 132.3210, color: "#ea580c", type: "attraction",
    city: "Miyajima, Hiroshima", time: "18:00 - 20:00", price: "~¥2.500 - 3.500",
    activity: "Brindaremos en el Bar Gebura con su estrambótica copa de Ron con ositos Haribo congelados o Highball con limón local, antes de saborear la legendaria anguila de mar asada en Ueno Anagomeshi.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Anago-meshi_%E3%81%82%E3%81%AA%E3%81%94%E3%82%81%E3%81%97.jpg?width=900", alt: "Cazuela tradicional de anguila de mar asada Anago-meshi", source: "https://commons.wikimedia.org/wiki/File:Anago-meshi_あなごめし.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "El contraste ideal entre la coctelería desenfadada de Miyajima y una receta tradicional de más de un siglo.",
    tip: "Al anochecer, el Gran Torii se ilumina y la isla queda en un silencio sobrecogedor al marcharse los turistas de día."
  },

  // --- DÍA 3: Castillo Samurái, Jardín Zen, Don Quijote & Callejones Ekinishi ---
  {
    id: 83, code: "H3-1", shortName: "Castillo de Hiroshima", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Samuráis, Kitsch & Bares Ocultos",
    title: "Castillo de Hiroshima (Carp Castle) y árboles supervivientes", jp: "広島城",
    lat: 34.4039, lng: 132.4593, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "09:30 - 11:30", price: "¥370 torre principal",
    activity: "Exploraremos el castillo feudal samurái, el foso con peces y los misteriosos árboles hibakujumoku que sobrevivieron a la onda expansiva nuclear.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Castle_Keep_Tower.jpg?width=900", alt: "Torre principal de madera del Castillo de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Castle_Keep_Tower.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Fortaleza fundada en 1589 por Mori Terumoto rodeada por murallas ciclópeas y naturaleza.",
    tip: "Busca el eucalipto superviviente señalizado en el recinto a solo 740 m del hipocentro."
  },
  {
    id: 84, code: "H3-2", shortName: "Jardín Shukkei-en", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Samuráis, Kitsch & Bares Ocultos",
    title: "Jardín tradicional Shukkei-en", jp: "縮景園",
    lat: 34.4005, lng: 132.4678, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "11:45 - 13:00", price: "¥260 adulto",
    activity: "Paseo entre paisajes tradicionales en miniatura: estanques con carpas koi gigantes, casas de té y el puente de piedra curvado Koko-kyo.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shukkeien_Kokokyo.JPG?width=900", alt: "Puente Kokokyo de piedra curvado sobre el estanque en el Jardín Shukkei-en", source: "https://commons.wikimedia.org/wiki/File:Shukkeien_Kokokyo.JPG", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Jardín señorial de 1620 con rincones idóneos para desconectar y tomar fotos.",
    tip: "A solo 10 minutos a pie desde la puerta este del castillo."
  },
  {
    id: 85, code: "H3-3", shortName: "Shirunashi Tantanmen", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Samuráis, Kitsch & Bares Ocultos",
    title: "Almuerzo de Shirunashi Tantanmen o Mazemen picante", jp: "汁なし担々麺 キング軒",
    lat: 34.3948, lng: 132.4630, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "13:15 - 14:15", price: "~¥800 - 1.000",
    activity: "Almorzaremos la gran adicción gastronómica local: fideos sin sopa ultra especiados con pimienta de Sichuan (sansho), carne picada y cebolleta china.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/175do_DENO_Tantanmen_TOKYO.jpg?width=900", alt: "Fideos Shirunashi Tantanmen especiados con pimienta sansho", source: "https://commons.wikimedia.org/wiki/File:175do_DENO_Tantanmen_TOKYO.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "La regla de oro: hay que remover los fideos exactamente 30 veces antes de dar el primer bocado.",
    tip: "Pide nivel de picante moderado si no toleras el cosquilleo anestésico de la pimienta de Sichuan."
  },
  {
    id: 86, code: "H3-4", shortName: "EDION Peace Wing & Donki", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Samuráis, Kitsch & Bares Ocultos",
    title: "EDION Peace Wing & Incursión a Don Quijote Hacchobori", jp: "エディオンピースウイング・ドン・キホーテ",
    lat: 34.3905, lng: 132.4628, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "14:45 - 17:30", price: "Compras",
    activity: "Veremos el nuevo y futurista estadio ribereño EDION Peace Wing y luego nos sumergiremos en el delirante laberinto de Don Quijote: varias plantas de chuches estrafalarias, juguetes kitsch, disfraces y cosmética bizarra.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Edion_Peace_Wing_Hiroshima.jpg?width=900", alt: "Nuevo estadio de fútbol ribereño EDION Peace Wing Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Edion_Peace_Wing_Hiroshima.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "El contraste absoluto entre la arquitectura cívica moderna y el caos consumista más divertido de Japón.",
    tip: "Aprovecha para comprar snacks de KitKat con sabores exclusivos de Japón y productos de broma."
  },
  {
    id: 87, code: "H3-5", shortName: "Callejones Ekinishi", day: "hiroshima3", region: "hiroshima", dayLabel: "Día 3 · Samuráis, Kitsch & Bares Ocultos",
    title: "Noche clandestina en los callejones retro de EKINISHI", jp: "エキニシ",
    lat: 34.3972, lng: 132.4727, color: "#f59e0b", type: "attraction",
    city: "Hiroshima", time: "18:00 - 22:00", price: "Izakaya según consumo",
    activity: "Ruta nocturna de bares diminutos en el barrio de Ekinishi: casas de madera de la posguerra con tabernas de 5 o 6 taburetes, farolillos rojos y tapas creativas.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Night_view_in_Hondori,_Naka,_Hiroshima.jpg?width=900", alt: "Ambiente nocturno e iluminación urbana en las calles de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Night_view_in_Hondori,_Naka,_Hiroshima.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Un ambiente subterráneo y acogedor donde entablas conversación con el dueño y los clientes mientras catas sakes locales de la prefectura.",
    tip: "Pide sake de Saijo servido en copa desbordante (mokkiri) y brochetas de carne local."
  },

  // --- DÍA 4: Los 165 Helados Locos de Iwakuni, Serpientes Sagradas & Despedida ---
  {
    id: 88, code: "H4-1", shortName: "Puente Kintai-kyo", day: "hiroshima4", region: "hiroshima", dayLabel: "Día 4 · Helados Locos & Serpientes Sagradas",
    title: "Puente Kintai-kyo en Iwakuni · Cinco arcos de madera de 1673", jp: "錦帯橋",
    lat: 34.1677, lng: 132.1786, color: "#10b981", type: "attraction",
    city: "Iwakuni, Yamaguchi", time: "09:30 - 11:30", price: "¥310 cruzar puente",
    activity: "Cruzaremos a pie los cinco majestuosos arcos de madera sobre pilares de piedra del puente Kintai-kyo, ensamblados sin clavos metálicos sobre el río Nishiki.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kintaikyo_bridge_in_Iwakuni.jpg?width=900", alt: "Los cinco arcos de madera del histórico puente Kintai-kyo", source: "https://commons.wikimedia.org/wiki/File:Kintaikyo_bridge_in_Iwakuni.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Uno de los tres puentes históricos más famosos de Japón, joya de la arquitectura samurái.",
    tip: "Al otro lado se extiende el parque Kikko con antiguas casas de guerreros samurái."
  },
  {
    id: 91, code: "H4-2", shortName: "Musashi Soft Cream & Shirohebi", day: "hiroshima4", region: "hiroshima", dayLabel: "Día 4 · Helados Locos & Serpientes Sagradas",
    title: "El Reto de los 165 Helados en Musashi & Serpientes Blancas de Iwakuni", jp: "むさし ソフトクリーム・白蛇神社",
    lat: 34.1668, lng: 132.1762, color: "#10b981", type: "attraction",
    city: "Iwakuni, Yamaguchi", time: "11:30 - 13:30", price: "~¥400 helado / ¥100 museo",
    activity: "El gran reto gastronómico: elegir un helado entre más de 165 sabores insólitos (curry, wasabi, ramen, natto, salsa de soja, ajo, té verde...) en Musashi Soft Cream, y visitar las míticas serpientes albinas sagradas (Shirohebi), veneradas como deidades de la fortuna.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Black_sesame_soft_ice_cream.jpg?width=900", alt: "Cono de helado artesanal japonés de sabor insólito", source: "https://commons.wikimedia.org/wiki/File:Black_sesame_soft_ice_cream.jpg", credit: "Wikimedia Commons · CC BY-SA 2.0" },
    desc: "Un duelo clásico entre los puestos rivales Musashi y Kojiro frente al puente, famoso en la televisión japonesa por su menú kilométrico de sabores bizarros.",
    tip: "¿Te atreves con el helado de curry o prefieres el de limón de Setouchi o matcha triple?"
  },
  {
    id: 89, code: "H4-3", shortName: "Soramore & Despedida minamoa", day: "hiroshima4", region: "hiroshima", dayLabel: "Día 4 · Helados Locos & Serpientes Sagradas",
    title: "Complejo comercial de la Estación · minamoa, ekie & azotea Soramore", jp: "ミナモア・エキエ・ソラモア広場",
    lat: 34.3976, lng: 132.4753, color: "#10b981", type: "attraction",
    city: "Hiroshima", time: "14:30 - 17:00", price: "Compras y comida",
    activity: "Últimas compras gastronómicas en ekie y minamoa: el adictivo Nama Momiji (pastel con textura mochi de Nishikido), bento de sushi y brindis final en la azotea ajardinada Soramore Plaza antes del Shinkansen.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Sta_South_Exit_Area.jpg?width=900", alt: "Complejo comercial y estación minamoa de Hiroshima", source: "https://commons.wikimedia.org/wiki/File:Hiroshima_Sta_South_Exit_Area.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "El gran hub de diseño, cafeterías y gastronomía de Hiroshima, con vistas abiertas sobre las vías del tren bala.",
    tip: "El Nama Momiji tiene caducidad corta porque es artesanal; cómpralo fresco para degustar."
  }
];

places.push(...hiroshimaPlaces);

Object.assign(parkingInfo, {
  70: { summary: "Parking estación · de pago subterráneo", details: "El complejo minamoa de la Estación de Hiroshima dispone de aparcamientos vinculados de pago con tarifa horaria (~¥400/h). Para moverse por la ciudad es más rápido y cómodo usar el tranvía Hiroden." },
  71: { summary: "Sin parking propio · usa tranvía o aparcamiento Otemachi", details: "Okonomimura se ubica en el animado distrito de Shintoshin/Hondori. Se recomienda llegar a pie o en tranvía Hiroden hasta Hatchobori." },
  72: { summary: "Sin parking propio · usa tranvía Hiroden", details: "El Parque de la Paz no dispone de parking para coches particulares. Llegar en tranvía Hiroden (Línea 2 o 6 hasta Genbaku Dome-mae) o autobús turístico Meipuru-pu." },
  74: { summary: "Sin parking propio · parkings públicos en Otemachi", details: "Usa parkings de pago en el distrito de Otemachi (como Hiroshima City Peace Memorial Hall Parking) con tarifa aproximada de ¥200/30 min." },
  75: { summary: "Parking Orizuru de pago", details: "Dispone de plazas limitadas mecánicas en el sótano con tarifa por hora (~¥300/30 min)." },
  76: { summary: "Área peatonal Hondori · sin coches", details: "Galería comercial peatonal. Los parkings más próximos están en los grandes almacenes PARCO o Fukuya." },
  77: { summary: "Parkings de pago en Miyajimaguchi (¥800 - 1.500/día)", details: "Dejar el coche en los aparcamientos frente al muelle de Miyajimaguchi antes de tomar el ferry. En la isla de Miyajima apenas hay tráfico y el acceso con coche de visitantes no es recomendable." },
  78: { summary: "Isla peatonal · sin coches de visitantes", details: "La isla de Miyajima se recorre íntegramente a pie o mediante el teleférico. El coche debe permanecer en Miyajimaguchi." },
  81: { summary: "Acceso a pie en Miyajima", details: "El Templo Daisho-in queda a 15 minutos a pie desde el Santuario Itsukushima, subiendo por la colina hacia el bosque." },
  83: { summary: "Parking Castillo de Hiroshima de pago (¥360/h)", details: "Aparcamiento del recinto del castillo junto a la puerta sur para turismos." },
  84: { summary: "Sin parking propio de Shukkei-en", details: "Aparcamientos públicos de pago próximos al Museo de Arte de la Prefectura de Hiroshima." },
  86: { summary: "Parking HiroPa subterráneo de pago", details: "Parking del estadio EDION Peace Wing Hiroshima con tarifa horaria." },
  87: { summary: "Callejones peatonales Ekinishi", details: "Junto a la salida oeste de la Estación de Hiroshima. Se accede caminando en 2 minutos." },
  88: { summary: "Parking Kintai-kyo Riverside (¥300 día / festivos)", details: "Amplio aparcamiento junto a la orilla del río Nishiki con acceso directo peatonal al puente." }
});

routesData.hiroshima1 = [
  { from: [34.3976, 132.4753], to: [34.3912, 132.4610], type: "rail", duration: "Tranvía Hiroden a Okonomimura · 12 min" },
  { from: [34.3912, 132.4610], to: [34.3929, 132.4526], type: "walk", duration: "A pie hacia Genbaku Dome · 10 min" },
  { from: [34.3929, 132.4526], to: [34.3940, 132.4533], type: "walk", duration: "Paseo por el Parque de la Paz" },
  { from: [34.3940, 132.4533], to: [34.3916, 132.4523], type: "walk", duration: "Hacia el Museo de la Paz · 5 min" },
  { from: [34.3916, 132.4523], to: [34.3951, 132.4542], type: "walk", duration: "A Torre Orizuru · 6 min" },
  { from: [34.3951, 132.4542], to: [34.3918, 132.4585], type: "walk", duration: "Ruta friki Hondori (Animate/Village Vanguard) · 6 min" },
  { from: [34.3918, 132.4585], to: [34.3915, 132.4595], type: "walk", duration: "A cenar en Ichiran · 2 min" }
];

routesData.hiroshima2 = [
  { from: [34.3976, 132.4753], to: [34.3123, 132.3040], type: "rail", duration: "Tren JR Sanyo · 25 min" },
  { from: [34.3123, 132.3040], to: [34.2959, 132.3197], type: "boat", duration: "JR Ferry · 10 min panorámico" },
  { from: [34.2959, 132.3197], to: [34.2988, 132.3218], type: "walk", duration: "Street Food Omotesando & Pala Godzilla · 5 min" },
  { from: [34.2988, 132.3218], to: [34.2934, 132.3157], type: "walk", duration: "Paseo al Templo Daisho-in & Cueva Tadan-do · 15 min" },
  { from: [34.2934, 132.3157], to: [34.2796, 132.3194], type: "rail", duration: "Teleférico + sendero cumbre Misen" },
  { from: [34.2796, 132.3194], to: [34.2985, 132.3210], type: "walk", duration: "Descenso hacia Bar Gebura & Anago-meshi" },
  { from: [34.2985, 132.3210], to: [34.3123, 132.3040], type: "boat", duration: "Ferry de regreso a Miyajimaguchi" }
];

routesData.hiroshima3 = [
  { from: [34.3976, 132.4753], to: [34.4039, 132.4593], type: "rail", duration: "Tranvía Hiroden al Castillo · 12 min" },
  { from: [34.4039, 132.4593], to: [34.4005, 132.4678], type: "walk", duration: "Paseo a Shukkei-en · 10 min" },
  { from: [34.4005, 132.4678], to: [34.3948, 132.4630], type: "walk", duration: "Hacia Tantanmen picante · 10 min" },
  { from: [34.3948, 132.4630], to: [34.3905, 132.4628], type: "walk", duration: "Incursión friki a Don Quijote · 6 min" },
  { from: [34.3905, 132.4628], to: [34.3972, 132.4727], type: "rail", duration: "Tranvía a callejones Ekinishi · 12 min" }
];

routesData.hiroshima4 = [
  { from: [34.3976, 132.4753], to: [34.1677, 132.1786], type: "rail", duration: "Tren JR Sanyo + bus · 50 min" },
  { from: [34.1677, 132.1786], to: [34.1668, 132.1762], type: "walk", duration: "Reto 165 helados & Serpientes Sagradas · 3 min" },
  { from: [34.1668, 132.1762], to: [34.3976, 132.4753], type: "rail", duration: "Regreso a Hiroshima minamoa · 50 min" }
];

routesData.hiroshima = [
  ...routesData.hiroshima1,
  ...routesData.hiroshima2,
  ...routesData.hiroshima3,
  ...routesData.hiroshima4
];
