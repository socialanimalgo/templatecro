import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Zap, Clock, Users, Shield, Home, Building, Wrench, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft } from "lucide-react";

// Language translations
const translations = {
  hr: {
    editMode: "Uredi",
    previewMode: "Pregledaj",
    backToTemplates: "Natrag na predlo\u017eke",
    changeBackground: "Promijeni pozadinu",
    uploadFromComputer: "Učitaj s računala",
    browseFiles: "Pregledaj datoteke",
    or: "ILI",
    pasteImageUrl: "Zalijepi URL slike",
    useUrl: "Koristi URL",
    cancel: "Odustani",
    electricianName: "Naziv elektro firme",
    location: "Lokacija",
    tagline: "Slogan",
    yearsExperience: "godina iskustva",
    projects: "realiziranih projekata",
    clients: "zadovoljnih klijenata",
    aboutElectrician: "O nama",
    electricianDescription: "Opis elektrotehnike",
    services: "Usluge",
    service: "Usluga",
    gallery: "Galerija",
    imageDescription: "Opis slike",
    testimonials: "Preporuke",
    testimonial: "Preporuka",
    clientName: "Ime klijenta",
    reviewText: "Tekst recenzije",
    contactUs: "Kontaktiraj nas",
    contactInfo: "Kontakt informacije",
    firstName: "Ime",
    lastName: "Prezime",
    phone: "Telefon",
    email: "Email",
    website: "Web stranica",
    description: "Opis",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    footerText: "Pouzdani elektrotehničari za vaš dom i firmu",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    purchaseDetails: "Kupi ovaj predložak za samo €49.99 (90% popust) i prilagodi ga svojoj elektrotehničkoj firmi.",
    purchase: "Kupi",
    companyOptional: "Firma (opcionalno)",
    discountBadge: "(90% POPUST!)"
  },
  en: {
    editMode: "Edit",
    previewMode: "Preview",
    backToTemplates: "Back to Templates",
    changeBackground: "Change background",
    uploadFromComputer: "Upload from computer",
    browseFiles: "Browse files",
    or: "OR",
    pasteImageUrl: "Paste image URL",
    useUrl: "Use URL",
    cancel: "Cancel",
    electricianName: "Electrician name",
    location: "Location",
    tagline: "Tagline",
    yearsExperience: "years of experience",
    projects: "completed projects",
    clients: "satisfied clients",
    aboutElectrician: "About us",
    electricianDescription: "Electrician description",
    services: "Services",
    service: "Service",
    gallery: "Gallery",
    imageDescription: "Image description",
    testimonials: "Testimonials",
    testimonial: "Testimonial",
    clientName: "Client name",
    reviewText: "Review text",
    contactUs: "Contact us",
    contactInfo: "Contact information",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    email: "Email",
    website: "Website",
    description: "Description",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    footerText: "Reliable electricians for your home and business",
    buyWebsite: "Buy website",
    buyWebsiteTitle: "Buy website",
    purchaseDetails: "Buy this template for only €49.99 (90% OFF) and customize it for your electrical business.",
    purchase: "Purchase",
    companyOptional: "Company (optional)",
    discountBadge: "(90% OFF!)"
  },
  es: {
    editMode: "Editar",
    previewMode: "Vista previa",
    backToTemplates: "Volver a Plantillas",
    changeBackground: "Cambiar fondo",
    uploadFromComputer: "Subir desde ordenador",
    browseFiles: "Explorar archivos",
    or: "O",
    pasteImageUrl: "Pegar URL de imagen",
    useUrl: "Usar URL",
    cancel: "Cancelar",
    electricianName: "Nombre del electricista",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsExperience: "años de experiencia",
    projects: "proyectos completados",
    clients: "clientes satisfechos",
    aboutElectrician: "Acerca de nosotros",
    electricianDescription: "Descripción del electricista",
    services: "Servicios",
    service: "Servicio",
    gallery: "Galería",
    imageDescription: "Descripción de imagen",
    testimonials: "Testimonios",
    testimonial: "Testimonio",
    clientName: "Nombre del cliente",
    reviewText: "Texto de reseña",
    contactUs: "Contáctanos",
    contactInfo: "Información de contacto",
    firstName: "Nombre",
    lastName: "Apellido",
    phone: "Teléfono",
    email: "Email",
    website: "Sitio web",
    description: "Descripción",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    footerText: "Electricistas confiables para tu hogar y negocio",
    buyWebsite: "Comprar sitio web",
    buyWebsiteTitle: "Comprar sitio web",
    purchaseDetails: "Compra esta plantilla por solo €49.99 (90% de descuento) y personalízala para tu negocio eléctrico.",
    purchase: "Comprar",
    companyOptional: "Empresa (opcional)",
    discountBadge: "(90% DESCUENTO!)"
  }
};

