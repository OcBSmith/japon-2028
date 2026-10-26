const fukuokaPlaces = [
  {
    id: 20, code: "F0", shortName: "Base Hakata", day: "fukuoka1", region: "fukuoka", dayLabel: "Día 1 · llegada",
    title: "Zona base sugerida: Hakata", jp: "博多", lat: 33.5897, lng: 130.4207, color: "#0f766e", type: "start",
    city: "Fukuoka", time: "Llegada", price: "Hotel pendiente",
    activity: "Tomaremos Hakata como base por su conexión con el aeropuerto y los trenes para continuar por Kyushu.",
    desc: "Punto de referencia para las cuatro noches; todavía no es un hotel elegido.",
    tip: "Si luego decides alojarte en Tenjin, adaptamos el inicio de las rutas."
  },
  {
    id: 21, code: "F1-1", shortName: "Kawabata Shotengai", day: "fukuoka1", region: "fukuoka", dayLabel: "Día 1 · llegada",
    title: "Kawabata Shotengai", jp: "川端通商店街", lat: 33.5936, lng: 130.4078, color: "#f43f5e", type: "attraction",
    city: "Fukuoka", time: "Tarde, si hay tiempo", price: "Paseo",
    activity: "Pasearemos por la galería cubierta de tiendas tradicionales, puestos de souvenirs y dulces de té matcha para empezar a conocer Hakata.",
    desc: "Galería comercial tradicional junto a Nakasu y al santuario Kushida.",
    tip: "Buena visita de llegada: se puede acortar si el vuelo llega tarde."
  },
  {
    id: 22, code: "F1-2", shortName: "Santuario Kushida", day: "fukuoka1", region: "fukuoka", dayLabel: "Día 1 · llegada",
    title: "Santuario Kushida", jp: "櫛田神社", lat: 33.5931, lng: 130.4107, color: "#f43f5e", type: "attraction",
    city: "Fukuoka", time: "Tarde", price: "Visita",
    activity: "Veremos el santuario histórico de Hakata y las colosales carrozas talladas del festival Yamakasa expuestas en el recinto.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kushida%20shrine.jpeg?width=900", alt: "Santuario Kushida en Hakata", source: "https://commons.wikimedia.org/wiki/File:Kushida_shrine.jpeg", credit: "FOMALHAUT · Wikimedia Commons · dominio público" },
    desc: "Uno de los santuarios más conocidos de Hakata, a poca distancia de la zona comercial.",
    tip: "Comprueba el horario del recinto al fijar las fechas."
  },
  {
    id: 23, code: "F1-3", shortName: "Yatai de Nakasu", day: "fukuoka1", region: "fukuoka", dayLabel: "Día 1 · llegada",
    title: "Yatai junto al río en Nakasu · Ramen & Comida Callejera", jp: "中洲屋台", lat: 33.5902, lng: 130.4086, color: "#f43f5e", type: "attraction",
    city: "Fukuoka", time: "Desde el atardecer", price: "Cena según consumo",
    activity: "Cenaremos hombro con hombro en los míticos carritos callejeros (yatai): auténtico ramen Hakata tonkotsu con caldo ultra espeso y fideos al dente firme (katame), mentaiko tamagoyaki (tortilla flambeada rellena de huevas picantes) y brochetas de yakitori humeantes.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakata%20yatai%20and%20yatai%20food%20-%202024%20Sept%2024%20various%2011%2027%2044%20788000.jpeg?width=900", alt: "Puestos yatai iluminados en Nakasu", source: "https://commons.wikimedia.org/wiki/File:Hakata_yatai_and_yatai_food_-_2024_Sept_24_various_11_27_44_788000.jpeg", credit: "Nesnad · Wikimedia Commons · CC BY 4.0" },
    desc: "Los diminutos yatai junto al río son una institución nocturna de Fukuoka con dueños carismáticos y ambiente animadísimo.",
    tip: "Lleva efectivo; pide una cerveza local y atrévete a pedir 'kaedama' (segunda ración de fideos al caldo)."
  },
  {
    id: 24, code: "F2-1", shortName: "Castillo de Fukuoka", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "Ruinas del Castillo de Fukuoka y parque Maizuru", jp: "福岡城跡・舞鶴公園", lat: 33.5854, lng: 130.3850, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "Mañana", price: "Recinto exterior",
    activity: "Recorreremos las murallas y miradores del antiguo castillo dentro del parque Maizuru.",
    desc: "Zona histórica al oeste del centro, junto al parque Ōhori.",
    tip: "El recorrido es al aire libre; adapta la visita al calor, lluvia y temporada."
  },
  {
    id: 25, code: "F2-2", shortName: "Parque Ōhori", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "Parque Ōhori", jp: "大濠公園", lat: 33.5859, lng: 130.3763, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "Mediodía", price: "Paseo",
    activity: "Daremos una vuelta junto al gran estanque y los puentes flotantes; descanso en una cafetería junto al agua.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ohori%20Park%2020200716-7.jpg?width=900", alt: "Estanque y paseo del parque Ōhori", source: "https://commons.wikimedia.org/wiki/Category:Ohori_Park", credit: "Wikimedia Commons · foto de Ōhori Park" },
    desc: "Parque urbano alrededor de un gran estanque con islotes comunicados por puentes de piedra.",
    tip: "Deja tiempo libre para parar en una cafetería junto al agua."
  },
  {
    id: 26, code: "F2-3", shortName: "Torre de Fukuoka", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "Torre de Fukuoka", jp: "福岡タワー", lat: 33.5933, lng: 130.3515, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "Tarde", price: "¥800 adulto",
    activity: "Subiremos al mirador de 234 metros revestido por 8.000 espejos semitransparentes para contemplar la ciudad y la bahía.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka_Tower.jpg?width=900", alt: "Torre de Fukuoka junto a la bahía", source: "https://commons.wikimedia.org/wiki/File:Fukuoka_Tower.jpg", credit: "Wikimedia Commons · dominio público" },
    desc: "La torre costera más alta de Japón con vistas panorámicas 360 grados.",
    tip: "Revisaremos visibilidad, horario y precio de entrada cuando se acerque el viaje."
  },
  {
    id: 39, code: "F2-4", shortName: "BOSS E·ZO FUKUOKA", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "BOSS E·ZO FUKUOKA · teamLab Forest & Tobogán Gigante SubeZO (Especial niños 12 años)", jp: "BOSS E・ZO FUKUOKA・チームラボフォレスト・すべZO", lat: 33.5954, lng: 130.3621, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "16:00 - 18:30", price: "teamLab: ~¥2.400 / SubeZO: ~¥1.000",
    activity: "El gran paraíso de adrenalina y arte digital para chicos de 12 años: nos lanzaremos por 'SubeZO' (un alucinante tobogán tubular transparente de 100 metros de longitud que serpentea por la fachada exterior del edificio desde 40 metros de altura a toda velocidad, apto a partir de 10 años / 130 cm), y nos sumergiremos en 'teamLab Forest Fukuoka' (museo digital interactivo donde cazas criaturas virtuales en 3D con el móvil en el 'Catching Forest' y saltas por acrobacias de luz en el 'Athletics Forest').",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/E-zo_fukuoka.jpg?width=900", alt: "Fachada del complejo de ocio BOSS E-ZO FUKUOKA junto al PayPay Dome", source: "https://commons.wikimedia.org/wiki/File:E-zo_fukuoka.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Complejo de entretenimiento vanguardista de 7 plantas pegado al PayPay Dome, con simuladores virtuales de béisbol, escalada y realidad virtual.",
    tip: "A solo 10 minutos a pie de la Torre de Fukuoka y Momochi. Para SubeZO se exige calzado deportivo cerrado."
  },
  {
    id: 27, code: "F2-5", shortName: "Playa Momochi", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "Paseo por Momochihama", jp: "百道浜", lat: 33.5960, lng: 130.3530, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "Atardecer", price: "Paseo",
    activity: "Terminaremos el día junto a la playa artificial y el complejo Marizon sobre el mar para ver el atardecer.",
    desc: "Paseo marítimo al lado de la Torre de Fukuoka.",
    tip: "Combina bien con la torre y BOSS E-ZO; no hace falta cambiar de zona."
  },
  {
    id: 34, code: "F3-1", shortName: "Templo Tōchōji", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata friki, Gundam y Tenjin",
    title: "Templo Tōchōji y Gran Buda", jp: "東長寺", lat: 33.5963, lng: 130.4161, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "Mañana · 09:30", price: "Acceso libre; pagoda",
    activity: "Visitaremos el templo y su imponente Gran Buda de madera de 10,8 metros de altura (el mayor Buda sentado de madera de Japón), y cruzaremos el túnel del infierno budista a oscuras bajo la estatua.",
    desc: "Templo budista fundado en el año 806 por Kobo Daishi con una pagoda roja de 5 pisos.",
    tip: "No te pierdas el recorrido en penumbra bajo el pedestal del Buda."
  },
  {
    id: 35, code: "F3-2", shortName: "Sumiyoshi y Rakusuien", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata friki, Gundam y Tenjin",
    title: "Santuario Sumiyoshi y jardín Rakusuien", jp: "住吉神社・楽水園", lat: 33.5833, lng: 130.4145, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "11:00 - 12:15", price: "Jardín: ~¥100",
    activity: "Haremos una pausa entre el santuario más antiguo de Kyushu y el pequeño jardín japonés con salón de té tradicional antes de comer.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/View%20in%20Sumiyoshi%20Shrine%20in%20Fukuoka%20City.jpg?width=900", alt: "Recinto del santuario Sumiyoshi en Fukuoka", source: "https://commons.wikimedia.org/wiki/File:View_in_Sumiyoshi_Shrine_in_Fukuoka_City.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Un remanso de paz tradicional antes de sumergirnos en la cultura pop y las compras.",
    tip: "Si el ritmo se alarga, el jardín puede quedar como visita rápida."
  },
  {
    id: 36, code: "F3-3", shortName: "Canal City & Ramen Stadium", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata friki, Gundam y Tenjin",
    title: "Canal City Hakata · Ramen Stadium & Tiendas Pop", jp: "キャナルシティ博多・ラーメンスタジアム", lat: 33.5898, lng: 130.4103, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "12:30 - 15:00", price: "Comida y compras",
    activity: "Almorzaremos en el 'Ramen Stadium' (planta 5F con 8 prestigiosos restaurantes de ramen compitiendo de todo Japón), visitaremos la Jump Shop oficial (One Piece, Jujutsu Kaisen, Dragon Ball) y la Bandai Namco Cross Store con cientos de gashapons temáticos.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Canal%20City%20Hakata.jpg?width=900", alt: "Arquitectura interior de Canal City Hakata", source: "https://commons.wikimedia.org/wiki/File:Canal_City_Hakata.jpg", credit: "ltsc1980 · Wikimedia Commons" },
    desc: "Complejo de ocio futurista con fuentes danzantes y espectáculos multimedia cada hora.",
    tip: "En el Ramen Stadium compra el ticket en la máquina expendedora de la entrada de cada puesto."
  },
  {
    id: 38, code: "F3-4", shortName: "Gundam Park Fukuoka", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata friki, Gundam y Tenjin",
    title: "Gundam Park Fukuoka & Estatua 1:1 ν Gundam (LaLaport)", jp: "三井ショッピングパーク ららぽーと福岡・実物大νガンダム", lat: 33.5529, lng: 130.4418, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "15:30 - 17:45", price: "Gratis exterior / compras",
    activity: "Peregrinación friki imprescindible: nos colocaremos a los pies de la estatua a escala real 1:1 de 24,8 metros de altura del RX-93ff ν Gundam (¡que mueve la cabeza y el brazo con espectáculos de luces y sonido!), y exploraremos The Gundam Base Fukuoka y la macro-sala arcade de Namco.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/LaLaport_Fukuoka_FlowerPark_Entrance.jpg?width=900", alt: "Entrada principal y plaza exterior del complejo Mitsui Shopping Park LaLaport Fukuoka", source: "https://commons.wikimedia.org/wiki/File:LaLaport_Fukuoka_FlowerPark_Entrance.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Uno de los únicos robots mecha gigantes a tamaño real del planeta y la gran meca otaku de Kyushu.",
    tip: "Autobús directo frecuente desde la estación de Hakata hasta la puerta de LaLaport (aprox. 20 min)."
  },
  {
    id: 37, code: "F3-5", shortName: "Mandarake & Daimyo Otaku", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata friki, Gundam y Tenjin",
    title: "Mandarake Fukuoka, Daimyo retro-otaku & Tenjin Chikagai", jp: "まんだらけ福岡店・大名・天神地下街", lat: 33.5878, lng: 130.3955, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "18:15 - 22:00", price: "Paseo y compras",
    activity: "Incursión al templo sagrado del coleccionismo en Mandarake Fukuoka: plantas repletas de videojuegos retro japoneses (Game Boy, Super Famicom, Neo Geo), manga antiguo descatalogado, figuras raras y juguetes kaiju de vinilo. Tras cazar tesoros, paseo por las boutiques vintage de Daimyo y cena en los callejones gastronómicos de Tenjin.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka_city_life.jpg?width=900", alt: "Cruce y calles del distrito comercial de Tenjin", source: "https://commons.wikimedia.org/wiki/File:Fukuoka_city_life.jpg", credit: "Wikimedia Commons" },
    desc: "El barrio joven con más personalidad alternativa, tiendas frikis y tabernas con encanto de Fukuoka.",
    tip: "En Mandarake revisa las vitrinas con cartuchos antiguos y figuras de segunda mano en estado impecable."
  },
  {
    id: 28, code: "F4-1", shortName: "Dazaifu Tenmangu", day: "fukuoka4", region: "fukuoka", dayLabel: "Día 4 · Dazaifu y Yanagawa",
    title: "Santuario Dazaifu Tenmangu", jp: "太宰府天満宮", lat: 33.5215, lng: 130.5348, color: "#f59e0b", type: "attraction",
    city: "Dazaifu, Fukuoka", time: "Mañana", price: "Visita",
    activity: "Recorreremos el santuario, los estanques de puentes arqueados y probaremos el dulce caliente umegae mochi relleno de anko recién hecho a la plancha.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Daizaifu%20tenmangu%20shrine%20%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%A4%A9%E6%BA%80%E5%AE%AE%20%2854205718799%29.jpg?width=900", alt: "Santuario Dazaifu Tenmangu", source: "https://commons.wikimedia.org/wiki/File:Daizaifu_tenmangu_shrine_太宰府天満宮_(54205718799).jpg", credit: "nakashi · Wikimedia Commons" },
    desc: "Santuario sintoísta dedicado a la deidad del aprendizaje; la calle comercial de acceso tiene cafés de diseño únicos (como el Starbucks de madera entrelazada de Kengo Kuma).",
    tip: "Iremos en tren Nishitetsu desde Tenjin."
  },
  {
    id: 29, code: "F4-2", shortName: "Museo Nacional de Kyushu", day: "fukuoka4", region: "fukuoka", dayLabel: "Día 4 · Dazaifu y Yanagawa",
    title: "Museo Nacional de Kyushu", jp: "九州国立博物館", lat: 33.5189, lng: 130.5369, color: "#f59e0b", type: "attraction",
    city: "Dazaifu, Fukuoka", time: "Mediodía · opcional", price: "Entrada por confirmar",
    activity: "Entraremos si queremos dedicar más tiempo a la historia y las colecciones de Kyushu y el intercambio con Asia.",
    desc: "Museo futurista de cristal curvado conectado por escaleras mecánicas futuristas con el santuario.",
    tip: "Si visitamos el museo con calma, quizá convenga dejar Yanagawa para otro día."
  },
  {
    id: 30, code: "F4-3", shortName: "Canales de Yanagawa", day: "fukuoka4", region: "fukuoka", dayLabel: "Día 4 · Dazaifu y Yanagawa",
    title: "Paseo en barca por Yanagawa & Anguila Seiro-mushi", jp: "柳川川下り", lat: 33.1647, lng: 130.4053, color: "#f59e0b", type: "attraction",
    city: "Yanagawa, Fukuoka", time: "Tarde · según barco", price: "Barca y comida por confirmar",
    activity: "Navegaremos en barca tradicional de remos 'donkobune' por los canales arbolados de la Venecia de Kyushu y degustaremos la anguila al vapor en cajas de madera seiro-mushi.",
    desc: "Excursión tranquila entre casas tradicionales, puentes bajos y sauces llorones.",
    tip: "Comprueba la hora del último barco de regreso a la estación."
  },
  {
    id: 31, code: "F5-1", shortName: "Castillo de Kokura", day: "fukuoka5", region: "fukuoka", dayLabel: "Día 5 · Mojiko y Kokura",
    title: "Castillo de Kokura", jp: "小倉城", lat: 33.8847, lng: 130.8749, color: "#a855f7", type: "attraction",
    city: "Kitakyushu, Fukuoka", time: "Mañana · opcional", price: "Entrada por confirmar",
    activity: "Pasearemos por el castillo feudal de Kokura, sus jardines y el foso histórico antes de seguir hacia el puerto.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kokura%20Castle.jpg?width=900", alt: "Castillo de Kokura rodeado por el foso", source: "https://commons.wikimedia.org/wiki/File:Kokura_Castle.jpg", credit: "Stjepko Krehula · Wikimedia Commons · CC BY 4.0" },
    desc: "Castillo urbano de Kitakyushu, fácil de combinar con Mojiko en la misma jornada.",
    tip: "El tren entre Hakata y Kokura tiene varias opciones; evitaremos asumir que el Sanyo Shinkansen entra en el pase JR Kyushu."
  },
  {
    id: 32, code: "F5-2", shortName: "Mojiko Retro & Yaki Curry", day: "fukuoka5", region: "fukuoka", dayLabel: "Día 5 · Mojiko y Kokura",
    title: "Paseo por Mojiko Retro & Desafío Yaki Curry", jp: "門司港レトロ・焼きカレー", lat: 33.9455, lng: 130.9601, color: "#a855f7", type: "attraction",
    city: "Kitakyushu, Fukuoka", time: "Tarde", price: "Paseo; comida por cuenta propia",
    activity: "Recorreremos los muelles y edificios históricos de estilo occidental de la era Taisho, y probaremos el legendario plato bizarro de Mojiko: el Yaki Curry (arroz al curry especiado gratinado al horno con queso fundido y huevo pasado por agua en cazuela caliente de hierro fundido).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mojikou-retro.jpg?width=900", alt: "Edificios históricos del puerto de Mojiko Retro", source: "https://commons.wikimedia.org/wiki/File:Mojikou-retro.jpg", credit: "Takasunrise0921 · Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Antiguo puerto internacional con sabor nostálgico, tiendas de antigüedades náuticas y vistas al estrecho de Kanmon.",
    tip: "El café Bear Fruits o Honke Kawara Soba son opciones fantásticas para disfrutar del Yaki Curry."
  },
  {
    id: 33, code: "F6-1", shortName: "Templo Nanzoin", day: "fukuoka6", region: "fukuoka", dayLabel: "Día 6 · salida, solo si hay tiempo",
    title: "Templo Nanzōin y Buda reclinado", jp: "南蔵院", lat: 33.6185, lng: 130.5660, color: "#8b5cf6", type: "attraction",
    city: "Sasaguri, Fukuoka", time: "Mañana · opcional", price: "Acceso libre",
    activity: "Si el vuelo o tren de salida es por la tarde, visitaremos el misterioso templo en la montaña y el colosal Buda de bronce reclinado (de 41 metros de largo, del mismo tamaño que la Estatua de la Libertad de Nueva York acostada).",
    desc: "Templo sagrado en Sasaguri, rodeado de frondosos bosques y túneles con cientos de estatuas de deidades.",
    tip: "No lo incluyas si tienes que tomar un tren o vuelo temprano."
  }
];

