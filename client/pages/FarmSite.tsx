import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Tractor, Clock, Users, Wheat, Carrot, Leaf, Sun, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft } from "lucide-react";

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
    farmName: "Naziv farme",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOperating: "godina rada",
    farmersEmployed: "radnika",
    productsOffered: "proizvoda",
    aboutFarm: "O našoj farmi",
    farmDescription: "Opis farme",
    ourProducts: "Naši proizvodi",
    product: "Proizvod",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    visitFarm: "Posjeti farmu",
    perVisit: "posjeta",
    reviews: "recenzija",
    bookVisit: "Rezerviraj posjetu",
    farmTeam: "Naš tim",
    farmerName: "Ime farmera",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    farmOwner: "Vlasnik farme",
    hostName: "Ime farmera",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Odgovorno uzgajamo zdravu hranu",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Farma",
    companyOptional: "Farma (neobavezno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako nas pronaći",
    delete: "Ukloni",
    addProduct: "Dodaj proizvod",
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
    farmName: "Farm name",
    location: "Location",
    tagline: "Tagline",
    yearsOperating: "years operating",
    farmersEmployed: "farmers",
    productsOffered: "products",
    aboutFarm: "About Our Farm",
    farmDescription: "Farm description",
    ourProducts: "Our Products",
    product: "Product",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    visitFarm: "Farm Visit",
    perVisit: "per visit",
    reviews: "reviews",
    bookVisit: "Book Farm Visit",
    farmTeam: "Our Farm Team",
    farmerName: "Farmer name",
    description: "Description",
    contactInfo: "Contact Information",
    farmOwner: "Farm Owner",
    hostName: "Farmer name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Responsibly growing healthy food",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Farm",
    companyOptional: "Farm (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addProduct: "Add product",
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
    farmName: "Nombre de la granja",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOperating: "años operando",
    farmersEmployed: "granjeros",
    productsOffered: "productos",
    aboutFarm: "Sobre nuestra granja",
    farmDescription: "Descripción de la granja",
    ourProducts: "Nuestros productos",
    product: "Producto",
    photoGallery: "Galería de fotos",
    imageDescription: "Descripción de imagen",
    visitFarm: "Visita a la granja",
    perVisit: "por visita",
    reviews: "reseñas",
    bookVisit: "Reservar visita",
    farmTeam: "Nuestro equipo",
    farmerName: "Nombre del granjero",
    description: "Descripción",
    contactInfo: "Información de contacto",
    farmOwner: "Propietario de la granja",
    hostName: "Nombre del granjero",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Cultivando alimentos saludables responsablemente",
    buyWebsite: "Comprar sitio web",
    buyWebsiteTitle: "Comprar sitio web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Granja",
    companyOptional: "Granja (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addProduct: "Agregar producto",
    findUsOn: "Encuéntranos en",
    airbnbUrl: "URL de Instagram",
    bookingUrl: "URL de Facebook",
    discountBadge: "(90% DESCUENTO!)"
  }
};

