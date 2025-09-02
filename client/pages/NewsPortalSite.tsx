import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Newspaper, Clock, Users, TrendingUp, Calendar, Eye, MessageCircle, Share2, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, Search, Play, ArrowLeft } from "lucide-react";

// Language translations
const translations = {
  hr: {
    editMode: "Uredi",
    previewMode: "Pregledaj",
    backToTemplates: "Natrag na predloške",
    changeBackground: "Promijeni pozadinu",
    uploadFromComputer: "Učitaj s ra��unala",
    browseFiles: "Pregledaj datoteke",
    or: "ILI",
    pasteImageUrl: "Zalijepi URL slike",
    useUrl: "Koristi URL",
    cancel: "Odustani",
    newsPortalName: "Naziv portala",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOperating: "godina rada",
    journalistsEmployed: "novinara",
    articlesPublished: "objavljenih članaka",
    aboutPortal: "O nama",
    portalDescription: "Opis portala",
    breakingNews: "Hitne vijesti",
    latestNews: "Najnovije vijesti",
    categories: "Kategorije",
    category: "Kategorija",
    politics: "Politika",
    sports: "Sport",
    technology: "Tehnologija",
    business: "Gospodarstvo",
    culture: "Kultura",
    world: "Svijet",
    readMore: "Čitaj više",
    shareArticle: "Podijeli članak",
    newsletter: "Newsletter",
    subscribe: "Pretplati se",
    subscribeNewsletter: "Pretplati se na newsletter",
    editorial: "Redakcija",
    journalistName: "Ime novinara",
    position: "Pozicija",
    experience: "Iskustvo",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    editorInChief: "Glavni urednik",
    hostName: "Ime urednika",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Informirajte se objektivno",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Portal",
    companyOptional: "Portal (neobavezno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako nas pronaći",
    delete: "Ukloni",
    addArticle: "Dodaj članak",
    findUsOn: "Pronađi nas na",
    facebookUrl: "Facebook URL",
    twitterUrl: "Twitter URL",
    articleTitle: "Naslov članka",
    articleContent: "Sadržaj članka",
    author: "Autor",
    publishDate: "Datum objave",
    views: "pregleda",
    comments: "komentara",
    trending: "Trending",
    liveUpdates: "Uživo",
    weather: "Vrijeme danas",
    feelsLike: "Osjećaj",
    humidity: "Vlažnost",
    wind: "Vjetar",
    uvIndex: "UV indeks",
    moderate: "umjeren",
    updated: "Ažurirano"
  },
  en: {
    editMode: "Edit",
    previewMode: "Preview",
    backToTemplates: "Back to Templates",
    changeBackground: "Change Background",
    uploadFromComputer: "Upload from Computer",
    browseFiles: "Browse Files",
    or: "OR",
    pasteImageUrl: "Paste Image URL",
    useUrl: "Use URL",
    cancel: "Cancel",
    newsPortalName: "News portal name",
    location: "Location",
    tagline: "Tagline",
    yearsOperating: "years operating",
    journalistsEmployed: "journalists",
    articlesPublished: "articles published",
    aboutPortal: "About Us",
    portalDescription: "Portal description",
    breakingNews: "Breaking News",
    latestNews: "Latest News",
    categories: "Categories",
    category: "Category",
    politics: "Politics",
    sports: "Sports",
    technology: "Technology",
    business: "Business",
    culture: "Culture",
    world: "World",
    readMore: "Read More",
    shareArticle: "Share Article",
    newsletter: "Newsletter",
    subscribe: "Subscribe",
    subscribeNewsletter: "Subscribe to Newsletter",
    editorial: "Editorial Team",
    journalistName: "Journalist name",
    position: "Position",
    experience: "Experience",
    description: "Description",
    contactInfo: "Contact Information",
    editorInChief: "Editor-in-Chief",
    hostName: "Editor name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Stay informed, stay objective",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Portal",
    companyOptional: "Portal (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your purchase details:",
    howToFindUs: "How to Find Us",
    delete: "Remove",
    addArticle: "Add Article",
    findUsOn: "Find us on",
    facebookUrl: "Facebook URL",
    twitterUrl: "Twitter URL",
    articleTitle: "Article title",
    articleContent: "Article content",
    author: "Author",
    publishDate: "Publish date",
    views: "views",
    comments: "comments",
    trending: "Trending",
    liveUpdates: "Live",
    weather: "Today's Weather",
    feelsLike: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    uvIndex: "UV Index",
    moderate: "moderate",
    updated: "Updated"
  },
  es: {
    editMode: "Editar",
    previewMode: "Vista previa",
    backToTemplates: "Volver a Plantillas",
    changeBackground: "Cambiar fondo",
    uploadFromComputer: "Subir desde computadora",
    browseFiles: "Explorar archivos",
    or: "O",
    pasteImageUrl: "Pegar URL de imagen",
    useUrl: "Usar URL",
    cancel: "Cancelar",
    newsPortalName: "Nombre del portal",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOperating: "años operando",
    journalistsEmployed: "periodistas",
    articlesPublished: "artículos publicados",
    aboutPortal: "Sobre Nosotros",
    portalDescription: "Descripción del portal",
    breakingNews: "Noticias de Última Hora",
    latestNews: "Últimas Noticias",
    categories: "Categorías",
    category: "Categoría",
    politics: "Política",
    sports: "Deportes",
    technology: "Tecnología",
    business: "Negocios",
    culture: "Cultura",
    world: "Mundo",
    readMore: "Leer Más",
    shareArticle: "Compartir Artículo",
    newsletter: "Boletín",
    subscribe: "Suscribirse",
    subscribeNewsletter: "Suscribirse al Boletín",
    editorial: "Equipo Editorial",
    journalistName: "Nombre del periodista",
    position: "Posición",
    experience: "Experiencia",
    description: "Descripción",
    contactInfo: "Información de Contacto",
    editorInChief: "Editor en Jefe",
    hostName: "Nombre del editor",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Mantente informado, mantente objetivo",
    buyWebsite: "Comprar Sitio Web",
    buyWebsiteTitle: "Comprar Sitio Web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Portal",
    companyOptional: "Portal (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos de compra:",
    howToFindUs: "Cómo Encontrarnos",
    delete: "Eliminar",
    addArticle: "Agregar Artículo",
    findUsOn: "Encuéntranos en",
    facebookUrl: "URL de Facebook",
    twitterUrl: "URL de Twitter",
    articleTitle: "Título del artículo",
    articleContent: "Contenido del artículo",
    author: "Autor",
    publishDate: "Fecha de publicación",
    views: "vistas",
    comments: "comentarios",
    trending: "Tendencias",
    liveUpdates: "En Vivo",
    weather: "Clima de Hoy",
    feelsLike: "Sensación térmica",
    humidity: "Humedad",
    wind: "Viento",
    uvIndex: "Índice UV",
    moderate: "moderado",
    updated: "Actualizado"
  }
};

