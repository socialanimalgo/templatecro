import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Briefcase, Clock, Users, TrendingUp, Building, GraduationCap, Target, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft } from "lucide-react";

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
    agencyName: "Naziv agencije",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOperating: "godina rada",
    recruitersEmployed: "zaposlenih",
    jobsPlaced: "posredovanih poslova",
    aboutAgency: "O našoj agenciji",
    agencyDescription: "Opis agencije",
    ourServices: "Naše usluge",
    service: "Usluga",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    consultationService: "Besplatno savjetovanje",
    perConsultation: "konzultacija",
    reviews: "recenzija",
    bookConsultation: "Rezerviraj termin",
    agencyTeam: "Naš tim",
    recruiterName: "Ime regrutora",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    agencyOwner: "Vlasnik agencije",
    hostName: "Ime direktora",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Povezujemo talente s prilikama",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Agencija",
    companyOptional: "Agencija (neobavezno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako nas pronaći",
    delete: "Ukloni",
    addService: "Dodaj uslugu",
    findUsOn: "Pronađi nas na",
    airbnbUrl: "LinkedIn URL",
    bookingUrl: "Facebook URL",
    discountBadge: "(90% POPUST!)",
    availableJobs: "Dostupni poslovi",
    jobTitle: "Pozicija",
    jobCompany: "Tvrtka",
    city: "Grad",
    salary: "Plaća",
    jobType: "Tip posla",
    apply: "Prijavi se",
    addJob: "Dodaj posao",
    perMonth: "mjesečno",
    fullTime: "Puno radno vrijeme",
    partTime: "Pola radnog vremena",
    contract: "Ugovor",
    internship: "Praksa"
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
    agencyName: "Agency name",
    location: "Location",
    tagline: "Tagline",
    yearsOperating: "years operating",
    recruitersEmployed: "recruiters",
    jobsPlaced: "jobs placed",
    aboutAgency: "About Our Agency",
    agencyDescription: "Agency description",
    ourServices: "Our Services",
    service: "Service",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    consultationService: "Free Consultation",
    perConsultation: "consultation",
    reviews: "reviews",
    bookConsultation: "Book Consultation",
    agencyTeam: "Our Team",
    recruiterName: "Recruiter name",
    description: "Description",
    contactInfo: "Contact Information",
    agencyOwner: "Agency Owner",
    hostName: "Director name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Connecting talents with opportunities",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Agency",
    companyOptional: "Agency (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your purchase details:",
    howToFindUs: "How to Find Us",
    delete: "Remove",
    addService: "Add Service",
    findUsOn: "Find us on",
    airbnbUrl: "LinkedIn URL",
    bookingUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    availableJobs: "Available Jobs",
    jobTitle: "Position",
    jobCompany: "Company",
    city: "City",
    salary: "Salary",
    jobType: "Job Type",
    apply: "Apply",
    addJob: "Add Job",
    perMonth: "per month",
    fullTime: "Full-time",
    partTime: "Part-time",
    contract: "Contract",
    internship: "Internship"
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
    agencyName: "Nombre de la agencia",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOperating: "años operando",
    recruitersEmployed: "reclutadores",
    jobsPlaced: "empleos colocados",
    aboutAgency: "Sobre Nuestra Agencia",
    agencyDescription: "Descripción de la agencia",
    ourServices: "Nuestros Servicios",
    service: "Servicio",
    photoGallery: "Galería de Fotos",
    imageDescription: "Descripción de la imagen",
    consultationService: "Consulta Gratuita",
    perConsultation: "consulta",
    reviews: "reseñas",
    bookConsultation: "Reservar Consulta",
    agencyTeam: "Nuestro Equipo",
    recruiterName: "Nombre del reclutador",
    description: "Descripción",
    contactInfo: "Información de Contacto",
    agencyOwner: "Propietario de la Agencia",
    hostName: "Nombre del director",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Conectando talentos con oportunidades",
    buyWebsite: "Comprar Sitio Web",
    buyWebsiteTitle: "Comprar Sitio Web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Agencia",
    companyOptional: "Agencia (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos de compra:",
    howToFindUs: "Cómo Encontrarnos",
    delete: "Eliminar",
    addService: "Agregar Servicio",
    findUsOn: "Encuéntranos en",
    airbnbUrl: "URL de LinkedIn",
    bookingUrl: "URL de Facebook",
    discountBadge: "(90% DESCUENTO!)",
    availableJobs: "Empleos Disponibles",
    jobTitle: "Posición",
    jobCompany: "Empresa",
    city: "Ciudad",
    salary: "Salario",
    jobType: "Tipo de Trabajo",
    apply: "Aplicar",
    addJob: "Agregar Trabajo",
    perMonth: "por mes",
    fullTime: "Tiempo completo",
    partTime: "Medio tiempo",
    contract: "Contrato",
    internship: "Pasantía"
  }
};

