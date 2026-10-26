    const places = [
      // DÍA 1
      {
        id: 2, code: "D1-1", shortName: "Umi Jigoku", day: "day1", dayLabel: "Día 1 • Visita y parking propio",
        title: "Umi Jigoku (Infierno del Mar)", jp: "海地獄",
        lat: 33.3168, lng: 131.4686, color: "#f43f5e", type: "attraction",
        time: "09:10 - 10:15", price: "450 ¥",
        activity: "Pasearemos por los jardines, contemplaremos el estanque azul cobalto hirviendo a 98 °C envuelto en densas nubes de vapor volcánico y descansaremos en el baño termal de pies (ashiyu).",
        photo: { src: "https://prcdn.freetls.fastly.net/release_image/37222/4/37222-4-db7e2219fac66756c8dd7afa6a617a50-3000x2000.jpg?auto=webp&fit=bounds&format=jpeg&height=1350&quality=85%2C65&width=1950", alt: "Estanque azul y vapor de Umi Jigoku", source: "https://prtimes.jp/main/html/rd/p/000000004.000037222.html", credit: "Umi Jigoku · PR Times" },
        desc: "Laguna geotérmica de color turquesa intenso nacida tras una erupción del monte Tsurumi hace 1.200 años.",
        tip: "El parking gratuito pertenece al propio recinto; prueba los huevos onsen tamago cocidos en la laguna."
      },
      {
        id: 3, code: "D1-2", shortName: "Kamado Jigoku", day: "day1", dayLabel: "Día 1 • A pie",
        title: "Kamado Jigoku (Infierno del Horno)", jp: "かまど地獄",
        lat: 33.3159, lng: 131.4741, color: "#f43f5e", type: "attraction",
        time: "10:30 - 11:30", price: "450 ¥",
        activity: "Recorreremos sus seis zonas de barros burbujeantes y fuentes humeantes de diferentes colores, asistiremos a las demostraciones donde el humo de un cigarro multiplica el vapor termal y beberemos agua caliente mineral digestiva a 80 °C.",
        photo: { src: "https://cdn.4travel.jp/img/thumbnails/imk/travelogue_pict/55/82/30/650x_55823045.jpg?updated_at=1536550393", alt: "Estanques humeantes de Kamado Jigoku", source: "https://4travel.jp/travelogue/11399804", credit: "Fotografía de viajero · 4travel" },
        desc: "Seis estanques con espectaculares minerales en ebullición custodiados por la estatua de un ogro demonio (oni).",
        tip: "Paseo agradable a pie de 5 minutos desde Umi Jigoku."
      },
      {
        id: 8, code: "D1-3", shortName: "Oniyama Jigoku", day: "day1", dayLabel: "Día 1 • Bizarro & Cocodrilos",
        title: "Oniyama Jigoku (El Infierno de los Cocodrilos)", jp: "鬼山地獄",
        lat: 33.3155, lng: 131.4720, color: "#f43f5e", type: "attraction",
        time: "11:30 - 12:15", price: "450 ¥",
        activity: "Una de las atracciones más bizarras de Japón: una colonia de más de 80 cocodrilos gigantes tropicales y caimanes criados en piscinas alimentadas por agua termal hirviente a 99 °C envueltos en vapor denso desde el año 1923.",
        photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Oniyama_Jigoku_Crocodile_Beppu.jpg?width=900", alt: "Cocodrilos en Oniyama Jigoku Beppu", source: "https://commons.wikimedia.org/wiki/File:Oniyama_Jigoku_Crocodile_Beppu.jpg", credit: "Wikimedia Commons" },
        desc: "También conocido como 'Wani Jigoku' (Infierno de los Reptiles). Los reptiles viven aclimatados al trópico en pleno invierno japonés gracias a la geotermia.",
        tip: "A solo 2 minutos a pie desde Kamado Jigoku camino de Jigoku Mushi."
      },
      {
        id: 4, code: "D1-4", shortName: "Jigoku Mushi", day: "day1", dayLabel: "Día 1 • Cocina Volcánica",
        title: "Jigoku Mushi Kobo Kannawa · Cocina al Vapor Geotérmico", jp: "地獄蒸し工房 鉄輪",
        lat: 33.3156, lng: 131.4765, color: "#f43f5e", type: "attraction",
        time: "12:15 - 13:45", price: "~1.500 - 2.500 ¥",
        activity: "Experiencia culinaria interactiva: compraremos cestas con carne, mariscos, dim sum y verduras locales, nos pondremos guantes de protección térmica industriales y bajaremos los alimentos con poleas a las chimeneas de vapor volcánico hirviente para cocinarlos nosotros mismos.",
        photo: { src: "https://svcstrg.cld.navitime.jp/travelguide/p44020026/p44020026_01.jpg", alt: "Vapor y cestas de cocción en Jigoku Mushi Kobo", source: "https://japantravel.navitime.com/en/area/jp/spot/02301-1600342/", credit: "NAVITIME Japan Travel" },
        desc: "Técnica ancestral de cocina que aprovecha el vapor geotérmico 100% puro para realzar los sabores sin aceite.",
        tip: "A 4 minutos andando calle abajo desde Oniyama Jigoku; no te olvides de probar el flan hecho al vapor volcánico."
      },
      {
        id: 5, code: "D1-5", shortName: "Hyotan Onsen", day: "day1", dayLabel: "Día 1 • A pie / Corto",
        title: "Hyotan Onsen (3★ Guía Michelin)", jp: "ひょうたん温泉",
        lat: 33.3168, lng: 131.4773, color: "#f43f5e", type: "attraction",
        time: "15:00 - 17:30", price: "900 ¥",
        activity: "Nos sumergiremos en las míticas aguas termales con cascadas cervicales gigantes, saunas de vapor natural y la experiencia de relajarse en bañeras de arena caliente.",
        photo: { src: "https://img01.jalannews.jp/img/2022/09/20220916_hyotanonsen_6.jpg", alt: "Baño de arena de Hyotan Onsen", source: "https://www.jalan.net/news/article/674123/", credit: "Jalan News" },
        desc: "El único onsen de Japón galardonado de forma consecutiva con 3 estrellas en la Guía Verde Michelin.",
        tip: "A 3 minutos andando desde el centro de Kannawa; incluye zonas al aire libre y baños de vapor de bambú."
      },
      {
        id: 6, code: "D1-6", shortName: "Mirador Yukemuri", day: "day1", dayLabel: "Día 1 • Coche / A pie",
        title: "Mirador Yukemuri (Observatorio)", jp: "湯けむり展望台",
        lat: 33.3121, lng: 131.4822, color: "#f43f5e", type: "attraction",
        time: "18:00 - 18:45", price: "Gratis",
        activity: "Pararemos en el mirador al atardecer para contemplar el paisaje futurista-retro de cientos de columnas de vapor blanco brotando entre los tejados de la ciudad iluminadas por la noche.",
        photo: { src: "https://www.visit-oita.jp/files/cache/9c1567f83132825cc719bd48ccc0ee1c_1776045050.jpg", alt: "Vista desde el mirador de las columnas de vapor de Beppu", source: "https://www.visit-oita.jp/special1/detail/5", credit: "Visit Oita · turismo oficial" },
        desc: "Declarado Paisaje Nocturno Patrimonial de Japón, parece un escenario de anime de ciencia ficción.",
        tip: "A 3 minutos en coche desde Kannawa."
      },

      // DÍA 2
      {
        id: 19, code: "D2-0", shortName: "Salida Kannawa", day: "day2", dayLabel: "Día 2 • Inicio",
        title: "Inicio de ruta: Kannawa", jp: "鉄輪",
        lat: 33.3168, lng: 131.4686, color: "#0ea5e9", type: "start",
        time: "09:00", price: "Salida",
        activity: "Punto de partida matutino en el distrito termal de Kannawa entre columnas de vapor blanco.",
        photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/2020-02-24_Kannawa_Onsen_%E9%89%84%E8%BC%AA%E6%B8%A9%E6%B3%89%E5%85%A8%E6%99%AF_DSCF8631.jpg?width=900", alt: "Columnas de vapor brotando sobre Kannawa en Beppu", source: "https://commons.wikimedia.org/wiki/File:2020-02-24_Kannawa_Onsen_%E9%89%84%E8%BC%AA%E6%B8%A9%E6%B3%89%E5%85%A8%E6%99%AF_DSCF8631.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
        desc: "Punto de partida aproximado para conducir hacia el teleférico del monte Tsurumi.",
        tip: "La ubicación marca la zona de Kannawa, no una dirección de alojamiento concreta."
      },
      {
        id: 7, code: "D2-1", shortName: "Beppu Ropeway", day: "day2", dayLabel: "Día 2 • Tramo en Coche",
        title: "Teleférico del Monte Tsurumi", jp: "別府ロープウェイ",
        lat: 33.2923, lng: 131.4426, color: "#0ea5e9", type: "attraction",
        time: "09:30 - 11:30", price: "1.800 ¥",
        activity: "Subiremos en el teleférico más grande del oeste de Japón (capacidad para 101 personas) hasta los 1.300 metros del monte volcánico Tsurumi con vistas panorámicas a toda la bahía y las montañas de Kuju.",
        photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Beppu_Ropeway.JPG?width=900", alt: "Cabina del teleférico de Beppu Ropeway ascendiendo al monte Tsurumi", source: "https://commons.wikimedia.org/wiki/File:Beppu_Ropeway.JPG", credit: "Wikimedia Commons · CC BY-SA 3.0" },
        desc: "Trayecto en coche de 15 min desde Kannawa. El teleférico cuenta con parking gratuito propio.",
        tip: "Aparca en el recinto del teleférico; no hay que ir a otro parking ni caminar desde una parada aparte."
      },
      {
        id: 9, code: "D2-2", shortName: "Myoban Yunosato", day: "day2", dayLabel: "Día 2 • Tramo en Coche",
        title: "Myoban Yunosato (Cabañas de Alumbre)", jp: "みょうばん湯の里",
        lat: 33.3212, lng: 131.4519, color: "#0ea5e9", type: "attraction",
        time: "12:00 - 14:30", price: "Baño 700 ¥",
        activity: "Veremos las cabañas tradicionales de paja humeantes donde se 'cosechan' cristales de azufre medicinal yunohana desde el periodo Edo y almorzaremos pudín cocido al vapor sulfuroso.",
        photo: { src: "https://yuno-hana.jp/en/img/B-1.jpg", alt: "Cabañas tradicionales de Myoban Yunosato", source: "https://yuno-hana.jp/en/", credit: "Myoban Yunosato · web oficial" },
        desc: "A 10 min en coche desde el teleférico por la Ruta 11 de montaña. Aguas termales de color blanco lechoso de gran concentración mineral.",
        tip: "Tiene parking propio gratuito para visitantes."
      },
      {
        id: 10, code: "P3", shortName: "Parking Trust Nagarekawa", day: "day2", dayLabel: "Día 2 • Parking Coche",
        title: "Trust Park Nagarekawa (P3)", jp: "楠町16",
        lat: 33.2778, lng: 131.5050, color: "#f59e0b", type: "parking",
        time: "16:30", price: "100 ¥ / h · máx. 500 ¥",
        activity: "Aparcamiento céntrico en Beppu para acceder a pie a Takegawara Onsen y al restaurante Toyotsune.",
        photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Beppu_station_2024_1.jpg?width=900", alt: "Zona urbana céntrica de Beppu junto al área de Nagarekawa", source: "https://commons.wikimedia.org/wiki/File:Beppu_station_2024_1.jpg", credit: "Wikimedia Commons · CC BY-SA 4.0" },
        desc: "Parking público de 23 plazas, a 2–3 minutos a pie de Takegawara Onsen.",
        tip: "Tarifa de ¥100/60 min; máximo ¥500/24 h (¥400 para plazas kei). Efectivo, tarjeta o QR."
      },
  {
        id: 11, code: "D2-3", shortName: "Chinoike Jigoku", day: "day2", dayLabel: "Día 2 • Tramo en Coche",
        title: "Chinoike Jigoku (El Estanque Rojo de Sangre)", jp: "血の池地獄",
        lat: 33.3270, lng: 131.4793, color: "#0ea5e9", type: "attraction",
        time: "14:15 - 15:15", price: "450 ¥",
        activity: "Admiraremos el estanque natural más antiguo de Japón (más de 1.300 años), cuyas aguas y arcillas hierven a 78 °C con un impactante color rojo sangre debido al óxido de hierro y magnesio.",
        photo: { src: "https://www.pref.oita.jp/uploaded/life/200160_200320_misc.jpg", alt: "Estanque rojo de Chinoike Jigoku", source: "https://www.pref.oita.jp/site/archive/200160.html", credit: "Prefectura de Oita" },
        desc: "En su tienda venden la famosa 'Chinoike Nanko', una legendaria pomada milagrosa tradicional hecha con el barro rojo del estanque para afecciones de la piel.",
        tip: "Parking gratuito propio en la entrada."
      },
      {
        id: 20, code: "D2-4", shortName: "Monos de Takasakiyama", day: "day2", dayLabel: "Día 2 • Tramo en Coche (Niños 12 años)",
        title: "Parque Natural de Monos de Takasakiyama (1.000 macacos salvajes libres)", jp: "高崎山自然動物園",
        lat: 33.2625, lng: 131.5342, color: "#0ea5e9", type: "attraction",
        time: "15:45 - 17:15", price: "¥520 adulto / ¥260 niños",
        activity: "Una experiencia salvaje inolvidable: subiremos en el funicular monorraíl 'Sarukko Rail' para entrar en la ladera del monte Takasaki, donde conviven más de 1.000 macacos japoneses completamente salvajes en libertad absoluta (sin rejas ni vallas). Asistiremos a la impresionante hora de la comida cuando cientos de monos bajan corriendo en tropel pasando entre tus piernas.",
        photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Monkey_runs_through_legs_at_Takasakiyama.jpg?width=900", alt: "Macaco japonés libre pasando entre las piernas de un visitante en Takasakiyama", source: "https://commons.wikimedia.org/wiki/File:Monkey_runs_through_legs_at_Takasakiyama.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
        desc: "Una de las mayores reservas de primates en libertad del mundo, situada entre la costa de Beppu y Oita.",
        tip: "A 15 min en coche desde Chinoike por la costa. Regla de oro con niños: no mirarlos fijamente a los ojos ni llevar comida visible en la mano."
      },
      {
        id: 12, code: "D2-5", shortName: "Takegawara Onsen", day: "day2", dayLabel: "Día 2 • A pie (desde P3)",
        title: "Takegawara Onsen · Experiencia de Arena Negra Volcánica", jp: "竹瓦温泉",
        lat: 33.2775, lng: 131.5055, color: "#0ea5e9", type: "attraction",
        time: "17:30 - 18:45", price: "Arena 1.500 ¥",
        activity: "Nos enfundaremos en un yukata y nos tumbaremos para que el personal nos cubra por completo (hasta el cuello) con paladas de arena volcánica negra y densa calentada por vapor termal subterráneo como una momia caliente.",
        photo: { src: "https://svcstrg.cld.navitime.jp/travelguide/p44020003/p44020003_03.jpg", alt: "Baño de arena de Takegawara Onsen", source: "https://japantravel.navitime.com/en/area/jp/spot/02301-1301564/", credit: "NAVITIME Japan Travel" },
        desc: "Majestuoso edificio histórico de madera de 1938 con tejado de estilo castillo, el símbolo patrimonial de Beppu.",
        tip: "A 2 minutos andando desde el Parking P3. La sensación de pesadez y calor de la arena es insólitamente placentera."
      },
      {
        id: 13, code: "D2-6", shortName: "Toyotsune", day: "day2", dayLabel: "Día 2 • A pie",
        title: "Restaurante Toyotsune (Cena Toriten & Sashimi)", jp: "とよ常",
        lat: 33.2793, lng: 131.5015, color: "#0ea5e9", type: "attraction",
        time: "19:00 - 20:45", price: "~2.000 ¥",
        activity: "Cenaremos el legendario toriten (pollo marinado y frito en una tempura ligera y crujiente, servido con mostaza karashi y salsa ponzu) y mariscos frescos de la bahía.",
        photo: { src: "https://freelife.s3.isk01.sakurastorage.jp/storage/users/159/5284_16946548826871_146.jpg", alt: "Menú de toriten de Toyotsune", source: "https://freelife.ne.jp/article/5284", credit: "Freelife · reportaje local" },
        desc: "Institución gastronómica de Beppu abierta desde 1922 célebre por sus recetas tradicionales.",
        tip: "A 4 minutos andando desde Takegawara Onsen."
      },

      // DÍA 3
      {
        id: 14, code: "D3-1", shortName: "Kannawa Mushi-yu", day: "day3", dayLabel: "Día 3 • Mañana (Coche)",
        title: "Kannawa Mushi-yu (Sauna Herbal Ancestral)", jp: "鉄輪むし湯",
        lat: 33.3150, lng: 131.4770, color: "#10b981", type: "attraction",
        time: "09:30 - 11:00", price: "700 ¥",
        activity: "Nos adentraremos agachados en una pequeña cueva de piedra abovedada del siglo XIII para tumbarnos sobre un lecho de hierbas medicinales aromáticas 'sekisho' calentadas por vapor geotérmico puro.",
        photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kannawa_Mushi-yu_Public_Bath.jpg?width=900", alt: "Entrada del edificio tradicional de Kannawa Mushi-yu", source: "https://commons.wikimedia.org/wiki/File:Kannawa_Mushi-yu_Public_Bath.jpg", credit: "Wikimedia Commons · CC BY-SA 3.0" },
        desc: "Fundada por el monje budista Ippen Shonin en 1276. Diez minutos dentro bastan para sudar todas las toxinas.",
        tip: "Estaciona en el parking general de Kannawa."
      },
      {
        id: 15, code: "D3-2", shortName: "Yufuin & Floral Village", day: "day3", dayLabel: "Día 3 • Aldea Cuento & Lago",
        title: "Yufuin · Lago Kinrin & Yufuin Floral Village (Estilo Ghibli)", jp: "由布院・金鱗湖・フローラルヴィレッジ",
        lat: 33.2662, lng: 131.3690, color: "#10b981", type: "attraction",
        time: "12:30 - 16:30", price: "Paseo y compras",
        activity: "Exploraremos el pintoresco Yufuin Floral Village (una delirante aldea de fantasía estilo cuento inglés y Studio Ghibli con cabras, búhos, tiendas oficiales de Totoro, Alicia y Kiki), pasearemos por la calle comercial Yunotsubo probando snacks artesanales y contemplaremos las aguas termales humeantes del lago Kinrin.",
        photo: { src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/%E5%A4%A7%E5%88%86%E7%B8%A3%E7%94%B1%E5%B8%83%E5%B8%82%E6%B9%AF%E5%B8%83%E9%99%A2%E7%94%BA%E9%87%91%E9%B1%97%E6%B9%96%E6%99%AF2.jpg", alt: "Lago Kinrin en Yufuin durante una mañana brumosa", source: "https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%88%86%E7%B8%A3%E7%94%B1%E5%B8%83%E5%B8%82%E6%B9%AF%E5%B8%83%E9%99%A2%E7%94%BA%E9%87%91%E9%B1%97%E6%B9%96%E6%99%AF2.jpg", credit: "Rick888chen · Wikimedia Commons · CC BY-SA 4.0" },
        desc: "Trayecto en coche de 50 minutos por la escénica Ruta 500 cruzando los pastos alpinos del monte Yufu.",
        tip: "En Yunotsubo prueba la croqueta de ternera Bungo y el rollo de tarta B-Speak."
      },

      // HOTELS
      {
        id: 16, code: "H-1", shortName: "Amane Resort Seikai", day: "hotel", dayLabel: "Alojamiento • Costa",
        title: "AMANE RESORT SEIKAI (5★ Coche & Parking)", jp: "晴海",
        lat: 33.3095, lng: 131.4976, color: "#a855f7", type: "hotel",
        time: "Check-in", price: "Luxury Ryokan",
        activity: "Opción de alojamiento frente al mar; la propuesta es descansar y disfrutar del onsen del hotel.",
        photo: { src: "https://oita-tourism.com/lsc/upfile/spot/0000/1127/1127_3_l.png", alt: "Entrada de AMANE RESORT SEIKAI", source: "https://oita-tourism.com/en/onsenArea/detail_1127.html", credit: "Visit Oita · turismo oficial" },
        desc: "Hotel de lujo frente al mar con parking privado subterráneo gratuito para huéspedes.",
        tip: "Acceso directo en coche desde la autopista o la costa."
      },
      {
        id: 17, code: "H-2", shortName: "Kannawaen", day: "hotel", dayLabel: "Alojamiento • Kannawa",
        title: "Kannawaen (Jardín Tradicional)", jp: "神和苑",
        lat: 33.3183, lng: 131.4735, color: "#a855f7", type: "hotel",
        time: "Check-in", price: "Luxury Ryokan",
        activity: "Opción de ryokan tradicional en Kannawa, cerca de los Infiernos; ideal para visitar la zona a pie.",
        photo: { src: "https://trvis.r10s.com/d/strg/ctrl/26/bf1f3bbe0d4dea437763524df0a0839ea8e3cf3d.47.9.26.3.jpg", alt: "Entrada tradicional de Kannawaen", source: "https://travel.rakuten.com/usa/en-us/hotel_info_item/cnt_japan/sub_oita_prefecture/cty_beppu_city/10123456794942", credit: "Kannawaen · galería de Rakuten Travel" },
        desc: "Ryokan tradicional con parking propio gratuito a 100 metros de los Infiernos.",
        tip: "Ideal para Kannawa; dejas el coche aparcado y te olvidas."
      },
      {
        id: 18, code: "H-3", shortName: "ANA InterContinental", day: "hotel", dayLabel: "Alojamiento • Montaña",
        title: "ANA InterContinental Beppu Resort", jp: "ANAインターコンチネンタル別府",
        lat: 33.3138, lng: 131.4545, color: "#a855f7", type: "hotel",
        time: "Check-in", price: "5★ Resort",
        activity: "Opción de resort de lujo en la montaña, con vistas a la bahía y baños termales en el hotel.",
        photo: { src: "https://global-uploads.webflow.com/5cf16f74881a650c03c2f354/5eb916019527195c6094d7ed_intercontinental---ana-beppu-6255156140-2x1.jpeg", alt: "Entrada del ANA InterContinental Beppu Resort & Spa", source: "https://www.qxtravel.io/properties/intercontinental-ana-beppu-resort-spa", credit: "ANA InterContinental Beppu · galería QX Travel" },
        desc: "Resort de alta gama en las laderas de Myoban con parking amplio y vigilado.",
        tip: "Vistas panorámicas increíbles de toda la bahía."
      }
    ];

    const parkingInfo = {
      2: { summary: "Gratis · parking propio del recinto", details: "El aparcamiento gratuito forma parte del recinto de Umi Jigoku; no es una parada separada ni requiere pago o validación.", source: "https://www.beppu-jigoku.com/pamphlet/images/Japan.pdf", sourceLabel: "Asociación de los Infiernos de Beppu" },
      3: { summary: "Gratis · propio, 50 plazas", details: "Parking gratuito de Kamado Jigoku. No se paga ni se valida el ticket.", source: "https://kamadojigoku.com/english/access/", sourceLabel: "Kamado Jigoku · acceso" },
      8: { summary: "Gratis · parking propio", details: "Oniyama Jigoku cuenta con aparcamiento gratuito para visitantes.", source: "https://www.beppu-jigoku.com", sourceLabel: "Infiernos de Beppu" },
      4: { summary: "Gratis · parking propio", details: "El recinto cuenta con aparcamiento gratuito. No hay que pagar por estacionar.", source: "https://beppu-shisetsu.com/wp-content/themes/kanko/pamphleta/map_en_250306.pdf", sourceLabel: "Guía turística oficial de Beppu" },
      5: { summary: "Gratis · propio, unas 80 plazas", details: "Parking gratuito para visitantes; no hay que pagar ni validar ticket.", source: "https://www.hyotan-onsen.com/english/facilities/index.html", sourceLabel: "Hyotan Onsen · instalaciones" },
      6: { summary: "Gratis · parking público, 8 plazas", details: "Aparcamiento gratuito junto al mirador (incluye 1 plaza accesible). No requiere pago.", source: "https://www.city.beppu.oita.jp/sisetu/sangyou_kankou/yukemuri.html", sourceLabel: "Ayuntamiento de Beppu" },
      19: { summary: "Sin parking asignado · salida aproximada", details: "Este marcador señala la zona de salida de Kannawa, no un aparcamiento. Usa el parking del ryokan donde te alojes o el parking municipal de Kannawa." },
      7: { summary: "Gratis · parking propio, 250 plazas", details: "Parking del teleférico. Las fuentes turísticas consultadas lo indican como gratuito; no se paga al estacionar.", source: "https://www.rinya.maff.go.jp/kyusyu/koho/koho_si/pdf/rekumori1.pdf", sourceLabel: "Agencia Forestal de Japón" },
      9: { summary: "Gratis · propio, 80 plazas", details: "Parking gratuito de Myoban Yunosato. No hay que pagar por estacionar.", source: "https://yuno-hana.jp/en/facility/access.html", sourceLabel: "Myoban Yunosato · acceso" },
      10: { summary: "De pago · ¥100/h; máximo ¥500/24 h (¥400 kei)", details: "P3 es Trust Park Nagarekawa: aparcamiento descubierto de 23 plazas, abierto 24 h. Aparca en un hueco libre y apunta su número. El operador no especifica en la ficha qué mecanismo tiene esta ubicación; sigue el cartel y la máquina del recinto. En los parkings Trust con placa de bloqueo, la placa sube después de aparcar: al salir, introduce en la máquina el número de tu plaza, paga y comprueba que la placa haya bajado antes de mover el coche. Si no hay placa, el operador también exige pagar antes de salir. Tarifas oficiales: ¥100 cada 60 min; máximo ¥500 por 24 h para coche normal y ¥400 para kei; el máximo se repite. Pago publicado para esta ubicación: efectivo, tarjeta de crédito o QR; usa QR solo si tu app es compatible. Medidas máximas: 5 m largo, 2 m ancho, 2,1 m alto y 2 t; hay otras restricciones de altura libre al suelo y puertas correderas. Confirma el letrero in situ porque tarifas y condiciones pueden cambiar.", source: "https://tpnavi.com/view.php?cd=99&type=parking", sourceLabel: "Trust Park · tarifa y pagos", sourceUse: "https://tpnavi.com/menu.php?type=faq-en", sourceUseLabel: "Trust Park · cómo usar la máquina" },
      11: { summary: "Gratis · propio, 150 plazas", details: "Parking gratuito del recinto de Chinoike Jigoku. No hay que pagar ni validar ticket.", source: "https://chinoike.com/access/", sourceLabel: "Chinoike Jigoku · acceso" },
      20: { summary: "Parking Takasakiyama · ¥420 tarifa fija turismo", details: "Gran aparcamiento asfaltado frente al Parque de Monos y el Acuario Umitamago, conectado por pasarela peatonal elevada directa sobre la carretera costera.", source: "https://www.takasakiyama.jp/", sourceLabel: "Takasakiyama · web oficial" },
      12: { summary: "Sin parking propio · P3 de pago a 2–3 min a pie", details: "Takegawara Onsen no tiene aparcamiento propio. Aparca en P3, Trust Park Nagarekawa, a 2–3 min andando. Entra en un hueco libre y apunta el número. El operador no confirma el mecanismo exacto de esta ubicación: sigue las instrucciones del cartel y la máquina. Si el hueco tiene placa que sube, al marcharte introduce el número en el cajero, paga y espera a que baje antes de salir; paga siempre antes de abandonar el recinto. Cuesta ¥100 cada 60 min; máximo ¥500 por 24 h (¥400 en plaza kei), repetible. Acepta efectivo, tarjeta de crédito y QR según la ficha del operador. Restricciones: máximo 5 m de largo, 2 m de ancho, 2,1 m de alto y 2 t; revisa además la altura libre al suelo. Confirma tarifas en el cartel del día.", source: "https://tpnavi.com/view.php?cd=99&type=parking", sourceLabel: "Trust Park · tarifa, pagos y uso", sourceUse: "https://tpnavi.com/menu.php?type=faq-en", sourceUseLabel: "Trust Park · instrucciones" },
      13: { summary: "Parking propio indicado · precio y proceso sin publicar", details: "La ficha del restaurante indica parking, pero no especifica plazas, precio, control de acceso ni medios de pago. Si quieres usarlo, pregunta al personal antes de dejar el coche y confirma si es exclusivo para clientes y cómo se valida. Alternativa documentada: P3, Trust Park Nagarekawa, a unos minutos a pie. Es de pago: ¥100/60 min; máximo ¥500/24 h (¥400 kei). Aparca en plaza libre, apunta el número y paga en el cajero antes de salir; si hay placa, comprueba que haya bajado. El operador publica efectivo, tarjeta de crédito y QR.", source: "https://tpnavi.com/view.php?cd=99&type=parking", sourceLabel: "Trust Park · alternativa P3 y pagos", sourceUse: "https://tpnavi.com/menu.php?type=faq-en", sourceUseLabel: "Trust Park · instrucciones" },
      14: { summary: "Parking municipal · 2 h gratis si visitas Mushi-yu; después de pago", details: "No hay parking propio de Mushi-yu. Usa uno de estos dos aparcamientos municipales: Netsu no Yu-mae (12 plazas, a 1 min a pie) o Kannawa Onsen District (19 plazas, a unos 4 min). Ambos abren 24 h y cuestan ¥100 por hasta 1 h; máximo ¥500 por 12 h, que se vuelve a aplicar. Si entras en Kannawa Mushi-yu, al llegar avisa al personal de recepción y solicita allí las 2 h gratuitas del parking; no salgas sin confirmar que te han aplicado la gratuidad. Si superas las 2 h, liquida el importe restante en la máquina del parking antes de marcharte. La fuente oficial no indica qué pagos acepta la máquina: lleva yenes en efectivo y sigue el letrero del recinto. No se admiten reservas; plazas para coches normales, no autobuses ni motos.", source: "https://beppu-tourism.com/access/parking/", sourceLabel: "Beppu Tabi · precios y plazas municipales" },
      15: { summary: "De pago · Times Kinrinko: máximo ¥600 laborables / ¥900 festivos", details: "Times Yufuin Kinrinko está junto al lago: 30 plazas, acceso 24 h y vehículos de hasta 5 m de largo, 1,9 m de ancho, 2,1 m de alto y 2,5 t. El máximo oficial es ¥600 de lunes a viernes o ¥900 sábados, domingos y festivos; es un máximo del día, y a partir de las 00:00 pueden añadirse cargos. La ficha no publica una tarifa por hora. Aparca en un hueco libre y revisa el cartel para identificar el sistema de esa plaza (Times usa lectura de matrícula, placa de bloqueo o barrera según el recinto). En lectura de matrícula, recuerda la matrícula y selecciónala en el cajero al terminar; en placa, apunta el número de espacio, paga en el cajero y comprueba que la placa baje; con barrera, toma el ticket al entrar y págalo en la salida. Paga antes de marcharte. La ficha de este parking indica efectivo, tarjeta de crédito y dinero electrónico; también menciona smartphone/QR en servicios disponibles, sujetos a lo que muestre el cajero. Confirma el importe en el letrero local.", source: "https://times-info.net/P44-oita/C213/park-detail-BUK0022242/", sourceLabel: "Times · tarifas y medios de pago", sourceUse: "https://times-info.net/info/utilization_en.html", sourceUseLabel: "Times · instrucciones según sistema" },
      16: { summary: "Gratis · parking del hotel para huéspedes", details: "Parking exterior junto al hotel, gratuito para huéspedes. Al llegar, para en la entrada y el personal te indica dónde aparcar.", source: "https://www.seikai.co.jp/faq/", sourceLabel: "AMANE RESORT SEIKAI · FAQ" },
      17: { summary: "Gratis · parking del ryokan para huéspedes", details: "Parking propio gratuito para huéspedes alojados; no se cobra ni se paga en máquina.", source: "https://www.kannawaen.jp/en/access.html", sourceLabel: "Kannawaen · acceso" },
      18: { summary: "Gratis · 140 plazas; valet opcional", details: "Parking propio gratuito. Hay servicio de valet para huéspedes si lo solicitan; no requiere reserva previa. No hay tarifa de estacionamiento que pagar.", source: "https://anaicbeppu.com/faq/", sourceLabel: "ANA InterContinental Beppu · FAQ" }
    };
    // Conexiones de rutas (Coche = Azul continuo, A pie = Naranja punteado)
    const routesData = {
      day1: [
        { from: [33.3168, 131.4686], to: [33.3159, 131.4741], type: 'walk', duration: '5 min' }, // Umi -> Kamado
        { from: [33.3159, 131.4741], to: [33.3155, 131.4720], type: 'walk', duration: '3 min' }, // Kamado -> Oniyama (Cocodrilos)
        { from: [33.3155, 131.4720], to: [33.3156, 131.4765], type: 'walk', duration: '4 min' }, // Oniyama -> Jigoku Mushi
        { from: [33.3156, 131.4765], to: [33.3168, 131.4773], type: 'walk', duration: '3 min' }, // Jigoku Mushi -> Hyotan
        { from: [33.3168, 131.4773], to: [33.3121, 131.4822], type: 'car', duration: '3 min' }   // Hyotan -> Mirador Yukemuri
      ],
      day2: [
        { from: [33.3168, 131.4686], to: [33.2923, 131.4426], type: 'car', duration: '15 min' }, // Kannawa -> Teleférico (parking propio)
        { from: [33.2923, 131.4426], to: [33.3212, 131.4519], type: 'car', duration: '10 min' }, // Ropeway -> Myoban Yunosato
        { from: [33.3212, 131.4519], to: [33.3270, 131.4793], type: 'car', duration: '10 min' }, // Myoban -> Chinoike
        { from: [33.3270, 131.4793], to: [33.2625, 131.5342], type: 'car', duration: '15 min' }, // Chinoike -> Takasakiyama Monos
        { from: [33.2625, 131.5342], to: [33.2778, 131.5050], type: 'car', duration: '10 min' }, // Takasakiyama -> Parking Centro P3
        { from: [33.2778, 131.5050], to: [33.2775, 131.5055], type: 'walk', duration: '2 min' },// Parking -> Takegawara
        { from: [33.2775, 131.5055], to: [33.2793, 131.5015], type: 'walk', duration: '4 min' } // Takegawara -> Toyotsune
      ],
      day3: [
        { from: [33.3150, 131.4770], to: [33.2662, 131.3690], type: 'car', duration: '50 min' }   // Kannawa -> Yufuin
      ]
    };
