import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Mountain, Scissors, UtensilsCrossed, Scale, Tractor, Briefcase, Newspaper, Zap, Music, Eye, ShoppingCart, Star } from "lucide-react";

// Language translations
const translations = {
  hr: {
    chooseTemplate: "Odaberite predložak webstranice Hrvatska",
    subtitle: "Odaberite tip web stranice koju želite, izvršite kupovinu, nakon izvršene kupovine naši agenti postaviti će stranicu za vas, ispuniti ju sadržajom te vam poslati finalnu web adresu",
    preview: "Pregledaj",
    buyNow: "Kupi sada",
    comingSoon: "Uskoro dostupno",
    vacationRental: "Kuća za odmor",
    vacationDescription: "Savršen predložak za kuće za odmor, vile i smještaj za turiste",
    hairstylist: "Frizerski salon",
    hairstylistDescription: "Elegantni predložak za frizere, kozmetičare i beauty salone",
    restaurant: "Restoran",
    restaurantDescription: "Ukusni predložak za restorane, kafiće i ugostiteljske objekte",
    lawyers: "Pravni ured",
    lawyersDescription: "Profesionalni predložak za odvjetnike, pravne firme i konzultante",
    farm: "Farma",
    farmDescription: "Rustikalni predložak za farme, poljoprivrednike i organske proizvode",
    employment: "Agencija za zapošljavanje",
    employmentDescription: "Profesionalni predložak za agencije za zapošljavanje i karijerne savjetnike",
    newsPortal: "Portal vijesti",
    newsPortalDescription: "Suvremeni predložak za portale vijesti, blogove i medijske stranice",
    electrician: "Elektricar",
    electricianDescription: "Profesionalni predložak za elektricarske usluge i elektrotehnicke firme",
    musician: "Glazbenik/DJ",
    musicianDescription: "Kreativni predložak za glazbenike, DJ-jeve i glazbene izvođače",
    features: "značajke",
    templates: "predlošci",
    available: "dostupno",
    discountText: "90% POPUST - Ograniceno vrijeme!",
    footerText: "2024 webstranice Hrvatska. Odaberite svoju savršenu stranicu, izvršite kupovinu, a ostalo prepustite nama.\n\nwebstranice Hrvatska pripada obrtu za digitalni marketing Social Animal OIB 12764208023"
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
    features: "features",
    templates: "templates",
    available: "available",
    discountText: "90% OFF - Limited Time!",
    footerText: "2024 websites Croatia. Choose your perfect website, make the purchase, and leave the rest to us."
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
    features: "características",
    templates: "plantillas",
    available: "disponible",
    discountText: "90% DESCUENTO - ¡Tiempo limitado!",
    footerText: "2024 sitios web Croacia. Elige tu sitio web perfecto, realiza la compra y deja el resto en nuestras manos."
  }
};

export default function Index() {
  const [currentLang, setCurrentLang] = useState<'hr' | 'en' | 'es'>('hr');
  const navigate = useNavigate();
  const t = translations[currentLang];

  const templates = [
    {
      id: 'vacation-rental',
      title: t.vacationRental,
      description: t.vacationDescription,
      icon: Mountain,
      image: "https://images.pexels.com/photos/7746463/pexels-photo-7746463.jpeg",
      route: "/vacation-house",
      available: true,
      features: [
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
      features: [
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
      features: [
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
      features: [
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
      features: [
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
      features: [
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
      features: [
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
      features: [
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
      features: [
        "Music portfolio showcase",
        "Audio player integration",
        "Video content display",
        "Event calendar",
        "SoundCloud integration"
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
      {/* Language Controls */}
      <div className="fixed top-4 right-4 z-50">
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.chooseTemplate}
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">9</div>
              <div className="text-gray-600 capitalize">{t.templates}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">9</div>
              <div className="text-gray-600 capitalize">{t.available}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">40+</div>
              <div className="text-gray-600 capitalize">{t.features}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {templates.map((template) => {
              const IconComponent = template.icon;
              return (
                <Card key={template.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${!template.available ? 'opacity-75' : ''}`}>
                  {!template.available && (
                    <Badge className="absolute top-4 right-4 z-10 bg-orange-500">
                      {t.comingSoon}
                    </Badge>
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