const initialElectricianData = {
  name: {
    hr: "ElektroMajstor d.o.o.",
    en: "ElectricMaster Ltd.",
    es: "ElectroMaestro S.L."
  },
  tagline: {
    hr: "Vaš pouzdani partner za sve elektrotehnike",
    en: "Your reliable partner for all electrical needs",
    es: "Tu socio confiable para todas las necesidades eléctricas"
  },
  location: {
    hr: "Zagreb, Hrvatska",
    en: "Zagreb, Croatia",
    es: "Zagreb, Croacia"
  },
  description: {
    hr: "Već 15 godina pružamo kvalitetne elektrotehničke usluge za domove i poslovne objekte. Naš tim certificiranih električara osigurava sigurnu i pouzdanu izvedbu svih vrsta elektrotehnhika.",
    en: "For 15 years, we've been providing quality electrical services for homes and businesses. Our team of certified electricians ensures safe and reliable execution of all types of electrical work.",
    es: "Durante 15 años, hemos estado brindando servicios eléctricos de calidad para hogares y negocios. Nuestro equipo de electricistas certificados asegura una ejecución segura y confiable de todo tipo de trabajo eléctrico."
  },
  stats: {
    experience: 15,
    projects: 1200,
    clients: 800
  },
  services: [
    {
      name: {
        hr: "Instalacije u novogradnji",
        en: "New construction installations",
        es: "Instalaciones en construcción nueva"
      },
      description: {
        hr: "Kompletne električne instalacije za nove stambene i poslovne objekte",
        en: "Complete electrical installations for new residential and commercial buildings",
        es: "Instalaciones eléctricas completas para nuevos edificios residenciales y comerciales"
      },
      icon: "Building"
    },
    {
      name: {
        hr: "Rekonstrukcije instalacija",
        en: "Installation renovations",
        es: "Renovaciones de instalaciones"
      },
      description: {
        hr: "Modernizacija postojećih električnih instalacija prema najnovijim standardima",
        en: "Modernization of existing electrical installations to the latest standards",
        es: "Modernización de instalaciones eléctricas existentes a los últimos estándares"
      },
      icon: "Wrench"
    },
    {
      name: {
        hr: "Hitne intervencije",
        en: "Emergency services",
        es: "Servicios de emergencia"
      },
      description: {
        hr: "24/7 dostupnost za hitne elektrotehnike i kvarove",
        en: "24/7 availability for electrical emergencies and breakdowns",
        es: "Disponibilidad 24/7 para emergencias eléctricas y averías"
      },
      icon: "Zap"
    },
    {
      name: {
        hr: "Pametni domovi",
        en: "Smart homes",
        es: "Hogares inteligentes"
      },
      description: {
        hr: "Instalacija i konfiguracija pametnih sustava automatizacije",
        en: "Installation and configuration of smart automation systems",
        es: "Instalación y configuración de sistemas de automatización inteligente"
      },
      icon: "Home"
    }
  ],
  gallery: [
    {
      url: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
      description: {
        hr: "Instalacija rasvjete u stanu",
        en: "Lighting installation in apartment",
        es: "Instalación de iluminación en apartamento"
      }
    },
    {
      url: "https://images.pexels.com/photos/159844/electrical-cables-power-line-electric-pole-159844.jpeg",
      description: {
        hr: "Vanjski električni radovi",
        en: "External electrical work",
        es: "Trabajo eléctrico externo"
      }
    },
    {
      url: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg",
      description: {
        hr: "Modernizacija elektroormara",
        en: "Electrical panel modernization",
        es: "Modernización del panel eléctrico"
      }
    },
    {
      url: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      description: {
        hr: "Profesionalni alati",
        en: "Professional tools",
        es: "Herramientas profesionales"
      }
    }
  ],
  testimonials: [
    {
      name: "Ana Marić",
      text: {
        hr: "Odličan rad! Brzo, kvalitetno i po pristupačnim cijenama. Definitivno preporučujem ElektroMajstor.",
        en: "Excellent work! Fast, quality service at affordable prices. I definitely recommend ElectricMaster.",
        es: "¡Excelente trabajo! Servicio rápido y de calidad a precios asequibles. Definitivamente recomiendo ElectroMaestro."
      },
      rating: 5
    },
    {
      name: "Marko Petrović",
      text: {
        hr: "Profesionalni pristup i točnost. Rekonstrukcija instalacije u mojoj kući prošla je bez problema.",
        en: "Professional approach and punctuality. The installation reconstruction in my house went smoothly.",
        es: "Enfoque profesional y puntualidad. La reconstrucción de la instalación en mi casa fue sin problemas."
      },
      rating: 5
    },
    {
      name: "Petra Novak",
      text: {
        hr: "Hitna intervencija usred noći - stigli su za 30 minuta i riješili problem. Hvala!",
        en: "Emergency intervention in the middle of the night - they arrived in 30 minutes and solved the problem. Thank you!",
        es: "Intervención de emergencia en medio de la noche: llegaron en 30 minutos y resolvieron el problema. ¡Gracias!"
      },
      rating: 5
    }
  ],
  contact: {
    phone: {
      hr: "+385 1 234 5678",
      en: "+385 1 234 5678",
      es: "+385 1 234 5678"
    },
    email: "info@elektromajstor.hr",
    website: "www.elektromajstor.hr"
  },
  heroImage: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
};