export default function NewsPortalSite() {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<'hr' | 'en' | 'es'>('hr');
  const [isEditing, setIsEditing] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [currentImageField, setCurrentImageField] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [purchaseData, setPurchaseData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  const t = translations[currentLang];

  const [newsData, setNewsData] = useState({
    name: { hr: "Vijesti Danas", en: "News Today", es: "Noticias Hoy" },
    location: { hr: "Zagreb, Hrvatska", en: "Zagreb, Croatia", es: "Zagreb, Croacia" },
    tagline: { hr: "Vaš glavni izvor informacija", en: "Your main source of information", es: "Tu fuente principal de información" },
    description: { 
      hr: "Vijesti Danas je vodeći hrvatski portal koji već 20 godina donosi najnovije vijesti iz zemlje i svijeta. Naša redakcija od 25 iskusnih novinara izvještava 24/7 o politici, sportu, gospodarstvu, kulturi i svim važnim događajima.",
      en: "News Today is a leading Croatian portal that has been bringing the latest news from the country and the world for 20 years. Our editorial team of 25 experienced journalists reports 24/7 on politics, sports, economy, culture and all important events.",
      es: "Noticias Hoy es un portal croata líder que ha estado trayendo las últimas noticias del país y del mundo durante 20 años. Nuestro equipo editorial de 25 periodistas experimentados informa 24/7 sobre política, deportes, economía, cultura y todos los eventos importantes."
    },
    yearsOperating: "20",
    journalistsEmployed: "25",
    articlesPublished: "18500",
    hostName: "Marija Horvat",
    hostPhone: "+385 1 555 0123",
    hostEmail: "marija@vijestidanas.hr",
    website: "www.vijestidanas.hr",
    facebookUrl: "",
    twitterUrl: "",
    heroImage: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
    breakingNews: {
      hr: [
        { title: "HITNO: Promet na A1 autocesti blokiran zbog nesreće kod Karlovca", time: "Prije 3 min" },
        { title: "Vlada najavljuje nove mjere za pomoć gospodarstvu", time: "Prije 15 min" },
        { title: "Potres magnitude 4.2 pogodio Sisak, nema žrtava", time: "Prije 32 min" },
        { title: "Dinamo pobijedio u Ligi prvaka rezultatom 2:1", time: "Prije 1 sat" },
        { title: "Nova korona varijanta otkrivena u Zagrebu - HZJZ izdao preporuke", time: "Prije 1 sat 20 min" },
        { title: "Rijeka dobila novo rukovodstvo HNK-a nakon ostavke", time: "Prije 2 sata" },
        { title: "Turistički rekord: Hrvatska u 2024. premašila 20 milijuna noćenja", time: "Prije 3 sata" }
      ],
      en: [
        { title: "URGENT: Traffic on A1 highway blocked due to accident near Karlovac", time: "3 min ago" },
        { title: "Government announces new measures to help the economy", time: "15 min ago" },
        { title: "Earthquake magnitude 4.2 hits Sisak, no casualties", time: "32 min ago" },
        { title: "Dinamo won in Champions League 2:1", time: "1 hour ago" },
        { title: "New COVID variant discovered in Zagreb - Health Institute issues recommendations", time: "1 hour 20 min ago" },
        { title: "Rijeka gets new HNK leadership after resignation", time: "2 hours ago" },
        { title: "Tourism record: Croatia surpassed 20 million overnight stays in 2024", time: "3 hours ago" }
      ],
      es: [
        { title: "URGENTE: Tráfico en autopista A1 bloqueado por accidente cerca de Karlovac", time: "Hace 3 min" },
        { title: "Gobierno anuncia nuevas medidas para ayudar a la economía", time: "Hace 15 min" },
        { title: "Terremoto de magnitud 4.2 golpea Sisak, sin víctimas", time: "Hace 32 min" },
        { title: "Dinamo ganó en Liga de Campeones 2:1", time: "Hace 1 hora" },
        { title: "Nueva variante COVID descubierta en Zagreb - Instituto de Salud emite recomendaciones", time: "Hace 1 hora 20 min" },
        { title: "Rijeka obtiene nuevo liderazgo HNK tras renuncia", time: "Hace 2 horas" },
        { title: "Récord turístico: Croacia superó 20 millones de pernoctaciones en 2024", time: "Hace 3 horas" }
      ]
    },
    articles: [
      {
        id: 1,
        title: { 
          hr: "Novi zakon o digitalnoj transformaciji stupio na snagu", 
          en: "New digital transformation law comes into effect", 
          es: "Nueva ley de transformación digital entra en vigor" 
        },
        excerpt: { 
          hr: "Parlament je izglasao novi zakon koji će ubrzati digitalizaciju javne uprave i olakšati poslovanje građanima.", 
          en: "Parliament passed a new law that will accelerate digitalization of public administration and facilitate business for citizens.", 
          es: "El Parlamento aprobó una nueva ley que acelerará la digitalización de la administración pública y facilitará los negocios para los ciudadanos." 
        },
        content: { 
          hr: "Zagreb - Hrvatskim parlamentom je danas jednoglasno usvojen novi Zakon o digitalnoj transformaciji koji će omogućiti građanima lakši pristup javnim uslugama kroz digitalne kanale. Ministar uprave Ivica Malenica izjavio je da će se do kraja 2025. godine 90% upravnih postupaka moći obaviti online...", 
          en: "Zagreb - The Croatian Parliament today unanimously adopted the new Digital Transformation Act, which will enable citizens easier access to public services through digital channels. Minister of Administration Ivica Malenica stated that by the end of 2025, 90% of administrative procedures will be available online...", 
          es: "Zagreb - El Parlamento croata adoptó hoy por unanimidad la nueva Ley de Transformación Digital, que permitirá a los ciudadanos un acceso más fácil a los servicios públicos a través de canales digitales. El Ministro de Administración Ivica Malenica declaró que para finales de 2025, el 90% de los procedimientos administrativos estarán disponibles en línea..." 
        },
        author: "Ana Petrović",
        date: "2024-01-15",
        category: { hr: "Politika", en: "Politics", es: "Política" },
        image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
        views: 1250,
        comments: 23
      },
      {
        id: 2,
        title: { 
          hr: "Hrvati osvojili broncu na Europskom prvenstvu u vaterpolu", 
          en: "Croatians win bronze at European Water Polo Championship", 
          es: "Los croatas ganan el bronce en el Campeonato Europeo de Waterpolo" 
        },
        excerpt: { 
          hr: "Hrvatska reprezentacija pobijedila je Italiju rezultatom 12:10 u utakmici za treće mjesto na EP-u u Splitu.", 
          en: "The Croatian national team defeated Italy 12:10 in the third-place match at the European Championship in Split.", 
          es: "La selección nacional croata derrotó a Italia 12:10 en el partido por el tercer lugar en el Campeonato Europeo en Split." 
        },
        content: { 
          hr: "Split - Velika radost zavladala je u Splitu nakon što je hrvatska muška vaterpolska reprezentacija osvojila broncu na Europskom prvenstvu. U dramatičnoj utakmici za treće mjesto, 'baruni' su pobijedili Italiju rezultatom 12:10...", 
          en: "Split - Great joy prevailed in Split after the Croatian men's water polo team won bronze at the European Championship. In a dramatic match for third place, the 'barons' defeated Italy 12:10...", 
          es: "Split - Gran alegría prevaleció en Split después de que el equipo masculino croata de waterpolo ganara el bronce en el Campeonato Europeo. En un partido dramático por el tercer lugar, los 'barones' derrotaron a Italia 12:10..." 
        },
        author: "Marko Šimić",
        date: "2024-01-14",
        category: { hr: "Sport", en: "Sports", es: "Deportes" },
        image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
        views: 2100,
        comments: 45
      },
      {
        id: 3,
        title: { 
          hr: "Startup iz Zagreba privukao investiciju od 5 milijuna eura", 
          en: "Zagreb startup attracts €5 million investment", 
          es: "Startup de Zagreb atrae inversión de 5 millones de euros" 
        },
        excerpt: { 
          hr: "Tvrtka koja razvija AI rješenja za zdravstvo uspjela je privući značajnu investiciju europskih fondova.", 
          en: "The company developing AI solutions for healthcare managed to attract significant investment from European funds.", 
          es: "La empresa que desarrolla soluciones de IA para la salud logró atraer una inversión significativa de fondos europeos." 
        },
        content: { 
          hr: "Zagreb - Zagrebački startup MediAI uspješno je završio A rundu financiranja u kojoj je prikupio 5 milijuna eura od vodećih europskih venture capital fondova. Tvrtka razvija umjetnu inteligenciju za dijagnostiku...", 
          en: "Zagreb - Zagreb startup MediAI successfully completed the A round of financing in which it raised 5 million euros from leading European venture capital funds. The company develops artificial intelligence for diagnostics...", 
          es: "Zagreb - La startup de Zagreb MediAI completó con éxito la ronda A de financiación en la que recaudó 5 millones de euros de los principales fondos de capital de riesgo europeos. La empresa desarrolla inteligencia artificial para diagnósticos..." 
        },
        author: "Petra Novak",
        date: "2024-01-13",
        category: { hr: "Tehnologija", en: "Technology", es: "Tecnología" },
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
        views: 890,
        comments: 12
      },
      {
        id: 4,
        title: { 
          hr: "Otvorena je nova izložba u Muzeju suvremene umjetnosti", 
          en: "New exhibition opens at Museum of Contemporary Art", 
          es: "Nueva exhibición abre en el Museo de Arte Contemporáneo" 
        },
        excerpt: { 
          hr: "Izložba 'Digitalni horizonti' prikazuje rad 15 hrvatskih umjetnika koji koriste nove tehnologije u stvaranju.", 
          en: "The exhibition 'Digital Horizons' showcases the work of 15 Croatian artists who use new technologies in creation.", 
          es: "La exposición 'Horizontes Digitales' muestra el trabajo de 15 artistas croatas que utilizan nuevas tecnologías en la creación." 
        },
        content: { 
          hr: "Zagreb - U zagrebačkom Muzeju suvremene umjetnosti svečano je otvorena izložba 'Digitalni horizonti' koja donosi pregled najnovijih dostignuća u digitalnoj umjetnosti. Izložba će biti otvorena do kraja ožujka...", 
          en: "Zagreb - The exhibition 'Digital Horizons' was ceremoniously opened at the Zagreb Museum of Contemporary Art, bringing an overview of the latest achievements in digital art. The exhibition will be open until the end of March...", 
          es: "Zagreb - La exposición 'Horizontes Digitales' fue inaugurada ceremoniosamente en el Museo de Arte Contemporáneo de Zagreb, brindando una visión general de los últimos logros en el arte digital. La exposición estará abierta hasta finales de marzo..." 
        },
        author: "Katarina Babić",
        date: "2024-01-12",
        category: { hr: "Kultura", en: "Culture", es: "Cultura" },
        image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
        views: 650,
        comments: 8
      },
      {
        id: 5,
        title: {
          hr: "Zagrebačka burza dosegla rekordne vrijednosti u 2024. godini",
          en: "Zagreb Stock Exchange reaches record values in 2024",
          es: "La Bolsa de Zagreb alcanza valores récord en 2024"
        },
        excerpt: {
          hr: "CROBEX indeks narastao je 15% u odnosu na prošlu godinu, što predstavlja najbolji rezultat u posljednjih 10 godina.",
          en: "The CROBEX index grew by 15% compared to last year, representing the best result in the last 10 years.",
          es: "El índice CROBEX creció un 15% en comparación con el año pasado, representando el mejor resultado en los últimos 10 años."
        },
        content: {
          hr: "Zagreb - Zagrebačka burza završila je 2024. godinu s rekordnim rezultatima. CROBEX indeks dosegnuo je vrijednost od 3.250 bodova, što predstavlja rast od 15% u odnosu na prošlu godinu...",
          en: "Zagreb - Zagreb Stock Exchange ended 2024 with record results. The CROBEX index reached a value of 3,250 points, representing a 15% growth compared to last year...",
          es: "Zagreb - La Bolsa de Zagreb terminó 2024 con resultados récord. El índice CROBEX alcanzó un valor de 3,250 puntos, representando un crecimiento del 15% comparado con el año pasado..."
        },
        author: "Ivo Matić",
        date: "2024-01-11",
        category: { hr: "Gospodarstvo", en: "Business", es: "Negocios" },
        image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        views: 1420,
        comments: 31
      },
      {
        id: 6,
        title: {
          hr: "Nova željeznička pruga Zagreb-Rijeka gotova do 2026. godine",
          en: "New Zagreb-Rijeka railway line to be completed by 2026",
          es: "Nueva línea ferroviaria Zagreb-Rijeka estará lista para 2026"
        },
        excerpt: {
          hr: "Ministar prometa najavio je da će nova brza pruga skratiti putovanje između glavnog grada i luke Rijeka na samo 2 sata.",
          en: "Transport Minister announced that the new fast track will shorten the journey between the capital and Rijeka port to just 2 hours.",
          es: "El Ministro de Transporte anunció que la nueva vía rápida acortará el viaje entre la capital y el puerto de Rijeka a solo 2 horas."
        },
        content: {
          hr: "Zagreb - Ministar pomorstva, prometa i infrastrukture Oleg Butković najavio je da će nova željeznička pruga Zagreb-Rijeka biti dovršena do kraja 2026. godine. Investicija vrijedna 1,2 milijarde eura...",
          en: "Zagreb - Minister of Maritime Affairs, Transport and Infrastructure Oleg Butković announced that the new Zagreb-Rijeka railway line will be completed by the end of 2026. The investment worth 1.2 billion euros...",
          es: "Zagreb - El Ministro de Asuntos Marítimos, Transporte e Infraestructura Oleg Butković anunció que la nueva línea ferroviaria Zagreb-Rijeka estará terminada para finales de 2026. La inversión vale 1.2 mil millones de euros..."
        },
        author: "Tomislav Brkić",
        date: "2024-01-10",
        category: { hr: "Politika", en: "Politics", es: "Política" },
        image: "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg",
        views: 2890,
        comments: 67
      },
      {
        id: 7,
        title: {
          hr: "Dubrovnik uvodi novu taksu za kruzing turizam",
          en: "Dubrovnik introduces new tax for cruise tourism",
          es: "Dubrovnik introduce nuevo impuesto para turismo de cruceros"
        },
        excerpt: {
          hr: "Od 1. ožujka svaki putnik s kruzera platit će 10 eura taksu za ulazak u staru gradsku jezgru.",
          en: "From March 1st, every cruise passenger will pay a 10 euro tax for entering the old city core.",
          es: "A partir del 1 de marzo, cada pasajero de crucero pagará un impuesto de 10 euros por ingresar al casco antiguo."
        },
        content: {
          hr: "Dubrovnik - Gradsko vijeće Dubrovnika jednoglasno je izglasalo uvođenje nove takse za kruzing turizam. Od 1. ožujka 2024. godine svaki putnik koji silazi s kruzera morat će platiti taksu od 10 eura...",
          en: "Dubrovnik - Dubrovnik City Council unanimously voted to introduce a new tax for cruise tourism. From March 1, 2024, every passenger disembarking from a cruise ship will have to pay a tax of 10 euros...",
          es: "Dubrovnik - El Consejo Municipal de Dubrovnik votó por unanimidad introducir un nuevo impuesto para el turismo de cruceros. A partir del 1 de marzo de 2024, cada pasajero que desembarque de un crucero tendrá que pagar un impuesto de 10 euros..."
        },
        author: "Marina Vuković",
        date: "2024-01-09",
        category: { hr: "Politika", en: "Politics", es: "Política" },
        image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
        views: 3250,
        comments: 89
      },
      {
        id: 8,
        title: {
          hr: "Hrvatska reprezentacija u rukometu plasirala se na Svjetsko prvenstvo",
          en: "Croatian handball team qualified for World Championship",
          es: "El equipo croata de balonmano se clasificó para el Campeonato Mundial"
        },
        excerpt: {
          hr: "Rukometaši su pobijedili Norvešku rezultatom 28:25 u odlučujućoj utakmici kvalifikacija u Zagrebu.",
          en: "The handball players defeated Norway 28:25 in the decisive qualifying match in Zagreb.",
          es: "Los jugadores de balonmano derrotaron a Noruega 28:25 en el partido decisivo de clasificación en Zagreb."
        },
        content: {
          hr: "Zagreb - Hrvatska rukometna reprezentacija osigurala je plasman na Svjetsko prvenstvo koje će se održati početkom 2025. godine. U dramatičnoj utakmici protiv Norveške pred 15.000 gledatelja u zagrebačkoj Areni...",
          en: "Zagreb - The Croatian handball team secured a place at the World Championship to be held in early 2025. In a dramatic match against Norway in front of 15,000 spectators at Zagreb Arena...",
          es: "Zagreb - El equipo croata de balonmano aseguró un lugar en el Campeonato Mundial que se celebrará a principios de 2025. En un partido dramático contra Noruega frente a 15,000 espectadores en la Arena de Zagreb..."
        },
        author: "Stjepan Tomas",
        date: "2024-01-08",
        category: { hr: "Sport", en: "Sports", es: "Deportes" },
        image: "https://images.pexels.com/photos/159698/handball-action-male-player-159698.jpeg",
        views: 4100,
        comments: 156
      },
      {
        id: 9,
        title: {
          hr: "Novi rekord posjećenosti Plitvičkih jezera u 2024. godini",
          en: "New visitor record at Plitvice Lakes in 2024",
          es: "Nuevo récord de visitantes en los Lagos de Plitvice en 2024"
        },
        excerpt: {
          hr: "Nacionalni park posjetilo je preko 1.8 milijuna turista, što je 12% više nego prošle godine.",
          en: "The national park was visited by over 1.8 million tourists, which is 12% more than last year.",
          es: "El parque nacional fue visitado por más de 1.8 millones de turistas, lo cual es 12% más que el año pasado."
        },
        content: {
          hr: "Plitvička jezera - Upravo objavljeni podaci pokazuju da je Nacionalni park Plitvička jezera u 2024. godini posjetilo rekordnih 1.853.000 posjetitelja. To predstavlja rast od 12% u odnosu na prošlu godinu...",
          en: "Plitvice Lakes - Just released data shows that Plitvice Lakes National Park was visited by a record 1,853,000 visitors in 2024. This represents a 12% growth compared to last year...",
          es: "Lagos de Plitvice - Los datos recién publicados muestran que el Parque Nacional de los Lagos de Plitvice fue visitado por un récord de 1,853,000 visitantes en 2024. Esto representa un crecimiento del 12% comparado con el año pasado..."
        },
        author: "Mirjana Horvat",
        date: "2024-01-07",
        category: { hr: "Kultura", en: "Culture", es: "Cultura" },
        image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg",
        views: 1980,
        comments: 42
      },
      {
        id: 10,
        title: {
          hr: "EU odobrila 800 milijuna eura za obnovu nakon potresa",
          en: "EU approves 800 million euros for post-earthquake reconstruction",
          es: "La UE aprueba 800 millones de euros para reconstrucción post-terremoto"
        },
        excerpt: {
          hr: "Sredstva će biti usmjerena na obnovu škola, bolnica i stambenih objekata u Baniji i Kordunu.",
          en: "The funds will be directed towards reconstruction of schools, hospitals and residential buildings in Banija and Kordun.",
          es: "Los fondos se dirigirán hacia la reconstrucción de escuelas, hospitales y edificios residenciales en Banija y Kordun."
        },
        content: {
          hr: "Bruxelles - Europska komisija službeno je odobrila dodatnih 800 milijuna eura za obnovu područja pogođenih razornim potresima 2020. godine. Sredstva će biti dostupna kroz Solidarnostni fond EU-a...",
          en: "Brussels - The European Commission officially approved an additional 800 million euros for reconstruction of areas affected by devastating earthquakes in 2020. The funds will be available through the EU Solidarity Fund...",
          es: "Bruselas - La Comisión Europea aprobó oficialmente 800 millones de euros adicionales para la reconstrucción de áreas afectadas por terremotos devastadores en 2020. Los fondos estarán disponibles a través del Fondo de Solidaridad de la UE..."
        },
        author: "Ana Petrović",
        date: "2024-01-06",
        category: { hr: "Politika", en: "Politics", es: "Política" },
        image: "https://images.pexels.com/photos/8293781/pexels-photo-8293781.jpeg",
        views: 2750,
        comments: 78
      }
    ],
    journalists: {
      hr: [
        { name: "Marija Horvat", position: "Glavna urednica", experience: "20 godina iskustva", description: "Specijalizirana za političko izvještavanje i analizu" },
        { name: "Petar Kovač", position: "Sportski urednik", experience: "15 godina iskustva", description: "Prati sve sportske događaje u zemlji i inozemstvu" },
        { name: "Ana Petrović", position: "Dopisnica iz Bruxellesa", experience: "12 godina iskustva", description: "Pokriva EU politiku i međunarodne odnose" }
      ],
      en: [
        { name: "Marija Horvat", position: "Editor-in-Chief", experience: "20 years experience", description: "Specialized in political reporting and analysis" },
        { name: "Petar Kovač", position: "Sports Editor", experience: "15 years experience", description: "Covers all sporting events domestically and abroad" },
        { name: "Ana Petrović", position: "Brussels Correspondent", experience: "12 years experience", description: "Covers EU politics and international relations" }
      ],
      es: [
        { name: "Marija Horvat", position: "Editora en Jefe", experience: "20 años de experiencia", description: "Especializada en reportajes políticos y análisis" },
        { name: "Petar Kovač", position: "Editor de Deportes", experience: "15 años de experiencia", description: "Cubre todos los eventos deportivos nacional e internacionalmente" },
        { name: "Ana Petrović", position: "Corresponsal de Bruselas", experience: "12 años de experiencia", description: "Cubre la política de la UE y las relaciones internacionales" }
      ]
    }
  });

  const updateField = (field: string, value: any) => {
    setNewsData(prev => ({ ...prev, [field]: value }));
    saveToLocalStorage({ ...newsData, [field]: value });
  };

  const updateLocalizedField = (field: string, lang: 'hr' | 'en' | 'es', value: string) => {
    setNewsData(prev => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value }
    }));
    const newData = { ...newsData, [field]: { ...newsData[field], [lang]: value } };
    saveToLocalStorage(newData);
  };

  const updateArticle = (index: number, field: string, value: any) => {
    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.map((article, i) =>
        i === index ? { ...article, [field]: value } : article
      )
    }));
  };

  const updateArticleLocalizedField = (index: number, field: string, value: string) => {
    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.map((article, i) =>
        i === index ? { ...article, [field]: { ...article[field], [currentLang]: value } } : article
      )
    }));
  };

  const addArticle = () => {
    const newId = Math.max(...newsData.articles.map(a => a.id)) + 1;
    setNewsData(prev => ({
      ...prev,
      articles: [
        ...prev.articles,
        {
          id: newId,
          title: { hr: "Novi članak", en: "New Article", es: "Nuevo Artículo" },
          excerpt: { hr: "Kratki opis...", en: "Brief description...", es: "Breve descripción..." },
          content: { hr: "Sadržaj članka...", en: "Article content...", es: "Contenido del artículo..." },
          author: "Urednik",
          date: new Date().toISOString().split('T')[0],
          category: { hr: "Vijesti", en: "News", es: "Noticias" },
          image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
          views: 0,
          comments: 0
        }
      ]
    }));
  };

  const removeArticle = (index: number) => {
    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.filter((_, i) => i !== index)
    }));
  };

  const saveToLocalStorage = (data: any) => {
    localStorage.setItem('news-portal-data', JSON.stringify(data));
    localStorage.setItem('news-portal-saved-at', new Date().toISOString());
  };

  const handleImageUpload = () => {
    if (imageUrl && currentImageField) {
      if (currentImageField === 'heroImage') {
        updateField('heroImage', imageUrl);
      } else if (currentImageField.startsWith('article-')) {
        const index = parseInt(currentImageField.split('-')[1]);
        updateArticle(index, 'image', imageUrl);
      }
      setShowImageDialog(false);
      setImageUrl('');
      setCurrentImageField('');
    }
  };

  const openImageDialog = (field: string) => {
    setCurrentImageField(field);
    setShowImageDialog(true);
  };

  const handlePurchase = () => {
    console.log('Purchase data:', purchaseData);
    alert('Hvala na kupnji! Kontaktirati ćemo vas uskoro.');
    setShowPurchaseModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50"
          title={t.backToTemplates}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToTemplates}
        </Button>
        {/* Language Controls */}
        <div className="flex bg-white rounded-lg shadow-lg p-1">
          <Button
            onClick={() => setCurrentLang('hr')}
            variant={currentLang === 'hr' ? "default" : "ghost"}
            size="sm"
            className="text-lg px-2"
            title="Hrvatski"
          >
            🇭🇷
          </Button>
          <Button
            onClick={() => setCurrentLang('en')}
            variant={currentLang === 'en' ? "default" : "ghost"}
            size="sm"
            className="text-lg px-2"
            title="English"
          >
            🇬🇧
          </Button>
          <Button
            onClick={() => setCurrentLang('es')}
            variant={currentLang === 'es' ? "default" : "ghost"}
            size="sm"
            className="text-lg px-2"
            title="Español"
          >
            🇪🇸
          </Button>
        </div>

        {/* Edit/Preview Toggle */}
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "destructive" : "default"}
          size="sm"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing ? t.previewMode : t.editMode}
        </Button>

        {/* Buy Website Button */}
        <Dialog open={showPurchaseModal} onOpenChange={setShowPurchaseModal}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-green-600 hover:bg-green-700" data-testid="purchase-button">
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t.buyWebsite}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.buyWebsiteTitle}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground">{t.purchaseDetails}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t.firstName}</Label>
                  <Input
                    id="firstName"
                    value={purchaseData.firstName}
                    onChange={(e) => setPurchaseData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t.lastName}</Label>
                  <Input
                    id="lastName"
                    value={purchaseData.lastName}
                    onChange={(e) => setPurchaseData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">{t.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={purchaseData.email}
                  onChange={(e) => setPurchaseData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input
                  id="phone"
                  value={purchaseData.phone}
                  onChange={(e) => setPurchaseData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="company">{t.companyOptional}</Label>
                <Input
                  id="company"
                  value={purchaseData.company}
                  onChange={(e) => setPurchaseData(prev => ({ ...prev, company: e.target.value }))}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowPurchaseModal(false)}>
                  {t.cancel}
                </Button>
                <Button onClick={handlePurchase} className="bg-green-600 hover:bg-green-700">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                      <span className="line-through text-xs opacity-75">€499.99</span>
                      <span className="font-bold">{t.purchase} - €49.99</span>
                    </div>
                    <span className="text-xs">(90% OFF!)</span>
                  </div>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Header/Navigation */}
      <header className="bg-red-600 text-white py-4 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Newspaper className="w-8 h-8" />
            {isEditing ? (
              <Input
                value={newsData.name[currentLang]}
                onChange={(e) => updateLocalizedField('name', currentLang, e.target.value)}
                className="text-2xl font-bold bg-transparent border-white text-white placeholder-gray-300"
                placeholder={t.newsPortalName}
              />
            ) : (
              <h1 className="text-2xl font-bold">{newsData.name[currentLang]}</h1>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              <span className="hidden md:block">Pretražuj</span>
            </div>
            <div className="text-sm">
              {new Date().toLocaleDateString(currentLang === 'hr' ? 'hr-HR' : currentLang === 'en' ? 'en-US' : 'es-ES')}
            </div>
          </div>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-red-500 text-white py-2 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Badge className="bg-white text-red-600 font-bold">
              {t.breakingNews.toUpperCase()}
            </Badge>
            <div className="flex gap-8 animate-scroll">
              {newsData.breakingNews[currentLang].map((news, index) => (
                <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                  <span>{news.title}</span>
                  <span className="text-red-200 text-sm">({news.time})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {newsData.articles.length > 0 && (
              <Card className="mb-8 overflow-hidden">
                <div className="relative">
                  <img
                    src={newsData.articles[0].image}
                    alt={newsData.articles[0].title[currentLang]}
                    className="w-full h-80 object-cover"
                  />
                  {isEditing && (
                    <Button
                      onClick={() => openImageDialog('article-0')}
                      className="absolute top-4 left-4"
                      size="sm"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      {t.changeBackground}
                    </Button>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <Badge className="mb-3 bg-red-600">
                      {newsData.articles[0].category[currentLang]}
                    </Badge>
                    {isEditing ? (
                      <Input
                        value={newsData.articles[0].title[currentLang]}
                        onChange={(e) => updateArticleLocalizedField(0, 'title', e.target.value)}
                        className="text-3xl font-bold mb-3 bg-transparent border-white text-white"
                      />
                    ) : (
                      <h2 className="text-3xl font-bold text-white mb-3">
                        {newsData.articles[0].title[currentLang]}
                      </h2>
                    )}
                    {isEditing ? (
                      <Textarea
                        value={newsData.articles[0].excerpt[currentLang]}
                        onChange={(e) => updateArticleLocalizedField(0, 'excerpt', e.target.value)}
                        className="text-gray-200 bg-transparent border-white text-white"
                      />
                    ) : (
                      <p className="text-gray-200 text-lg">
                        {newsData.articles[0].excerpt[currentLang]}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-4 text-white text-sm">
                      <span>{newsData.articles[0].author}</span>
                      <span>{newsData.articles[0].date}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{newsData.articles[0].views} {t.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{newsData.articles[0].comments} {t.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Latest News Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{t.latestNews}</h2>
                {isEditing && (
                  <Button onClick={addArticle} size="sm">
                    <Newspaper className="w-4 h-4 mr-2" />
                    {t.addArticle}
                  </Button>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {newsData.articles.slice(1).map((article, index) => (
                  <Card key={article.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    {isEditing && (
                      <Button
                        onClick={() => removeArticle(index + 1)}
                        size="sm"
                        variant="destructive"
                        className="absolute top-2 right-2 h-6 w-6 p-0 z-10"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    )}
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title[currentLang]}
                        className="w-full h-48 object-cover"
                      />
                      {isEditing && (
                        <Button
                          onClick={() => openImageDialog(`article-${index + 1}`)}
                          className="absolute top-2 left-2"
                          size="sm"
                        >
                          <Camera className="w-4 h-4" />
                        </Button>
                      )}
                      <Badge className="absolute top-3 right-3 bg-red-600">
                        {article.category[currentLang]}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      {isEditing ? (
                        <Input
                          value={article.title[currentLang]}
                          onChange={(e) => updateArticleLocalizedField(index + 1, 'title', e.target.value)}
                          className="font-bold text-lg mb-2"
                        />
                      ) : (
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                          {article.title[currentLang]}
                        </h3>
                      )}
                      {isEditing ? (
                        <Textarea
                          value={article.excerpt[currentLang]}
                          onChange={(e) => updateArticleLocalizedField(index + 1, 'excerpt', e.target.value)}
                          className="text-gray-600 mb-3 h-20"
                        />
                      ) : (
                        <p className="text-gray-600 mb-3">{article.excerpt[currentLang]}</p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          {t.readMore}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {t.categories}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[t.politics, t.sports, t.technology, t.business, t.culture, t.world].map((category, index) => (
                    <Button key={index} variant="ghost" className="w-full justify-start text-left">
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.newsletter}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{t.subscribeNewsletter}</p>
                <div className="space-y-2">
                  <Input placeholder={t.email} />
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    {t.subscribe}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weather Widget */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>⛅</span>
                  {t.weather}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌤️</div>
                    <div className="text-3xl font-bold text-blue-600">18°C</div>
                    <div className="text-sm text-gray-600 font-medium">Zagreb, Hrvatska</div>
                    <div className="text-sm text-gray-500">Djelomično oblačno</div>
                  </div>
                  <div className="border-t pt-3 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>{t.feelsLike}:</span>
                      <span className="font-medium">20°C</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>{t.humidity}:</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>{t.wind}:</span>
                      <span className="font-medium">12 km/h</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>{t.uvIndex}:</span>
                      <span className="font-medium">4 ({t.moderate})</span>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="text-xs text-gray-500 text-center">
                      {t.updated}: {new Date().toLocaleTimeString(currentLang === 'hr' ? 'hr-HR' : currentLang === 'en' ? 'en-US' : 'es-ES', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  {t.trending}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm hover:text-red-600 cursor-pointer">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
                    <span>Novi COVID soj</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm hover:text-red-600 cursor-pointer">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
                    <span>Promet A1 autocesta</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm hover:text-red-600 cursor-pointer">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
                    <span>Dubrovnik taksa</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm hover:text-red-600 cursor-pointer">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</span>
                    <span>Rukomet SP kvalifikacije</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm hover:text-red-600 cursor-pointer">
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">5</span>
                    <span>EU fondovi obnova</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Updates */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  {t.liveUpdates}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-red-600 pl-3">
                    <div className="font-medium">15:42</div>
                    <div className="text-gray-600">Premijer stigao u Sisak za obilazak područja pogođenih potresom</div>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <div className="font-medium">15:15</div>
                    <div className="text-gray-600">HAC: Promet se polako normalizira na A1</div>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <div className="font-medium">14:58</div>
                    <div className="text-gray-600">Zagrebačka burza: CROBEX porastao za 0.8%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ad Space */}
            <Card>
              <CardContent className="p-6 text-center bg-gray-100">
                <div className="text-gray-500 mb-2">Oglasni prostor</div>
                <div className="text-xs text-gray-400">300x250px</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">{t.aboutPortal}</h2>
          {isEditing ? (
            <Textarea
              value={newsData.description[currentLang]}
              onChange={(e) => updateLocalizedField('description', currentLang, e.target.value)}
              className="w-full h-32 mb-6"
              placeholder={t.portalDescription}
            />
          ) : (
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              {newsData.description[currentLang]}
            </p>
          )}
          <div className="flex justify-center gap-8 text-center">
            <div>
              {isEditing ? (
                <Input
                  value={newsData.yearsOperating}
                  onChange={(e) => updateField('yearsOperating', e.target.value)}
                  className="text-3xl font-bold mb-2 w-20 text-center"
                />
              ) : (
                <div className="text-3xl font-bold mb-2 text-red-600">{newsData.yearsOperating}+</div>
              )}
              <div className="text-lg">{t.yearsOperating}</div>
            </div>
            <div>
              {isEditing ? (
                <Input
                  value={newsData.journalistsEmployed}
                  onChange={(e) => updateField('journalistsEmployed', e.target.value)}
                  className="text-3xl font-bold mb-2 w-20 text-center"
                />
              ) : (
                <div className="text-3xl font-bold mb-2 text-red-600">{newsData.journalistsEmployed}+</div>
              )}
              <div className="text-lg">{t.journalistsEmployed}</div>
            </div>
            <div>
              {isEditing ? (
                <Input
                  value={newsData.articlesPublished}
                  onChange={(e) => updateField('articlesPublished', e.target.value)}
                  className="text-3xl font-bold mb-2 w-24 text-center"
                />
              ) : (
                <div className="text-3xl font-bold mb-2 text-red-600">{newsData.articlesPublished}+</div>
              )}
              <div className="text-lg">{t.articlesPublished}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.editorial}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsData.journalists[currentLang].map((journalist, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-red-600" />
                  </div>
                  <CardTitle>
                    {isEditing ? (
                      <Input
                        value={journalist.name}
                        onChange={(e) => {
                          const newJournalists = [...newsData.journalists[currentLang]];
                          newJournalists[index] = { ...newJournalists[index], name: e.target.value };
                          setNewsData(prev => ({
                            ...prev,
                            journalists: { ...prev.journalists, [currentLang]: newJournalists }
                          }));
                        }}
                        placeholder={t.journalistName}
                      />
                    ) : (
                      journalist.name
                    )}
                  </CardTitle>
                  <p className="text-red-600 font-semibold">
                    {isEditing ? (
                      <Input
                        value={journalist.position}
                        onChange={(e) => {
                          const newJournalists = [...newsData.journalists[currentLang]];
                          newJournalists[index] = { ...newJournalists[index], position: e.target.value };
                          setNewsData(prev => ({
                            ...prev,
                            journalists: { ...prev.journalists, [currentLang]: newJournalists }
                          }));
                        }}
                        className="text-center"
                      />
                    ) : (
                      journalist.position
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isEditing ? (
                      <Input
                        value={journalist.experience}
                        onChange={(e) => {
                          const newJournalists = [...newsData.journalists[currentLang]];
                          newJournalists[index] = { ...newJournalists[index], experience: e.target.value };
                          setNewsData(prev => ({
                            ...prev,
                            journalists: { ...prev.journalists, [currentLang]: newJournalists }
                          }));
                        }}
                        className="text-center text-sm"
                      />
                    ) : (
                      journalist.experience
                    )}
                  </p>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={journalist.description}
                      onChange={(e) => {
                        const newJournalists = [...newsData.journalists[currentLang]];
                        newJournalists[index] = { ...newJournalists[index], description: e.target.value };
                        setNewsData(prev => ({
                          ...prev,
                          journalists: { ...prev.journalists, [currentLang]: newJournalists }
                        }));
                      }}
                      placeholder={t.description}
                      className="h-20"
                    />
                  ) : (
                    <p className="text-gray-600 text-center">{journalist.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.contactInfo}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-red-600" />
                  {t.editorInChief}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={newsData.hostName}
                      onChange={(e) => updateField('hostName', e.target.value)}
                      placeholder={t.hostName}
                    />
                  ) : (
                    <span>{newsData.hostName}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={newsData.hostPhone}
                      onChange={(e) => updateField('hostPhone', e.target.value)}
                      placeholder={t.phoneNumber}
                    />
                  ) : (
                    <span>{newsData.hostPhone}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={newsData.hostEmail}
                      onChange={(e) => updateField('hostEmail', e.target.value)}
                      placeholder={t.emailAddress}
                    />
                  ) : (
                    <span>{newsData.hostEmail}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={newsData.website}
                      onChange={(e) => updateField('website', e.target.value)}
                      placeholder={t.website}
                    />
                  ) : (
                    <span>{newsData.website}</span>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.howToFindUs}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p>Google Maps</p>
                    <p className="text-sm">{newsData.location[currentLang]}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold">{t.findUsOn}:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-medium">Facebook:</span>
                      {isEditing ? (
                        <Input
                          value={newsData.facebookUrl}
                          onChange={(e) => updateField('facebookUrl', e.target.value)}
                          placeholder={t.facebookUrl}
                          className="flex-1"
                        />
                      ) : (
                        <span className="text-sm">{newsData.facebookUrl || "facebook.com/vijestidanas"}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-medium">Twitter:</span>
                      {isEditing ? (
                        <Input
                          value={newsData.twitterUrl}
                          onChange={(e) => updateField('twitterUrl', e.target.value)}
                          placeholder={t.twitterUrl}
                          className="flex-1"
                        />
                      ) : (
                        <span className="text-sm">{newsData.twitterUrl || "@vijestidanas"}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">{newsData.name[currentLang]}</h3>
              <p className="text-gray-400 text-sm">{t.footerText}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.categories}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{t.politics}</li>
                <li>{t.sports}</li>
                <li>{t.technology}</li>
                <li>{t.business}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">O nama</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Redakcija</li>
                <li>Kontakt</li>
                <li>Oglašavanje</li>
                <li>Uvjeti korištenja</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pratite nas</h4>
              <div className="flex gap-4">
                <Share2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Share2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Share2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
            © 2024 {newsData.name[currentLang]}. Sva prava zadržana.
          </div>
        </div>
      </footer>

      {/* Image Upload Dialog */}
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.changeBackground}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center">
              <Button variant="outline" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                {t.uploadFromComputer}
              </Button>
              <p className="text-sm text-gray-500 mt-2">{t.browseFiles}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">{t.or}</p>
              <Input
                placeholder={t.pasteImageUrl}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowImageDialog(false)}>
                {t.cancel}
              </Button>
              <Button onClick={handleImageUpload}>
                {t.useUrl}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