export default function EmploymentAgencySite() {
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

  const [agencyData, setAgencyData] = useState({
    name: { hr: "Karijera Plus", en: "Career Plus Agency", es: "Agencia Carrera Plus" },
    location: { hr: "Zagreb, Hrvatska", en: "Zagreb, Croatia", es: "Zagreb, Croacia" },
    tagline: { hr: "Vaša karijera je naša misija", en: "Your career is our mission", es: "Tu carrera es nuestra misión" },
    description: { 
      hr: "Sa preko 15 godina iskustva u posredovanju zapošljavanja, Karijera Plus je lider u povezivanju talentovanih kandidata s vrhunskim poslodavcima. Naš tim stručnjaka posvećen je pronalaženju savršene podudarnosti između poslodavaca i kandidata u različitim industrijama.",
      en: "With over 15 years of experience in employment placement, Career Plus is a leader in connecting talented candidates with top employers. Our team of experts is dedicated to finding the perfect match between employers and candidates across various industries.",
      es: "Con más de 15 años de experiencia en colocación laboral, Carrera Plus es líder en conectar candidatos talentosos con empleadores de primer nivel. Nuestro equipo de expertos se dedica a encontrar la combinación perfecta entre empleadores y candidatos en varias industrias."
    },
    yearsOperating: "15",
    recruitersEmployed: "12",
    jobsPlaced: "2500",
    consultationPrice: "0",
    currency: "EUR",
    hostName: "Ana Marić",
    hostPhone: "+385 1 234 567",
    hostEmail: "ana@karijeraplus.hr",
    website: "www.karijeraplus.hr",
    airbnbUrl: "",
    bookingUrl: "",
    heroImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    services: {
      hr: [
        { name: "Pronalaženje kadra", description: "Specijalizovani za pronalaženje kvalifikovanih kandidata" },
        { name: "Karijerno savjetovanje", description: "Individualno vođenje kroz karijerni razvoj" },
        { name: "Pisanje CV-a", description: "Profesionalno pisanje i optimizacija životopisa" },
        { name: "Priprema za intervju", description: "Treniranje i priprema za uspješne intervjue" }
      ],
      en: [
        { name: "Talent Acquisition", description: "Specialized in finding qualified candidates" },
        { name: "Career Counseling", description: "Individual guidance through career development" },
        { name: "CV Writing", description: "Professional writing and optimization of resumes" },
        { name: "Interview Preparation", description: "Training and preparation for successful interviews" }
      ],
      es: [
        { name: "Adquisición de Talento", description: "Especializado en encontrar candidatos calificados" },
        { name: "Asesoramiento Profesional", description: "Orientación individual a través del desarrollo profesional" },
        { name: "Redacción de CV", description: "Redacción profesional y optimización de currículums" },
        { name: "Preparación de Entrevistas", description: "Entrenamiento y preparación para entrevistas exitosas" }
      ]
    },
    recruiters: {
      hr: [
        { name: "Ana Marić", position: "Direktorica", experience: "15 godina iskustva", description: "Specijalist za IT i tehnološke pozicije" },
        { name: "Marko Petrović", position: "Senior regruttor", experience: "8 godina iskustva", description: "Stručnjak za prodaju i marketing pozicije" },
        { name: "Petra Novak", position: "HR konzultant", experience: "6 godina iskustva", description: "Fokus na finansije i računovodstvo" }
      ],
      en: [
        { name: "Ana Mari��", position: "Director", experience: "15 years experience", description: "Specialist in IT and technology positions" },
        { name: "Marko Petrović", position: "Senior Recruiter", experience: "8 years experience", description: "Expert in sales and marketing positions" },
        { name: "Petra Novak", position: "HR Consultant", experience: "6 years experience", description: "Focus on finance and accounting" }
      ],
      es: [
        { name: "Ana Marić", position: "Directora", experience: "15 años de experiencia", description: "Especialista en posiciones de TI y tecnología" },
        { name: "Marko Petrović", position: "Reclutador Senior", experience: "8 años de experiencia", description: "Experto en posiciones de ventas y marketing" },
        { name: "Petra Novak", position: "Consultora de RH", experience: "6 años de experiencia", description: "Enfoque en finanzas y contabilidad" }
      ]
    },
    images: [
      { url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", description: { hr: "Moderni ured agencije", en: "Modern agency office", es: "Oficina moderna de la agencia" } },
      { url: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg", description: { hr: "Tim u akciji", en: "Team in action", es: "Equipo en acción" } },
      { url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", description: { hr: "Intervju s kandidatom", en: "Candidate interview", es: "Entrevista con candidato" } },
      { url: "https://images.pexels.com/photos/7688466/pexels-photo-7688466.jpeg", description: { hr: "Savjetovanje klijenata", en: "Client consultation", es: "Consulta con clientes" } }
    ],
    jobs: [
      {
        id: 1,
        title: { hr: "Frontend Developer", en: "Frontend Developer", es: "Desarrollador Frontend" },
        company: { hr: "Tech Solutions d.o.o.", en: "Tech Solutions Ltd.", es: "Tech Solutions S.L." },
        city: { hr: "Zagreb", en: "Zagreb", es: "Zagreb" },
        salary: "€2800",
        jobType: { hr: "Puno radno vrijeme", en: "Full-time", es: "Tiempo completo" },
        description: {
          hr: "Tražimo iskusnog frontend developera za rad na inovativnim projektima",
          en: "We are looking for an experienced frontend developer to work on innovative projects",
          es: "Buscamos un desarrollador frontend experimentado para trabajar en proyectos innovadores"
        }
      },
      {
        id: 2,
        title: { hr: "Marketing Manager", en: "Marketing Manager", es: "Gerente de Marketing" },
        company: { hr: "Adriatic Marketing", en: "Adriatic Marketing", es: "Adriatic Marketing" },
        city: { hr: "Split", en: "Split", es: "Split" },
        salary: "€2200",
        jobType: { hr: "Puno radno vrijeme", en: "Full-time", es: "Tiempo completo" },
        description: {
          hr: "Vodite naš marketing tim i kreirajte uspješne kampanje",
          en: "Lead our marketing team and create successful campaigns",
          es: "Lidere nuestro equipo de marketing y cree campañas exitosas"
        }
      },
      {
        id: 3,
        title: { hr: "Računovođa", en: "Accountant", es: "Contador" },
        company: { hr: "Fintech Grupa", en: "Fintech Group", es: "Grupo Fintech" },
        city: { hr: "Rijeka", en: "Rijeka", es: "Rijeka" },
        salary: "€1900",
        jobType: { hr: "Puno radno vrijeme", en: "Full-time", es: "Tiempo completo" },
        description: {
          hr: "Potreban nam je iskusan računovođa za vođenje financijskih izvješća",
          en: "We need an experienced accountant to manage financial reports",
          es: "Necesitamos un contador experimentado para gestionar informes financieros"
        }
      },
      {
        id: 4,
        title: { hr: "Grafički Dizajner", en: "Graphic Designer", es: "Diseñador Gráfico" },
        company: { hr: "Creative Studio", en: "Creative Studio", es: "Creative Studio" },
        city: { hr: "Osijek", en: "Osijek", es: "Osijek" },
        salary: "€1600",
        jobType: { hr: "Pola radnog vremena", en: "Part-time", es: "Medio tiempo" },
        description: {
          hr: "Kreativni dizajner za rad na brandingu i web dizajnu",
          en: "Creative designer for branding and web design work",
          es: "Diseñador creativo para trabajo de branding y diseño web"
        }
      },
      {
        id: 5,
        title: { hr: "Data Analyst", en: "Data Analyst", es: "Analista de Datos" },
        company: { hr: "Analytics Pro", en: "Analytics Pro", es: "Analytics Pro" },
        city: { hr: "Zagreb", en: "Zagreb", es: "Zagreb" },
        salary: "€2500",
        jobType: { hr: "Ugovor", en: "Contract", es: "Contrato" },
        description: {
          hr: "Analizirajte podatke i kreirajte izvješća za donošenje poslovnih odluka",
          en: "Analyze data and create reports for business decision making",
          es: "Analice datos y cree informes para la toma de decisiones comerciales"
        }
      },
      {
        id: 6,
        title: { hr: "Praksa - HR", en: "HR Internship", es: "Pasantía en RH" },
        company: { hr: "People First", en: "People First", es: "People First" },
        city: { hr: "Dubrovnik", en: "Dubrovnik", es: "Dubrovnik" },
        salary: "€800",
        jobType: { hr: "Praksa", en: "Internship", es: "Pasantía" },
        description: {
          hr: "Praktični rad u HR odjelu s mogućnošću zapošljavanja",
          en: "Hands-on work in HR department with employment opportunity",
          es: "Trabajo práctico en el departamento de RH con oportunidad de empleo"
        }
      }
    ]
  });

  const updateField = (field: string, value: any) => {
    setAgencyData(prev => ({ ...prev, [field]: value }));
    saveToLocalStorage({ ...agencyData, [field]: value });
  };

  const updateLocalizedField = (field: string, lang: 'hr' | 'en' | 'es', value: string) => {
    setAgencyData(prev => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value }
    }));
    const newData = { ...agencyData, [field]: { ...agencyData[field], [lang]: value } };
    saveToLocalStorage(newData);
  };

  const updateService = (index: number, field: 'name' | 'description', value: string) => {
    setAgencyData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].map((service, i) =>
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const updateRecruiter = (index: number, field: string, value: string) => {
    setAgencyData(prev => ({
      ...prev,
      recruiters: {
        ...prev.recruiters,
        [currentLang]: prev.recruiters[currentLang].map((recruiter, i) =>
          i === index ? { ...recruiter, [field]: value } : recruiter
        )
      }
    }));
  };

  const updateImageDescription = (index: number, value: string) => {
    setAgencyData(prev => ({
      ...prev,
      images: prev.images.map((img, i) =>
        i === index ? { ...img, description: { ...img.description, [currentLang]: value } } : img
      )
    }));
  };

  const addService = () => {
    setAgencyData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: [
          ...prev.services[currentLang],
          { name: `Novi servis ${prev.services[currentLang].length + 1}`, description: "Opis novog servisa" }
        ]
      }
    }));
  };

  const removeService = (index: number) => {
    setAgencyData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const updateJob = (index: number, field: string, value: string) => {
    setAgencyData(prev => ({
      ...prev,
      jobs: prev.jobs.map((job, i) =>
        i === index ? { ...job, [field]: field.includes('title') || field.includes('company') || field.includes('city') || field.includes('jobType') || field.includes('description')
          ? { ...job[field], [currentLang]: value }
          : value
        } : job
      )
    }));
  };

  const updateJobLocalizedField = (index: number, field: string, value: string) => {
    setAgencyData(prev => ({
      ...prev,
      jobs: prev.jobs.map((job, i) =>
        i === index ? { ...job, [field]: { ...job[field], [currentLang]: value } } : job
      )
    }));
  };

  const addJob = () => {
    const newId = Math.max(...agencyData.jobs.map(j => j.id)) + 1;
    setAgencyData(prev => ({
      ...prev,
      jobs: [
        ...prev.jobs,
        {
          id: newId,
          title: { hr: "Nova pozicija", en: "New Position", es: "Nueva Posición" },
          company: { hr: "Nova tvrtka", en: "New Company", es: "Nueva Empresa" },
          city: { hr: "Grad", en: "City", es: "Ciudad" },
          salary: "€1500",
          jobType: { hr: "Puno radno vrijeme", en: "Full-time", es: "Tiempo completo" },
          description: { hr: "Opis posla", en: "Job description", es: "Descripción del trabajo" }
        }
      ]
    }));
  };

  const removeJob = (index: number) => {
    setAgencyData(prev => ({
      ...prev,
      jobs: prev.jobs.filter((_, i) => i !== index)
    }));
  };

  const saveToLocalStorage = (data: any) => {
    localStorage.setItem('employment-agency-data', JSON.stringify(data));
    localStorage.setItem('employment-agency-saved-at', new Date().toISOString());
  };

  const handleImageUpload = () => {
    if (imageUrl && currentImageField) {
      if (currentImageField === 'heroImage') {
        updateField('heroImage', imageUrl);
      } else if (currentImageField.startsWith('image-')) {
        const index = parseInt(currentImageField.split('-')[1]);
        setAgencyData(prev => ({
          ...prev,
          images: prev.images.map((img, i) =>
            i === index ? { ...img, url: imageUrl } : img
          )
        }));
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
    const checkoutUrl = "https://buy.stripe.com/8x2aEYaNH82C6Xw4xldjO0m";

    // Save current website state before redirecting to Stripe
    const websiteDataToSave = {
      agencyData: agencyData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours from now
    };

    try {
      localStorage.setItem('savedAgencyData', JSON.stringify(websiteDataToSave));
      console.log('Agency website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save agency website data:', error);
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
      {/* Fixed Controls */}
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
                    <span className="text-xs">{t.discountBadge}</span>
                  </div>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${agencyData.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {isEditing && (
          <Button
            onClick={() => openImageDialog('heroImage')}
            className="absolute top-4 left-4 z-10"
            size="sm"
          >
            <Camera className="w-4 h-4 mr-2" />
            {t.changeBackground}
          </Button>
        )}

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {isEditing ? (
            <Input
              value={agencyData.name[currentLang]}
              onChange={(e) => updateLocalizedField('name', currentLang, e.target.value)}
              className="text-5xl font-bold mb-4 text-center bg-transparent border-white text-white placeholder-gray-300"
              placeholder={t.agencyName}
            />
          ) : (
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{agencyData.name[currentLang]}</h1>
          )}
          
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            {isEditing ? (
              <Input
                value={agencyData.location[currentLang]}
                onChange={(e) => updateLocalizedField('location', currentLang, e.target.value)}
                className="bg-transparent border-white text-white placeholder-gray-300"
                placeholder={t.location}
              />
            ) : (
              <span className="text-xl">{agencyData.location[currentLang]}</span>
            )}
          </div>

          {isEditing ? (
            <Textarea
              value={agencyData.tagline[currentLang]}
              onChange={(e) => updateLocalizedField('tagline', currentLang, e.target.value)}
              className="text-xl mb-8 bg-transparent border-white text-white placeholder-gray-300 text-center"
              placeholder={t.tagline}
            />
          ) : (
            <p className="text-xl md:text-2xl mb-8">{agencyData.tagline[currentLang]}</p>
          )}

          <div className="flex justify-center gap-8 text-center">
            <div>
              {isEditing ? (
                <Input
                  value={agencyData.yearsOperating}
                  onChange={(e) => updateField('yearsOperating', e.target.value)}
                  className="text-3xl font-bold mb-2 w-20 bg-transparent border-white text-white text-center"
                />
              ) : (
                <div className="text-3xl font-bold mb-2">{agencyData.yearsOperating}+</div>
              )}
              <div className="text-lg">{t.yearsOperating}</div>
            </div>
            <div>
              {isEditing ? (
                <Input
                  value={agencyData.recruitersEmployed}
                  onChange={(e) => updateField('recruitersEmployed', e.target.value)}
                  className="text-3xl font-bold mb-2 w-20 bg-transparent border-white text-white text-center"
                />
              ) : (
                <div className="text-3xl font-bold mb-2">{agencyData.recruitersEmployed}+</div>
              )}
              <div className="text-lg">{t.recruitersEmployed}</div>
            </div>
            <div>
              {isEditing ? (
                <Input
                  value={agencyData.jobsPlaced}
                  onChange={(e) => updateField('jobsPlaced', e.target.value)}
                  className="text-3xl font-bold mb-2 w-24 bg-transparent border-white text-white text-center"
                />
              ) : (
                <div className="text-3xl font-bold mb-2">{agencyData.jobsPlaced}+</div>
              )}
              <div className="text-lg">{t.jobsPlaced}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">{t.aboutAgency}</h2>
          {isEditing ? (
            <Textarea
              value={agencyData.description[currentLang]}
              onChange={(e) => updateLocalizedField('description', currentLang, e.target.value)}
              className="w-full h-32 mb-6"
              placeholder={t.agencyDescription}
            />
          ) : (
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              {agencyData.description[currentLang]}
            </p>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t.ourServices}</h2>
            {isEditing && (
              <Button onClick={addService} size="sm">
                <Target className="w-4 h-4 mr-2" />
                {t.addService}
              </Button>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyData.services[currentLang].map((service, index) => (
              <Card key={index} className="relative">
                {isEditing && (
                  <Button
                    onClick={() => removeService(index)}
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    {isEditing ? (
                      <Input
                        value={service.name}
                        onChange={(e) => updateService(index, 'name', e.target.value)}
                        className="font-semibold"
                      />
                    ) : (
                      service.name
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateService(index, 'description', e.target.value)}
                      className="h-20"
                    />
                  ) : (
                    <p className="text-gray-600">{service.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t.availableJobs}</h2>
            {isEditing && (
              <Button onClick={addJob} size="sm">
                <Briefcase className="w-4 h-4 mr-2" />
                {t.addJob}
              </Button>
            )}
          </div>
          <div className="grid gap-6">
            {agencyData.jobs.map((job, index) => (
              <Card key={job.id} className="relative">
                {isEditing && (
                  <Button
                    onClick={() => removeJob(index)}
                    size="sm"
                    variant="destructive"
                    className="absolute top-4 right-4 h-6 w-6 p-0 z-10"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    {/* Job Title & Company */}
                    <div className="md:col-span-4">
                      <div className="mb-2">
                        {isEditing ? (
                          <Input
                            value={job.title[currentLang]}
                            onChange={(e) => updateJobLocalizedField(index, 'title', e.target.value)}
                            className="font-bold text-lg mb-2"
                            placeholder={t.jobTitle}
                          />
                        ) : (
                          <h3 className="font-bold text-lg text-gray-900">{job.title[currentLang]}</h3>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Building className="w-4 h-4" />
                        {isEditing ? (
                          <Input
                            value={job.company[currentLang]}
                            onChange={(e) => updateJobLocalizedField(index, 'company', e.target.value)}
                            placeholder={t.jobCompany}
                            className="text-sm"
                          />
                        ) : (
                          <span>{job.company[currentLang]}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {isEditing ? (
                          <Input
                            value={job.city[currentLang]}
                            onChange={(e) => updateJobLocalizedField(index, 'city', e.target.value)}
                            placeholder={t.city}
                            className="text-sm"
                          />
                        ) : (
                          <span>{job.city[currentLang]}</span>
                        )}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="md:col-span-3">
                      <div className="mb-2">
                        <Badge variant="secondary" className="mb-2">
                          {isEditing ? (
                            <Input
                              value={job.jobType[currentLang]}
                              onChange={(e) => updateJobLocalizedField(index, 'jobType', e.target.value)}
                              className="text-xs border-0 bg-transparent p-0 h-auto"
                            />
                          ) : (
                            job.jobType[currentLang]
                          )}
                        </Badge>
                      </div>
                      {isEditing ? (
                        <Textarea
                          value={job.description[currentLang]}
                          onChange={(e) => updateJobLocalizedField(index, 'description', e.target.value)}
                          placeholder={t.description}
                          className="text-sm h-16"
                        />
                      ) : (
                        <p className="text-sm text-gray-600">{job.description[currentLang]}</p>
                      )}
                    </div>

                    {/* Salary */}
                    <div className="md:col-span-2 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {isEditing ? (
                          <Input
                            value={job.salary}
                            onChange={(e) => updateJob(index, 'salary', e.target.value)}
                            className="text-2xl font-bold text-green-600 text-center border-0 bg-transparent p-0 h-auto"
                          />
                        ) : (
                          job.salary
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{t.perMonth}</p>
                    </div>

                    {/* Apply Button */}
                    <div className="md:col-span-3 text-center">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                          if (!isEditing) {
                            alert(`Apliciranje za poziciju: ${job.title[currentLang]} kod ${job.company[currentLang]}`);
                          }
                        }}
                      >
                        <Briefcase className="w-4 h-4 mr-2" />
                        {t.apply}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.photoGallery}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={image.description[currentLang]}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Button
                      onClick={() => openImageDialog(`image-${index}`)}
                      size="sm"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      {t.changeBackground}
                    </Button>
                  </div>
                )}
                <div className="mt-2">
                  {isEditing ? (
                    <Input
                      value={image.description[currentLang]}
                      onChange={(e) => updateImageDescription(index, e.target.value)}
                      placeholder={t.imageDescription}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{image.description[currentLang]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t.consultationService}</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {isEditing ? (
                <Input
                  value={agencyData.consultationPrice}
                  onChange={(e) => updateField('consultationPrice', e.target.value)}
                  className="w-16 text-center border-0 bg-transparent"
                />
              ) : (
                agencyData.consultationPrice === "0" ? "BESPLATNO" : `€${agencyData.consultationPrice}`
              )}
              {agencyData.consultationPrice !== "0" && ` ${t.perConsultation}`}
            </Badge>
          </div>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg text-gray-600">4.9/5 (124 {t.reviews})</span>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Clock className="w-5 h-5 mr-2" />
            {t.bookConsultation}
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.agencyTeam}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {agencyData.recruiters[currentLang].map((recruiter, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle>
                    {isEditing ? (
                      <Input
                        value={recruiter.name}
                        onChange={(e) => updateRecruiter(index, 'name', e.target.value)}
                        placeholder={t.recruiterName}
                      />
                    ) : (
                      recruiter.name
                    )}
                  </CardTitle>
                  <p className="text-blue-600 font-semibold">
                    {isEditing ? (
                      <Input
                        value={recruiter.position}
                        onChange={(e) => updateRecruiter(index, 'position', e.target.value)}
                        className="text-center"
                      />
                    ) : (
                      recruiter.position
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isEditing ? (
                      <Input
                        value={recruiter.experience}
                        onChange={(e) => updateRecruiter(index, 'experience', e.target.value)}
                        className="text-center text-sm"
                      />
                    ) : (
                      recruiter.experience
                    )}
                  </p>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={recruiter.description}
                      onChange={(e) => updateRecruiter(index, 'description', e.target.value)}
                      placeholder={t.description}
                      className="h-20"
                    />
                  ) : (
                    <p className="text-gray-600 text-center">{recruiter.description}</p>
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
                  <Building className="w-5 h-5 text-blue-600" />
                  {t.agencyOwner}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={agencyData.hostName}
                      onChange={(e) => updateField('hostName', e.target.value)}
                      placeholder={t.hostName}
                    />
                  ) : (
                    <span>{agencyData.hostName}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={agencyData.hostPhone}
                      onChange={(e) => updateField('hostPhone', e.target.value)}
                      placeholder={t.phoneNumber}
                    />
                  ) : (
                    <span>{agencyData.hostPhone}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={agencyData.hostEmail}
                      onChange={(e) => updateField('hostEmail', e.target.value)}
                      placeholder={t.emailAddress}
                    />
                  ) : (
                    <span>{agencyData.hostEmail}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <Input
                      value={agencyData.website}
                      onChange={(e) => updateField('website', e.target.value)}
                      placeholder={t.website}
                    />
                  ) : (
                    <span>{agencyData.website}</span>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.howToFindUs}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p>Google Maps</p>
                    <p className="text-sm">{agencyData.location[currentLang]}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-sm font-semibold">{t.findUsOn}:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 font-medium">LinkedIn:</span>
                      {isEditing ? (
                        <Input
                          value={agencyData.airbnbUrl}
                          onChange={(e) => updateField('airbnbUrl', e.target.value)}
                          placeholder={t.airbnbUrl}
                          className="flex-1"
                        />
                      ) : (
                        <span className="text-sm">{agencyData.airbnbUrl || "linkedin.com/company/karijeraplus"}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 font-medium">Facebook:</span>
                      {isEditing ? (
                        <Input
                          value={agencyData.bookingUrl}
                          onChange={(e) => updateField('bookingUrl', e.target.value)}
                          placeholder={t.bookingUrl}
                          className="flex-1"
                        />
                      ) : (
                        <span className="text-sm">{agencyData.bookingUrl || "facebook.com/karijeraplus"}</span>
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
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">{t.footerText}</p>
          <p className="text-gray-400 mt-2">
            © 2024 {agencyData.name[currentLang]}. Sva prava zadržana.
          </p>
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
