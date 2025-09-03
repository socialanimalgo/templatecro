import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Mountain, Scissors, UtensilsCrossed, Scale, Tractor, Briefcase, Newspaper, Zap, Music, Eye, ShoppingCart, Star, Heart, Car, Droplets, Home, Dumbbell, Sparkles, Stethoscope, Calculator, TrendingUp, Clock, Users2, CheckCircle, Flame, Timer } from "lucide-react";

// Language translations
const translations = {
  hr: {
    chooseTemplate: "Web Stranice Hrvatska 🇭🇷",
    subtitle: "Kupite profesionalnu web stranicu za vaš obrt, tvrtku ili d.o.o. Izaberite između 13+ predložaka za restorane, hotele, frizere, odvjetnike, farme i više. Naš tim digitalnog marketinga postavlja internet stranicu za vas i ispunjava ju sadržajom!",
    preview: "Pregledaj",
    buyNow: "Kupi sada",
    comingSoon: "Uskoro dostupno",
    vacationRental: "Kuća za odmor",
    vacationDescription: "Internet stranica za apartmane, vile, kuće za odmor i turizam. Rezervacije online, foto galerija, kontakt - sve što trebate za turistički biznis u hrvatskoj!",
    hairstylist: "Frizerski salon",
    hairstylistDescription: "Web stranica za frizerski salon, beauty salon i kozmetičare. Online rezervacije, prikaz usluga, foto galerija - povećajte broj klijenata!",
    restaurant: "Restoran",
    restaurantDescription: "Profesionalna web stranica za restoran, kafić, pizzeria i ugostiteljstvo. Online jelovnik, rezervacija stolova, foto galerija jela!",
    lawyers: "Pravni ured",
    lawyersDescription: "Internet stranica za odvjetnike, pravne firme i pravne savjetnike. Prikaz usluga, kontakt forma, povećajte broj klijenata!",
    farm: "Farma",
    farmDescription: "Web stranica za poljoprivrednike, farme i organske proizvode. Prikaz proizvoda, kontakt, povećajte prodaju lokalnih proizvoda!",
    employment: "Agencija za zapošljavanje",
    employmentDescription: "Profesionalni predložak za agencije za zapošljavanje i karijerne savjetnike",
    newsPortal: "Portal vijesti",
    newsPortalDescription: "Suvremeni predložak za portale vijesti, blogove i medijske stranice",
    electrician: "Elektricar",
    electricianDescription: "Profesionalni predložak za elektricarske usluge i elektrotehnicke firme",
    musician: "Glazbenik/DJ",
    musicianDescription: "Kreativni predložak za glazbenike, DJ-jeve i glazbene izvođače",
    dentalClinic: "Zubna ordinacija",
    dentalClinicDescription: "Profesionalni predložak za stomatološke ordinacije i zubne klinike",
    autoRepairShop: "Autoservis",
    autoRepairShopDescription: "Kvalitetni predložak za autoservise i automehani\u010dare",
    plumber: "Vodoinstalater",
    plumberDescription: "Pouzdani predložak za vodoinstalaterne usluge i održavanje",
    realEstate: "Nekretnine",
    realEstateDescription: "Elegantni predložak za agencije za nekretnine i agente",
    fitnessGym: "Fitness Centar",
    fitnessGymDescription: "Motivacijski predložak za teretane i fitness centre",
    beautySalon: "Salon ljepote",
    beautySalonDescription: "Luksuzni predložak za salone ljepote i spa centre",
    medicalPractice: "Medicinska ordinacija",
    medicalPracticeDescription: "Profesionalni predložak za liječnike i ordinacije",
    accountingFirm: "Računovodstvo",
    accountingFirmDescription: "Pouzdani predložak za računovodstvene usluge",
    features: "značajke",
    templates: "predlošci",
    available: "dostupno",
    discountText: "90% POPUST - Ograniceno vrijeme!",
    footerText: "2024 Webstranice Hrvatska - Profesionalne Internet Stranice za Obrte i Tvrtke\n\n🏢 Digitalni marketing usluge za obrte, d.o.o. i tvrtke u Hrvatskoj\n🌐 Web stranica za restoran, hotel, frizerski salon, odvjetnike, farme, autoservis\n📍 Zagreb, Split, Rijeka, Osijek - svi gradovi Hrvatske\n💼 Social Animal - Digitalni Marketing OIB 12764208023\n\n#kupiinternetstranicu #webstranicahrvatska #digitalnimarketingzagreb #internetstranicaobrt #webstranicatvrtka #kupovniainternetstranice",
    recentlyPurchased: "nedavno kupljeno",
    minutesAgo: "min. prije",
    hoursAgo: "sati prije",
    testimonials: "Što kažu naši klijenti",
    successStories: "Priče o uspjehu",
    increasedBookings: "Povećanje rezervacija",
    moreCustomers: "Više kupaca",
    higherRevenue: "Veći prihod",
    limitedSpots: "Ograničen broj mjesta",
    onlyLeft: "samo preostalo",
    thisMonth: "ovaj mjesec",
    saleEndsIn: "Rasprodaja završava za",
    verifiedPurchase: "Potvrđena kupovina",
    businessOwner: "Vlasnik tvrtke"
  },
  en: {
    chooseTemplate: "Choose Your Template",
    subtitle: "Select the perfect template for your website",
    preview: "Preview",
    buyNow: "Buy Now",
    comingSoon: "Coming Soon",
    vacationRental: "Vacation Rental",
    vacationDescription: "Perfect template for vacation homes, villas, and tourist accommodations",
    hairstylist: "Hairstylist",
    hairstylistDescription: "Elegant template for hairstylists, beauticians, and beauty salons",
    restaurant: "Restaurant",
    restaurantDescription: "Delicious template for restaurants, cafes, and hospitality venues",
    lawyers: "Law Firm",
    lawyersDescription: "Professional template for lawyers, law firms, and legal consultants",
    farm: "Farm",
    farmDescription: "Rustic template for farms, agriculture, and organic produce",
    employment: "Employment Agency",
    employmentDescription: "Professional template for employment agencies and career consultants",
    newsPortal: "News Portal",
    newsPortalDescription: "Modern template for news portals, blogs and media websites",
    electrician: "Electrician",
    electricianDescription: "Professional template for electrical services and electrical contractors",
    musician: "Musician/DJ",
    musicianDescription: "Creative template for musicians, DJs, and music performers",
    dentalClinic: "Dental Clinic",
    dentalClinicDescription: "Professional template for dental clinics and dental practices",
    autoRepairShop: "Auto Repair Shop",
    autoRepairShopDescription: "Quality template for auto repair shops and mechanics",
    plumber: "Plumber",
    plumberDescription: "Reliable template for plumbing services and maintenance",
    realEstate: "Real Estate",
    realEstateDescription: "Elegant template for real estate agencies and agents",
    fitnessGym: "Fitness Gym",
    fitnessGymDescription: "Motivational template for gyms and fitness centers",
    beautySalon: "Beauty Salon",
    beautySalonDescription: "Luxurious template for beauty salons and spas",
    medicalPractice: "Medical Practice",
    medicalPracticeDescription: "Professional template for doctors and clinics",
    accountingFirm: "Accounting Firm",
    accountingFirmDescription: "Reliable template for accounting services",
    features: "features",
    templates: "templates",
    available: "available",
    discountText: "90% OFF - Limited Time!",
    footerText: "2024 websites Croatia. Choose your perfect website, make the purchase, and leave the rest to us.",
    recentlyPurchased: "recently purchased",
    minutesAgo: "min. ago",
    hoursAgo: "hours ago",
    testimonials: "What Our Clients Say",
    successStories: "Success Stories",
    increasedBookings: "Increased Bookings",
    moreCustomers: "More Customers",
    higherRevenue: "Higher Revenue",
    limitedSpots: "Limited Spots",
    onlyLeft: "only left",
    thisMonth: "this month",
    saleEndsIn: "Sale ends in",
    verifiedPurchase: "Verified Purchase",
    businessOwner: "Business Owner"
  },
  es: {
    chooseTemplate: "Elige tu plantilla",
    subtitle: "Selecciona la plantilla perfecta para tu sitio web",
    preview: "Vista previa",
    buyNow: "Comprar ahora",
    comingSoon: "Próximamente",
    vacationRental: "Alquiler vacacional",
    vacationDescription: "Plantilla perfecta para casas vacacionales, villas y alojamientos turísticos",
    hairstylist: "Peluquería",
    hairstylistDescription: "Plantilla elegante para peluqueros, esteticistas y salones de belleza",
    restaurant: "Restaurante",
    restaurantDescription: "Plantilla deliciosa para restaurantes, cafés y locales gastronómicos",
    lawyers: "Bufete de abogados",
    lawyersDescription: "Plantilla profesional para abogados, bufetes y consultores legales",
    farm: "Granja",
    farmDescription: "Plantilla rústica para granjas, agricultura y productos orgánicos",
    employment: "Agencia de Empleo",
    employmentDescription: "Plantilla profesional para agencias de empleo y consultores de carrera",
    newsPortal: "Portal de Noticias",
    newsPortalDescription: "Plantilla moderna para portales de noticias, blogs y sitios web de medios",
    electrician: "Electricista",
    electricianDescription: "Plantilla profesional para servicios eléctricos y contratistas eléctricos",
    musician: "Músico/DJ",
    musicianDescription: "Plantilla creativa para músicos, DJs y artistas musicales",
    dentalClinic: "Clínica Dental",
    dentalClinicDescription: "Plantilla profesional para clínicas dentales y consultorios odontológicos",
    autoRepairShop: "Taller Mecánico",
    autoRepairShopDescription: "Plantilla de calidad para talleres mecánicos y servicios automotrices",
    plumber: "Fontanero",
    plumberDescription: "Plantilla confiable para servicios de fontanería y mantenimiento",
    realEstate: "Inmobiliaria",
    realEstateDescription: "Plantilla elegante para agencias inmobiliarias y agentes",
    fitnessGym: "Gimnasio",
    fitnessGymDescription: "Plantilla motivacional para gimnasios y centros de fitness",
    beautySalon: "Salón de Belleza",
    beautySalonDescription: "Plantilla lujosa para salones de belleza y spas",
    medicalPractice: "Práctica Médica",
    medicalPracticeDescription: "Plantilla profesional para médicos y clínicas",
    accountingFirm: "Firma Contable",
    accountingFirmDescription: "Plantilla confiable para servicios contables",
    features: "características",
    templates: "plantillas",
    available: "disponible",
    discountText: "90% DESCUENTO - ¡Tiempo limitado!",
    footerText: "2024 sitios web Croacia. Elige tu sitio web perfecto, realiza la compra y deja el resto en nuestras manos.",
    recentlyPurchased: "comprado recientemente",
    minutesAgo: "min. atrás",
    hoursAgo: "horas atrás",
    testimonials: "Lo Que Dicen Nuestros Clientes",
    successStories: "Historias de Éxito",
    increasedBookings: "Más Reservas",
    moreCustomers: "Más Clientes",
    higherRevenue: "Mayores Ingresos",
    limitedSpots: "Lugares Limitados",
    onlyLeft: "solo quedan",
    thisMonth: "este mes",
    saleEndsIn: "La oferta termina en",
    verifiedPurchase: "Compra Verificada",
    businessOwner: "Dueño de Negocio"
  }
};

