const nagasakiPlaces = [
  // --- DÍA 1: Llegada en Shinkansen Kamome, Dejima, Shinchi Chinatown, Meganebashi & Mirador Monte Inasa ---
  {
    id: 100, code: "N0", shortName: "Estación Nagasaki & Kamome", day: "nagasaki1", region: "nagasaki", dayLabel: "Día 1 · Historia Holandesa & Vistas Top 3 Mundial",
    title: "Estación de Nagasaki & Shinkansen Kamome", jp: "長崎駅・西九州新幹線かもめ",
    lat: 32.7530, lng: 129.8708, color: "#0284c7", type: "start",
    city: "Nagasaki", time: "Llegada · 10:30", price: "JR Pass / Tren bala",
    activity: "Llegada espectacular a bordo del tren bala Nishi Kyushu Shinkansen Kamome (diseñado por Eiji Mitooka con interiores de madera y caligrafía tradicional). Parada en Amu Plaza para comprar el pase de tranvía de día completo.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/N700S-Y4_Kamome-29.jpg?width=900", alt: "Tren bala Nishi Kyushu Shinkansen Kamome en la Estación de Nagasaki", source: "https://commons.wikimedia.org/wiki/File:N700S-Y4_Kamome-29.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "La nueva terminal vanguardista de Nagasaki frente a la bahía, con centro comercial y tranvías en la puerta.",
    tip: "Compra en la oficina turística de la estación el pase de tranvía ilimitado de 1 día (¥600 adultos / ¥300 niños)."
  },
  {
    id: 101, code: "N1-1", shortName: "Isla Dejima", day: "nagasaki1", region: "nagasaki", dayLabel: "Día 1 · Historia Holandesa & Vistas Top 3 Mundial",
    title: "Dejima · El enclave holandés del Japón samurái", jp: "出島",
    lat: 32.7435, lng: 129.8732, color: "#0284c7", type: "attraction",
    city: "Nagasaki", time: "11:15 - 13:00", price: "¥520 adulto / ¥100 niños",
    activity: "Cruzaremos el puente hacia la mítica isla artificial en forma de abanico que fue la única ventana de Japón al mundo occidental durante más de 200 años de aislamiento (sakoku). Recorreremos almacenes de especias, salas de billar holandesas y la maqueta a escala.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dejima_Nagasaki_Japan31s3.jpg?width=900", alt: "Casas tradicionales y almacenes de la factoría holandesa de Dejima", source: "https://commons.wikimedia.org/wiki/File:Dejima_Nagasaki_Japan31s3.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Factoría comercial holandesa restaurada al milímetro con casas de madera, cañones y salas interactivas de comercio de época.",
    tip: "A solo 5 min en tranvía línea 1 desde la estación hasta la parada Dejima."
  },
  {
    id: 102, code: "N1-2", shortName: "Shinchi Chinatown", day: "nagasaki1", region: "nagasaki", dayLabel: "Día 1 · Historia Holandesa & Vistas Top 3 Mundial",
    title: "Nagasaki Shinchi Chinatown · Almuerzo de Champon & Sara Udon", jp: "長崎新地中華街・ちゃんぽん",
    lat: 32.7417, lng: 129.8756, color: "#0284c7", type: "attraction",
    city: "Nagasaki", time: "13:15 - 14:45", price: "~¥1.000 - 1.600",
    activity: "Almorzaremos en el barrio chino más antiguo de Japón (fundado en el siglo XVII), cruzando sus puertas rojas tradicionales con dragones tallados para devorar el auténtico Champon (fideos cocinados en caldo denso de marisco, cerdo y verduras) o Sara Udon crujiente.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gembumon_Gate_of_Nagasaki_Shinchi_Chinatown.JPG?width=900", alt: "Puerta Gembumon decorada de Nagasaki Shinchi Chinatown", source: "https://commons.wikimedia.org/wiki/File:Gembumon_Gate_of_Nagasaki_Shinchi_Chinatown.JPG", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Cruce de caminos gastronómico entre Fujian y Japón, con calles peatonales repletas de farolillos y bollos al vapor kakuni manju.",
    tip: "Prueba el Kakuni Manju (tierno pancito al vapor relleno de panceta estofada en salsa dulce)."
  },
  {
    id: 103, code: "N1-3", shortName: "Puente Meganebashi", day: "nagasaki1", region: "nagasaki", dayLabel: "Día 1 · Historia Holandesa & Vistas Top 3 Mundial",
    title: "Puente de las Gafas (Meganebashi) & Piedras Corazón", jp: "眼鏡橋",
    lat: 32.7472, lng: 129.8800, color: "#0284c7", type: "attraction",
    city: "Nagasaki", time: "15:15 - 16:30", price: "Gratis",
    activity: "Paseo por las orillas del río Nakashima para fotografiar el puente de arco doble de piedra más antiguo de Japón (1634), cuyo reflejo en el agua forma unas gafas perfectas. Reto con niños: encontrar las 20 piedras ocultas con forma de corazón incrustadas en los muros fluviales.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Meganebashi,_Nagasaki_cropped_1.jpg?width=900", alt: "Puente Meganebashi reflejado como unas gafas sobre el río Nakashima", source: "https://commons.wikimedia.org/wiki/File:Meganebashi,_Nagasaki_cropped_1.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Monumento histórico nacional flanqueado por sauces llorones y cafeterías con encanto.",
    tip: "Baja por las escaleras de piedra hasta el nivel del agua para cruzar saltando por los bloques de piedra sobre el cauce."
  },
  {
    id: 104, code: "N1-4", shortName: "Mirador Monte Inasa", day: "nagasaki1", region: "nagasaki", dayLabel: "Día 1 · Historia Holandesa & Vistas Top 3 Mundial",
    title: "Teleférico del Monte Inasa · Vistas Nocturnas de los 10 Millones de Dólares", jp: "稲佐山・長崎ロープウェイ",
    lat: 32.7533, lng: 129.8492, color: "#0284c7", type: "attraction",
    city: "Nagasaki", time: "18:00 - 20:30", price: "¥1.250 teleférico ida/vuelta",
    activity: "Subiremos en el teleférico acristalado de cabinas panorámicas diseñadas por Kiyoyuki Okuyama (diseñador de Ferrari) hasta la cima del monte Inasa (333 m). Contemplaremos la puesta de sol y la noche sobre la bahía iluminada, galardonada como una de las 'Tres Mejores Vistas Nocturnas del Mundo' (junto a Mónaco y Hong Kong).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Views_from_Mount_Inasa_at_night_20170526-1.jpg?width=900", alt: "Panorámica nocturna de la bahía y ciudad de Nagasaki desde el Monte Inasa", source: "https://commons.wikimedia.org/wiki/File:Views_from_Mount_Inasa_at_night_20170526-1.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Un mar de constelaciones de luz reflejadas sobre el puerto natural entre colinas empinadas.",
    tip: "Autobús local o taxi corto desde la estación hasta la estación del teleférico Fuchi Jinja."
  },

  // --- DÍA 2: Memoria de la Paz, Capibaras en Libertad de Bio Park & Reto Dulce Torre de 120 cm ---
  {
    id: 105, code: "N2-1", shortName: "Parque y Estatua de la Paz", day: "nagasaki2", region: "nagasaki", dayLabel: "Día 2 · Paz, Capibaras de Bio Park & Torre Parfait 120 cm",
    title: "Parque de la Paz de Nagasaki, Estatua & Fuente de la Paz", jp: "平和公園・平和祈念像・平和の泉",
    lat: 32.7767, lng: 129.8637, color: "#059669", type: "attraction",
    city: "Nagasaki", time: "09:00 - 10:45", price: "Parque gratis / Museo ¥200",
    activity: "Homenaje sobrio e inspirador: recorreremos la imponente Estatua de la Paz de bronce de 10 metros (con su mano derecha apuntando al cielo advirtiendo del peligro atómico y su mano izquierda extendida pidiendo paz mundial), la Fuente de la Paz y el monolito del hipocentro en el Parque de la Paz.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fountain_at_Nagasaki_Peace_Park.jpg?width=900", alt: "Fuente de la Paz con chorros de agua en el Parque de la Paz de Nagasaki", source: "https://commons.wikimedia.org/wiki/File:Fountain_at_Nagasaki_Peace_Park.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Espacio conmemorativo en Urakami, epicentro de la segunda bomba atómica lanzada el 9 de agosto de 1945.",
    tip: "Llegada directa en tranvía línea 1 o 3 hasta la parada Heiwa-koen."
  },
  {
    id: 106, code: "N2-2", shortName: "Nagasaki Bio Park", day: "nagasaki2", region: "nagasaki", dayLabel: "Día 2 · Paz, Capibaras de Bio Park & Torre Parfait 120 cm",
    title: "Nagasaki Bio Park · El Paraíso de Capibaras en Libertad (Top Niños)", jp: "長崎バイオパーク・カピバラの露天風呂",
    lat: 33.0033, lng: 129.7744, color: "#059669", type: "attraction",
    city: "Saikai, Nagasaki", time: "11:30 - 15:30", price: "¥1.900 adulto / ¥900 niños",
    activity: "Una de las experiencias con animales más famosas de Japón para chicos de 12 años: un parque natural sin jaulas convencionales donde caminas directamente dentro del recinto de decenas de capibaras gigantes mansos para acariciarlos, alimentarlos con bambú y verlos disfrutar de sus baños termales onsen. También interactúas libremente con canguros, monos ardilla y lémures.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagasaki_Bio_Park_Capybara.jpg?width=900", alt: "Capibaras descansando en Nagasaki Bio Park", source: "https://commons.wikimedia.org/wiki/File:Nagasaki_Bio_Park_Capybara.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Zoológico botánico interactivo pionero en bienestar animal y contacto directo con la fauna en el norte de la bahía.",
    tip: "Autobús lanzadera gratuito o autobús directo desde la estación de Nagasaki (aprox. 1h 15 min)."
  },
  {
    id: 107, code: "N2-3", shortName: "Torre Parfait 120 cm & Toruko Rice", day: "nagasaki2", region: "nagasaki", dayLabel: "Día 2 · Paz, Capibaras de Bio Park & Torre Parfait 120 cm",
    title: "Cafe Olympic · El Reto de la Torre de 120 cm & Toruko Rice Bizarro", jp: "カフェ オリンピック・長崎夢タワーパフェ・トルコライス",
    lat: 32.7441, lng: 129.8798, color: "#059669", type: "attraction",
    city: "Nagasaki", time: "17:00 - 19:30", price: "Toruko: ~¥1.300 / Parfait según tamaño",
    activity: "Parada friki gastronómica legendaria en Cafe Olympic (abierto desde 1963): cenaremos el plato bizarro insignia de Nagasaki, el 'Toruko Rice' (un plato gigante que fusiona arroz al curry/pilaf, espaguetis napolitanos con kétchup y filete tonkatsu empanado con salsa); y afrontaremos en familia el reto de sus colosales torres de helado (desde 50 cm hasta la descomunal 'Nagasaki Dream Tower' de 1,20 metros y 3 kg de helado, tartas y fruta).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Toruko_rice_Cafe_Olympic.jpg?width=900", alt: "Plato combinado tradicional de Toruko Rice servido en Cafe Olympic de Nagasaki", source: "https://commons.wikimedia.org/wiki/File:Toruko_rice_Cafe_Olympic.jpg", credit: "Totti · Wikimedia Commons · CC BY-SA 4.0" },
    desc: "El templo del exceso dulce y la comida retro japonesa en la galería cubierta Hamamachi.",
    tip: "Si no os atrevéis con la torre de 120 cm, tienen torres intermedias de 50 cm y 80 cm perfectas para compartir."
  },
  {
    id: 108, code: "N2-4", shortName: "Hamamachi Friki & Castella", day: "nagasaki2", region: "nagasaki", dayLabel: "Día 2 · Paz, Capibaras de Bio Park & Torre Parfait 120 cm",
    title: "Ruta Friki Hamamachi · Animate, Arcades G-Stage & Tiendas Castella", jp: "浜町アーケード・アニメイト・カステラ福砂屋",
    lat: 32.7436, lng: 129.8785, color: "#059669", type: "attraction",
    city: "Nagasaki", time: "19:30 - 21:00", price: "Paseo y compras",
    activity: "Exploraremos la galería techada de Hamamachi: visita a Animate Nagasaki y los recreativos G-stage con grúas UFO catcher y juegos de ritmo, y cata del afamado bizcocho Castella (receta traída por los mercaderes portugueses en el siglo XVI con crujientes granos de azúcar en la base en Fukusaya).",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nagasaki_Streetcar_M5290.jpg?width=900", alt: "Tranvía retro circulando junto al distrito comercial de Nagasaki", source: "https://commons.wikimedia.org/wiki/File:Nagasaki_Streetcar_M5290.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "La arteria comercial más viva del centro de Nagasaki, ideal para pasear con niños al estar completamente peatonalizada y cubierta.",
    tip: "En Fukusaya compra una caja individual en forma de cubo para merendar."
  },

  // --- DÍA 3: Expedición a la Isla Fantasma Gunkanjima, Glover Garden & Iglesia Oura ---
  {
    id: 109, code: "N3-1", shortName: "Isla Fantasma Gunkanjima", day: "nagasaki3", region: "nagasaki", dayLabel: "Día 3 · Isla Fantasma Gunkanjima & Colina Glover",
    title: "Crucero y Desembarco en Gunkanjima · La 'Isla Acorazado' (Hashima)", jp: "軍艦島・端島上陸クルーズ",
    lat: 32.6277, lng: 129.7385, color: "#d97706", type: "attraction",
    city: "Nagasaki", time: "09:00 - 12:30", price: "~¥4.000 - 5.000 (reserva previa obligatoria)",
    activity: "La gran expedición del viaje (fascinante para niños de 12 años y amantes de lo bizarro): navegaremos en barco hasta la isla abandonada más densamente poblada de la historia (una mina de carbón submarina en mitad del mar con rascacielos de hormigón en ruinas azotados por las olas que parece un buque de guerra militar, escenario de la película 'Skyfall' de James Bond). Desembarco en las pasarelas de la isla si el mar lo permite.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hashima_Island_11.jpg?width=900", alt: "Ruinas y bloques de hormigón abandonados en la isla de Gunkanjima", source: "https://commons.wikimedia.org/wiki/File:Hashima_Island_11.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Patrimonio de la Humanidad por la UNESCO. Una distopía industrial congelada en el tiempo desde su abandono en 1974.",
    tip: "Apta para niños de 12 años (los mayores de 6 pueden desembarcar con autorización paterna). Imprescindible calzado deportivo cerrado y reservar con semanas de antelación."
  },
  {
    id: 110, code: "N3-2", shortName: "Almuerzo en Shikairou", day: "nagasaki3", region: "nagasaki", dayLabel: "Día 3 · Isla Fantasma Gunkanjima & Colina Glover",
    title: "Almuerzo en Shikairou · El Restaurante Cuna del Champon", jp: "四海樓",
    lat: 32.7340, lng: 129.8703, color: "#d97706", type: "attraction",
    city: "Nagasaki", time: "12:45 - 14:00", price: "~¥1.500 - 2.200",
    activity: "Comeremos en el majestuoso palacio gastronómico chino de 5 plantas de Shikairou frente al muelle del ferry, el restaurante donde su fundador Chen Ping-shun inventó el plato nacional de Champon en 1899 para alimentar a estudiantes. Vistas panorámicas del puerto desde los ventanales.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shikairo_Nagasaki_Japan05s.jpg?width=900", alt: "Cuenco humeante de fideos Nagasaki Champon servido en Shikairou", source: "https://commons.wikimedia.org/wiki/File:Shikairo_Nagasaki_Japan05s.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "La institución culinaria más prestigiosa de Nagasaki, con un pequeño museo gratuito en la planta baja sobre la historia del plato.",
    tip: "Pide sitio junto a los ventanales de la planta superior para divisar la bocana del puerto."
  },
  {
    id: 111, code: "N3-3", shortName: "Iglesia de Ōura", day: "nagasaki3", region: "nagasaki", dayLabel: "Día 3 · Isla Fantasma Gunkanjima & Colina Glover",
    title: "Basílica de Ōura · La iglesia gótica más antigua de Japón", jp: "大浦天主堂",
    lat: 32.7342, lng: 129.8701, color: "#d97706", type: "attraction",
    city: "Nagasaki", time: "14:15 - 15:15", price: "¥1.000 adulto / ¥300 niños",
    activity: "Subiremos por la animada calle empedrada hasta la basílica gótica de madera y estuco construida por misioneros franceses en 1864 en honor a los 26 mártires de Japón. Aquí tuvo lugar el histórico 'descubrimiento de los cristianos ocultos' (Kakure Kirishitan) que mantuvieron su fe en secreto durante siglos.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Oura_Cathedral_20180623.jpg?width=900", alt: "Fachada de la Basílica de Oura en lo alto de la colina de Minami-Yamate", source: "https://commons.wikimedia.org/wiki/File:Oura_Cathedral_20180623.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
    desc: "Patrimonio de la Humanidad UNESCO y Tesoro Nacional de Japón, con hermosas vidrieras francesas de época.",
    tip: "En la cuesta de acceso (Oura Tenshudozaka) hay tiendas de souvenirs con degustación gratuita de castella."
  },
  {
    id: 112, code: "N3-4", shortName: "Glover Garden", day: "nagasaki3", region: "nagasaki", dayLabel: "Día 3 · Isla Fantasma Gunkanjima & Colina Glover",
    title: "Glover Garden & Mansiones del siglo XIX", jp: "グラバー園",
    lat: 32.7323, lng: 129.8696, color: "#d97706", type: "attraction",
    city: "Nagasaki", time: "15:30 - 17:45", price: "¥620 adulto / ¥180 niños",
    activity: "Recorreremos este museo al aire libre situado en una colina ajardinada con vistas sobrecogedoras del puerto. Veremos la mansión de Thomas Glover (comerciante escocés que ayudó a modernizar Japón e inspiró la ópera 'Madama Butterfly'), subiremos por rampas mecánicas panorámicas y buscaremos las famosas losas con forma de corazón ocultas en los caminos de piedra.",
    photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Glover_Garden_Nagasaki_Japan56n.jpg?width=900", alt: "Jardines y mansión histórica occidental en Glover Garden", source: "https://commons.wikimedia.org/wiki/File:Glover_Garden_Nagasaki_Japan56n.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
    desc: "Complejo señorial de arquitectura colonial británica con miradores hacia los astilleros Mitsubishi y la bahía.",
    tip: "El mirador de la antigua Escuela Náutica de Mitsubishi en la parte más alta tiene las mejores fotos panorámicas del puerto."
  }
];