const fukuokaCommonsPhoto = (file, alt, author = "Wikimedia Commons") => ({
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=900`,
  alt,
  source: `https://commons.wikimedia.org/wiki/File:${file.replaceAll(" ", "_")}`,
  credit: `${author} · Wikimedia Commons`
});

const fukuokaExtraPhotos = {
  20: fukuokaCommonsPhoto("Hakata Station.jpg", "Estación de Hakata, nuestra base en Fukuoka", "G43"),
  21: { src: "https://i0.wp.com/fukuoka-now.com/wp-content/uploads/2012/02/fn159-kawabata-main1.jpg", alt: "Galería comercial cubierta de Kawabata", source: "https://www.fukuoka-now.com/en/places/kawabata/", credit: "Fukuoka Now" },
  24: fukuokaCommonsPhoto("North entrance of Fukuoka Castle.jpg", "Entrada norte de las ruinas del castillo de Fukuoka"),
  27: fukuokaCommonsPhoto("Momochi beach area (2793766421).jpg", "Playa y paseo de Momochi junto a la bahía"),
  29: fukuokaCommonsPhoto("Kyushu National Museum 20170225.jpg", "Edificio del Museo Nacional de Kyushu", "Suicasmo"),
  30: fukuokaCommonsPhoto("White wall and willow tree on the bank of moat in Yanagawa, Fukuoka.JPG", "Canal arbolado de Yanagawa"),
  33: { src: "https://res.cloudinary.com/jnto/image/upload/w_950,h_550,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/90/a4/90a459e3-977d-495e-a5e5-6093d1fb49bd/nanzoin_fukuoka_xxj8ip", alt: "Gran Buda reclinado de Nanzoin", source: "https://www.japan.travel/it/ita1/bloggiapponenikki/2023/le-statue-di-buddha-piu-grandi-del-giappone-prima-parte/", credit: "JNTO · Japan Travel" },
  34: fukuokaCommonsPhoto("Tocho-ji-Hakata.jpg", "Templo Tōchōji en Hakata", "WolfgangMichel"),
  37: fukuokaCommonsPhoto("Fukuoka city life.jpg", "Cruce y calles del distrito comercial de Tenjin")
};