export default function Index() {
  const [currentLang, setCurrentLang] = useState<'hr' | 'en' | 'es'>('hr');
  const [recentPurchases, setRecentPurchases] = useState<Array<{id: string, name: string, template: string, timeAgo: string}>>([]);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const navigate = useNavigate();
  const t = translations[currentLang];

  // Customer testimonials data
  const testimonials = [
    {
      id: 1,
      name: currentLang === 'hr' ? "Marko Petrović" : "Marko Petrović",
      business: currentLang === 'hr' ? "Autoservis Zagreb" : "Auto Repair Zagreb",
      location: "Zagreb",
      template: currentLang === 'hr' ? "Autoservis" : "Auto Repair Shop",
      photo: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg",
      rating: 5,
      text: currentLang === 'hr' ? 
        "Nevjerojatan rezultat! Nakon što sam postavio web stranicu, broj poziva se povećao za 250%. Klijenti sada mogu vidjeti moje usluge online i to me izdvaja od konkurencije." :
        "Incredible results! After setting up the website, calls increased by 250%. Clients can now see my services online and it sets me apart from the competition.",
      metric: currentLang === 'hr' ? "250% više poziva" : "250% more calls",
      verified: true
    },
    {
      id: 2,
      name: currentLang === 'hr' ? "Dr. Ana Marić" : "Dr. Ana Marić",
      business: currentLang === 'hr' ? "Zubna ordinacija Smile" : "Smile Dental Clinic",
      location: "Split",
      template: currentLang === 'hr' ? "Zubna ordinacija" : "Dental Clinic",
      photo: "https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg",
      rating: 5,
      text: currentLang === 'hr' ? 
        "Fantastično! Pacijenti sada mogu rezervirati termine online 24/7. Moja ordinacija je uvijek puna, a administrativni posao se smanjio za 60%." :
        "Fantastic! Patients can now book appointments online 24/7. My clinic is always full, and administrative work reduced by 60%.",
      metric: currentLang === 'hr' ? "300% više rezervacija" : "300% more bookings",
      verified: true
    },
    {
      id: 3,
      name: currentLang === 'hr' ? "Petra Novak" : "Petra Novak",
      business: currentLang === 'hr' ? "Prime Nekretnine" : "Prime Real Estate",
      location: "Rijeka",
      template: currentLang === 'hr' ? "Nekretnine" : "Real Estate",
      photo: "https://images.pexels.com/photos/5668474/pexels-photo-5668474.jpeg",
      rating: 5,
      text: currentLang === 'hr' ? 
        "Web stranica mi je donijela 15 novih klijenata u prvom mjesecu! Vlasnici nekretnina sada direktno kontaktiraju mene umjesto agenciju." :
        "The website brought me 15 new clients in the first month! Property owners now contact me directly instead of the agency.",
      metric: currentLang === 'hr' ? "180% više klijenata" : "180% more clients",
      verified: true
    }
  ];

  // Simulate recent purchases
  const recentPurchaseData = [
    { name: "Luka M.", template: currentLang === 'hr' ? "Autoservis" : "Auto Repair", location: "Zagreb", timeAgo: "12" },
    { name: "Maja K.", template: currentLang === 'hr' ? "Frizerski salon" : "Hairstylist", location: "Split", timeAgo: "25" },
    { name: "Tomislav P.", template: currentLang === 'hr' ? "Zubna ordinacija" : "Dental Clinic", location: "Osijek", timeAgo: "38" },
    { name: "Iva S.", template: currentLang === 'hr' ? "Nekretnine" : "Real Estate", location: "Rijeka", timeAgo: "45" },
    { name: "Marko D.", template: currentLang === 'hr' ? "Vodoinstalater" : "Plumber", location: "Zadar", timeAgo: "67" }
  ];

  // Effect for recent purchases rotation
  React.useEffect(() => {
    let purchaseIndex = 0;
    const interval = setInterval(() => {
      const purchase = recentPurchaseData[purchaseIndex % recentPurchaseData.length];
      setRecentPurchases(prev => [{
        id: Date.now().toString(),
        name: purchase.name,
        template: purchase.template,
        timeAgo: purchase.timeAgo
      }, ...prev.slice(0, 2)]);
      purchaseIndex++;
    }, 8000);

    // Initial purchase
    const initialPurchase = recentPurchaseData[0];
    setRecentPurchases([{
      id: Date.now().toString(),
      name: initialPurchase.name,
      template: initialPurchase.template,
      timeAgo: initialPurchase.timeAgo
    }]);

    return () => clearInterval(interval);
  }, [currentLang]);

  // Countdown timer effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const templates = [
    {
      id: 'vacation-rental',
      title: t.vacationRental,
      description: t.vacationDescription,
      icon: Mountain,
      image: "https://images.pexels.com/photos/7746463/pexels-photo-7746463.jpeg",
      route: "/vacation-house",
      available: true,
      features: currentLang === 'hr' ? [
        "Višejezična podrška",
        "Foto galerija", 
        "Integracija rezervacija",
        "Kontakt forme",
        "Integracija karata"
      ] : [
        "Multi-language support",
        "Photo gallery",
        "Booking integration",
        "Contact forms",
        "Maps integration"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'hairstylist',
      title: t.hairstylist,
      description: t.hairstylistDescription,
      icon: Scissors,
      image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg",
      route: "/hairstylist-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz usluga",
        "Galerija prije/poslije",
        "Online rezervacije",
        "Profili stilista",
        "Prikaz cjenika"
      ] : [
        "Service showcase",
        "Before & after gallery",
        "Online booking",
        "Stylist profiles",
        "Price list display"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'restaurant',
      title: t.restaurant,
      description: t.restaurantDescription,
      icon: UtensilsCrossed,
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      route: "/restaurant-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz jelovnika",
        "Foto galerija",
        "Rezervacija stolova",
        "Lokacija i radno vrijeme",
        "Profili kuhara"
      ] : [
        "Menu showcase",
        "Photo gallery",
        "Table reservations",
        "Location & hours",
        "Chef profiles"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'lawyers',
      title: t.lawyers,
      description: t.lawyersDescription,
      icon: Scale,
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
      route: "/lawyers-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz područja rada",
        "Profili odvjetnika",
        "Rezultati slučajeva",
        "Rezervacija konzultacija",
        "Pravni resursi"
      ] : [
        "Practice areas showcase",
        "Lawyer profiles",
        "Case results",
        "Consultation booking",
        "Legal resources"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'farm',
      title: t.farm,
      description: t.farmDescription,
      icon: Tractor,
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      route: "/farm-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz proizvoda farme",
        "Sezonski kalendar",
        "Rezervacija posjeta farmi",
        "O farmi",
        "Galerija svježih proizvoda"
      ] : [
        "Farm products showcase",
        "Seasonal calendar",
        "Farm visit booking",
        "About the farm",
        "Fresh produce gallery"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'employment',
      title: t.employment,
      description: t.employmentDescription,
      icon: Briefcase,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      route: "/employment-agency-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Usluge zapošljavanja",
        "Karijersko savjetovanje",
        "Pomoć u pisanju CV-a",
        "Priprema za intervjue",
        "Praćenje zapošljavanja"
      ] : [
        "Talent acquisition services",
        "Career counseling",
        "CV writing assistance",
        "Interview preparation",
        "Job placement tracking"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'news-portal',
      title: t.newsPortal,
      description: t.newsPortalDescription,
      icon: Newspaper,
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      route: "/news-portal-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Najnovije vijesti",
        "Upravljanje člancima",
        "Kategorije i sekcije",
        "Profili uredništva",
        "Pretplata na biltene"
      ] : [
        "Breaking news ticker",
        "Article management",
        "Categories & sections",
        "Editorial team profiles",
        "Newsletter subscription"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'electrician',
      title: t.electrician,
      description: t.electricianDescription,
      icon: Zap,
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
      route: "/electrician-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz usluga",
        "Galerija projekata",
        "Hitni kontakt",
        "Svjedočanstva",
        "Prikaz certifikata"
      ] : [
        "Service showcase",
        "Project gallery",
        "Emergency contact",
        "Testimonials",
        "Certificate display"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'musician',
      title: t.musician,
      description: t.musicianDescription,
      icon: Music,
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
      route: "/musician-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz glazbenog portfolija",
        "Integracija audio playera",
        "Prikaz video sadržaja",
        "Kalendar događanja",
        "SoundCloud integracija"
      ] : [
        "Music portfolio showcase",
        "Audio player integration",
        "Video content display",
        "Event calendar",
        "SoundCloud integration"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'dental-clinic',
      title: t.dentalClinic,
      description: t.dentalClinicDescription,
      icon: Heart,
      image: "https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg",
      route: "/dental-clinic-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Prikaz usluga",
        "Profili doktora",
        "Rezervacija termina",
        "Prikaz radnog vremena",
        "Svjedočanstva pacijenata"
      ] : [
        "Service showcase",
        "Doctor profiles",
        "Appointment booking",
        "Working hours display",
        "Patient testimonials"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'auto-repair-shop',
      title: t.autoRepairShop,
      description: t.autoRepairShopDescription,
      icon: Car,
      image: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg",
      route: "/auto-repair-shop-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Katalog usluga",
        "Profili mehaničara",
        "Rezervacija servisa",
        "Prikaz dijelova",
        "Recenzije kupaca"
      ] : [
        "Service catalog",
        "Mechanic profiles",
        "Service booking",
        "Parts showcase",
        "Customer reviews"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'plumber',
      title: t.plumber,
      description: t.plumberDescription,
      icon: Droplets,
      image: "https://images.pexels.com/photos/8609034/pexels-photo-8609034.jpeg",
      route: "/plumber-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Hitne intervencije",
        "24/7 dostupnost",
        "Forma za usluge",
        "Prikaz tima",
        "Galerija radova"
      ] : [
        "Emergency service",
        "24/7 availability",
        "Service request form",
        "Team showcase",
        "Work gallery"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'real-estate',
      title: t.realEstate,
      description: t.realEstateDescription,
      icon: Home,
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      route: "/real-estate-site",
      available: true,
      features: currentLang === 'hr' ? [
        "Oglasi nekretnina",
        "Profili agenata",
        "Pretraživanje nekretnina",
        "Virtualne ture",
        "Analiza tržišta"
      ] : [
        "Property listings",
        "Agent profiles",
        "Property search",
        "Virtual tours",
        "Market analysis"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'fitness-gym',
      title: t.fitnessGym,
      description: t.fitnessGymDescription,
      icon: Dumbbell,
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      route: "/fitness-gym",
      available: true,
      features: currentLang === 'hr' ? [
        "Članarine i paketi",
        "Raspored treninga",
        "Profili trenera",
        "Galerija objekta",
        "Online rezervacije"
      ] : currentLang === 'en' ? [
        "Membership plans",
        "Class schedule",
        "Trainer profiles",
        "Facility gallery",
        "Online booking"
      ] : [
        "Planes de membresía",
        "Horario de clases",
        "Perfiles de entrenadores",
        "Galería de instalaciones",
        "Reserva en línea"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'beauty-salon',
      title: t.beautySalon,
      description: t.beautySalonDescription,
      icon: Sparkles,
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
      route: "/beauty-salon",
      available: true,
      features: currentLang === 'hr' ? [
        "Katalog usluga",
        "Spa paketi",
        "Tim stilista",
        "Galerija transformacija",
        "Rezervacija termina"
      ] : currentLang === 'en' ? [
        "Service catalog",
        "Spa packages",
        "Stylist team",
        "Transformation gallery",
        "Appointment booking"
      ] : [
        "Catálogo de servicios",
        "Paquetes de spa",
        "Equipo de estilistas",
        "Galería de transformaciones",
        "Reserva de citas"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'medical-practice',
      title: t.medicalPractice,
      description: t.medicalPracticeDescription,
      icon: Stethoscope,
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
      route: "/medical-practice",
      available: true,
      features: currentLang === 'hr' ? [
        "Medicinske usluge",
        "Profili doktora",
        "Radno vrijeme",
        "Osiguranja",
        "Zdravstveni savjeti"
      ] : currentLang === 'en' ? [
        "Medical services",
        "Doctor profiles",
        "Office hours",
        "Insurance accepted",
        "Health tips"
      ] : [
        "Servicios médicos",
        "Perfiles de doctores",
        "Horario de consulta",
        "Seguros aceptados",
        "Consejos de salud"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    },
    {
      id: 'accounting-firm',
      title: t.accountingFirm,
      description: t.accountingFirmDescription,
      icon: Calculator,
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",
      route: "/accounting-firm",
      available: true,
      features: currentLang === 'hr' ? [
        "Računovodstvene usluge",
        "Porezno planiranje",
        "Poslovni paketi",
        "Tim stručnjaka",
        "Klijentski portal"
      ] : currentLang === 'en' ? [
        "Accounting services",
        "Tax planning",
        "Business packages",
        "Expert team",
        "Client portal"
      ] : [
        "Servicios contables",
        "Planificación fiscal",
        "Paquetes empresariales",
        "Equipo experto",
        "Portal del cliente"
      ],
      price: "€49.99",
      originalPrice: "€499.99"
    }
  ];

  const handlePreview = (template: typeof templates[0]) => {
    if (template.available) {
      navigate(template.route);
    }
  };

  const handleBuyNow = (template: typeof templates[0]) => {
    if (template.available) {
      navigate(template.route);
      // Auto-click the purchase button after a short delay
      setTimeout(() => {
        const purchaseButton = document.querySelector('[data-testid="purchase-button"]');
        if (purchaseButton) {
          (purchaseButton as HTMLElement).click();
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/favicon.png" 
                alt="Logo" 
                className="w-10 h-10"
              />
              <div className="font-bold text-xl text-gray-900">
                {currentLang === 'hr' ? 'Webstranice Hrvatska' : 
                 currentLang === 'en' ? 'Websites Croatia' : 
                 'Sitios Web Croacia'}
              </div>
            </div>
            
            {/* Desktop Language Selector */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                onClick={() => setCurrentLang('hr')}
                variant={currentLang === 'hr' ? "default" : "ghost"}
                size="sm"
                className="text-lg px-3"
                title="Hrvatski"
              >
                🇭🇷
              </Button>
              <Button
                onClick={() => setCurrentLang('en')}
                variant={currentLang === 'en' ? "default" : "ghost"}
                size="sm"
                className="text-lg px-3"
                title="English"
              >
                🇬🇧
              </Button>
              <Button
                onClick={() => setCurrentLang('es')}
                variant={currentLang === 'es' ? "default" : "ghost"}
                size="sm"
                className="text-lg px-3"
                title="Español"
              >
                🇪🇸
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Recent Purchases Notifications */}
      {recentPurchases.map((purchase, index) => (
        <div
          key={purchase.id}
          className={`fixed bottom-4 left-4 z-40 bg-white rounded-lg shadow-lg border border-green-200 p-4 max-w-sm transition-all duration-500 ${
            index === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transform: `translateY(${index * -80}px)` }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{purchase.name}</span>
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {t.verifiedPurchase}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {t.recentlyPurchased} {purchase.template}
              </div>
              <div className="text-xs text-muted-foreground">
                <Clock className="w-3 h-3 inline mr-1" />
                {purchase.timeAgo} {t.minutesAgo}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Sale Countdown Timer */}
      <div className="fixed top-4 left-4 z-40 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-4 h-4 animate-pulse" />
          <span className="font-bold text-sm">{t.saleEndsIn}:</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xl">
          <div className="bg-white/20 rounded px-2 py-1">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-white/20 rounded px-2 py-1">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-white/20 rounded px-2 py-1">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      {/* Mobile Language Controls */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
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
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center px-4 pt-20 lg:pt-0 overflow-hidden">
        {/* Background Images - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 z-0">
          {/* Template Images as Background */}
          <div className="absolute top-10 left-10 w-64 h-40 rounded-lg overflow-hidden rotate-12 opacity-20">
            <img 
              src="https://images.pexels.com/photos/7746463/pexels-photo-7746463.jpeg" 
              alt="Template Background" 
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute top-20 right-20 w-56 h-36 rounded-lg overflow-hidden -rotate-6 opacity-25">
            <img 
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
              alt="Template Background" 
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute bottom-20 left-20 w-60 h-40 rounded-lg overflow-hidden -rotate-12 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg" 
              alt="Template Background" 
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute bottom-32 right-10 w-52 h-32 rounded-lg overflow-hidden rotate-6 opacity-25">
            <img 
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg" 
              alt="Template Background" 
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-lg overflow-hidden rotate-3 opacity-15">
            <img 
              src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
              alt="Template Background" 
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-58 h-36 rounded-lg overflow-hidden -rotate-3 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
              alt="Template Background" 
              className="w-full h-full object-cover blur-sm"
            />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8">
            {t.chooseTemplate}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-12 lg:mb-16">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">13</div>
              <div className="text-gray-600 capitalize font-medium">{t.templates}</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-green-600">13</div>
              <div className="text-gray-600 capitalize font-medium">{t.available}</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600">60+</div>
              <div className="text-gray-600 capitalize font-medium">{t.features}</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => {
              const templatesSection = document.querySelector('[data-templates-section]');
              templatesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg lg:text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {currentLang === 'hr' ? 'Pogledajte naše predloške' : 
             currentLang === 'en' ? 'View Our Templates' : 
             'Ver Nuestras Plantillas'}
          </Button>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLang === 'hr' ? 
                'Naši klijenti dijele svoje priče uspjeha i rezultate koje su postigli s našim predlošcima' :
                'Our clients share their success stories and results achieved with our templates'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-green-100">
                {/* Success Metric Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-green-600 text-white font-bold">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {testimonial.metric}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.template}
                      </Badge>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {t.verifiedPurchase}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Social Proof Numbers */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground capitalize">{t.businessOwner}a</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
                <div className="text-sm text-muted-foreground">{t.increasedBookings}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Zadovoljni klijenti' : 'Satisfied clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24h</div>
                <div className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Brzo postavljanje' : 'Quick setup'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section data-templates-section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {templates.map((template, index) => {
              const IconComponent = template.icon;
              const limitedSpots = Math.floor(Math.random() * 3) + 1; // 1-3 spots left
              const isPopular = [0, 3, 9, 10].includes(index); // Mark some as popular
              
              return (
                <Card key={template.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${!template.available ? 'opacity-75' : ''}`}>
                  {!template.available && (
                    <Badge className="absolute top-4 right-4 z-10 bg-orange-500">
                      {t.comingSoon}
                    </Badge>
                  )}
                  
                  {/* Popular Badge */}
                  {template.available && isPopular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <Flame className="w-3 h-3 mr-1" />
                      {currentLang === 'hr' ? 'Najpopularniji' : 'Most Popular'}
                    </Badge>
                  )}
                  
                  {/* Limited Spots Warning */}
                  {template.available && limitedSpots <= 2 && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="destructive" className="animate-pulse">
                        <Timer className="w-3 h-3 mr-1" />
                        {limitedSpots} {t.onlyLeft}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Template Preview Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                      {template.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {template.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Features List */}
                    <div className="space-y-2">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {template.features.length > 3 && (
                        <div className="text-sm text-muted-foreground">
                          +{template.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">5.0 (Perfect)</span>
                    </div>

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground line-through">
                        {template.originalPrice}
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {template.price}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        {t.discountText}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handlePreview(template)}
                        disabled={!template.available}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {t.preview}
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={() => handleBuyNow(template)}
                        disabled={!template.available}
                        data-testid="purchase-button"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {t.buyNow}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section - Hidden for Users but Visible to Search Engines */}
      <section className="sr-only">
        <h2>Kupi Internet Stranicu Hrvatska - Najbolja Cijena</h2>
        <p>Tražite gdje kupiti profesionalnu internet stranicu u Hrvatskoj? Webstranice.shop nudi najkvalitetnije web stranice za obrte, d.o.o. i tvrtke po najpovoljnijoj cijeni od samo €49.99!</p>
        
        <h3>Internet Stranica za Sve Vrste Biznisa</h3>
        <p>Web stranica za restoran Zagreb, internet stranica za frizerski salon Split, web stranica za odvjetnike Rijeka, internet stranica za autoservis Osijek, web stranica za stomatološku ordinaciju Zadar, web stranica za farmu Dubrovnik, internet stranica za nekretnine Pula.</p>
        
        <h3>Digitalni Marketing Usluge Hrvatska</h3>
        <p>Osim izrade web stranica nudimo i kompletne digitalni marketing usluge: SEO optimizacija, Google Ads kampanje, Facebook marketing, Instagram marketing, email marketing i više.</p>
        
        <h3>Zašto Odabrati Nas za Kupovinu Internet Stranice?</h3>
        <ul>
          <li>Najbolja cijena u hrvatskoj - €49.99</li>
          <li>Profesionalna web stranica gotova za 24 sata</li>
          <li>Tehnička podrška na hrvatskom jeziku</li>
          <li>13+ predložaka za različite djelatnosti</li>
          <li>Višejezična podrška (hrvatski, engleski, španjolski)</li>
          <li>Mobilna optimizacija uključena</li>
          <li>SEO optimizacija uključena</li>
          <li>Naš tim postavlja i ispunjava sadržajom</li>
        </ul>
        
        <p>Kupite internet stranicu danas i povećajte svoj biznis sutra! Kontaktirajte nas za besplatnu konzultaciju o digitalnom marketingu.</p>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-muted-foreground whitespace-pre-line">
            {t.footerText}
          </div>
        </div>
      </footer>
    </div>
  );
}
