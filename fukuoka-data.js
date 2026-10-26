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
    activity: "Pasearemos por la galería cubierta de tiendas y puestos locales para empezar a conocer Hakata sin apretar el día.",
    desc: "Galería comercial tradicional junto a Nakasu y al santuario Kushida.",
    tip: "Buena visita de llegada: se puede acortar si el vuelo llega tarde."
  },
  {
    id: 22, code: "F1-2", shortName: "Santuario Kushida", day: "fukuoka1", region: "fukuoka", dayLabel: "Día 1 · llegada",
    title: "Santuario Kushida", jp: "櫛田神社", lat: 33.5931, lng: 130.4107, color: "#f43f5e", type: "attraction",
    city: "Fukuoka", time: "Tarde", price: "Visita",
    activity: "Veremos el santuario histórico de Hakata y las carrozas del festival Yamakasa expuestas en el recinto.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kushida%20shrine.jpeg?width=900", alt: "Santuario Kushida en Hakata", source: "https://commons.wikimedia.org/wiki/File:Kushida_shrine.jpeg", credit: "FOMALHAUT · Wikimedia Commons · dominio público" },
    desc: "Uno de los santuarios más conocidos de Hakata, a poca distancia de la zona comercial.",
    tip: "Comprueba el horario del recinto al fijar las fechas."
  },
  {
    id: 23, code: "F1-3", shortName: "Yatai de Nakasu", day: "fukuoka1", region: "fukuoka", dayLabel: "Día 1 · llegada",
    title: "Yatai junto al río en Nakasu", jp: "中洲屋台", lat: 33.5902, lng: 130.4086, color: "#f43f5e", type: "attraction",
    city: "Fukuoka", time: "Desde el atardecer", price: "Cena según consumo",
    activity: "Cenaremos en un puesto callejero; podemos probar ramen Hakata, yakitori o gyoza.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakata%20yatai%20and%20yatai%20food%20-%202024%20Sept%2024%20various%2011%2027%2044%20788000.jpeg?width=900", alt: "Puestos yatai iluminados en Nakasu", source: "https://commons.wikimedia.org/wiki/File:Hakata_yatai_and_yatai_food_-_2024_Sept_24_various_11_27_44_788000.jpeg", credit: "Nesnad · Wikimedia Commons · CC BY 4.0" },
    desc: "Los yatai se concentran en las zonas de Nakasu y Tenjin; tienen pocas plazas y se llenan por la noche.",
    tip: "Lleva algo de efectivo y revisa el menú y posibles cargos antes de sentarte."
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
    activity: "Daremos una vuelta junto al estanque y, si apetece, entraremos al jardín japonés o al museo de arte.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ohori%20Park%2020200716-7.jpg?width=900", alt: "Estanque y paseo del parque Ōhori", source: "https://commons.wikimedia.org/wiki/Category:Ohori_Park", credit: "Wikimedia Commons · foto de Ōhori Park" },
    desc: "Parque urbano alrededor de un gran estanque; conecta bien con Maizuru a pie.",
    tip: "Deja tiempo libre para parar en una cafetería junto al agua."
  },
  {
    id: 26, code: "F2-3", shortName: "Torre de Fukuoka", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "Torre de Fukuoka", jp: "福岡タワー", lat: 33.5933, lng: 130.3515, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "Tarde", price: "Entrada por confirmar",
    activity: "Subiremos al mirador si el tiempo está despejado para ver la ciudad y la bahía.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka_Tower.jpg?width=900", alt: "Torre de Fukuoka junto a la bahía", source: "https://commons.wikimedia.org/wiki/File:Fukuoka_Tower.jpg", credit: "Wikimedia Commons · dominio público" },
    desc: "Mirador costero emblemático en el área de Momochi.",
    tip: "Revisaremos visibilidad, horario y precio de entrada cuando se acerque el viaje."
  },
  {
    id: 27, code: "F2-4", shortName: "Playa Momochi", day: "fukuoka2", region: "fukuoka", dayLabel: "Día 2 · parques y bahía",
    title: "Paseo por Momochihama", jp: "百道浜", lat: 33.5960, lng: 130.3530, color: "#0ea5e9", type: "attraction",
    city: "Fukuoka", time: "Atardecer", price: "Paseo",
    activity: "Terminaremos el día junto a la playa y la bahía, con una pausa para ver el atardecer.",
    desc: "Paseo marítimo al lado de la Torre de Fukuoka.",
    tip: "Combina bien con la torre; no hace falta cambiar de zona."
  },
  {
    id: 34, code: "F3-1", shortName: "Templo Tōchōji", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata histórico y Tenjin",
    title: "Templo Tōchōji y Gran Buda", jp: "東長寺", lat: 33.5963, lng: 130.4161, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "Mañana", price: "Acceso interior por confirmar",
    activity: "Visitaremos el templo y su gran Buda sentado; después seguiremos a pie por el casco antiguo de Hakata.",
    desc: "Templo budista céntrico, cercano a la estación de Gion y a otros puntos históricos de Hakata.",
    tip: "Confirma las normas y el horario del pabellón del Buda antes de entrar."
  },
  {
    id: 35, code: "F3-2", shortName: "Sumiyoshi y Rakusuien", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata histórico y Tenjin",
    title: "Santuario Sumiyoshi y jardín Rakusuien", jp: "住吉神社・楽水園", lat: 33.5833, lng: 130.4145, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "Mediodía", price: "Jardín: entrada por confirmar",
    activity: "Haremos una pausa entre el santuario y el pequeño jardín japonés antes de comer.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/View%20in%20Sumiyoshi%20Shrine%20in%20Fukuoka%20City.jpg?width=900", alt: "Recinto del santuario Sumiyoshi en Fukuoka", source: "https://commons.wikimedia.org/wiki/File:View_in_Sumiyoshi_Shrine_in_Fukuoka_City.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Un rincón tranquilo en Hakata para combinar historia y jardín tradicional.",
    tip: "Si el ritmo se alarga, el jardín puede quedar como visita opcional."
  },
  {
    id: 36, code: "F3-3", shortName: "Canal City Hakata", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata histórico y Tenjin",
    title: "Canal City Hakata", jp: "キャナルシティ博多", lat: 33.5898, lng: 130.4103, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "Tarde", price: "Compras y comida según consumo",
    activity: "Comeremos o descansaremos en el complejo y veremos el canal y sus fuentes si coinciden con el horario.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Canal%20City%20Hakata.jpg?width=900", alt: "Arquitectura interior de Canal City Hakata", source: "https://commons.wikimedia.org/wiki/File:Canal_City_Hakata.jpg", credit: "ltsc1980 · Wikimedia Commons" },
    desc: "Complejo de compras, restaurantes y ocio entre Hakata y Tenjin.",
    tip: "El programa de fuentes y eventos puede cambiar; lo confirmaremos cerca del viaje."
  },
  {
    id: 37, code: "F3-4", shortName: "Tenjin Chikagai", day: "fukuoka3", region: "fukuoka", dayLabel: "Día 3 · Hakata histórico y Tenjin",
    title: "Tenjin, Daimyo y galería subterránea", jp: "天神・大名・天神地下街", lat: 33.5905, lng: 130.3994, color: "#14b8a6", type: "attraction",
    city: "Fukuoka", time: "Tarde-noche", price: "Paseo y compras",
    activity: "Terminaremos el día curioseando tiendas, cafés y calles de Tenjin y Daimyo; cenaremos por la zona.",
    desc: "Distrito comercial animado con galerías subterráneas, grandes almacenes y calles con boutiques.",
    tip: "Deja tiempo libre para entrar donde te apetezca, sin encadenar más visitas."
  },
  {
    id: 28, code: "F4-1", shortName: "Dazaifu Tenmangu", day: "fukuoka4", region: "fukuoka", dayLabel: "Día 4 · Dazaifu y Yanagawa",
    title: "Santuario Dazaifu Tenmangu", jp: "太宰府天満宮", lat: 33.5215, lng: 130.5348, color: "#f59e0b", type: "attraction",
    city: "Dazaifu, Fukuoka", time: "Mañana", price: "Visita",
    activity: "Recorreremos el santuario, la calle de acceso y probaremos el dulce local umegae mochi.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Daizaifu%20tenmangu%20shrine%20%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%A4%A9%E6%BA%80%E5%AE%AE%20%2854205718799%29.jpg?width=900", alt: "Santuario Dazaifu Tenmangu", source: "https://commons.wikimedia.org/wiki/File:Daizaifu_tenmangu_shrine_太宰府天満宮_(54205718799).jpg", credit: "nakashi · Wikimedia Commons" },
    desc: "Santuario dedicado a Sugawara no Michizane; el Museo Nacional de Kyushu queda junto al recinto.",
    tip: "Iremos en Nishitetsu desde Tenjin; no está incluido en el JR Kyushu Rail Pass."
  },
  {
    id: 29, code: "F4-2", shortName: "Museo Nacional de Kyushu", day: "fukuoka4", region: "fukuoka", dayLabel: "Día 4 · Dazaifu y Yanagawa",
    title: "Museo Nacional de Kyushu", jp: "九州国立博物館", lat: 33.5189, lng: 130.5369, color: "#f59e0b", type: "attraction",
    city: "Dazaifu, Fukuoka", time: "Mediodía · opcional", price: "Entrada por confirmar",
    activity: "Entraremos si queremos dedicar más tiempo a la historia y las colecciones de Kyushu.",
    desc: "Museo de historia y cultura conectado con la zona del santuario.",
    tip: "Si visitamos el museo con calma, quizá convenga dejar Yanagawa para otro día."
  },
  {
    id: 30, code: "F4-3", shortName: "Canales de Yanagawa", day: "fukuoka4", region: "fukuoka", dayLabel: "Día 4 · Dazaifu y Yanagawa",
    title: "Paseo en barca por Yanagawa", jp: "柳川川下り", lat: 33.1647, lng: 130.4053, color: "#f59e0b", type: "attraction",
    city: "Yanagawa, Fukuoka", time: "Tarde · según barco", price: "Barca y comida por confirmar",
    activity: "Navegaremos por los canales y, si nos apetece, probaremos la anguila al vapor seiro-mushi.",
    desc: "Excursión tranquila entre canales, casas tradicionales y jardines.",
    tip: "Hay que comprobar la hora del último paseo y cómo volver a la estación."
  },
  {
    id: 31, code: "F5-1", shortName: "Castillo de Kokura", day: "fukuoka5", region: "fukuoka", dayLabel: "Día 5 · Mojiko y Kokura",
    title: "Castillo de Kokura", jp: "小倉城", lat: 33.8847, lng: 130.8749, color: "#a855f7", type: "attraction",
    city: "Kitakyushu, Fukuoka", time: "Mañana · opcional", price: "Entrada por confirmar",
    activity: "Pasearemos por el castillo y el parque antes de seguir hacia el puerto de Mojiko.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kokura%20Castle.jpg?width=900", alt: "Castillo de Kokura rodeado por el foso", source: "https://commons.wikimedia.org/wiki/File:Kokura_Castle.jpg", credit: "Stjepko Krehula · Wikimedia Commons · CC BY 4.0" },
    desc: "Castillo urbano de Kitakyushu, fácil de combinar con Mojiko en una jornada.",
    tip: "El tren entre Hakata y Kokura tiene varias opciones; evitaremos asumir que el Sanyo Shinkansen entra en el pase JR Kyushu."
  },
  {
    id: 32, code: "F5-2", shortName: "Mojiko Retro", day: "fukuoka5", region: "fukuoka", dayLabel: "Día 5 · Mojiko y Kokura",
    title: "Paseo por Mojiko Retro", jp: "門司港レトロ", lat: 33.9455, lng: 130.9601, color: "#a855f7", type: "attraction",
    city: "Kitakyushu, Fukuoka", time: "Tarde", price: "Paseo; comida por cuenta propia",
    activity: "Recorreremos el antiguo puerto y sus edificios históricos; podemos probar el yaki curry.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mojikou-retro.jpg?width=900", alt: "Edificios históricos del puerto de Mojiko Retro", source: "https://commons.wikimedia.org/wiki/File:Mojikou-retro.jpg", credit: "Takasunrise0921 · Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Zona portuaria histórica con paseo llano frente al estrecho de Kanmon.",
    tip: "La visita puede hacerse con transporte público; confirma billetes y conexiones al elegir el pase."
  },
  {
    id: 33, code: "F6-1", shortName: "Templo Nanzoin", day: "fukuoka6", region: "fukuoka", dayLabel: "Día 6 · salida, solo si hay tiempo",
    title: "Templo Nanzōin y Buda reclinado", jp: "南蔵院", lat: 33.6185, lng: 130.5660, color: "#8b5cf6", type: "attraction",
    city: "Sasaguri, Fukuoka", time: "Mañana · opcional", price: "Acceso a zonas por confirmar",
    activity: "Si la salida es tardía, visitaremos el complejo del templo y el gran Buda reclinado antes de continuar.",
    desc: "Templo en Sasaguri, accesible en tren desde Hakata; requiere tiempo para recorrer el recinto.",
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
routesData.fukuoka = [
  { from: [33.5897, 130.4207], to: [33.5936, 130.4078], type: 'walk', duration: 'paseo urbano' },
  { from: [33.5936, 130.4078], to: [33.5931, 130.4107], type: 'walk', duration: 'unos minutos' },
  { from: [33.5931, 130.4107], to: [33.5902, 130.4086], type: 'walk', duration: 'hacia la cena' },
  { from: [33.5897, 130.4207], to: [33.5854, 130.3850], type: 'rail', duration: 'metro y paseo' },
  { from: [33.5854, 130.3850], to: [33.5859, 130.3763], type: 'walk', duration: 'a pie' },
  { from: [33.5859, 130.3763], to: [33.5933, 130.3515], type: 'bus', duration: 'bus o metro' },
  { from: [33.5933, 130.3515], to: [33.5960, 130.3530], type: 'walk', duration: 'a pie' },
  { from: [33.5897, 130.4207], to: [33.5963, 130.4161], type: 'walk', duration: 'Hakata histórico' },
  { from: [33.5963, 130.4161], to: [33.5833, 130.4145], type: 'walk', duration: 'paseo y parada' },
  { from: [33.5833, 130.4145], to: [33.5898, 130.4103], type: 'walk', duration: 'hacia Canal City' },
  { from: [33.5898, 130.4103], to: [33.5905, 130.3994], type: 'walk', duration: 'hacia Tenjin' },
  { from: [33.5900, 130.3990], to: [33.5215, 130.5348], type: 'rail', duration: 'Nishitetsu desde Tenjin' },
  { from: [33.5215, 130.5348], to: [33.5189, 130.5369], type: 'walk', duration: 'a pie' },
  { from: [33.5215, 130.5348], to: [33.1647, 130.4053], type: 'rail', duration: 'tren, con transbordo' },
  { from: [33.5897, 130.4207], to: [33.8847, 130.8749], type: 'rail', duration: 'tren a Kokura' },
  { from: [33.8847, 130.8749], to: [33.9455, 130.9601], type: 'rail', duration: 'tren local a Mojiko' },
  { from: [33.9455, 130.9601], to: [33.5897, 130.4207], type: 'rail', duration: 'vuelta a Hakata' },
  { from: [33.5897, 130.4207], to: [33.6185, 130.5660], type: 'rail', duration: 'tren a Sasaguri' }
];
