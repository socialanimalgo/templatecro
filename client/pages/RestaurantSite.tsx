import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, UtensilsCrossed, Clock, Users, Coffee, Wine, ChefHat, Heart, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft } from "lucide-react";

// Language translations
const translations = {
  hr: {
    editMode: "Uredi",
    previewMode: "Pregledaj",
    backToTemplates: "Natrag na predložke",
    changeBackground: "Promijeni pozadinu",
    uploadFromComputer: "Učitaj s računala",
    browseFiles: "Pregledaj datoteke",
    or: "ILI",
    pasteImageUrl: "Zalijepi URL slike",
    useUrl: "Koristi URL",
    cancel: "Odustani",
    restaurantName: "Naziv restorana",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOpen: "godina rada",
    chefs: "kuhara",
    dishes: "jela",
    aboutRestaurant: "O našem restoranu",
    restaurantDescription: "Opis restorana",
    ourMenu: "Naš jelovnik",
    dish: "Jelo",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    dish_unit: "jelo",
    reviews: "recenzija",
    bookTable: "Rezerviraj stol",
    ourChefs: "Naši kuhari",
    chefName: "Ime kuhara",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headChef: "Glavni kuhar",
    hostName: "Ime kuhara",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Gdje se okus susreće s tradicijom",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Restoran",
    companyOptional: "Restoran (neobavezno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako nas pronaći",
    delete: "Ukloni",
    addDish: "Dodaj jelo",
    findUsOn: "Pronađi nas na",
    airbnbUrl: "Instagram URL",
    bookingUrl: "Facebook URL",
    discountBadge: "(90% POPUST!)"
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
    restaurantName: "Restaurant name",
    location: "Location",
    tagline: "Tagline",
    yearsOpen: "years open",
    chefs: "chefs",
    dishes: "dishes",
    aboutRestaurant: "About Our Restaurant",
    restaurantDescription: "Restaurant description",
    ourMenu: "Our Menu",
    dish: "Dish",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    pricing: "Pricing",
    dish_unit: "dish",
    reviews: "reviews",
    bookTable: "Reserve Table",
    ourChefs: "Our Chefs",
    chefName: "Chef name",
    description: "Description",
    contactInfo: "Contact Information",
    headChef: "Head Chef",
    hostName: "Chef name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Where taste meets tradition",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Restaurant",
    companyOptional: "Restaurant (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addDish: "Add dish",
    findUsOn: "Find us on",
    airbnbUrl: "Instagram URL",
    bookingUrl: "Facebook URL",
    discountBadge: "(90% OFF!)"
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
    restaurantName: "Nombre del restaurante",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOpen: "años abierto",
    chefs: "chefs",
    dishes: "platos",
    aboutRestaurant: "Sobre nuestro restaurante",
    restaurantDescription: "Descripción del restaurante",
    ourMenu: "Nuestro menú",
    dish: "Plato",
    photoGallery: "Galería de fotos",
    imageDescription: "Descripción de imagen",
    pricing: "Precios",
    dish_unit: "plato",
    reviews: "reseñas",
    bookTable: "Reservar mesa",
    ourChefs: "Nuestros chefs",
    chefName: "Nombre del chef",
    description: "Descripción",
    contactInfo: "Información de contacto",
    headChef: "Chef principal",
    hostName: "Nombre del chef",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Donde el sabor se encuentra con la tradición",
    buyWebsite: "Comprar sitio web",
    buyWebsiteTitle: "Comprar sitio web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Restaurante",
    companyOptional: "Restaurante (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addDish: "Agregar plato",
    findUsOn: "Encuéntranos en",
    airbnbUrl: "URL de Instagram",
    bookingUrl: "URL de Facebook",
    discountBadge: "(90% DESCUENTO!)"
  }
};