places.push(...nagasakiPlaces);

Object.assign(parkingInfo, {
  100: { summary: "Parking estación · de pago subterráneo y superficie", details: "La nueva Estación de Nagasaki dispone de parkings públicos vinculados en Amu Plaza con tarifa horaria (~¥400/h). Para moverse por la ciudad lo más práctico y económico es el tranvía o pasear." },
  101: { summary: "Sin parking propio · usa tranvía o aparcamientos portuarios", details: "Dejima cuenta con paradas de tranvía en la misma puerta. Hay aparcamientos de pago (coin parking) en los muelles de Dejima Wharf." },
  102: { summary: "Chinatown peatonal · parkings de pago en Shinchi", details: "El barrio chino es totalmente peatonal. Existen múltiples parkings subterráneos y de superficie en los alrededores de la terminal de autobuses Shinchi." },
  103: { summary: "Entorno fluvial peatonal · aparcamientos Ote", details: "Las orillas del río Nakashima son peatonales. Los coches deben dejarse en aparcamientos públicos de pago en calles paralelas." },
  104: { summary: "Parking estación teleférico Fuchi Jinja (gratis limitado)", details: "El santuario Fuchi Jinja (base del teleférico) dispone de parking gratuito limitado para usuarios del teleférico. En la cima del Monte Inasa hay un parking de pago (primeros 20 min gratis, luego ~¥100/30 min)." },
  105: { summary: "Parking Parque de la Paz subterráneo de pago (¥120/30 min)", details: "Aparcamiento público subterráneo municipal justo debajo del Parque de la Paz con ascensor directo al recinto." },
  106: { summary: "Gratis · amplio parking de Nagasaki Bio Park", details: "Nagasaki Bio Park cuenta con una gran explanada de aparcamiento gratuito para más de 800 vehículos frente a las taquillas de entrada." },
  107: { summary: "Galería comercial peatonal · parkings Hamamachi", details: "La galería Hamamachi no permite acceso de vehículos. Se recomienda usar parkings de grandes almacenes o tranvía." },
  108: { summary: "Zona peatonal · usa tranvía (parada Kanko-dori)", details: "Hamamachi Arcade se recorre íntegramente a pie." },
  109: { summary: "Parkings de pago en el puerto de ferris de Nagasaki", details: "Las terminales de Gunkanjima (Ohatobashi / Nagasaki Port Terminal) disponen de parkings de pago en el muelle por horas (~¥120/30 min)." },
  110: { summary: "Parking propio Shikairou para clientes", details: "El edificio dispone de aparcamiento cubierto en la planta calle para los comensales del restaurante." },
  111: { summary: "Colina peatonal · parkings en la avenida Matsugae", details: "La cuesta de Oura es peatonal. Aparcamientos de pago en la parte baja costera de Matsugae." },
  112: { summary: "Aparcamiento Glover Garden de pago en Matsugae", details: "Glover Garden se ubica en la colina. Aparcar en Matsugae Terminal Parking y subir por las escaleras mecánicas Glover Skyroad." }
});

