import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Wifi, Car, Users, Coffee, Mountain, Trees, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft } from "lucide-react";

// Language translations
const translations = {
  hr: {
    editMode: "Uredi",
    previewMode: "Pregledaj",
    backToTemplates: "Natrag na predloške",
    changeBackground: "Promijeni pozadinu",
    uploadFromComputer: "Učitaj s računala",
    browseFiles: "Pregledaj datoteke",
    or: "ILI",
    pasteImageUrl: "Zalijepi URL slike",
    useUrl: "Koristi URL",
    cancel: "Odustani",
    propertyName: "Naziv nekretnine",
    location: "Lokacija",
    tagline: "Slogan",
    guests: "gostiju",
    bedrooms: "spavaćih soba",
    bathrooms: "kupaonih",
    aboutProperty: "O ovoj nekretnini",
    propertyDescription: "Opis nekretnine",
    amenitiesFeatures: "Sadržaji i mogućnosti",
    amenity: "Sadržaj",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    night: "noćenje",
    reviews: "recenzija",
    bookNow: "Rezerviraj sada",
    nearbyAttractions: "Obližnje atrakcije",
    attractionName: "Naziv atrakcije",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    yourHost: "Vaš domaćin",
    hostName: "Ime doma��ina",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Doživite ljepotu Like regije",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Tvrtka",
    companyOptional: "Tvrtka (neobavezno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako nas pronaći",
    delete: "Ukloni",
    addAmenity: "Dodaj sadržaj",
    findUsOn: "Pronađi nas na",
    airbnbUrl: "Airbnb URL",
    bookingUrl: "Booking.com URL",
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
    propertyName: "Property name",
    location: "Location",
    tagline: "Tagline",
    guests: "guests",
    bedrooms: "bedrooms",
    bathrooms: "bathrooms",
    aboutProperty: "About This Property",
    propertyDescription: "Property description",
    amenitiesFeatures: "Amenities & Features",
    amenity: "Amenity",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    pricing: "Pricing",
    night: "night",
    reviews: "reviews",
    bookNow: "Book Now",
    nearbyAttractions: "Nearby Attractions",
    attractionName: "Attraction name",
    description: "Description",
    contactInfo: "Contact Information",
    yourHost: "Your Host",
    hostName: "Host name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Experience the beauty of Lika region",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    companyOptional: "Company (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addAmenity: "Add amenity",
    findUsOn: "Find us on",
    airbnbUrl: "Airbnb URL",
    bookingUrl: "Booking.com URL",
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
    propertyName: "Nombre de propiedad",
    location: "Ubicación",
    tagline: "Eslogan",
    guests: "huéspedes",
    bedrooms: "dormitorios",
    bathrooms: "baños",
    aboutProperty: "Acerca de esta propiedad",
    propertyDescription: "Descripción de la propiedad",
    amenitiesFeatures: "Comodidades y características",
    amenity: "Comodidad",
    photoGallery: "Galería de fotos",
    imageDescription: "Descripción de imagen",
    pricing: "Precios",
    night: "noche",
    reviews: "reseñas",
    bookNow: "Reservar ahora",
    nearbyAttractions: "Atracciones cercanas",
    attractionName: "Nombre de atracción",
    description: "Descripción",
    contactInfo: "Información de contacto",
    yourHost: "Su anfitrión",
    hostName: "Nombre del anfitrión",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Experimenta la belleza de la región de Lika",
    buyWebsite: "Comprar sitio web",
    buyWebsiteTitle: "Comprar sitio web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Empresa",
    companyOptional: "Empresa (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addAmenity: "Agregar comodidad",
    findUsOn: "Encuéntranos en",
    airbnbUrl: "URL de Airbnb",
    bookingUrl: "URL de Booking.com",
    discountBadge: "(90% DESCUENTO!)"
  }
};