export default function ElectricianSite() {
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
  
  // Business data
  const [electricianData, setElectricianData] = useState(initialElectricianData);
  
  // Image upload state
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [currentImageField, setCurrentImageField] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const t = translations[currentLang];

  const updateLocalizedField = (field: keyof typeof electricianData, lang: string, value: string) => {
    setElectricianData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value
      }
    }));
  };

  const updatePurchaseField = (field: keyof typeof purchaseData, value: string) => {
    setPurchaseData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = () => {
    if (currentImageField === "hero") {
      setElectricianData(prev => ({ ...prev, heroImage: imageUrl }));
    } else if (currentImageField.startsWith("gallery-")) {
      const index = parseInt(currentImageField.split("-")[1]);
      setElectricianData(prev => ({
        ...prev,
        gallery: prev.gallery.map((item, i) => 
          i === index ? { ...item, url: imageUrl } : item
        )
      }));
    }
    setImageUrl("");
    setShowImageUpload(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (currentImageField === "hero") {
          setElectricianData(prev => ({ ...prev, heroImage: result }));
        } else if (currentImageField.startsWith("gallery-")) {
          const index = parseInt(currentImageField.split("-")[1]);
          setElectricianData(prev => ({
            ...prev,
            gallery: prev.gallery.map((item, i) => 
              i === index ? { ...item, url: result } : item
            )
          }));
        }
      };
      reader.readAsDataURL(file);
      setShowImageUpload(false);
    }
  };

  const openImageUpload = (field: string) => {
    setCurrentImageField(field);
    setShowImageUpload(true);
  };

  const handlePurchase = () => {
    const checkoutUrl = "https://buy.stripe.com/8x214oaNHgz8dlUe7VdjO0o";

    // Save current website state before redirecting to Stripe
    const websiteDataToSave = {
      electricianData: electricianData,
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
                    <span className="text-xs">{t.discountBadge}</span>
                  </div>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Image Upload Modal */}
      <Dialog open={showImageUpload} onOpenChange={setShowImageUpload}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.changeBackground}</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowImageUpload(false)}
              className="absolute right-2 top-2"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogHeader>

          {/* File Upload Option */}
          <div className="space-y-2">
            <label className="text-sm font-medium">{t.uploadFromComputer}</label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="image-upload"
              />
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => document.getElementById('image-upload')?.click()}
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
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${electricianData.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Button
          onClick={() => openImageUpload("hero")}
          className="absolute top-4 left-4 z-10"
          size="sm"
        >
          <Camera className="w-4 h-4 mr-2" />
          {t.changeBackground}
        </Button>

        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-yellow-400" />
            <Input
              value={electricianData.name[currentLang]}
              onChange={(e) => updateLocalizedField('name', currentLang, e.target.value)}
              className="text-4xl md:text-6xl font-bold bg-transparent border-none text-white text-center placeholder-gray-300"
              placeholder={t.electricianName}
            />
          </div>
          <Textarea
            value={electricianData.tagline[currentLang]}
            onChange={(e) => updateLocalizedField('tagline', currentLang, e.target.value)}
            className="text-xl md:text-2xl text-center bg-transparent border-none text-white resize-none placeholder-gray-300"
            placeholder={t.tagline}
            rows={2}
          />
          <div className="flex items-center justify-center gap-2 mt-4 text-lg">
            <MapPin className="w-5 h-5" />
            <Input
              value={electricianData.location[currentLang]}
              onChange={(e) => updateLocalizedField('location', currentLang, e.target.value)}
              className="bg-transparent border-none text-white text-center placeholder-gray-300"
              placeholder={t.location}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{electricianData.stats.experience}+</div>
              <div className="text-blue-100">{t.yearsExperience}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{electricianData.stats.projects}+</div>
              <div className="text-blue-100">{t.projects}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{electricianData.stats.clients}+</div>
              <div className="text-blue-100">{t.clients}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t.aboutElectrician}</h2>
            <Textarea
              value={electricianData.description[currentLang]}
              onChange={(e) => updateLocalizedField('description', currentLang, e.target.value)}
              className="text-lg leading-relaxed text-gray-600 bg-transparent border-none text-center resize-none"
              placeholder={t.electricianDescription}
              rows={4}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.services}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {electricianData.services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon === "Building" && <Building className="w-8 h-8 text-blue-600" />}
                    {service.icon === "Wrench" && <Wrench className="w-8 h-8 text-blue-600" />}
                    {service.icon === "Zap" && <Zap className="w-8 h-8 text-blue-600" />}
                    {service.icon === "Home" && <Home className="w-8 h-8 text-blue-600" />}
                  </div>
                  <h3 className="font-bold mb-2">{service.name[currentLang]}</h3>
                  <p className="text-sm text-gray-600">{service.description[currentLang]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.gallery}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {electricianData.gallery.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={image.url}
                  alt={image.description[currentLang]}
                  className="w-full h-64 object-cover rounded-lg"
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setShowImageModal(true);
                  }}
                />
                <Button
                  onClick={() => openImageUpload(`gallery-${index}`)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  size="sm"
                >
                  <Camera className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <Input
                    value={image.description[currentLang]}
                    onChange={(e) => {
                      setElectricianData(prev => ({
                        ...prev,
                        gallery: prev.gallery.map((item, i) => 
                          i === index ? {
                            ...item,
                            description: { ...item.description, [currentLang]: e.target.value }
                          } : item
                        )
                      }));
                    }}
                    className="text-white bg-transparent border-none text-sm placeholder-gray-300"
                    placeholder={t.imageDescription}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.testimonials}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {electricianData.testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Textarea
                    value={testimonial.text[currentLang]}
                    onChange={(e) => {
                      setElectricianData(prev => ({
                        ...prev,
                        testimonials: prev.testimonials.map((item, i) => 
                          i === index ? {
                            ...item,
                            text: { ...item.text, [currentLang]: e.target.value }
                          } : item
                        )
                      }));
                    }}
                    className="text-gray-600 mb-4 bg-transparent border-none resize-none"
                    placeholder={t.reviewText}
                    rows={3}
                  />
                  <Input
                    value={testimonial.name}
                    onChange={(e) => {
                      setElectricianData(prev => ({
                        ...prev,
                        testimonials: prev.testimonials.map((item, i) => 
                          i === index ? { ...item, name: e.target.value } : item
                        )
                      }));
                    }}
                    className="font-medium bg-transparent border-none"
                    placeholder={t.clientName}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t.contactUs}</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <Input
                  value={electricianData.contact.phone[currentLang]}
                  onChange={(e) => {
                    setElectricianData(prev => ({
                      ...prev,
                      contact: {
                        ...prev.contact,
                        phone: { ...prev.contact.phone, [currentLang]: e.target.value }
                      }
                    }));
                  }}
                  className="bg-transparent border-blue-400 text-white placeholder-blue-200"
                  placeholder={t.phoneNumber}
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <Input
                  value={electricianData.contact.email}
                  onChange={(e) => {
                    setElectricianData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, email: e.target.value }
                    }));
                  }}
                  className="bg-transparent border-blue-400 text-white placeholder-blue-200"
                  placeholder={t.emailAddress}
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-5 h-5" />
                <Input
                  value={electricianData.contact.website}
                  onChange={(e) => {
                    setElectricianData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, website: e.target.value }
                    }));
                  }}
                  className="bg-transparent border-blue-400 text-white placeholder-blue-200"
                  placeholder={t.website}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footerText}</p>
        </div>
      </footer>

      {/* Image Gallery Modal */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{electricianData.gallery[selectedImageIndex]?.description[currentLang]}</DialogTitle>
          </DialogHeader>
          <img
            src={electricianData.gallery[selectedImageIndex]?.url}
            alt={electricianData.gallery[selectedImageIndex]?.description[currentLang]}
            className="w-full h-96 object-cover rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