routesData.nagasaki1 = [
  { from: [32.7530, 129.8708], to: [32.7435, 129.8732], type: 'rail', duration: 'tranvía 8 min' }, // Estación -> Dejima
  { from: [32.7435, 129.8732], to: [32.7417, 129.8756], type: 'walk', duration: 'a pie 5 min' },  // Dejima -> Chinatown
  { from: [32.7417, 129.8756], to: [32.7472, 129.8800], type: 'walk', duration: 'a pie 10 min' }, // Chinatown -> Meganebashi
  { from: [32.7472, 129.8800], to: [32.7533, 129.8492], type: 'bus', duration: 'bus o taxi al teleférico' } // Meganebashi -> Monte Inasa
];

routesData.nagasaki2 = [
  { from: [32.7530, 129.8708], to: [32.7767, 129.8637], type: 'rail', duration: 'tranvía 12 min' }, // Estación -> Parque Paz
  { from: [32.7767, 129.8637], to: [33.0033, 129.7744], type: 'car', duration: 'bus/coche 55 min a Bio Park' }, // Paz -> Bio Park
  { from: [33.0033, 129.7744], to: [32.7441, 129.8798], type: 'car', duration: 'regreso al centro Hamamachi' }, // Bio Park -> Hamamachi
  { from: [32.7441, 129.8798], to: [32.7436, 129.8785], type: 'walk', duration: 'a pie en la galería' } // Cafe Olympic -> Animate
];

routesData.nagasaki3 = [
  { from: [32.7530, 129.8708], to: [32.6277, 129.7385], type: 'boat', duration: 'barco crucero a Gunkanjima' }, // Muelle -> Gunkanjima
  { from: [32.6277, 129.7385], to: [32.7340, 129.8703], type: 'boat', duration: 'vuelta al muelle Shikairou' }, // Gunkanjima -> Shikairou
  { from: [32.7340, 129.8703], to: [32.7342, 129.8701], type: 'walk', duration: 'a pie 2 min' }, // Shikairou -> Oura
  { from: [32.7342, 129.8701], to: [32.7323, 129.8696], type: 'walk', duration: 'a pie 4 min a Glover Garden' } // Oura -> Glover Garden
];

routesData.nagasaki = [
  ...routesData.nagasaki1,
  ...routesData.nagasaki2,
  ...routesData.nagasaki3
];