export default function FarmSite() {
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
  const [farmData, setFarmData] = useState({
    name: {
      hr: "Eco Farma Zeleni Raj",
      en: "Green Paradise Eco Farm", 
      es: "Granja Ecológica Paraíso Verde"
    },
    location: {
      hr: "Slavonski Brod, Hrvatska",
      en: "Slavonski Brod, Croatia",
      es: "Slavonski Brod, Croacia"
    },
    tagline: {
      hr: "Prirodno uzgojena hrana za zdraviji život",
      en: "Naturally grown food for a healthier life",
      es: "Alimentos cultivados naturalmente para una vida más saludable"
    },
    description: {
      hr: "Dobrodošli na Eco Farmu Zeleni Raj, gdje tradicija susreće održivost. Naša obiteljska farma postoji već tri generacije, posvećena uzgoju najkvalitetnijih organskih proizvoda. Na 50 hektara plodne slavonske zemlje uzgajamo sezonsko voće i povrće bez uporabe pesticida i umjetnih gnojiva.",
      en: "Welcome to Green Paradise Eco Farm, where tradition meets sustainability. Our family farm has existed for three generations, dedicated to growing the highest quality organic produce. On 50 hectares of fertile Slavonian land, we grow seasonal fruits and vegetables without using pesticides and artificial fertilizers.",
      es: "Bienvenido a la Granja Ecológica Paraíso Verde, donde la tradición se encuentra con la sostenibilidad. Nuestra granja familiar existe desde hace tres generaciones, dedicada a cultivar productos orgánicos de la más alta calidad. En 50 hectáreas de tierra fértil de Eslavonia, cultivamos frutas y verduras de temporada sin usar pesticidas ni fertilizantes artificiales."
    },
    yearsOperating: "45",
    farmersEmployed: "12",
    productsOffered: "25",
    visitPrice: "10",
    currency: "EUR",
    hostName: "Marko Petrović",
    hostPhone: "+385 35 123 456",
    hostEmail: "marko@ecofarma-zelenraj.hr",
    website: "www.ecofarma-zelenraj.hr",
    airbnbUrl: "",
    bookingUrl: "",
    heroImage: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
    products: {
      hr: [
        "Organski rajčice",
        "Sezonsko povrće",
        "Voćni sokovi",
        "Med iz vlastitog košnja",
        "Svjež salata mix",
        "Organski krumpir",
        "Domaći sir",
        "Svježa jaja"
      ],
      en: [
        "Organic tomatoes",
        "Seasonal vegetables",
        "Fresh fruit juices",
        "Honey from our hives",
        "Fresh salad mix",
        "Organic potatoes",
        "Homemade cheese",
        "Fresh eggs"
      ],
      es: [
        "Tomates orgánicos",
        "Verduras de temporada",
        "Jugos de frutas frescas",
        "Miel de nuestras colmenas",
        "Mezcla de ensaladas frescas",
        "Papas orgánicas",
        "Queso casero",
        "Huevos frescos"
      ]
    },
    farmers: {
      hr: [
        { name: "Marko Petrović", specialty: "Vlasnik farme", description: "Treća generacija uzgajivača organskih proizvoda" },
        { name: "Ana Petrović", specialty: "Stručnjak za bilje", description: "Magistar poljoprivrede s 15 godina iskustva" },
        { name: "Josip Marić", specialty: "Pčelar", description: "Odgovoran za održavanje 20 košnica na farmi" }
      ],
      en: [
        { name: "Marko Petrović", specialty: "Farm Owner", description: "Third generation organic produce grower" },
        { name: "Ana Petrović", specialty: "Plant Specialist", description: "Agricultural science master with 15 years experience" },
        { name: "Josip Marić", specialty: "Beekeeper", description: "Responsible for maintaining 20 beehives on the farm" }
      ],
      es: [
        { name: "Marko Petrović", specialty: "Propietario de la granja", description: "Cultivador de productos orgánicos de tercera generación" },
        { name: "Ana Petrović", specialty: "Especialista en plantas", description: "Máster en ciencias agrícolas con 15 años de experiencia" },
        { name: "Josip Marić", specialty: "Apicultor", description: "Responsable del mantenimiento de 20 colmenas en la granja" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg",
        alt: {
          hr: "Organski vrt s povrćem",
          en: "Organic vegetable garden",
          es: "Huerto orgánico de verduras"
        }
      },
      {
        url: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg",
        alt: {
          hr: "Svježe ubrani rajčice",
          en: "Freshly harvested tomatoes",
          es: "Tomates recién cosechados"
        }
      },
      {
        url: "https://images.pexels.com/photos/2252311/pexels-photo-2252311.jpeg",
        alt: {
          hr: "Farmer na traktoru",
          en: "Farmer on tractor",
          es: "Granjero en tractor"
        }
      },
      {
        url: "https://images.pexels.com/photos/4750313/pexels-photo-4750313.jpeg",
        alt: {
          hr: "Pčelinje košnice",
          en: "Bee hives",
          es: "Colmenas de abejas"
        }
      },
      {
        url: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg",
        alt: {
          hr: "Berba sezonskog voća",
          en: "Seasonal fruit harvest",
          es: "Cosecha de frutas de temporada"
        }
      },
      {
        url: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg",
        alt: {
          hr: "Prodaja na farmerskom tržištu",
          en: "Farmers market stand",
          es: "Puesto de mercado de agricultores"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setFarmData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setFarmData(prev => ({
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

  const updateProduct = (index: number, value: string) => {
    setFarmData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [currentLang]: prev.products[currentLang].map((product, i) => i === index ? value : product)
      }
    }));
  };

  const updateFarmer = (index: number, field: string, value: string) => {
    setFarmData(prev => ({
      ...prev,
      farmers: {
        ...prev.farmers,
        [currentLang]: prev.farmers[currentLang].map((farmer, i) =>
          i === index ? { ...farmer, [field]: value } : farmer
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setFarmData(prev => ({
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
      farmData: farmData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours from now
    };
    
    try {
      localStorage.setItem('savedFarmData', JSON.stringify(websiteDataToSave));
      console.log('Farm website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save farm website data:', error);
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

  const deleteProduct = (index: number) => {
    setFarmData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [currentLang]: prev.products[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addProduct = () => {
    setFarmData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [currentLang]: [...prev.products[currentLang], t.product]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = farmData.images.length;
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
          style={{ backgroundImage: `url('${farmData.heroImage}')` }}
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
                  value={farmData.name[currentLang]}
                  onChange={(e) => updateLocalizedField("name", e.target.value)}
                  className="text-3xl md:text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.farmName}
                />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <Input
                    value={farmData.location[currentLang]}
                    onChange={(e) => updateLocalizedField("location", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    placeholder={t.location}
                  />
                </div>
                <Input
                  value={farmData.tagline[currentLang]}
                  onChange={(e) => updateLocalizedField("tagline", e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.tagline}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">{farmData.name[currentLang]}</h1>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>{farmData.location[currentLang]}</span>
                </div>
                <p className="text-xl opacity-90">{farmData.tagline[currentLang]}</p>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={farmData.yearsOperating}
                    onChange={(e) => updateField("yearsOperating", e.target.value)}
                    className="w-12 bg-transparent border-none p-0 text-center text-white"
                    placeholder="45"
                  />
                ) : (
                  farmData.yearsOperating
                )} {t.yearsOperating}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={farmData.farmersEmployed}
                    onChange={(e) => updateField("farmersEmployed", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="12"
                  />
                ) : (
                  farmData.farmersEmployed
                )} {t.farmersEmployed}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Wheat className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={farmData.productsOffered}
                    onChange={(e) => updateField("productsOffered", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="25"
                  />
                ) : (
                  farmData.productsOffered
                )} {t.productsOffered}
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
            <h2 className="text-3xl font-bold mb-8">{t.aboutFarm}</h2>
            {isEditing ? (
              <Textarea
                value={farmData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="min-h-32 text-lg"
                placeholder={t.farmDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {farmData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.ourProducts}</h2>
            {isEditing && (
              <Button onClick={addProduct} size="sm" variant="outline">
                <Carrot className="w-4 h-4 mr-2" />
                {t.addProduct}
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {farmData.products[currentLang].map((product, index) => (
              <Card key={index} className="text-center p-6 relative">
                {isEditing && (
                  <Button
                    onClick={() => deleteProduct(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {index === 0 && <Carrot className="w-6 h-6 text-primary" />}
                    {index === 1 && <Leaf className="w-6 h-6 text-primary" />}
                    {index === 2 && <Sun className="w-6 h-6 text-primary" />}
                    {index === 3 && <Wheat className="w-6 h-6 text-primary" />}
                    {index >= 4 && <Tractor className="w-6 h-6 text-primary" />}
                  </div>
                  {isEditing ? (
                    <Input
                      value={product}
                      onChange={(e) => updateProduct(index, e.target.value)}
                      className="text-center"
                      placeholder={t.product}
                    />
                  ) : (
                    <p className="font-medium">{product}</p>
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
            {farmData.images.map((image, index) => (
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
                src={farmData.images[selectedImageIndex]?.url}
                alt={farmData.images[selectedImageIndex]?.alt[currentLang]}
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
                <p className="text-center">{farmData.images[selectedImageIndex]?.alt[currentLang]}</p>
                <p className="text-center text-sm opacity-70">
                  {selectedImageIndex + 1} / {farmData.images.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Farm Visit Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t.visitFarm}</h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-4">
                  {isEditing ? (
                    <div className="flex items-center justify-center gap-2">
                      <Input
                        value={farmData.visitPrice}
                        onChange={(e) => updateField("visitPrice", e.target.value)}
                        className="w-24 text-center text-4xl font-bold"
                        placeholder="10"
                      />
                      <Input
                        value={farmData.currency}
                        onChange={(e) => updateField("currency", e.target.value)}
                        className="w-20 text-center text-4xl font-bold"
                        placeholder="EUR"
                      />
                    </div>
                  ) : (
                    `${farmData.visitPrice} ${farmData.currency}`
                  )}
                  <span className="text-lg text-muted-foreground font-normal">/ {t.perVisit}</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-muted-foreground">4.8 (167 {t.reviews})</span>
                </div>
                <Button size="lg" className="w-full">
                  {t.bookVisit}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farm Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.farmTeam}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {farmData.farmers[currentLang].map((farmer, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tractor className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <Input
                        value={farmer.name}
                        onChange={(e) => updateFarmer(index, "name", e.target.value)}
                        placeholder={t.farmerName}
                      />
                    ) : (
                      farmer.name
                    )}
                  </CardTitle>
                  <Badge variant="outline">
                    {isEditing ? (
                      <Input
                        value={farmer.specialty}
                        onChange={(e) => updateFarmer(index, "specialty", e.target.value)}
                        className="w-32 text-xs"
                        placeholder="Specialty"
                      />
                    ) : (
                      farmer.specialty
                    )}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={farmer.description}
                      onChange={(e) => updateFarmer(index, "description", e.target.value)}
                      placeholder={t.description}
                      className="min-h-20"
                    />
                  ) : (
                    <p className="text-muted-foreground">{farmer.description}</p>
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
                    <h3 className="font-semibold mb-2">{t.farmOwner}</h3>
                    {isEditing ? (
                      <Input
                        value={farmData.hostName}
                        onChange={(e) => updateField("hostName", e.target.value)}
                        placeholder={t.hostName}
                        className="text-center"
                      />
                    ) : (
                      <p className="text-lg">{farmData.hostName}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={farmData.hostPhone}
                          onChange={(e) => updateField("hostPhone", e.target.value)}
                          placeholder={t.phoneNumber}
                        />
                      ) : (
                        <span>{farmData.hostPhone}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={farmData.hostEmail}
                          onChange={(e) => updateField("hostEmail", e.target.value)}
                          placeholder={t.emailAddress}
                        />
                      ) : (
                        <span>{farmData.hostEmail}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={farmData.website}
                          onChange={(e) => updateField("website", e.target.value)}
                          placeholder={t.website}
                        />
                      ) : (
                        <span>{farmData.website}</span>
                      )}
                    </div>

                    {/* Instagram URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={farmData.airbnbUrl}
                          onChange={(e) => updateField("airbnbUrl", e.target.value)}
                          placeholder={t.airbnbUrl}
                        />
                      ) : (
                        farmData.airbnbUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(farmData.airbnbUrl, '_blank')}
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
                          value={farmData.bookingUrl}
                          onChange={(e) => updateField("bookingUrl", e.target.value)}
                          placeholder={t.bookingUrl}
                        />
                      ) : (
                        farmData.bookingUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(farmData.bookingUrl, '_blank')}
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
                        src={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodeURIComponent(farmData.location[currentLang])}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
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
                        📍 {farmData.location[currentLang]}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(farmData.location[currentLang])}`, '_blank')}
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
            © 2024 {farmData.name[currentLang]}. {t.footerText}.
          </p>
        </div>
      </footer>
    </div>
  );
}