export default function VacationHouse() {
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
  const [propertyData, setPropertyData] = useState({
    name: {
      hr: "Villa Lika Paradise",
      en: "Villa Lika Paradise",
      es: "Villa Lika Paradise"
    },
    location: {
      hr: "Gospić, Ličko-senjska županija, Hrvatska",
      en: "Gospić, Lika-Senj County, Croatia",
      es: "Gospić, Condado de Lika-Senj, Croacia"
    },
    tagline: {
      hr: "Vaš savršeni planinski bijeg",
      en: "Your Perfect Mountain Getaway",
      es: "Su escapada perfecta a la montaña"
    },
    description: {
      hr: "Doživite ljepotu Like regije u ovoj prekrasnoj kući za odmor. Smještena u srcu planinske oaze Hrvatske, naša nekretnina nudi prekrasan pogled na planinski lanac Velebit i lagan pristup Nacionalnom parku Plitvička jezera.",
      en: "Experience the beauty of Lika region in this stunning vacation house. Nestled in the heart of Croatia's mountain paradise, our property offers breathtaking views of Velebit mountain range and easy access to Plitvice Lakes National Park.",
      es: "Experimenta la belleza de la región de Lika en esta impresionante casa de vacaciones. Ubicada en el corazón del paraíso montañoso de Croacia, nuestra propiedad ofrece vistas impresionantes de la cordillera Velebit y fácil acceso al Parque Nacional de los Lagos de Plitvice."
    },
    bedrooms: "4",
    bathrooms: "3",
    guests: "8",
    pricePerNight: "120",
    currency: "EUR",
    hostName: "Marina Kovač",
    hostPhone: "+385 91 234 5678",
    hostEmail: "marina@villalika.com",
    website: "www.villalika.com",
    airbnbUrl: "",
    bookingUrl: "",
    heroImage: "https://images.pexels.com/photos/7746463/pexels-photo-7746463.jpeg",
    amenities: {
      hr: [
        "Brzi WiFi",
        "Besplatno parkiranje",
        "Pogled na planine",
        "Kamin",
        "Kuhinja",
        "Vrt",
        "Balkon",
        "Roštilj"
      ],
      en: [
        "High-speed WiFi",
        "Free parking",
        "Mountain view",
        "Fireplace",
        "Kitchen",
        "Garden",
        "Balcony",
        "BBQ area"
      ],
      es: [
        "WiFi de alta velocidad",
        "Estacionamiento gratuito",
        "Vista a la montaña",
        "Chimenea",
        "Cocina",
        "Jardín",
        "Balcón",
        "Área de BBQ"
      ]
    },
    attractions: {
      hr: [
        { name: "Plitvička jezera", distance: "45 min vožnje", description: "UNESCO svjetska baština vodopada i jezera" },
        { name: "Park prirode Velebit", distance: "30 min vožnje", description: "Planinske staze i pustolovina" },
        { name: "Centar grada Gospić", distance: "10 min vožnje", description: "Lokalni restorani i kulturne znamenitosti" }
      ],
      en: [
        { name: "Plitvice Lakes", distance: "45 min drive", description: "UNESCO World Heritage waterfalls and lakes" },
        { name: "Velebit Nature Park", distance: "30 min drive", description: "Hiking trails and mountain adventures" },
        { name: "Gospić City Center", distance: "10 min drive", description: "Local restaurants and cultural sites" }
      ],
      es: [
        { name: "Lagos de Plitvice", distance: "45 min en coche", description: "Patrimonio Mundial UNESCO de cascadas y lagos" },
        { name: "Parque Natural Velebit", distance: "30 min en coche", description: "Senderos y aventuras de montaña" },
        { name: "Centro de Gospić", distance: "10 min en coche", description: "Restaurantes locales y sitios culturales" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/10511470/pexels-photo-10511470.jpeg",
        alt: {
          hr: "Vanjski pogled na villu",
          en: "Villa exterior view",
          es: "Vista exterior de la villa"
        }
      },
      {
        url: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg",
        alt: {
          hr: "Dnevni boravak s kaminom",
          en: "Living room with fireplace",
          es: "Sala de estar con chimenea"
        }
      },
      {
        url: "https://images.pexels.com/photos/6130068/pexels-photo-6130068.jpeg",
        alt: {
          hr: "Pogled na planine s balkona",
          en: "Mountain view from balcony",
          es: "Vista a la montaña desde el balcón"
        }
      },
      {
        url: "https://images.pexels.com/photos/27626177/pexels-photo-27626177.jpeg",
        alt: {
          hr: "Luksuzna terasa s bazenom",
          en: "Luxury terrace with pool",
          es: "Terraza de lujo con piscina"
        }
      },
      {
        url: "https://images.pexels.com/photos/19511050/pexels-photo-19511050.jpeg",
        alt: {
          hr: "Ugodna spavaća soba",
          en: "Cozy bedroom",
          es: "Dormitorio acogedor"
        }
      },
      {
        url: "https://images.pexels.com/photos/33590854/pexels-photo-33590854.jpeg",
        alt: {
          hr: "Vrt i vanjski prostor",
          en: "Garden and outdoor area",
          es: "Jardín y área exterior"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setPropertyData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setPropertyData(prev => ({
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

  const updateAmenity = (index: number, value: string) => {
    setPropertyData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [currentLang]: prev.amenities[currentLang].map((amenity, i) => i === index ? value : amenity)
      }
    }));
  };

  const updateAttraction = (index: number, field: string, value: string) => {
    setPropertyData(prev => ({
      ...prev,
      attractions: {
        ...prev.attractions,
        [currentLang]: prev.attractions[currentLang].map((attraction, i) =>
          i === index ? { ...attraction, [field]: value } : attraction
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setPropertyData(prev => ({
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
    const checkoutUrl = "https://buy.stripe.com/eVq3cwaNHaaKepY8NBdjO01";

    // Save current website state before redirecting to Stripe
    const websiteDataToSave = {
      propertyData: propertyData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(), // Store current time in milliseconds
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours from now
    };

    try {
      localStorage.setItem('savedWebsiteData', JSON.stringify(websiteDataToSave));
      console.log('Website data saved successfully for 24 hours');
      // Optional: Show a brief success message to user
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save website data:', error);
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

  // Function to retrieve saved website data
  const getSavedWebsiteData = () => {
    try {
      const savedData = localStorage.getItem('savedWebsiteData');
      if (!savedData) return null;

      const parsedData = JSON.parse(savedData);

      // Check if data has expired (older than 24 hours)
      if (Date.now() > parsedData.expiresAt) {
        localStorage.removeItem('savedWebsiteData');
        console.log('Saved website data has expired and was removed');
        return null;
      }

      return parsedData;
    } catch (error) {
      console.error('Failed to retrieve saved website data:', error);
      return null;
    }
  };

  // Function to clear saved website data
  const clearSavedWebsiteData = () => {
    try {
      localStorage.removeItem('savedWebsiteData');
      console.log('Saved website data cleared');
    } catch (error) {
      console.error('Failed to clear saved website data:', error);
    }
  };

  const deleteAmenity = (index: number) => {
    setPropertyData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [currentLang]: prev.amenities[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addAmenity = () => {
    setPropertyData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [currentLang]: [...prev.amenities[currentLang], t.amenity]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = propertyData.images.length;
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
          style={{ backgroundImage: `url('${propertyData.heroImage}')` }}
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

                  {/* File Upload Option */}
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

                  {/* Divider */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border"></div>
                    <span className="text-xs text-muted-foreground">{t.or}</span>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>

                  {/* URL Input Option */}
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
                  value={propertyData.name[currentLang]}
                  onChange={(e) => updateLocalizedField("name", e.target.value)}
                  className="text-3xl md:text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.propertyName}
                />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <Input
                    value={propertyData.location[currentLang]}
                    onChange={(e) => updateLocalizedField("location", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    placeholder={t.location}
                  />
                </div>
                <Input
                  value={propertyData.tagline[currentLang]}
                  onChange={(e) => updateLocalizedField("tagline", e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.tagline}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">{propertyData.name[currentLang]}</h1>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>{propertyData.location[currentLang]}</span>
                </div>
                <p className="text-xl opacity-90">{propertyData.tagline[currentLang]}</p>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={propertyData.guests}
                    onChange={(e) => updateField("guests", e.target.value)}
                    className="w-12 bg-transparent border-none p-0 text-center text-white"
                    placeholder="8"
                  />
                ) : (
                  propertyData.guests
                )} {t.guests}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {isEditing ? (
                  <Input
                    value={propertyData.bedrooms}
                    onChange={(e) => updateField("bedrooms", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="4"
                  />
                ) : (
                  propertyData.bedrooms
                )} {t.bedrooms}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {isEditing ? (
                  <Input
                    value={propertyData.bathrooms}
                    onChange={(e) => updateField("bathrooms", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="3"
                  />
                ) : (
                  propertyData.bathrooms
                )} {t.bathrooms}
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
            <h2 className="text-3xl font-bold mb-8">{t.aboutProperty}</h2>
            {isEditing ? (
              <Textarea
                value={propertyData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="min-h-32 text-lg"
                placeholder={t.propertyDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {propertyData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.amenitiesFeatures}</h2>
            {isEditing && (
              <Button onClick={addAmenity} size="sm" variant="outline">
                <Coffee className="w-4 h-4 mr-2" />
                {t.addAmenity}
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {propertyData.amenities[currentLang].map((amenity, index) => (
              <Card key={index} className="text-center p-6 relative">
                {isEditing && (
                  <Button
                    onClick={() => deleteAmenity(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {index === 0 && <Wifi className="w-6 h-6 text-primary" />}
                    {index === 1 && <Car className="w-6 h-6 text-primary" />}
                    {index === 2 && <Mountain className="w-6 h-6 text-primary" />}
                    {index === 3 && <Coffee className="w-6 h-6 text-primary" />}
                    {index >= 4 && <Trees className="w-6 h-6 text-primary" />}
                  </div>
                  {isEditing ? (
                    <Input
                      value={amenity}
                      onChange={(e) => updateAmenity(index, e.target.value)}
                      className="text-center"
                      placeholder={t.amenity}
                    />
                  ) : (
                    <p className="font-medium">{amenity}</p>
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
            {propertyData.images.map((image, index) => (
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
                src={propertyData.images[selectedImageIndex]?.url}
                alt={propertyData.images[selectedImageIndex]?.alt[currentLang]}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Navigation Arrows */}
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

              {/* Close Button */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setShowImageModal(false)}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-center">{propertyData.images[selectedImageIndex]?.alt[currentLang]}</p>
                <p className="text-center text-sm opacity-70">
                  {selectedImageIndex + 1} / {propertyData.images.length}
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
                        value={propertyData.pricePerNight}
                        onChange={(e) => updateField("pricePerNight", e.target.value)}
                        className="w-24 text-center text-4xl font-bold"
                        placeholder="120"
                      />
                      <Input
                        value={propertyData.currency}
                        onChange={(e) => updateField("currency", e.target.value)}
                        className="w-20 text-center text-4xl font-bold"
                        placeholder="EUR"
                      />
                    </div>
                  ) : (
                    `${propertyData.pricePerNight} ${propertyData.currency}`
                  )}
                  <span className="text-lg text-muted-foreground font-normal">/ {t.night}</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-muted-foreground">4.9 (127 {t.reviews})</span>
                </div>
                <Button size="lg" className="w-full">
                  {t.bookNow}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.nearbyAttractions}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {propertyData.attractions[currentLang].map((attraction, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <Input
                        value={attraction.name}
                        onChange={(e) => updateAttraction(index, "name", e.target.value)}
                        placeholder={t.attractionName}
                      />
                    ) : (
                      attraction.name
                    )}
                  </CardTitle>
                  <Badge variant="outline">
                    {isEditing ? (
                      <Input
                        value={attraction.distance}
                        onChange={(e) => updateAttraction(index, "distance", e.target.value)}
                        className="w-20 text-xs"
                        placeholder="45 min"
                      />
                    ) : (
                      attraction.distance
                    )}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={attraction.description}
                      onChange={(e) => updateAttraction(index, "description", e.target.value)}
                      placeholder={t.description}
                      className="min-h-20"
                    />
                  ) : (
                    <p className="text-muted-foreground">{attraction.description}</p>
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
                    <h3 className="font-semibold mb-2">{t.yourHost}</h3>
                    {isEditing ? (
                      <Input
                        value={propertyData.hostName}
                        onChange={(e) => updateField("hostName", e.target.value)}
                        placeholder={t.hostName}
                        className="text-center"
                      />
                    ) : (
                      <p className="text-lg">{propertyData.hostName}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={propertyData.hostPhone}
                          onChange={(e) => updateField("hostPhone", e.target.value)}
                          placeholder={t.phoneNumber}
                        />
                      ) : (
                        <span>{propertyData.hostPhone}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={propertyData.hostEmail}
                          onChange={(e) => updateField("hostEmail", e.target.value)}
                          placeholder={t.emailAddress}
                        />
                      ) : (
                        <span>{propertyData.hostEmail}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={propertyData.website}
                          onChange={(e) => updateField("website", e.target.value)}
                          placeholder={t.website}
                        />
                      ) : (
                        <span>{propertyData.website}</span>
                      )}
                    </div>

                    {/* Airbnb URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c1.665 0 3.017 1.352 3.017 3.017s-1.352 3.017-3.017 3.017-3.017-1.352-3.017-3.017S10.335 0 12 0zm-1.241 8.276c.7-.7 1.782-.7 2.482 0l8.741 8.741c.7.7.7 1.782 0 2.482l-3.741 3.741c-.7.7-1.782.7-2.482 0L12 19.481l-3.759 3.759c-.7.7-1.782.7-2.482 0L2.018 19.5c-.7-.7-.7-1.782 0-2.482l8.741-8.742z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={propertyData.airbnbUrl}
                          onChange={(e) => updateField("airbnbUrl", e.target.value)}
                          placeholder={t.airbnbUrl}
                        />
                      ) : (
                        propertyData.airbnbUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(propertyData.airbnbUrl, '_blank')}
                            className="text-red-500 hover:text-red-600 border-red-200 hover:border-red-300"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c1.665 0 3.017 1.352 3.017 3.017s-1.352 3.017-3.017 3.017-3.017-1.352-3.017-3.017S10.335 0 12 0zm-1.241 8.276c.7-.7 1.782-.7 2.482 0l8.741 8.741c.7.7.7 1.782 0 2.482l-3.741 3.741c-.7.7-1.782.7-2.482 0L12 19.481l-3.759 3.759c-.7.7-1.782.7-2.482 0L2.018 19.5c-.7-.7-.7-1.782 0-2.482l8.741-8.742z"/>
                            </svg>
                            Airbnb
                          </Button>
                        ) : null
                      )}
                    </div>

                    {/* Booking.com URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 4v16h18V4H3zm2 2h14v12H5V6zm2 2v8h3.5c1.5 0 2.5-1 2.5-2.5 0-.8-.4-1.5-1-2 .6-.5 1-1.2 1-2 0-1.5-1-2.5-2.5-2.5H7zm2 1.5h2c.3 0 .5.2.5.5s-.2.5-.5.5H9V9.5zm0 3h2.5c.6 0 1 .4 1 1s-.4 1-1 1H9v-2z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={propertyData.bookingUrl}
                          onChange={(e) => updateField("bookingUrl", e.target.value)}
                          placeholder={t.bookingUrl}
                        />
                      ) : (
                        propertyData.bookingUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(propertyData.bookingUrl, '_blank')}
                            className="text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3 4v16h18V4H3zm2 2h14v12H5V6zm2 2v8h3.5c1.5 0 2.5-1 2.5-2.5 0-.8-.4-1.5-1-2 .6-.5 1-1.2 1-2 0-1.5-1-2.5-2.5-2.5H7zm2 1.5h2c.3 0 .5.2.5.5s-.2.5-.5.5H9V9.5zm0 3h2.5c.6 0 1 .4 1 1s-.4 1-1 1H9v-2z"/>
                            </svg>
                            Booking.com
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
                    {/* Map shows the location from hero section */}
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <iframe
                        src={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodeURIComponent(propertyData.location[currentLang])}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
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
                        📍 {propertyData.location[currentLang]}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(propertyData.location[currentLang])}`, '_blank')}
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
            © 2024 {propertyData.name[currentLang]}. {t.footerText}.
          </p>
        </div>
      </footer>
    </div>
  );
}