export default function RestaurantSite() {
  const navigate = useNavigate();
  // Language and UI state
  const [currentLang, setCurrentLang] = useState<'hr' | 'en' | 'es'>('hr');
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [purchaseData, setPurchaseData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: ""
  });

  const t = translations[currentLang];

  // State for all editable content
  const [restaurantData, setRestaurantData] = useState({
    name: {
      hr: "Restoran Dubrovnik",
      en: "Restaurant Dubrovnik", 
      es: "Restaurante Dubrovnik"
    },
    location: {
      hr: "Dubrovnik, Hrvatska",
      en: "Dubrovnik, Croatia",
      es: "Dubrovnik, Croacia"
    },
    tagline: {
      hr: "Autentični okusi Mediterana",
      en: "Authentic Mediterranean flavors",
      es: "Sabores mediterráneos auténticos"
    },
    description: {
      hr: "Dobrodošli u Restoran Dubrovnik, gdje tradicija susreće modernu gastronomiju. Naša kuhinja slavi bogatu kulinarsku baštinu Dalmacije, koristenajsvježije lokalne sastojke i tradicionalne recepte prenošene kroz generacije. Uživajte u nezaboravnim okusima uz prekrasan pogled na stari grad.",
      en: "Welcome to Restaurant Dubrovnik, where tradition meets modern gastronomy. Our kitchen celebrates the rich culinary heritage of Dalmatia, using the freshest local ingredients and traditional recipes passed down through generations. Enjoy unforgettable flavors with a beautiful view of the old town.",
      es: "Bienvenido al Restaurante Dubrovnik, donde la tradición se encuentra con la gastronomía moderna. Nuestra cocina celebra el rico patrimonio culinario de Dalmacia, utilizando los ingredientes locales más frescos y recetas tradicionales transmitidas a través de generaciones. Disfruta de sabores inolvidables con una hermosa vista del casco antiguo."
    },
    yearsOpen: "25",
    chefsCount: "4",
    dishesCount: "35",
    averagePrice: "25",
    currency: "EUR",
    hostName: "Mario Petrović",
    hostPhone: "+385 20 123 456",
    hostEmail: "mario@dubrovnikrestaurant.com",
    website: "www.dubrovnikrestaurant.com",
    airbnbUrl: "",
    bookingUrl: "",
    heroImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    menu: {
      hr: [
        "Crni rižot s lignjama",
        "Pašticada s njokima",
        "Brudet od ribe",
        "Peka od hobotnice",
        "Grah sa školjkama",
        "Dubrovačka rozata",
        "Grilled sea bass",
        "Dalmatinski pršut"
      ],
      en: [
        "Black squid risotto",
        "Pašticada with gnocchi",
        "Fish stew",
        "Octopus peka",
        "Bean stew with mussels",
        "Dubrovnik rozata",
        "Grilled sea bass",
        "Dalmatian prosciutto"
      ],
      es: [
        "Risotto negro con calamar",
        "Pašticada con ñoquis",
        "Guiso de pescado",
        "Pulpo peka",
        "Guiso de frijoles con mejillones",
        "Rozata de Dubrovnik",
        "Lubina a la parrilla",
        "Prosciutto dálmata"
      ]
    },
    chefs: {
      hr: [
        { name: "Mario Petrović", specialty: "Glavni kuhar", description: "25+ godina iskustva u mediteranskoj kuhinji" },
        { name: "Ana Lukić", specialty: "Sous chef", description: "Specijalist za tradicionalna dalmatinska jela" },
        { name: "Nikola Vujić", specialty: "Pastry chef", description: "Ekspert za tradicijske dalmatinske deserte" }
      ],
      en: [
        { name: "Mario Petrović", specialty: "Head Chef", description: "25+ years experience in Mediterranean cuisine" },
        { name: "Ana Lukić", specialty: "Sous Chef", description: "Specialist in traditional Dalmatian dishes" },
        { name: "Nikola Vujić", specialty: "Pastry Chef", description: "Expert in traditional Dalmatian desserts" }
      ],
      es: [
        { name: "Mario Petrović", specialty: "Chef principal", description: "25+ años de experiencia en cocina mediterránea" },
        { name: "Ana Lukić", specialty: "Sous chef", description: "Especialista en platos dálmatas tradicionales" },
        { name: "Nikola Vujić", specialty: "Chef pastelero", description: "Experto en postres dálmatas tradicionales" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        alt: {
          hr: "Elegantni restoran interijer",
          en: "Elegant restaurant interior",
          es: "Interior elegante del restaurante"
        }
      },
      {
        url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
        alt: {
          hr: "Svježa morska hrana",
          en: "Fresh seafood",
          es: "Mariscos frescos"
        }
      },
      {
        url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        alt: {
          hr: "Kuhar priprema jelo",
          en: "Chef preparing dish",
          es: "Chef preparando plato"
        }
      },
      {
        url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
        alt: {
          hr: "Luksuzno poslužavanje",
          en: "Luxury dining experience",
          es: "Experiencia culinaria de lujo"
        }
      },
      {
        url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        alt: {
          hr: "Terasa s pogledom",
          en: "Terrace with view",
          es: "Terraza con vista"
        }
      },
      {
        url: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg",
        alt: {
          hr: "Tradicionalna jela",
          en: "Traditional dishes",
          es: "Platos tradicionales"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setRestaurantData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setRestaurantData(prev => ({
      ...prev,
      [field]: {
        ...prev[field as keyof typeof prev],
        [currentLang]: value
      }
    }));
  };

  const handleImageUpload = () => {
    if (imageUrl.trim()) {
      updateField("heroImage", imageUrl);
      setImageUrl("");
      setShowImageUpload(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updateField("heroImage", result);
        setShowImageUpload(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateMenuItem = (index: number, value: string) => {
    setRestaurantData(prev => ({
      ...prev,
      menu: {
        ...prev.menu,
        [currentLang]: prev.menu[currentLang].map((item, i) => i === index ? value : item)
      }
    }));
  };

  const updateChef = (index: number, field: string, value: string) => {
    setRestaurantData(prev => ({
      ...prev,
      chefs: {
        ...prev.chefs,
        [currentLang]: prev.chefs[currentLang].map((chef, i) =>
          i === index ? { ...chef, [field]: value } : chef
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setRestaurantData(prev => ({
      ...prev,
      images: prev.images.map((image, i) =>
        i === index ? {
          ...image,
          alt: { ...image.alt, [currentLang]: value }
        } : image
      )
    }));
  };

  const handlePurchase = () => {
    const checkoutUrl = ""; // Will be provided later
    
    // Save current website state before redirecting to Stripe
    const websiteDataToSave = {
      restaurantData: restaurantData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours from now
    };
    
    try {
      localStorage.setItem('savedRestaurantData', JSON.stringify(websiteDataToSave));
      console.log('Restaurant website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save restaurant website data:', error);
      alert('Warning: Could not save website data. Please try again.');
    }

    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
    } else {
      alert('Checkout link will be available soon!');
    }

    setShowPurchaseModal(false);
  };

  const updatePurchaseField = (field: string, value: string) => {
    setPurchaseData(prev => ({ ...prev, [field]: value }));
  };

  const deleteMenuItem = (index: number) => {
    setRestaurantData(prev => ({
      ...prev,
      menu: {
        ...prev.menu,
        [currentLang]: prev.menu[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addMenuItem = () => {
    setRestaurantData(prev => ({
      ...prev,
      menu: {
        ...prev.menu,
        [currentLang]: [...prev.menu[currentLang], t.dish]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = restaurantData.images.length;
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? totalImages - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === totalImages - 1 ? 0 : prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Language and Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 shadow-lg"
          title={t.backToTemplates}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToTemplates}
        </Button>
        {/* Language Flags */}
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

        {/* Purchase Button */}
        <Dialog open={showPurchaseModal} onOpenChange={setShowPurchaseModal}>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="sm"
              className="shadow-lg bg-green-600 hover:bg-green-700 text-white"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t.buyWebsite}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.buyWebsiteTitle}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{t.purchaseDetails}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t.firstName}</Label>
                  <Input
                    id="firstName"
                    value={purchaseData.firstName}
                    onChange={(e) => updatePurchaseField("firstName", e.target.value)}
                    placeholder={t.firstName}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t.lastName}</Label>
                  <Input
                    id="lastName"
                    value={purchaseData.lastName}
                    onChange={(e) => updatePurchaseField("lastName", e.target.value)}
                    placeholder={t.lastName}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">{t.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={purchaseData.email}
                  onChange={(e) => updatePurchaseField("email", e.target.value)}
                  placeholder={t.emailAddress}
                />
              </div>

              <div>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input
                  id="phone"
                  value={purchaseData.phone}
                  onChange={(e) => updatePurchaseField("phone", e.target.value)}
                  placeholder={t.phoneNumber}
                />
              </div>

              <div>
                <Label htmlFor="company">{t.companyOptional}</Label>
                <Input
                  id="company"
                  value={purchaseData.company}
                  onChange={(e) => updatePurchaseField("company", e.target.value)}
                  placeholder={t.companyOptional}
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handlePurchase} className="flex-1 bg-green-600 hover:bg-green-700">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                      <span className="line-through text-xs opacity-75">€499.99</span>
                      <span className="font-bold">{t.purchase} - €49.99</span>
                    </div>
                    <span className="text-xs">{t.discountBadge}</span>
                  </div>
                </Button>
                <Button variant="outline" onClick={() => setShowPurchaseModal(false)}>
                  {t.cancel}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit/Preview Toggle */}
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "default" : "outline"}
          size="sm"
          className="shadow-lg"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing ? t.previewMode : t.editMode}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${restaurantData.heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Image Upload Interface */}
        {isEditing && (
          <div className="absolute top-4 left-4 z-20">
            {showImageUpload ? (
              <Card className="p-4 w-80">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{t.changeBackground}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowImageUpload(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.uploadFromComputer}</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="hero-image-upload"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => document.getElementById('hero-image-upload')?.click()}
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        {t.browseFiles}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border"></div>
                    <span className="text-xs text-muted-foreground">{t.or}</span>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.pasteImageUrl}</label>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleImageUpload()}
                    />
                    <Button onClick={handleImageUpload} size="sm" className="w-full" disabled={!imageUrl.trim()}>
                      <Globe className="w-4 h-4 mr-2" />
                      {t.useUrl}
                    </Button>
                  </div>

                  <Button variant="outline" size="sm" onClick={() => setShowImageUpload(false)} className="w-full">
                    {t.cancel}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Button
                onClick={() => setShowImageUpload(true)}
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                {t.changeBackground}
              </Button>
            )}
          </div>
        )}

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            {isEditing ? (
              <div className="space-y-4">
                <Input
                  value={restaurantData.name[currentLang]}
                  onChange={(e) => updateLocalizedField("name", e.target.value)}
                  className="text-3xl md:text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.restaurantName}
                />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <Input
                    value={restaurantData.location[currentLang]}
                    onChange={(e) => updateLocalizedField("location", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    placeholder={t.location}
                  />
                </div>
                <Input
                  value={restaurantData.tagline[currentLang]}
                  onChange={(e) => updateLocalizedField("tagline", e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.tagline}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">{restaurantData.name[currentLang]}</h1>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>{restaurantData.location[currentLang]}</span>
                </div>
                <p className="text-xl opacity-90">{restaurantData.tagline[currentLang]}</p>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={restaurantData.yearsOpen}
                    onChange={(e) => updateField("yearsOpen", e.target.value)}
                    className="w-12 bg-transparent border-none p-0 text-center text-white"
                    placeholder="25"
                  />
                ) : (
                  restaurantData.yearsOpen
                )} {t.yearsOpen}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <ChefHat className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={restaurantData.chefsCount}
                    onChange={(e) => updateField("chefsCount", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="4"
                  />
                ) : (
                  restaurantData.chefsCount
                )} {t.chefs}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <UtensilsCrossed className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={restaurantData.dishesCount}
                    onChange={(e) => updateField("dishesCount", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="35"
                  />
                ) : (
                  restaurantData.dishesCount
                )} {t.dishes}
              </Badge>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t.aboutRestaurant}</h2>
            {isEditing ? (
              <Textarea
                value={restaurantData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="min-h-32 text-lg"
                placeholder={t.restaurantDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {restaurantData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.ourMenu}</h2>
            {isEditing && (
              <Button onClick={addMenuItem} size="sm" variant="outline">
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                {t.addDish}
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {restaurantData.menu[currentLang].map((dish, index) => (
              <Card key={index} className="text-center p-6 relative">
                {isEditing && (
                  <Button
                    onClick={() => deleteMenuItem(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {index === 0 && <UtensilsCrossed className="w-6 h-6 text-primary" />}
                    {index === 1 && <ChefHat className="w-6 h-6 text-primary" />}
                    {index === 2 && <Coffee className="w-6 h-6 text-primary" />}
                    {index === 3 && <Wine className="w-6 h-6 text-primary" />}
                    {index >= 4 && <Heart className="w-6 h-6 text-primary" />}
                  </div>
                  {isEditing ? (
                    <Input
                      value={dish}
                      onChange={(e) => updateMenuItem(index, e.target.value)}
                      className="text-center"
                      placeholder={t.dish}
                    />
                  ) : (
                    <p className="font-medium">{dish}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.photoGallery}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {restaurantData.images.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <div
                  className="relative aspect-video bg-muted cursor-pointer"
                  onClick={() => !isEditing && openImageModal(index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt[currentLang]}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  {!isEditing && (
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  {isEditing && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="text-white text-center space-y-2 p-4">
                        <Input
                          value={image.alt[currentLang]}
                          onChange={(e) => updateImage(index, e.target.value)}
                          className="text-xs"
                          placeholder={t.imageDescription}
                        />
                      </div>
                    </div>
                  )}
                </div>
                {!isEditing && (
                  <CardContent className="p-3">
                    <p className="text-sm text-muted-foreground">{image.alt[currentLang]}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Image Popup Modal */}
        <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
          <DialogContent className="max-w-4xl w-full p-0">
            <div className="relative">
              <img
                src={restaurantData.images[selectedImageIndex]?.url}
                alt={restaurantData.images[selectedImageIndex]?.alt[currentLang]}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                onClick={() => navigateImage('prev')}
              >
                ←
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => navigateImage('next')}
              >
                →
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setShowImageModal(false)}
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-center">{restaurantData.images[selectedImageIndex]?.alt[currentLang]}</p>
                <p className="text-center text-sm opacity-70">
                  {selectedImageIndex + 1} / {restaurantData.images.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t.pricing}</h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-4">
                  {isEditing ? (
                    <div className="flex items-center justify-center gap-2">
                      <Input
                        value={restaurantData.averagePrice}
                        onChange={(e) => updateField("averagePrice", e.target.value)}
                        className="w-24 text-center text-4xl font-bold"
                        placeholder="25"
                      />
                      <Input
                        value={restaurantData.currency}
                        onChange={(e) => updateField("currency", e.target.value)}
                        className="w-20 text-center text-4xl font-bold"
                        placeholder="EUR"
                      />
                    </div>
                  ) : (
                    `${restaurantData.averagePrice} ${restaurantData.currency}`
                  )}
                  <span className="text-lg text-muted-foreground font-normal">/ {t.dish_unit}</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-muted-foreground">4.8 (156 {t.reviews})</span>
                </div>
                <Button size="lg" className="w-full">
                  {t.bookTable}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chef Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.ourChefs}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {restaurantData.chefs[currentLang].map((chef, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <Input
                        value={chef.name}
                        onChange={(e) => updateChef(index, "name", e.target.value)}
                        placeholder={t.chefName}
                      />
                    ) : (
                      chef.name
                    )}
                  </CardTitle>
                  <Badge variant="outline">
                    {isEditing ? (
                      <Input
                        value={chef.specialty}
                        onChange={(e) => updateChef(index, "specialty", e.target.value)}
                        className="w-32 text-xs"
                        placeholder="Specialty"
                      />
                    ) : (
                      chef.specialty
                    )}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={chef.description}
                      onChange={(e) => updateChef(index, "description", e.target.value)}
                      placeholder={t.description}
                      className="min-h-20"
                    />
                  ) : (
                    <p className="text-muted-foreground">{chef.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">{t.contactInfo}</h2>
              <Card className="p-8">
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t.headChef}</h3>
                    {isEditing ? (
                      <Input
                        value={restaurantData.hostName}
                        onChange={(e) => updateField("hostName", e.target.value)}
                        placeholder={t.hostName}
                        className="text-center"
                      />
                    ) : (
                      <p className="text-lg">{restaurantData.hostName}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={restaurantData.hostPhone}
                          onChange={(e) => updateField("hostPhone", e.target.value)}
                          placeholder={t.phoneNumber}
                        />
                      ) : (
                        <span>{restaurantData.hostPhone}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={restaurantData.hostEmail}
                          onChange={(e) => updateField("hostEmail", e.target.value)}
                          placeholder={t.emailAddress}
                        />
                      ) : (
                        <span>{restaurantData.hostEmail}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={restaurantData.website}
                          onChange={(e) => updateField("website", e.target.value)}
                          placeholder={t.website}
                        />
                      ) : (
                        <span>{restaurantData.website}</span>
                      )}
                    </div>

                    {/* Instagram URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={restaurantData.airbnbUrl}
                          onChange={(e) => updateField("airbnbUrl", e.target.value)}
                          placeholder={t.airbnbUrl}
                        />
                      ) : (
                        restaurantData.airbnbUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(restaurantData.airbnbUrl, '_blank')}
                            className="text-pink-500 hover:text-pink-600 border-pink-200 hover:border-pink-300"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Instagram
                          </Button>
                        ) : null
                      )}
                    </div>

                    {/* Facebook URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={restaurantData.bookingUrl}
                          onChange={(e) => updateField("bookingUrl", e.target.value)}
                          placeholder={t.bookingUrl}
                        />
                      ) : (
                        restaurantData.bookingUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(restaurantData.bookingUrl, '_blank')}
                            className="text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </Button>
                        ) : null
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">{t.howToFindUs}</h2>
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodeURIComponent(restaurantData.location[currentLang])}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        📍 {restaurantData.location[currentLang]}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantData.location[currentLang])}`, '_blank')}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 {restaurantData.name[currentLang]}. {t.footerText}.
          </p>
        </div>
      </footer>
    </div>
  );
}
