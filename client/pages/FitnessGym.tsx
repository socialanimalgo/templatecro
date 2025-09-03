import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Dumbbell, Clock, Users, Trophy, Activity, Heart, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Calendar } from "lucide-react";

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
    gymName: "Naziv teretane",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOpen: "godina rada",
    trainers: "trenera",
    members: "članova",
    aboutGym: "O našoj teretani",
    gymDescription: "Opis teretane",
    membershipPlans: "Članarine",
    plan: "Plan",
    classSchedule: "Raspored treninga",
    class: "Trening",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    month: "mjesec",
    reviews: "recenzija",
    joinNow: "Pridruži se",
    ourTrainers: "Naši treneri",
    trainerName: "Ime trenera",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headTrainer: "Glavni trener",
    hostName: "Ime trenera",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Gdje se snaga susreće s motivacijom",
    buyWebsite: "Kupi Web Stranicu",
    buyWebsiteTitle: "Kupi Web Stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Teretana",
    companyOptional: "Teretana (opcionalno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako do nas",
    delete: "Obriši",
    addPlan: "Dodaj plan",
    addClass: "Dodaj trening",
    findUsOn: "Pronađite nas na",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    freeTrialWeek: "Besplatan tjedan probnog treniranja",
    facilities: "Naši objekti",
    equipment: "Oprema",
    programs: "Naši programi",
    successStories: "Priče o uspjehu",
    transformations: "Transformacije",
    trialRegistration: "Registracija za probni trening"
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
    gymName: "Gym name",
    location: "Location",
    tagline: "Tagline",
    yearsOpen: "years open",
    trainers: "trainers",
    members: "members",
    aboutGym: "About Our Gym",
    gymDescription: "Gym description",
    membershipPlans: "Membership Plans",
    plan: "Plan",
    classSchedule: "Class Schedule",
    class: "Class",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    pricing: "Pricing",
    month: "month",
    reviews: "reviews",
    joinNow: "Join Now",
    ourTrainers: "Our Trainers",
    trainerName: "Trainer name",
    description: "Description",
    contactInfo: "Contact Information",
    headTrainer: "Head Trainer",
    hostName: "Trainer name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Where strength meets motivation",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Gym",
    companyOptional: "Gym (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addPlan: "Add plan",
    addClass: "Add class",
    findUsOn: "Find us on",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    freeTrialWeek: "Free trial week",
    facilities: "Our Facilities",
    equipment: "Equipment",
    programs: "Our Programs",
    successStories: "Success Stories",
    transformations: "Transformations",
    trialRegistration: "Trial Registration"
  },
  es: {
    editMode: "Editar",
    previewMode: "Vista previa",
    backToTemplates: "Volver a Plantillas",
    changeBackground: "Cambiar fondo",
    uploadFromComputer: "Subir desde computadora",
    browseFiles: "Examinar archivos",
    or: "O",
    pasteImageUrl: "Pegar URL de imagen",
    useUrl: "Usar URL",
    cancel: "Cancelar",
    gymName: "Nombre del gimnasio",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOpen: "años abierto",
    trainers: "entrenadores",
    members: "miembros",
    aboutGym: "Sobre Nuestro Gimnasio",
    gymDescription: "Descripción del gimnasio",
    membershipPlans: "Planes de Membresía",
    plan: "Plan",
    classSchedule: "Horario de Clases",
    class: "Clase",
    photoGallery: "Galería de Fotos",
    imageDescription: "Descripción de imagen",
    pricing: "Precios",
    month: "mes",
    reviews: "reseñas",
    joinNow: "Únete Ahora",
    ourTrainers: "Nuestros Entrenadores",
    trainerName: "Nombre del entrenador",
    description: "Descripción",
    contactInfo: "Información de Contacto",
    headTrainer: "Entrenador Principal",
    hostName: "Nombre del entrenador",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Donde la fuerza se encuentra con la motivación",
    buyWebsite: "Comprar Sitio Web",
    buyWebsiteTitle: "Comprar Sitio Web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Gimnasio",
    companyOptional: "Gimnasio (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addPlan: "Agregar plan",
    addClass: "Agregar clase",
    findUsOn: "Encuéntranos en",
    instagramUrl: "URL de Instagram",
    facebookUrl: "URL de Facebook",
    discountBadge: "(90% OFF!)",
    freeTrialWeek: "Semana de prueba gratuita",
    facilities: "Nuestras Instalaciones",
    equipment: "Equipo",
    programs: "Nuestros Programas",
    successStories: "Historias de Éxito",
    transformations: "Transformaciones",
    trialRegistration: "Registro de Prueba"
  }
};

