import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Scale, Clock, Users, FileText, Gavel, Shield, Award, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft } from "lucide-react";

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
    firmName: "Naziv pravnog ureda",
    location: "Lokacija",
    tagline: "Slogan",
    yearsExperience: "godina iskustva",
    lawyers: "odvjetnika",
    practiceAreas: "područja prakse",
    aboutFirm: "O našem uredu",
    firmDescription: "Opis pravnog ureda",
    ourPracticeAreas: "Naša područja prakse",
    practiceArea: "Područje prakse",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    consultation: "Konzultacije",
    hour: "sat",
    reviews: "recenzija",
    bookConsultation: "Rezerviraj konzultaciju",
    ourTeam: "Naš tim",
    lawyerName: "Ime odvjetnika",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    managingPartner: "Glavni partner",
    hostName: "Ime odvjetnika",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Vaša prava su naša prioriteta",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Pravni ured",
    companyOptional: "Pravni ured (neobavezno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako nas pronaći",
    delete: "Ukloni",
    addPracticeArea: "Dodaj područje prakse",
    findUsOn: "Pronađi nas na",
    airbnbUrl: "LinkedIn URL",
    bookingUrl: "Twitter URL"
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
    firmName: "Law firm name",
    location: "Location",
    tagline: "Tagline",
    yearsExperience: "years experience",
    lawyers: "lawyers",
    practiceAreas: "practice areas",
    aboutFirm: "About Our Firm",
    firmDescription: "Law firm description",
    ourPracticeAreas: "Our Practice Areas",
    practiceArea: "Practice Area",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    consultation: "Consultation",
    hour: "hour",
    reviews: "reviews",
    bookConsultation: "Book Consultation",
    ourTeam: "Our Team",
    lawyerName: "Lawyer name",
    description: "Description",
    contactInfo: "Contact Information",
    managingPartner: "Managing Partner",
    hostName: "Lawyer name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Your rights are our priority",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Law Firm",
    companyOptional: "Law Firm (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addPracticeArea: "Add practice area",
    findUsOn: "Find us on",
    airbnbUrl: "LinkedIn URL",
    bookingUrl: "Twitter URL"
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
    firmName: "Nombre del bufete",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsExperience: "años de experiencia",
    lawyers: "abogados",
    practiceAreas: "áreas de práctica",
    aboutFirm: "Sobre nuestro bufete",
    firmDescription: "Descripción del bufete",
    ourPracticeAreas: "Nuestras áreas de práctica",
    practiceArea: "Área de práctica",
    photoGallery: "Galería de fotos",
    imageDescription: "Descripción de imagen",
    consultation: "Consulta",
    hour: "hora",
    reviews: "reseñas",
    bookConsultation: "Reservar consulta",
    ourTeam: "Nuestro equipo",
    lawyerName: "Nombre del abogado",
    description: "Descripción",
    contactInfo: "Información de contacto",
    managingPartner: "Socio director",
    hostName: "Nombre del abogado",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Tus derechos son nuestra prioridad",
    buyWebsite: "Comprar sitio web",
    buyWebsiteTitle: "Comprar sitio web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Bufete",
    companyOptional: "Bufete (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addPracticeArea: "Agregar área de práctica",
    findUsOn: "Encuéntranos en",
    airbnbUrl: "URL de LinkedIn",
    bookingUrl: "URL de Twitter"
  }
};

