import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Calculator, Clock, Users, TrendingUp, DollarSign, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Calendar, FileText, Award, Building2, ShieldCheck } from "lucide-react";

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
    firmName: "Naziv firme",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOpen: "godina rada",
    accountants: "računovođa",
    clients: "klijenata",
    aboutFirm: "O našoj firmi",
    firmDescription: "Opis firme",
    ourServices: "Naše usluge",
    service: "Usluga",
    ourTeam: "Naš tim",
    industriesWeServe: "Industrije koje opslužujemo",
    servicePackages: "Paketi usluga",
    softwareExpertise: "Softveri koje koristimo",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    price: "cijena",
    reviews: "recenzija",
    scheduleConsultation: "Zakaži konzultaciju",
    accountantName: "Ime računovođe",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headAccountant: "Glavni računovođa",
    hostName: "Ime računovođe",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Vaše financije u sigurnim rukama",
    buyWebsite: "Kupi Web Stranicu",
    buyWebsiteTitle: "Kupi Web Stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Tvrtka",
    companyOptional: "Tvrtka (opcionalno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako do nas",
    delete: "Obriši",
    addService: "Dodaj uslugu",
    addIndustry: "Dodaj industriju",
    addPackage: "Dodaj paket",
    findUsOn: "Pronađite nas na",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    manageFinancesConfidence: "Upravljajte financijama s povjerenjem",
    taxPreparation: "Priprema poreza",
    bookkeeping: "Knjigovodstvo",
    payrollServices: "Obračun plaća",
    businessConsulting: "Poslovne konzultacije",
    freeConsultation: "Besplatna konzultacija",
    clientPortal: "Klijentski portal",
    certifiedAccountants: "Certificirani računovođe",
    secureDocuments: "Sigurni dokumenti",
    financialReports: "Financijski izvještaji",
    taxDeadlines: "Porezni rokovi",
    businessTips: "Poslovni savjeti",
    credentials: "Kvalifikacije",
    experience: "Iskustvo",
    qualification: "Kvalifikacija",
    monthlyPackage: "Mjesečni paket",
    perMonth: "mjesečno"
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
    firmName: "Firm name",
    location: "Location",
    tagline: "Tagline",
    yearsOpen: "years open",
    accountants: "accountants",
    clients: "clients",
    aboutFirm: "About Our Firm",
    firmDescription: "Firm description",
    ourServices: "Our Services",
    service: "Service",
    ourTeam: "Our Team",
    industriesWeServe: "Industries We Serve",
    servicePackages: "Service Packages",
    softwareExpertise: "Software We Use",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    pricing: "Pricing",
    price: "price",
    reviews: "reviews",
    scheduleConsultation: "Schedule Consultation",
    accountantName: "Accountant name",
    description: "Description",
    contactInfo: "Contact Information",
    headAccountant: "Head Accountant",
    hostName: "Accountant name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Your finances in safe hands",
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
    addService: "Add service",
    addIndustry: "Add industry",
    addPackage: "Add package",
    findUsOn: "Find us on",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    manageFinancesConfidence: "Manage Your Finances with Confidence",
    taxPreparation: "Tax Preparation",
    bookkeeping: "Bookkeeping",
    payrollServices: "Payroll Services",
    businessConsulting: "Business Consulting",
    freeConsultation: "Free Consultation",
    clientPortal: "Client Portal",
    certifiedAccountants: "Certified Accountants",
    secureDocuments: "Secure Documents",
    financialReports: "Financial Reports",
    taxDeadlines: "Tax Deadlines",
    businessTips: "Business Tips",
    credentials: "Credentials",
    experience: "Experience",
    qualification: "Qualification",
    monthlyPackage: "Monthly Package",
    perMonth: "per month"
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
    firmName: "Nombre de la firma",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOpen: "años abierto",
    accountants: "contadores",
    clients: "clientes",
    aboutFirm: "Sobre Nuestra Firma",
    firmDescription: "Descripción de la firma",
    ourServices: "Nuestros Servicios",
    service: "Servicio",
    ourTeam: "Nuestro Equipo",
    industriesWeServe: "Industrias que Servimos",
    servicePackages: "Paquetes de Servicios",
    softwareExpertise: "Software que Usamos",
    photoGallery: "Galería de Fotos",
    imageDescription: "Descripción de imagen",
    pricing: "Precios",
    price: "precio",
    reviews: "reseñas",
    scheduleConsultation: "Programar Consulta",
    accountantName: "Nombre del contador",
    description: "Descripción",
    contactInfo: "Información de Contacto",
    headAccountant: "Contador Principal",
    hostName: "Nombre del contador",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Sus finanzas en buenas manos",
    buyWebsite: "Comprar Sitio Web",
    buyWebsiteTitle: "Comprar Sitio Web",
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
    addService: "Agregar servicio",
    addIndustry: "Agregar industria",
    addPackage: "Agregar paquete",
    findUsOn: "Encuéntranos en",
    instagramUrl: "URL de Instagram",
    facebookUrl: "URL de Facebook",
    discountBadge: "(90% OFF!)",
    manageFinancesConfidence: "Administre sus Finanzas con Confianza",
    taxPreparation: "Preparación de Impuestos",
    bookkeeping: "Contabilidad",
    payrollServices: "Servicios de Nómina",
    businessConsulting: "Consultoría Empresarial",
    freeConsultation: "Consulta Gratuita",
    clientPortal: "Portal del Cliente",
    certifiedAccountants: "Contadores Certificados",
    secureDocuments: "Documentos Seguros",
    financialReports: "Informes Financieros",
    taxDeadlines: "Fechas Límite de Impuestos",
    businessTips: "Consejos Empresariales",
    credentials: "Credenciales",
    experience: "Experiencia",
    qualification: "Calificación",
    monthlyPackage: "Paquete Mensual",
    perMonth: "por mes"
  }
};