export default function FitnessGym() {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<'hr' | 'en' | 'es'>('hr');
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [purchaseData, setPurchaseData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  const t = translations[currentLang];

  const [gymData, setGymData] = useState({
    name: {
      hr: "Fitness Centar Split",
      en: "Fitness Center Split", 
      es: "Centro de Fitness Split"
    },
    location: {
      hr: "Split, Hrvatska",
      en: "Split, Croatia",
      es: "Split, Croacia"
    },
    tagline: {
      hr: "Transformiraj svoje tijelo i um",
      en: "Transform your body and mind",
      es: "Transforma tu cuerpo y mente"
    },
    description: {
      hr: "Dobrodošli u Fitness Centar Split, kjer se snaga susreće s motivacijom. Naša moderna teretana opremljena je najnovijom opremom i vođena iskusnim trenerima koji će vas voditi na putu transformacije. Pridružite se našoj zajednici i otkrijte svoju pravu snagu.",
      en: "Welcome to Fitness Center Split, where strength meets motivation. Our modern gym is equipped with the latest equipment and led by experienced trainers who will guide you on your transformation journey. Join our community and discover your true strength.",
      es: "Bienvenido al Centro de Fitness Split, donde la fuerza se encuentra con la motivación. Nuestro gimnasio moderno está equipado con el equipo más reciente y dirigido por entrenadores experimentados que te guiarán en tu viaje de transformación. Únete a nuestra comunidad y descubre tu verdadera fuerza."
    },
    yearsOpen: "8",
    trainersCount: "12",
    membersCount: "850",
    averagePrice: "35",
    currency: "EUR",
    hostName: "Marko Božić",
    hostPhone: "+385 21 456 789",
    hostEmail: "marko@fitnesscentarsplit.com",
    website: "www.fitnesscentarsplit.com",
    instagramUrl: "https://instagram.com/fitnesscentarsplit",
    facebookUrl: "https://facebook.com/fitnesscentarsplit",
    heroImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    membershipPlans: {
      hr: [
        { name: "Osnovni", price: "25", features: ["Pristup teretani", "Svlačionice", "Besplatno parkiranje"] },
        { name: "Premium", price: "35", features: ["Sve iz osnovnog", "Grupni treninzi", "Sauna i spa"] },
        { name: "VIP", price: "50", features: ["Sve iz premium", "Personalni trener", "Nutricionist", "Masaža"] }
      ],
      en: [
        { name: "Basic", price: "25", features: ["Gym access", "Locker rooms", "Free parking"] },
        { name: "Premium", price: "35", features: ["All basic features", "Group classes", "Sauna & spa"] },
        { name: "VIP", price: "50", features: ["All premium features", "Personal trainer", "Nutritionist", "Massage"] }
      ],
      es: [
        { name: "Básico", price: "25", features: ["Acceso al gimnasio", "Vestidores", "Estacionamiento gratuito"] },
        { name: "Premium", price: "35", features: ["Todas las características básicas", "Clases grupales", "Sauna y spa"] },
        { name: "VIP", price: "50", features: ["Todas las características premium", "Entrenador personal", "Nutricionista", "Masaje"] }
      ]
    },
    classSchedule: {
      hr: [
        { time: "06:00", class: "Jutarnji cardio", trainer: "Ana Marić" },
        { time: "08:00", class: "CrossFit", trainer: "Petar Novak" },
        { time: "10:00", class: "Yoga", trainer: "Mirna Lovrić" },
        { time: "17:00", class: "HIIT", trainer: "Marko Božić" },
        { time: "18:30", class: "Zumba", trainer: "Sara Tomić" },
        { time: "20:00", class: "Snaga i kondor", trainer: "Ivan Kos" }
      ],
      en: [
        { time: "06:00", class: "Morning Cardio", trainer: "Ana Marić" },
        { time: "08:00", class: "CrossFit", trainer: "Petar Novak" },
        { time: "10:00", class: "Yoga", trainer: "Mirna Lovrić" },
        { time: "17:00", class: "HIIT", trainer: "Marko Božić" },
        { time: "18:30", class: "Zumba", trainer: "Sara Tomić" },
        { time: "20:00", class: "Strength & Conditioning", trainer: "Ivan Kos" }
      ],
      es: [
        { time: "06:00", class: "Cardio matutino", trainer: "Ana Marić" },
        { time: "08:00", class: "CrossFit", trainer: "Petar Novak" },
        { time: "10:00", class: "Yoga", trainer: "Mirna Lovrić" },
        { time: "17:00", class: "HIIT", trainer: "Marko Božić" },
        { time: "18:30", class: "Zumba", trainer: "Sara Tomić" },
        { time: "20:00", class: "Fuerza y acondicionamiento", trainer: "Ivan Kos" }
      ]
    },
    trainers: {
      hr: [
        { name: "Marko Božić", specialty: "Glavni trener", description: "10+ godina iskustva u fitness industriji", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" },
        { name: "Ana Marić", specialty: "Cardio specijalista", description: "Certificirana trenerica za kardio i funkcionalni trening", image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg" },
        { name: "Petar Novak", specialty: "CrossFit instruktor", description: "Svjetski certificirani CrossFit trener", image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg" }
      ],
      en: [
        { name: "Marko Božić", specialty: "Head Trainer", description: "10+ years experience in fitness industry", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" },
        { name: "Ana Marić", specialty: "Cardio Specialist", description: "Certified trainer for cardio and functional training", image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg" },
        { name: "Petar Novak", specialty: "CrossFit Instructor", description: "Globally certified CrossFit trainer", image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg" }
      ],
      es: [
        { name: "Marko Božić", specialty: "Entrenador Principal", description: "10+ años de experiencia en la industria del fitness", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" },
        { name: "Ana Marić", specialty: "Especialista en Cardio", description: "Entrenadora certificada para cardio y entrenamiento funcional", image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg" },
        { name: "Petar Novak", specialty: "Instructor de CrossFit", description: "Entrenador de CrossFit certificado globalmente", image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
        alt: {
          hr: "Moderna teretana oprema",
          en: "Modern gym equipment",
          es: "Equipo de gimnasio moderno"
        }
      },
      {
        url: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg",
        alt: {
          hr: "Grupni trening u akciji",
          en: "Group training in action",
          es: "Entrenamiento grupal en acción"
        }
      },
      {
        url: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
        alt: {
          hr: "Cardio zona",
          en: "Cardio zone",
          es: "Zona de cardio"
        }
      },
      {
        url: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
        alt: {
          hr: "Zona za dizanje utega",
          en: "Weight lifting area",
          es: "Área de levantamiento de pesas"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setGymData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setGymData(prev => ({
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

  const updateMembershipPlan = (index: number, field: string, value: string | string[]) => {
    setGymData(prev => ({
      ...prev,
      membershipPlans: {
        ...prev.membershipPlans,
        [currentLang]: prev.membershipPlans[currentLang].map((plan, i) =>
          i === index ? { ...plan, [field]: value } : plan
        )
      }
    }));
  };

  const updateClassSchedule = (index: number, field: string, value: string) => {
    setGymData(prev => ({
      ...prev,
      classSchedule: {
        ...prev.classSchedule,
        [currentLang]: prev.classSchedule[currentLang].map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  const updateTrainer = (index: number, field: string, value: string) => {
    setGymData(prev => ({
      ...prev,
      trainers: {
        ...prev.trainers,
        [currentLang]: prev.trainers[currentLang].map((trainer, i) =>
          i === index ? { ...trainer, [field]: value } : trainer
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setGymData(prev => ({
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
    const checkoutUrl = "https://buy.stripe.com/test_00w4gA5tn2IiepYd3RdjO05";
    
    const websiteDataToSave = {
      gymData: gymData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000)
    };
    
    try {
      localStorage.setItem('savedGymData', JSON.stringify(websiteDataToSave));
      console.log('Gym website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save gym website data:', error);
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

  const deletePlan = (index: number) => {
    setGymData(prev => ({
      ...prev,
      membershipPlans: {
        ...prev.membershipPlans,
        [currentLang]: prev.membershipPlans[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addPlan = () => {
    setGymData(prev => ({
      ...prev,
      membershipPlans: {
        ...prev.membershipPlans,
        [currentLang]: [...prev.membershipPlans[currentLang], { name: t.plan, price: "30", features: ["Feature 1", "Feature 2"] }]
      }
    }));
  };

  const deleteClass = (index: number) => {
    setGymData(prev => ({
      ...prev,
      classSchedule: {
        ...prev.classSchedule,
        [currentLang]: prev.classSchedule[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addClass = () => {
    setGymData(prev => ({
      ...prev,
      classSchedule: {
        ...prev.classSchedule,
        [currentLang]: [...prev.classSchedule[currentLang], { time: "19:00", class: t.class, trainer: "Trainer" }]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = gymData.images.length;
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
                  placeholder={t.email}
                />
              </div>

              <div>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input
                  id="phone"
                  value={purchaseData.phone}
                  onChange={(e) => updatePurchaseField("phone", e.target.value)}
                  placeholder={t.phone}
                />
              </div>

              <div>
                <Label htmlFor="company">{t.companyOptional}</Label>
                <Input
                  id="company"
                  value={purchaseData.company}
                  onChange={(e) => updatePurchaseField("company", e.target.value)}
                  placeholder={t.company}
                />
              </div>

              <Button onClick={handlePurchase} className="w-full bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t.purchase} - €49.99 <Badge className="ml-2 bg-red-500">{t.discountBadge}</Badge>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gymData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-white">
              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    value={gymData.name[currentLang]}
                    onChange={(e) => updateLocalizedField("name", e.target.value)}
                    className="text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.gymName}
                  />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <Input
                      value={gymData.location[currentLang]}
                      onChange={(e) => updateLocalizedField("location", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder={t.location}
                    />
                  </div>
                  <Textarea
                    value={gymData.tagline[currentLang]}
                    onChange={(e) => updateLocalizedField("tagline", e.target.value)}
                    className="text-xl bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.tagline}
                    rows={2}
                  />
                  <div className="flex gap-4 items-center">
                    <Button
                      onClick={() => setShowImageUpload(true)}
                      variant="secondary"
                      size="sm"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      {t.changeBackground}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-8xl font-bold mb-4">
                    {gymData.name[currentLang]}
                  </h1>
                  <div className="flex items-center text-xl mb-6">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span>{gymData.location[currentLang]}</span>
                  </div>
                  <p className="text-2xl lg:text-3xl mb-8 font-light">
                    {gymData.tagline[currentLang]}
                  </p>
                  <div className="flex flex-wrap gap-8 text-lg">
                    <div className="flex items-center">
                      <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
                      <span>{gymData.yearsOpen} {t.yearsOpen}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-6 h-6 mr-2 text-blue-400" />
                      <span>{gymData.trainersCount} {t.trainers}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-red-400" />
                      <span>{gymData.membersCount} {t.members}</span>
                    </div>
                  </div>
                  <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    <Dumbbell className="w-6 h-6 mr-2" />
                    {t.joinNow}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t.aboutGym}</h2>
            {isEditing ? (
              <Textarea
                value={gymData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="text-lg leading-relaxed"
                placeholder={t.gymDescription}
                rows={6}
              />
            ) : (
              <p className="text-lg leading-relaxed text-gray-600">
                {gymData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.membershipPlans}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gymData.membershipPlans[currentLang].map((plan, index) => (
              <Card key={index} className="relative">
                {isEditing && (
                  <Button
                    onClick={() => deletePlan(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 z-10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
                <CardHeader className="text-center">
                  <CardTitle>
                    {isEditing ? (
                      <Input
                        value={plan.name}
                        onChange={(e) => updateMembershipPlan(index, "name", e.target.value)}
                        className="text-center font-bold"
                      />
                    ) : (
                      plan.name
                    )}
                  </CardTitle>
                  <div className="text-3xl font-bold text-blue-600">
                    {isEditing ? (
                      <div className="flex items-center justify-center">
                        <span>€</span>
                        <Input
                          value={plan.price}
                          onChange={(e) => updateMembershipPlan(index, "price", e.target.value)}
                          className="w-20 mx-2 text-center font-bold"
                        />
                        <span>/{t.month}</span>
                      </div>
                    ) : (
                      `€${plan.price}/${t.month}`
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-green-500" />
                        {isEditing ? (
                          <Input
                            value={feature}
                            onChange={(e) => {
                              const newFeatures = [...plan.features];
                              newFeatures[featureIndex] = e.target.value;
                              updateMembershipPlan(index, "features", newFeatures);
                            }}
                            className="flex-1"
                          />
                        ) : (
                          <span>{feature}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    {t.joinNow}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {isEditing && (
            <div className="text-center mt-8">
              <Button onClick={addPlan} variant="outline">
                <Trophy className="w-4 h-4 mr-2" />
                {t.addPlan}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.classSchedule}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {gymData.classSchedule[currentLang].map((item, index) => (
                <Card key={index} className="relative">
                  {isEditing && (
                    <Button
                      onClick={() => deleteClass(index)}
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 z-10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-lg font-semibold">
                        <Clock className="w-5 h-5 mr-2 text-blue-600" />
                        {isEditing ? (
                          <Input
                            value={item.time}
                            onChange={(e) => updateClassSchedule(index, "time", e.target.value)}
                            className="w-20"
                          />
                        ) : (
                          item.time
                        )}
                      </div>
                      <div className="flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-green-600" />
                        {isEditing ? (
                          <Input
                            value={item.class}
                            onChange={(e) => updateClassSchedule(index, "class", e.target.value)}
                            className="min-w-40"
                          />
                        ) : (
                          <span className="font-medium">{item.class}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {isEditing ? (
                        <Input
                          value={item.trainer}
                          onChange={(e) => updateClassSchedule(index, "trainer", e.target.value)}
                          className="min-w-32"
                          placeholder={t.trainerName}
                        />
                      ) : (
                        item.trainer
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {isEditing && (
              <div className="text-center mt-8">
                <Button onClick={addClass} variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.addClass}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.ourTrainers}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gymData.trainers[currentLang].map((trainer, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${trainer.image})`}}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {isEditing ? (
                      <Input
                        value={trainer.name}
                        onChange={(e) => updateTrainer(index, "name", e.target.value)}
                        placeholder={t.trainerName}
                      />
                    ) : (
                      trainer.name
                    )}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {isEditing ? (
                      <Input
                        value={trainer.specialty}
                        onChange={(e) => updateTrainer(index, "specialty", e.target.value)}
                        placeholder="Specialty"
                      />
                    ) : (
                      trainer.specialty
                    )}
                  </p>
                  <p className="text-gray-600">
                    {isEditing ? (
                      <Textarea
                        value={trainer.description}
                        onChange={(e) => updateTrainer(index, "description", e.target.value)}
                        placeholder={t.description}
                        rows={3}
                      />
                    ) : (
                      trainer.description
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.photoGallery}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gymData.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => openImageModal(index)}
              >
                {isEditing && (
                  <div className="h-full w-full bg-black/50 rounded-lg flex items-center justify-center">
                    <Input
                      value={image.alt[currentLang]}
                      onChange={(e) => updateImage(index, e.target.value)}
                      placeholder={t.imageDescription}
                      className="bg-white/90 text-black"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t.contactInfo}</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={gymData.hostPhone}
                    onChange={(e) => updateField("hostPhone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.phoneNumber}
                  />
                ) : (
                  <span>{gymData.hostPhone}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={gymData.hostEmail}
                    onChange={(e) => updateField("hostEmail", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.emailAddress}
                  />
                ) : (
                  <span>{gymData.hostEmail}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={gymData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.website}
                  />
                ) : (
                  <span>{gymData.website}</span>
                )}
              </div>
            </div>
            <div className="mt-12">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                {t.freeTrialWeek}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            {isEditing ? (
              <Input
                value={gymData.name[currentLang]}
                onChange={(e) => updateLocalizedField("name", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white text-center"
              />
            ) : (
              gymData.name[currentLang]
            )}
            {" - "}
            {isEditing ? (
              <Input
                value={t.footerText}
                className="bg-gray-800 border-gray-700 text-white text-center inline-block w-auto"
                disabled
              />
            ) : (
              t.footerText
            )}
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <span className="mr-2">📘</span>
              {isEditing ? (
                <Input
                  value={gymData.facebookUrl}
                  onChange={(e) => updateField("facebookUrl", e.target.value)}
                  placeholder={t.facebookUrl}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              ) : (
                <span>{t.findUsOn} Facebook</span>
              )}
            </div>
            <div className="flex items-center">
              <span className="mr-2">📷</span>
              {isEditing ? (
                <Input
                  value={gymData.instagramUrl}
                  onChange={(e) => updateField("instagramUrl", e.target.value)}
                  placeholder={t.instagramUrl}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              ) : (
                <span>{t.findUsOn} Instagram</span>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Image Upload Dialog */}
      <Dialog open={showImageUpload} onOpenChange={setShowImageUpload}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.changeBackground}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="hero-image-upload"
              />
              <label htmlFor="hero-image-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900">{t.uploadFromComputer}</p>
                <p className="text-sm text-gray-500">{t.browseFiles}</p>
              </label>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-500">{t.or}</span>
            </div>
            <div className="space-y-2">
              <Input
                placeholder={t.pasteImageUrl}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <div className="flex gap-2">
                <Button onClick={handleImageUpload} className="flex-1">
                  {t.useUrl}
                </Button>
                <Button onClick={() => setShowImageUpload(false)} variant="outline" className="flex-1">
                  {t.cancel}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{gymData.images[selectedImageIndex]?.alt[currentLang]}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={gymData.images[selectedImageIndex]?.url}
              alt={gymData.images[selectedImageIndex]?.alt[currentLang]}
              className="w-full h-auto max-h-96 object-contain"
            />
            <Button
              onClick={() => navigateImage('prev')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              variant="secondary"
              size="sm"
            >
              ←
            </Button>
            <Button
              onClick={() => navigateImage('next')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              variant="secondary"
              size="sm"
            >
              →
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}