export default function LawyersSite() {
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
  const [firmData, setFirmData] = useState({
    name: {
      hr: "Pravni ured Kovač & Partneri",
      en: "Kovač & Partners Law Firm", 
      es: "Bufete Kovač y Socios"
    },
    location: {
      hr: "Zagreb, Hrvatska",
      en: "Zagreb, Croatia",
      es: "Zagreb, Croacia"
    },
    tagline: {
      hr: "Vaša prava su naša misija",
      en: "Your rights are our mission",
      es: "Tus derechos son nuestra misión"
    },
    description: {
      hr: "Dobrodošli u Pravni ured Kovač & Partneri, gdje stručnost susreće posvećenost. S preko 20 godina iskustva u pravnoj profesiji, naš tim vrhunskih odvjetnika posvećen je pružanju iznimnih pravnih usluga našim klijentima. Specijalizirani smo za različita područja prava i ponosni smo na naš uspjeh u zastupanju klijenata.",
      en: "Welcome to Kovač & Partners Law Firm, where expertise meets dedication. With over 20 years of experience in the legal profession, our team of top-tier lawyers is committed to providing exceptional legal services to our clients. We specialize in various areas of law and take pride in our success in representing clients.",
      es: "Bienvenido al Bufete Kovač y Socios, donde la experiencia se encuentra con la dedicación. Con más de 20 años de experiencia en la profesión legal, nuestro equipo de abogados de primer nivel está comprometido con brindar servicios legales excepcionales a nuestros clientes. Nos especializamos en varias áreas del derecho y nos enorgullecemos de nuestro éxito representando clientes."
    },
    yearsExperience: "20",
    lawyersCount: "8",
    practiceAreasCount: "12",
    consultationFee: "150",
    currency: "EUR",
    hostName: "Dr. Marija Kovač",
    hostPhone: "+385 1 234 5678",
    hostEmail: "marija@kovacpartners.hr",
    website: "www.kovacpartners.hr",
    airbnbUrl: "",
    bookingUrl: "",
    heroImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    practiceAreas: {
      hr: [
        "Trgovačko pravo",
        "Obiteljsko pravo",
        "Kazneno pravo",
        "Nekretnine",
        "Radni odnosi",
        "Intelektualno vlasništvo",
        "Bankovno pravo",
        "Europsko pravo"
      ],
      en: [
        "Commercial Law",
        "Family Law",
        "Criminal Law",
        "Real Estate",
        "Employment Law",
        "Intellectual Property",
        "Banking Law",
        "European Law"
      ],
      es: [
        "Derecho comercial",
        "Derecho familiar",
        "Derecho penal",
        "Bienes raíces",
        "Derecho laboral",
        "Propiedad intelectual",
        "Derecho bancario",
        "Derecho europeo"
      ]
    },
    lawyers: {
      hr: [
        { name: "Dr. Marija Kovač", specialty: "Glavni partner", description: "20+ godina iskustva u trgovačkom pravu" },
        { name: "Dr. Petar Novak", specialty: "Partner", description: "Specijalist za obiteljsko i nasljedno pravo" },
        { name: "Ana Jurić, LLM", specialty: "Senior odvjetnica", description: "Ekspert za kazneno i prekršajno pravo" }
      ],
      en: [
        { name: "Dr. Marija Kovač", specialty: "Managing Partner", description: "20+ years experience in commercial law" },
        { name: "Dr. Petar Novak", specialty: "Partner", description: "Specialist in family and inheritance law" },
        { name: "Ana Jurić, LLM", specialty: "Senior Attorney", description: "Expert in criminal and misdemeanor law" }
      ],
      es: [
        { name: "Dr. Marija Kovač", specialty: "Socia directora", description: "20+ años de experiencia en derecho comercial" },
        { name: "Dr. Petar Novak", specialty: "Socio", description: "Especialista en derecho familiar y sucesorio" },
        { name: "Ana Jurić, LLM", specialty: "Abogada senior", description: "Experta en derecho penal y contravencional" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
        alt: {
          hr: "Moderni pravni ured",
          en: "Modern law office",
          es: "Oficina legal moderna"
        }
      },
      {
        url: "https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg",
        alt: {
          hr: "Pravni tim u radu",
          en: "Legal team at work",
          es: "Equipo legal trabajando"
        }
      },
      {
        url: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg",
        alt: {
          hr: "Konzultacija s klijentom",
          en: "Client consultation",
          es: "Consulta con cliente"
        }
      },
      {
        url: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
        alt: {
          hr: "Pravna biblioteka",
          en: "Legal library",
          es: "Biblioteca legal"
        }
      },
      {
        url: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
        alt: {
          hr: "Sala za sastanke",
          en: "Conference room",
          es: "Sala de conferencias"
        }
      },
      {
        url: "https://images.pexels.com/photos/7876056/pexels-photo-7876056.jpeg",
        alt: {
          hr: "Pravni dokumenti",
          en: "Legal documents",
          es: "Documentos legales"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setFirmData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setFirmData(prev => ({
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

  const updatePracticeArea = (index: number, value: string) => {
    setFirmData(prev => ({
      ...prev,
      practiceAreas: {
        ...prev.practiceAreas,
        [currentLang]: prev.practiceAreas[currentLang].map((area, i) => i === index ? value : area)
      }
    }));
  };

  const updateLawyer = (index: number, field: string, value: string) => {
    setFirmData(prev => ({
      ...prev,
      lawyers: {
        ...prev.lawyers,
        [currentLang]: prev.lawyers[currentLang].map((lawyer, i) =>
          i === index ? { ...lawyer, [field]: value } : lawyer
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setFirmData(prev => ({
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
    const checkoutUrl = "https://buy.stripe.com/cNi4gAcVP6YychQ8NBdjO0k";
    
    // Save current website state before redirecting to Stripe
    const websiteDataToSave = {
      firmData: firmData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours from now
    };
    
    try {
      localStorage.setItem('savedLawyersData', JSON.stringify(websiteDataToSave));
      console.log('Lawyers website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save lawyers website data:', error);
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

  const deletePracticeArea = (index: number) => {
    setFirmData(prev => ({
      ...prev,
      practiceAreas: {
        ...prev.practiceAreas,
        [currentLang]: prev.practiceAreas[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addPracticeArea = () => {
    setFirmData(prev => ({
      ...prev,
      practiceAreas: {
        ...prev.practiceAreas,
        [currentLang]: [...prev.practiceAreas[currentLang], t.practiceArea]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = firmData.images.length;
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? totalImages - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === totalImages - 1 ? 0 : prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Edit/Preview Toggle - Top Priority */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "default" : "outline"}
          size="sm"
          className="bg-white hover:bg-gray-50 shadow-xl border-2"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing ? t.previewMode : t.editMode}
        </Button>
      </div>

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
                    <span className="text-xs">(90% OFF!)</span>
                  </div>
                </Button>
                <Button variant="outline" onClick={() => setShowPurchaseModal(false)}>
                  {t.cancel}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${firmData.heroImage}')` }}
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
                  value={firmData.name[currentLang]}
                  onChange={(e) => updateLocalizedField("name", e.target.value)}
                  className="text-3xl md:text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.firmName}
                />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <Input
                    value={firmData.location[currentLang]}
                    onChange={(e) => updateLocalizedField("location", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    placeholder={t.location}
                  />
                </div>
                <Input
                  value={firmData.tagline[currentLang]}
                  onChange={(e) => updateLocalizedField("tagline", e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  placeholder={t.tagline}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">{firmData.name[currentLang]}</h1>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>{firmData.location[currentLang]}</span>
                </div>
                <p className="text-xl opacity-90">{firmData.tagline[currentLang]}</p>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={firmData.yearsExperience}
                    onChange={(e) => updateField("yearsExperience", e.target.value)}
                    className="w-12 bg-transparent border-none p-0 text-center text-white"
                    placeholder="20"
                  />
                ) : (
                  firmData.yearsExperience
                )} {t.yearsExperience}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={firmData.lawyersCount}
                    onChange={(e) => updateField("lawyersCount", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="8"
                  />
                ) : (
                  firmData.lawyersCount
                )} {t.lawyers}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Scale className="w-4 h-4 mr-1" />
                {isEditing ? (
                  <Input
                    value={firmData.practiceAreasCount}
                    onChange={(e) => updateField("practiceAreasCount", e.target.value)}
                    className="w-8 bg-transparent border-none p-0 text-center text-white"
                    placeholder="12"
                  />
                ) : (
                  firmData.practiceAreasCount
                )} {t.practiceAreas}
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
            <h2 className="text-3xl font-bold mb-8">{t.aboutFirm}</h2>
            {isEditing ? (
              <Textarea
                value={firmData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="min-h-32 text-lg"
                placeholder={t.firmDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {firmData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t.ourPracticeAreas}</h2>
            {isEditing && (
              <Button onClick={addPracticeArea} size="sm" variant="outline">
                <Scale className="w-4 h-4 mr-2" />
                {t.addPracticeArea}
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {firmData.practiceAreas[currentLang].map((area, index) => (
              <Card key={index} className="text-center p-6 relative">
                {isEditing && (
                  <Button
                    onClick={() => deletePracticeArea(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {index === 0 && <Scale className="w-6 h-6 text-primary" />}
                    {index === 1 && <Shield className="w-6 h-6 text-primary" />}
                    {index === 2 && <Gavel className="w-6 h-6 text-primary" />}
                    {index === 3 && <FileText className="w-6 h-6 text-primary" />}
                    {index >= 4 && <Award className="w-6 h-6 text-primary" />}
                  </div>
                  {isEditing ? (
                    <Input
                      value={area}
                      onChange={(e) => updatePracticeArea(index, e.target.value)}
                      className="text-center"
                      placeholder={t.practiceArea}
                    />
                  ) : (
                    <p className="font-medium">{area}</p>
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
            {firmData.images.map((image, index) => (
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
                src={firmData.images[selectedImageIndex]?.url}
                alt={firmData.images[selectedImageIndex]?.alt[currentLang]}
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
                <p className="text-center">{firmData.images[selectedImageIndex]?.alt[currentLang]}</p>
                <p className="text-center text-sm opacity-70">
                  {selectedImageIndex + 1} / {firmData.images.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Consultation Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t.consultation}</h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-4">
                  {isEditing ? (
                    <div className="flex items-center justify-center gap-2">
                      <Input
                        value={firmData.consultationFee}
                        onChange={(e) => updateField("consultationFee", e.target.value)}
                        className="w-24 text-center text-4xl font-bold"
                        placeholder="150"
                      />
                      <Input
                        value={firmData.currency}
                        onChange={(e) => updateField("currency", e.target.value)}
                        className="w-20 text-center text-4xl font-bold"
                        placeholder="EUR"
                      />
                    </div>
                  ) : (
                    `${firmData.consultationFee} ${firmData.currency}`
                  )}
                  <span className="text-lg text-muted-foreground font-normal">/ {t.hour}</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-muted-foreground">4.9 (234 {t.reviews})</span>
                </div>
                <Button size="lg" className="w-full">
                  {t.bookConsultation}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.ourTeam}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {firmData.lawyers[currentLang].map((lawyer, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    {isEditing ? (
                      <Input
                        value={lawyer.name}
                        onChange={(e) => updateLawyer(index, "name", e.target.value)}
                        placeholder={t.lawyerName}
                      />
                    ) : (
                      lawyer.name
                    )}
                  </CardTitle>
                  <Badge variant="outline">
                    {isEditing ? (
                      <Input
                        value={lawyer.specialty}
                        onChange={(e) => updateLawyer(index, "specialty", e.target.value)}
                        className="w-32 text-xs"
                        placeholder="Specialty"
                      />
                    ) : (
                      lawyer.specialty
                    )}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={lawyer.description}
                      onChange={(e) => updateLawyer(index, "description", e.target.value)}
                      placeholder={t.description}
                      className="min-h-20"
                    />
                  ) : (
                    <p className="text-muted-foreground">{lawyer.description}</p>
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
                    <h3 className="font-semibold mb-2">{t.managingPartner}</h3>
                    {isEditing ? (
                      <Input
                        value={firmData.hostName}
                        onChange={(e) => updateField("hostName", e.target.value)}
                        placeholder={t.hostName}
                        className="text-center"
                      />
                    ) : (
                      <p className="text-lg">{firmData.hostName}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={firmData.hostPhone}
                          onChange={(e) => updateField("hostPhone", e.target.value)}
                          placeholder={t.phoneNumber}
                        />
                      ) : (
                        <span>{firmData.hostPhone}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={firmData.hostEmail}
                          onChange={(e) => updateField("hostEmail", e.target.value)}
                          placeholder={t.emailAddress}
                        />
                      ) : (
                        <span>{firmData.hostEmail}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      {isEditing ? (
                        <Input
                          value={firmData.website}
                          onChange={(e) => updateField("website", e.target.value)}
                          placeholder={t.website}
                        />
                      ) : (
                        <span>{firmData.website}</span>
                      )}
                    </div>

                    {/* LinkedIn URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={firmData.airbnbUrl}
                          onChange={(e) => updateField("airbnbUrl", e.target.value)}
                          placeholder={t.airbnbUrl}
                        />
                      ) : (
                        firmData.airbnbUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(firmData.airbnbUrl, '_blank')}
                            className="text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </Button>
                        ) : null
                      )}
                    </div>

                    {/* Twitter URL */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      {isEditing ? (
                        <Input
                          value={firmData.bookingUrl}
                          onChange={(e) => updateField("bookingUrl", e.target.value)}
                          placeholder={t.bookingUrl}
                        />
                      ) : (
                        firmData.bookingUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(firmData.bookingUrl, '_blank')}
                            className="text-blue-400 hover:text-blue-500 border-blue-200 hover:border-blue-300"
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            Twitter
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
                        src={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodeURIComponent(firmData.location[currentLang])}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
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
                        📍 {firmData.location[currentLang]}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firmData.location[currentLang])}`, '_blank')}
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
            © 2024 {firmData.name[currentLang]}. {t.footerText}.
          </p>
        </div>
      </footer>
    </div>
  );
}