for (const place of fukuokaPlaces) {
  if (!place.photo && fukuokaExtraPhotos[place.id]) place.photo = fukuokaExtraPhotos[place.id];
}

places.push(...fukuokaPlaces);

routesData.fukuoka1 = [
  { from: [33.5897, 130.4207], to: [33.5936, 130.4078], type: 'walk', duration: 'paseo urbano' },
  { from: [33.5936, 130.4078], to: [33.5931, 130.4107], type: 'walk', duration: 'unos minutos' },
  { from: [33.5931, 130.4107], to: [33.5902, 130.4086], type: 'walk', duration: 'hacia la cena yatai' }
];

routesData.fukuoka2 = [
  { from: [33.5897, 130.4207], to: [33.5854, 130.3850], type: 'rail', duration: 'metro y paseo' },
  { from: [33.5854, 130.3850], to: [33.5859, 130.3763], type: 'walk', duration: 'a pie' },
  { from: [33.5859, 130.3763], to: [33.5933, 130.3515], type: 'bus', duration: 'bus o metro' },
  { from: [33.5933, 130.3515], to: [33.5954, 130.3621], type: 'walk', duration: '10 min a pie a BOSS E-ZO' },
  { from: [33.5954, 130.3621], to: [33.5960, 130.3530], type: 'walk', duration: 'a pie a la playa' }
];