export default function AccountingFirm() {
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

  const [firmData, setFirmData] = useState({
    name: {
      hr: "Računovodstvena kuća ProFin",
      en: "ProFin Accounting Services", 
      es: "Servicios Contables ProFin"
    },
    location: {
      hr: "Zagreb, Hrvatska",
      en: "Zagreb, Croatia",
      es: "Zagreb, Croacia"
    },
    tagline: {
      hr: "Profesionalne financijske usluge za vaš uspjeh",
      en: "Professional financial services for your success",
      es: "Servicios financieros profesionales para su éxito"
    },
    description: {
      hr: "Dobrodošli u ProFin, vašeg pouzdanog partnera za sveobuhvatne računovodstvene usluge. S više od 18 godina iskustva u financijskoj industriji, naš tim certificiranih računovođa pomaže tvrtkama svih veličina da upravljaju svojom financijama s povjerenjem. Specijalizirani smo za mala i srednja poduzeća, pružajući personalizirane usluge koje omogućavaju rast vašeg posla.",
      en: "Welcome to ProFin, your trusted partner for comprehensive accounting services. With over 18 years of experience in the financial industry, our team of certified accountants helps businesses of all sizes manage their finances with confidence. We specialize in small and medium enterprises, providing personalized services that enable your business growth.",
      es: "Bienvenido a ProFin, su socio confiable para servicios contables integrales. Con más de 18 años de experiencia en la industria financiera, nuestro equipo de contadores certificados ayuda a empresas de todos los tamaños a administrar sus finanzas con confianza. Nos especializamos en pequeñas y medianas empresas, brindando servicios personalizados que permiten el crecimiento de su negocio."
    },
    yearsOpen: "18",
    accountantsCount: "8",
    clientsCount: "350",
    averageRating: "4.9",
    hostName: "Marija Kovač, dipl. oec.",
    hostPhone: "+385 1 234 5678",
    hostEmail: "marija@profin.hr",
    website: "www.profin.hr",
    instagramUrl: "https://instagram.com/profin.accounting",
    facebookUrl: "https://facebook.com/profin.accounting",
    heroImage: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",
    services: {
      hr: [
        { name: "Mjesečno knjigovodstvo", description: "Kompletno vođenje poslovnih knjiga malih i srednjih poduzeća", price: "800" },
        { name: "Godišnja bilanca", description: "Izrada godišnjih financijskih izvještaja i bilance", price: "1500" },
        { name: "Porezno planiranje", description: "Optimizacija poreznih obveza i savjetovanje", price: "500" },
        { name: "Obračun plaća", description: "Mjesečni obračun plaća za zaposlenike", price: "150" },
        { name: "PDV prijave", description: "Mjesečne i tromjesečne PDV prijave", price: "200" },
        { name: "Osnivanje tvrtke", description: "Kompletna usluga osnivanja d.o.o. ili j.d.o.o.", price: "2000" },
        { name: "Financijsko savjetovanje", description: "Strateško planiranje i analiza poslovanja", price: "300" },
        { name: "Revizija", description: "Nezavisna revizija financijskih izvještaja", price: "5000" }
      ],
      en: [
        { name: "Monthly Bookkeeping", description: "Complete bookkeeping for small and medium enterprises", price: "800" },
        { name: "Annual Balance Sheet", description: "Preparation of annual financial statements and balance sheets", price: "1500" },
        { name: "Tax Planning", description: "Tax optimization and advisory services", price: "500" },
        { name: "Payroll Processing", description: "Monthly payroll processing for employees", price: "150" },
        { name: "VAT Returns", description: "Monthly and quarterly VAT returns", price: "200" },
        { name: "Company Formation", description: "Complete LLC or JSC formation services", price: "2000" },
        { name: "Financial Consulting", description: "Strategic planning and business analysis", price: "300" },
        { name: "Audit Services", description: "Independent audit of financial statements", price: "5000" }
      ],
      es: [
        { name: "Contabilidad Mensual", description: "Contabilidad completa para pequeñas y medianas empresas", price: "800" },
        { name: "Balance Anual", description: "Preparación de estados financieros anuales y balances", price: "1500" },
        { name: "Planificación Fiscal", description: "Optimización fiscal y servicios de asesoría", price: "500" },
        { name: "Procesamiento de Nómina", description: "Procesamiento mensual de nómina para empleados", price: "150" },
        { name: "Declaraciones de IVA", description: "Declaraciones de IVA mensuales y trimestrales", price: "200" },
        { name: "Formación de Empresa", description: "Servicios completos de formación de LLC o JSC", price: "2000" },
        { name: "Consultoría Financiera", description: "Planificación estratégica y análisis de negocios", price: "300" },
        { name: "Servicios de Auditoría", description: "Auditoría independiente de estados financieros", price: "5000" }
      ]
    },
    industries: {
      hr: [
        "Trgovina na malo i veliko",
        "Ugostiteljstvo i turizam",
        "Proizvodnja i industrija",
        "IT i softverske kompanije",
        "Zdravstvo i farmacija",
        "Nekretnine i gradnja",
        "Transport i logistika",
        "Slobodne profesije"
      ],
      en: [
        "Retail and Wholesale",
        "Hospitality and Tourism",
        "Manufacturing and Industry",
        "IT and Software Companies",
        "Healthcare and Pharmaceuticals",
        "Real Estate and Construction",
        "Transport and Logistics",
        "Professional Services"
      ],
      es: [
        "Comercio Minorista y Mayorista",
        "Hospitalidad y Turismo",
        "Manufactura e Industria",
        "Empresas de IT y Software",
        "Salud y Farmacia",
        "Bienes Raíces y Construcción",
        "Transporte y Logística",
        "Servicios Profesionales"
      ]
    },
    packages: {
      hr: [
        {
          name: "Startup paket",
          price: "500",
          period: "mjesečno",
          features: ["Osnivanje tvrtke", "Mjesečno knjigovodstvo", "Porezne prijave", "Email podrška"]
        },
        {
          name: "Standardni paket",
          price: "800",
          period: "mjesečno",
          features: ["Kompletno knjigovodstvo", "Obračun plaća", "Porezno savjetovanje", "Telefonska podrška", "Tromjesečni izvještaji"]
        },
        {
          name: "Premium paket",
          price: "1200",
          period: "mjesečno",
          features: ["Sav sadržaj standardnog", "Financijsko planiranje", "Mesečni sastanci", "Prioritetna podrška", "Revizija jednom godišnje"]
        }
      ],
      en: [
        {
          name: "Startup Package",
          price: "500",
          period: "per month",
          features: ["Company formation", "Monthly bookkeeping", "Tax returns", "Email support"]
        },
        {
          name: "Standard Package",
          price: "800",
          period: "per month",
          features: ["Complete bookkeeping", "Payroll processing", "Tax advisory", "Phone support", "Quarterly reports"]
        },
        {
          name: "Premium Package",
          price: "1200",
          period: "per month",
          features: ["All standard features", "Financial planning", "Monthly meetings", "Priority support", "Annual audit"]
        }
      ],
      es: [
        {
          name: "Paquete Startup",
          price: "500",
          period: "por mes",
          features: ["Formación de empresa", "Contabilidad mensual", "Declaraciones fiscales", "Soporte por email"]
        },
        {
          name: "Paquete Estándar",
          price: "800",
          period: "por mes",
          features: ["Contabilidad completa", "Procesamiento de nómina", "Asesoría fiscal", "Soporte telefónico", "Informes trimestrales"]
        },
        {
          name: "Paquete Premium",
          price: "1200",
          period: "por mes",
          features: ["Todas las características estándar", "Planificación financiera", "Reuniones mensuales", "Soporte prioritario", "Auditoría anual"]
        }
      ]
    },
    team: {
      hr: [
        {
          name: "Marija Kovač",
          title: "Osnivačica i glavni računovođa",
          qualification: "Dipl. oec., ovlaštena revizorka",
          experience: "18+ godina iskustva",
          description: "Vodi firmu od osnutka, specijalizirana za porezno planiranje i reviziju",
          image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
        },
        {
          name: "Petra Novak",
          title: "Senior računovođa",
          qualification: "Mag. oec., CPA",
          experience: "12+ godina iskustva",
          description: "Stručnjak za nemzetne tvrtke i složene porezne slučajeve",
          image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg"
        },
        {
          name: "Ivan Jurić",
          title: "Porezni savjetnik",
          qualification: "Dipl. oec., porezni savjetnik",
          experience: "10+ godina iskustva",
          description: "Specijaliziran za obračun plaća i radne odnose",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg"
        }
      ],
      en: [
        {
          name: "Marija Kovač",
          title: "Founder & Head Accountant",
          qualification: "Dipl. oec., Certified Auditor",
          experience: "18+ years experience",
          description: "Leading the firm since inception, specialized in tax planning and audit",
          image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
        },
        {
          name: "Petra Novak",
          title: "Senior Accountant",
          qualification: "Mag. oec., CPA",
          experience: "12+ years experience",
          description: "Expert in international companies and complex tax cases",
          image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg"
        },
        {
          name: "Ivan Jurić",
          title: "Tax Advisor",
          qualification: "Dipl. oec., Tax Advisor",
          experience: "10+ years experience",
          description: "Specialized in payroll processing and labor relations",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg"
        }
      ],
      es: [
        {
          name: "Marija Kovač",
          title: "Fundadora y Contadora Principal",
          qualification: "Dipl. oec., Auditora Certificada",
          experience: "18+ años de experiencia",
          description: "Dirigiendo la firma desde su creación, especializada en planificación fiscal y auditoría",
          image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
        },
        {
          name: "Petra Novak",
          title: "Contadora Senior",
          qualification: "Mag. oec., CPA",
          experience: "12+ años de experiencia",
          description: "Experta en empresas internacionales y casos fiscales complejos",
          image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg"
        },
        {
          name: "Ivan Jurić",
          title: "Asesor Fiscal",
          qualification: "Dipl. oec., Asesor Fiscal",
          experience: "10+ años de experiencia",
          description: "Especializado en procesamiento de nómina y relaciones laborales",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg"
        }
      ]
    },
    software: {
      hr: [
        { name: "QuickBooks", description: "Kompletno rješenje za malo poslovanje" },
        { name: "Xero", description: "Napredna cloud računovodstva" },
        { name: "SAP Business One", description: "ERP sustav za veća poduzeća" },
        { name: "Sage", description: "Profesionalni računovodstveni softver" },
        { name: "Microsoft Excel", description: "Analitika i izvještavanje" },
        { name: "Administratio", description: "Porezni softver za Hrvatsku" }
      ],
      en: [
        { name: "QuickBooks", description: "Complete small business solution" },
        { name: "Xero", description: "Advanced cloud accounting" },
        { name: "SAP Business One", description: "ERP system for larger enterprises" },
        { name: "Sage", description: "Professional accounting software" },
        { name: "Microsoft Excel", description: "Analytics and reporting" },
        { name: "Administratio", description: "Croatian tax software" }
      ],
      es: [
        { name: "QuickBooks", description: "Solución completa para pequeñas empresas" },
        { name: "Xero", description: "Contabilidad avanzada en la nube" },
        { name: "SAP Business One", description: "Sistema ERP para empresas más grandes" },
        { name: "Sage", description: "Software de contabilidad profesional" },
        { name: "Microsoft Excel", description: "Analítica e informes" },
        { name: "Administratio", description: "Software fiscal croata" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",
        alt: {
          hr: "Moderni ured za računovodstvo",
          en: "Modern accounting office",
          es: "Oficina de contabilidad moderna"
        }
      },
      {
        url: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg",
        alt: {
          hr: "Financijski tim na radu",
          en: "Financial team at work",
          es: "Equipo financiero en el trabajo"
        }
      },
      {
        url: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
        alt: {
          hr: "Sastanak s klijentom",
          en: "Client meeting",
          es: "Reunión con cliente"
        }
      },
      {
        url: "https://images.pexels.com/photos/6863331/pexels-photo-6863331.jpeg",
        alt: {
          hr: "Financijski izvještaji i analiza",
          en: "Financial reports and analysis",
          es: "Informes financieros y análisis"
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

  const updateService = (index: number, field: string, value: string) => {
    setFirmData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].map((service, i) =>
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const updateIndustry = (index: number, value: string) => {
    setFirmData(prev => ({
      ...prev,
      industries: {
        ...prev.industries,
        [currentLang]: prev.industries[currentLang].map((industry, i) =>
          i === index ? value : industry
        )
      }
    }));
  };

  const updatePackage = (index: number, field: string, value: string | string[]) => {
    setFirmData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [currentLang]: prev.packages[currentLang].map((pkg, i) =>
          i === index ? { ...pkg, [field]: value } : pkg
        )
      }
    }));
  };

  const updateTeamMember = (index: number, field: string, value: string) => {
    setFirmData(prev => ({
      ...prev,
      team: {
        ...prev.team,
        [currentLang]: prev.team[currentLang].map((member, i) =>
          i === index ? { ...member, [field]: value } : member
        )
      }
    }));
  };

  const updateSoftware = (index: number, field: string, value: string) => {
    setFirmData(prev => ({
      ...prev,
      software: {
        ...prev.software,
        [currentLang]: prev.software[currentLang].map((software, i) =>
          i === index ? { ...software, [field]: value } : software
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
    const checkoutUrl = "https://buy.stripe.com/test_5kQ14oaNHgz8fu2d3RdjO08";
    
    const websiteDataToSave = {
      firmData: firmData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000)
    };
    
    try {
      localStorage.setItem('savedFirmData', JSON.stringify(websiteDataToSave));
      console.log('Accounting firm website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save accounting firm website data:', error);
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

  const deleteService = (index: number) => {
    setFirmData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addService = () => {
    setFirmData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: [...prev.services[currentLang], { name: t.service, description: t.description, price: "500" }]
      }
    }));
  };

  const deleteIndustry = (index: number) => {
    setFirmData(prev => ({
      ...prev,
      industries: {
        ...prev.industries,
        [currentLang]: prev.industries[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addIndustry = () => {
    setFirmData(prev => ({
      ...prev,
      industries: {
        ...prev.industries,
        [currentLang]: [...prev.industries[currentLang], "New Industry"]
      }
    }));
  };

  const deletePackage = (index: number) => {
    setFirmData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [currentLang]: prev.packages[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addPackage = () => {
    setFirmData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [currentLang]: [...prev.packages[currentLang], { name: "Package", price: "500", period: t.perMonth, features: ["Feature 1", "Feature 2"] }]
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
        style={{ backgroundImage: `url(${firmData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900/75"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-white">
              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    value={firmData.name[currentLang]}
                    onChange={(e) => updateLocalizedField("name", e.target.value)}
                    className="text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.firmName}
                  />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <Input
                      value={firmData.location[currentLang]}
                      onChange={(e) => updateLocalizedField("location", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder={t.location}
                    />
                  </div>
                  <Textarea
                    value={firmData.tagline[currentLang]}
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
                    {firmData.name[currentLang]}
                  </h1>
                  <div className="flex items-center text-xl mb-6">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span>{firmData.location[currentLang]}</span>
                  </div>
                  <p className="text-2xl lg:text-3xl mb-8 font-light">
                    {firmData.tagline[currentLang]}
                  </p>
                  <div className="flex flex-wrap gap-8 text-lg">
                    <div className="flex items-center">
                      <ShieldCheck className="w-6 h-6 mr-2 text-green-400" />
                      <span>{firmData.yearsOpen} {t.yearsOpen}</span>
                    </div>
                    <div className="flex items-center">
                      <Calculator className="w-6 h-6 mr-2 text-blue-400" />
                      <span>{firmData.accountantsCount} {t.accountants}</span>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="w-6 h-6 mr-2 text-purple-400" />
                      <span>{firmData.clientsCount} {t.clients}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-6 h-6 mr-2 text-yellow-400" />
                      <span>{firmData.averageRating} {t.reviews}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                      <Calendar className="w-6 h-6 mr-2" />
                      {t.scheduleConsultation}
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                      <FileText className="w-6 h-6 mr-2" />
                      {t.freeConsultation}
                    </Button>
                  </div>
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
            <h2 className="text-4xl font-bold mb-8">{t.aboutFirm}</h2>
            {isEditing ? (
              <Textarea
                value={firmData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="text-lg leading-relaxed"
                placeholder={t.firmDescription}
                rows={6}
              />
            ) : (
              <p className="text-lg leading-relaxed text-gray-600">
                {firmData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.ourServices}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firmData.services[currentLang].map((service, index) => (
              <Card key={index} className="relative border-blue-200">
                {isEditing && (
                  <Button
                    onClick={() => deleteService(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 z-10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div className="flex-1">
                      {isEditing ? (
                        <Input
                          value={service.name}
                          onChange={(e) => updateService(index, "name", e.target.value)}
                          className="font-bold"
                        />
                      ) : (
                        <span className="text-gray-800">{service.name}</span>
                      )}
                    </div>
                    <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                      {isEditing ? (
                        <div className="flex items-center">
                          <Input
                            value={service.price}
                            onChange={(e) => updateService(index, "price", e.target.value)}
                            className="w-20 mx-1 text-center font-bold border-0 bg-transparent"
                          />
                          <span>kn</span>
                        </div>
                      ) : (
                        `${service.price} kn`
                      )}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateService(index, "description", e.target.value)}
                      placeholder={t.description}
                      rows={3}
                    />
                  ) : (
                    <p className="text-gray-600">{service.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          {isEditing && (
            <div className="text-center mt-8">
              <Button onClick={addService} variant="outline">
                <Calculator className="w-4 h-4 mr-2" />
                {t.addService}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Industries & Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Industries We Serve */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">{t.industriesWeServe}</h3>
              <div className="space-y-3">
                {firmData.industries[currentLang].map((industry, index) => (
                  <Card key={index} className="relative">
                    {isEditing && (
                      <Button
                        onClick={() => deleteIndustry(index)}
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 z-10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <Building2 className="w-5 h-5 mr-3 text-blue-600" />
                        {isEditing ? (
                          <Input
                            value={industry}
                            onChange={(e) => updateIndustry(index, e.target.value)}
                            className="bg-transparent border-0 p-0 font-medium"
                          />
                        ) : (
                          <span className="font-medium">{industry}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {isEditing && (
                <div className="text-center mt-6">
                  <Button onClick={addIndustry} variant="outline">
                    <Building2 className="w-4 h-4 mr-2" />
                    {t.addIndustry}
                  </Button>
                </div>
              )}
            </div>

            {/* Service Packages */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">{t.servicePackages}</h3>
              <div className="space-y-6">
                {firmData.packages[currentLang].map((pkg, index) => (
                  <Card key={index} className="relative border-green-200">
                    {isEditing && (
                      <Button
                        onClick={() => deletePackage(index)}
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 z-10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">
                          {isEditing ? (
                            <Input
                              value={pkg.name}
                              onChange={(e) => updatePackage(index, "name", e.target.value)}
                              className="text-lg font-bold"
                            />
                          ) : (
                            pkg.name
                          )}
                        </CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            {isEditing ? (
                              <div className="flex items-center">
                                <Input
                                  value={pkg.price}
                                  onChange={(e) => updatePackage(index, "price", e.target.value)}
                                  className="w-20 text-center font-bold"
                                />
                                <span className="ml-1">kn</span>
                              </div>
                            ) : (
                              `${pkg.price} kn`
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {isEditing ? (
                              <Input
                                value={pkg.period}
                                onChange={(e) => updatePackage(index, "period", e.target.value)}
                                className="text-sm text-center"
                              />
                            ) : (
                              pkg.period
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {isEditing ? (
                        <div>
                          <Label>Features (comma separated):</Label>
                          <Textarea
                            value={pkg.features.join(", ")}
                            onChange={(e) => updatePackage(index, "features", e.target.value.split(", "))}
                            rows={4}
                            className="mt-2"
                          />
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              {isEditing && (
                <div className="text-center mt-6">
                  <Button onClick={addPackage} variant="outline">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {t.addPackage}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.ourTeam}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {firmData.team[currentLang].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${member.image})`}}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {isEditing ? (
                      <Input
                        value={member.name}
                        onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                        placeholder={t.accountantName}
                      />
                    ) : (
                      member.name
                    )}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {isEditing ? (
                      <Input
                        value={member.title}
                        onChange={(e) => updateTeamMember(index, "title", e.target.value)}
                        placeholder="Title"
                      />
                    ) : (
                      member.title
                    )}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {isEditing ? (
                      <Input
                        value={member.qualification}
                        onChange={(e) => updateTeamMember(index, "qualification", e.target.value)}
                        placeholder={t.qualification}
                        className="text-sm"
                      />
                    ) : (
                      member.qualification
                    )}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {isEditing ? (
                      <Input
                        value={member.experience}
                        onChange={(e) => updateTeamMember(index, "experience", e.target.value)}
                        placeholder={t.experience}
                        className="text-sm"
                      />
                    ) : (
                      member.experience
                    )}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {isEditing ? (
                      <Textarea
                        value={member.description}
                        onChange={(e) => updateTeamMember(index, "description", e.target.value)}
                        placeholder={t.description}
                        rows={3}
                        className="text-sm"
                      />
                    ) : (
                      member.description
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.softwareExpertise}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firmData.software[currentLang].map((software, index) => (
              <Card key={index} className="border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">
                    {isEditing ? (
                      <Input
                        value={software.name}
                        onChange={(e) => updateSoftware(index, "name", e.target.value)}
                        className="text-center font-bold"
                      />
                    ) : (
                      software.name
                    )}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {isEditing ? (
                      <Textarea
                        value={software.description}
                        onChange={(e) => updateSoftware(index, "description", e.target.value)}
                        rows={2}
                        className="text-sm"
                      />
                    ) : (
                      software.description
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.photoGallery}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {firmData.images.map((image, index) => (
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
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t.contactInfo}</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={firmData.hostPhone}
                    onChange={(e) => updateField("hostPhone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.phoneNumber}
                  />
                ) : (
                  <span>{firmData.hostPhone}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={firmData.hostEmail}
                    onChange={(e) => updateField("hostEmail", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.emailAddress}
                  />
                ) : (
                  <span>{firmData.hostEmail}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={firmData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.website}
                  />
                ) : (
                  <span>{firmData.website}</span>
                )}
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                <Calendar className="w-6 h-6 mr-2" />
                {t.freeConsultation}
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                <FileText className="w-6 h-6 mr-2" />
                {t.clientPortal}
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
                value={firmData.name[currentLang]}
                onChange={(e) => updateLocalizedField("name", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white text-center"
              />
            ) : (
              firmData.name[currentLang]
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
                  value={firmData.facebookUrl}
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
                  value={firmData.instagramUrl}
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
            <DialogTitle>{firmData.images[selectedImageIndex]?.alt[currentLang]}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={firmData.images[selectedImageIndex]?.url}
              alt={firmData.images[selectedImageIndex]?.alt[currentLang]}
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