routesData.fukuoka3 = [
  { from: [33.5897, 130.4207], to: [33.5963, 130.4161], type: 'walk', duration: 'Hakata histórico' },
  { from: [33.5963, 130.4161], to: [33.5833, 130.4145], type: 'walk', duration: 'paseo y parada' },
  { from: [33.5833, 130.4145], to: [33.5898, 130.4103], type: 'walk', duration: 'hacia Canal City' },
  { from: [33.5898, 130.4103], to: [33.5529, 130.4418], type: 'bus', duration: 'bus a Gundam LaLaport' },
  { from: [33.5529, 130.4418], to: [33.5878, 130.3955], type: 'bus', duration: 'bus o metro a Mandarake / Tenjin' }
];

routesData.fukuoka4 = [
  { from: [33.5900, 130.3990], to: [33.5215, 130.5348], type: 'rail', duration: 'Nishitetsu desde Tenjin' },
  { from: [33.5215, 130.5348], to: [33.5189, 130.5369], type: 'walk', duration: 'a pie' },
  { from: [33.5215, 130.5348], to: [33.1647, 130.4053], type: 'rail', duration: 'tren, con transbordo' }
];

routesData.fukuoka5 = [
  { from: [33.5897, 130.4207], to: [33.8847, 130.8749], type: 'rail', duration: 'tren a Kokura' },
  { from: [33.8847, 130.8749], to: [33.9455, 130.9601], type: 'rail', duration: 'tren local a Mojiko' },
  { from: [33.9455, 130.9601], to: [33.5897, 130.4207], type: 'rail', duration: 'vuelta a Hakata' }
];

routesData.fukuoka6 = [
  { from: [33.5897, 130.4207], to: [33.6185, 130.5660], type: 'rail', duration: 'tren a Sasaguri' }
];

routesData.fukuoka = [
  ...routesData.fukuoka1,
  ...routesData.fukuoka2,
  ...routesData.fukuoka3,
  ...routesData.fukuoka4,
  ...routesData.fukuoka5,
  ...routesData.fukuoka6
];
