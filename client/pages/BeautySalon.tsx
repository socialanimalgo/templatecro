import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Scissors, Clock, Users, Sparkles, Heart, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Calendar, Gift } from "lucide-react";

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
    salonName: "Naziv salona",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOpen: "godina rada",
    stylists: "stilista",
    clients: "klijenata",
    aboutSalon: "O našem salonu",
    salonDescription: "Opis salona",
    ourServices: "Naše usluge",
    service: "Usluga",
    ourTeam: "Naš tim",
    transformations: "Transformacije",
    spaPackages: "Spa paketi",
    retailProducts: "Naši proizvodi",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    price: "cijena",
    reviews: "recenzija",
    bookAppointment: "Rezerviraj termin",
    stylistName: "Ime stiliste",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headStylist: "Glavna stilistica",
    hostName: "Ime stiliste",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Gdje ljepota susreće savršenstvo",
    buyWebsite: "Kupi Web Stranicu",
    buyWebsiteTitle: "Kupi Web Stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Salon",
    companyOptional: "Salon (opcionalno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako do nas",
    delete: "Obriši",
    addService: "Dodaj uslugu",
    addPackage: "Dodaj paket",
    addProduct: "Dodaj proizvod",
    findUsOn: "Pronađite nas na",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    relaxAndRejuvenate: "Opustite se i obnovite",
    hairServices: "Usluge za kosu",
    nailServices: "Usluge za nokte",
    skinServices: "Usluge za kožu",
    massageServices: "Masaže",
    bridalPackage: "Vjenčani paket",
    daySpectatorial: "Spa dan",
    clientTestimonials: "Mišljenja klijenata",
    beforeAfter: "Prije/Nakon",
    openingHours: "Radno vrijeme"
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
    salonName: "Salon name",
    location: "Location",
    tagline: "Tagline",
    yearsOpen: "years open",
    stylists: "stylists",
    clients: "clients",
    aboutSalon: "About Our Salon",
    salonDescription: "Salon description",
    ourServices: "Our Services",
    service: "Service",
    ourTeam: "Our Team",
    transformations: "Transformations",
    spaPackages: "Spa Packages",
    retailProducts: "Our Products",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    pricing: "Pricing",
    price: "price",
    reviews: "reviews",
    bookAppointment: "Book Appointment",
    stylistName: "Stylist name",
    description: "Description",
    contactInfo: "Contact Information",
    headStylist: "Head Stylist",
    hostName: "Stylist name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Where beauty meets perfection",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Salon",
    companyOptional: "Salon (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addService: "Add service",
    addPackage: "Add package",
    addProduct: "Add product",
    findUsOn: "Find us on",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    relaxAndRejuvenate: "Relax and Rejuvenate",
    hairServices: "Hair Services",
    nailServices: "Nail Services",
    skinServices: "Skin Services",
    massageServices: "Massage Services",
    bridalPackage: "Bridal Package",
    daySpectatorial: "Spa Day",
    clientTestimonials: "Client Testimonials",
    beforeAfter: "Before/After",
    openingHours: "Opening Hours"
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
    salonName: "Nombre del salón",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOpen: "años abierto",
    stylists: "estilistas",
    clients: "clientes",
    aboutSalon: "Sobre Nuestro Salón",
    salonDescription: "Descripción del salón",
    ourServices: "Nuestros Servicios",
    service: "Servicio",
    ourTeam: "Nuestro Equipo",
    transformations: "Transformaciones",
    spaPackages: "Paquetes de Spa",
    retailProducts: "Nuestros Productos",
    photoGallery: "Galería de Fotos",
    imageDescription: "Descripción de imagen",
    pricing: "Precios",
    price: "precio",
    reviews: "reseñas",
    bookAppointment: "Reservar Cita",
    stylistName: "Nombre del estilista",
    description: "Descripción",
    contactInfo: "Información de Contacto",
    headStylist: "Estilista Principal",
    hostName: "Nombre del estilista",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Donde la belleza se encuentra con la perfección",
    buyWebsite: "Comprar Sitio Web",
    buyWebsiteTitle: "Comprar Sitio Web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Salón",
    companyOptional: "Salón (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addService: "Agregar servicio",
    addPackage: "Agregar paquete",
    addProduct: "Agregar producto",
    findUsOn: "Encuéntranos en",
    instagramUrl: "URL de Instagram",
    facebookUrl: "URL de Facebook",
    discountBadge: "(90% OFF!)",
    relaxAndRejuvenate: "Relájate y Rejuvenece",
    hairServices: "Servicios para el Cabello",
    nailServices: "Servicios de Uñas",
    skinServices: "Servicios para la Piel",
    massageServices: "Servicios de Masaje",
    bridalPackage: "Paquete Nupcial",
    daySpectatorial: "Día de Spa",
    clientTestimonials: "Testimonios de Clientes",
    beforeAfter: "Antes/Después",
    openingHours: "Horario de Atención"
  }
};

export default function BeautySalon() {
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

  const [salonData, setSalonData] = useState({
    name: {
      hr: "Bella Vista Beauty Salon",
      en: "Bella Vista Beauty Salon", 
      es: "Bella Vista Beauty Salon"
    },
    location: {
      hr: "Zagreb, Hrvatska",
      en: "Zagreb, Croatia",
      es: "Zagreb, Croacia"
    },
    tagline: {
      hr: "Vaša ljepota je naš posao",
      en: "Your beauty is our business",
      es: "Tu belleza es nuestro negocio"
    },
    description: {
      hr: "Dobrodošli u Bella Vista Beauty Salon, oazu luksuzne ljepote u srcu Zagreba. Naš tim stručnih stilista, estetičara i terapeuta posvećen je stvaranju savršene harmonije između vaše prirodne ljepote i naše umjetnosti. Uz najmoderniju opremu i ekskluzivne tretmane, stvaramo nezaboravna iskustva transformacije.",
      en: "Welcome to Bella Vista Beauty Salon, an oasis of luxurious beauty in the heart of Zagreb. Our team of expert stylists, aestheticians, and therapists is dedicated to creating perfect harmony between your natural beauty and our artistry. With state-of-the-art equipment and exclusive treatments, we create unforgettable transformation experiences.",
      es: "Bienvenido a Bella Vista Beauty Salon, un oasis de belleza lujosa en el corazón de Zagreb. Nuestro equipo de estilistas expertos, esteticistas y terapeutas se dedica a crear una armonía perfecta entre tu belleza natural y nuestro arte. Con equipos de última generación y tratamientos exclusivos, creamos experiencias de transformación inolvidables."
    },
    yearsOpen: "12",
    stylistsCount: "8",
    clientsCount: "2500",
    averageRating: "4.9",
    hostName: "Marija Novak",
    hostPhone: "+385 1 234 5678",
    hostEmail: "marija@bellavistasalon.hr",
    website: "www.bellavistasalon.hr",
    instagramUrl: "https://instagram.com/bellavistasalon",
    facebookUrl: "https://facebook.com/bellavistasalon",
    heroImage: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
    services: {
      hr: [
        { category: "Usluge za kosu", name: "Šišanje i feniranje", price: "45", description: "Profesionalno šišanje s feniranjem" },
        { category: "Usluge za kosu", name: "Bojanje kose", price: "80", description: "Kompletno bojanje s kvalitetnom bojom" },
        { category: "Usluge za kosu", name: "Meliranje", price: "120", description: "Profesionalno meliranje s toniranjem" },
        { category: "Usluge za nokte", name: "Manikura", price: "35", description: "Klasična manikura s lakiranjem" },
        { category: "Usluge za nokte", name: "Gel nokti", price: "50", description: "Gel nokti u boji po izboru" },
        { category: "Usluge za kožu", name: "Tretman lica", price: "65", description: "Dubinsko čišćenje i hidratacija" },
        { category: "Masaže", name: "Relax masaža", price: "70", description: "90 minuta potpune relaksacije" }
      ],
      en: [
        { category: "Hair Services", name: "Cut & Style", price: "45", description: "Professional cut with styling" },
        { category: "Hair Services", name: "Hair Coloring", price: "80", description: "Complete coloring with quality dyes" },
        { category: "Hair Services", name: "Highlights", price: "120", description: "Professional highlights with toning" },
        { category: "Nail Services", name: "Manicure", price: "35", description: "Classic manicure with polish" },
        { category: "Nail Services", name: "Gel Nails", price: "50", description: "Gel nails in color of choice" },
        { category: "Skin Services", name: "Facial Treatment", price: "65", description: "Deep cleansing and hydration" },
        { category: "Massage Services", name: "Relaxation Massage", price: "70", description: "90 minutes of complete relaxation" }
      ],
      es: [
        { category: "Servicios para el Cabello", name: "Corte y Peinado", price: "45", description: "Corte profesional con peinado" },
        { category: "Servicios para el Cabello", name: "Coloración", price: "80", description: "Coloración completa con tintes de calidad" },
        { category: "Servicios para el Cabello", name: "Mechas", price: "120", description: "Mechas profesionales con tonalización" },
        { category: "Servicios de Uñas", name: "Manicura", price: "35", description: "Manicura clásica con esmalte" },
        { category: "Servicios de Uñas", name: "Uñas de Gel", price: "50", description: "Uñas de gel en color a elegir" },
        { category: "Servicios para la Piel", name: "Tratamiento Facial", price: "65", description: "Limpieza profunda e hidratación" },
        { category: "Servicios de Masaje", name: "Masaje Relajante", price: "70", description: "90 minutos de relajación completa" }
      ]
    },
    packages: {
      hr: [
        { name: "Vjenčani paket", price: "350", services: ["Šišanje i feniranje", "Make-up", "Manikura", "Pedikura"], description: "Kompletna priprema za vaš veliki dan" },
        { name: "Spa dan", price: "180", services: ["Tretman lica", "Masaža", "Manikura", "Aromterapija"], description: "Dan potpune relaksacije i opuštanja" },
        { name: "Majčin dan posebno", price: "120", services: ["Šišanje", "Manikura", "Mini masaža"], description: "Savršen poklon za mamu" }
      ],
      en: [
        { name: "Bridal Package", price: "350", services: ["Cut & Style", "Make-up", "Manicure", "Pedicure"], description: "Complete preparation for your big day" },
        { name: "Spa Day", price: "180", services: ["Facial Treatment", "Massage", "Manicure", "Aromatherapy"], description: "Day of complete relaxation and pampering" },
        { name: "Mother's Day Special", price: "120", services: ["Hair Cut", "Manicure", "Mini Massage"], description: "Perfect gift for mom" }
      ],
      es: [
        { name: "Paquete Nupcial", price: "350", services: ["Corte y Peinado", "Maquillaje", "Manicura", "Pedicura"], description: "Preparación completa para tu gran día" },
        { name: "Día de Spa", price: "180", services: ["Tratamiento Facial", "Masaje", "Manicura", "Aromaterapia"], description: "Día de relajación y cuidado completo" },
        { name: "Especial Día de la Madre", price: "120", services: ["Corte de Cabello", "Manicura", "Mini Masaje"], description: "Regalo perfecto para mamá" }
      ]
    },
    stylists: {
      hr: [
        { 
          name: "Marija Novak", 
          specialty: "Glavna stilistica i vlasnica", 
          description: "15+ godina iskustva u beauty industriji, specijalizirana za bojanje i stiliziranje kose",
          image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
        },
        { 
          name: "Ana Petrić", 
          specialty: "Senior stilistica", 
          description: "Stručnjak za moderne frizure i wedding styling",
          image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
        },
        { 
          name: "Sara Jurić", 
          specialty: "Estetičarka", 
          description: "Certificirana za anti-age tretmane i dubinsko čišćenje lica",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
        }
      ],
      en: [
        { 
          name: "Marija Novak", 
          specialty: "Head Stylist & Owner", 
          description: "15+ years experience in beauty industry, specialized in coloring and hair styling",
          image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
        },
        { 
          name: "Ana Petrić", 
          specialty: "Senior Stylist", 
          description: "Expert in modern cuts and wedding styling",
          image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
        },
        { 
          name: "Sara Jurić", 
          specialty: "Aesthetician", 
          description: "Certified in anti-aging treatments and deep facial cleansing",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
        }
      ],
      es: [
        { 
          name: "Marija Novak", 
          specialty: "Estilista Principal y Propietaria", 
          description: "15+ años de experiencia en la industria de la belleza, especializada en coloración y peinado",
          image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
        },
        { 
          name: "Ana Petrić", 
          specialty: "Estilista Senior", 
          description: "Experta en cortes modernos y peinados de boda",
          image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
        },
        { 
          name: "Sara Jurić", 
          specialty: "Esteticista", 
          description: "Certificada en tratamientos antiedad y limpieza profunda facial",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
        }
      ]
    },
    products: {
      hr: [
        { name: "Profesionalni šampon", price: "25", brand: "Salon Professional", description: "Šampon za sve tipove kose" },
        { name: "Regenerator za kosu", price: "30", brand: "Salon Professional", description: "Dubinska nega za oštećenu kosu" },
        { name: "Serum za lice", price: "45", brand: "Premium Skincare", description: "Anti-age serum s hijaluronom" },
        { name: "Krema za ruke", price: "15", brand: "Bella Vista", description: "Hidratantna krema s prirodnim uljima" }
      ],
      en: [
        { name: "Professional Shampoo", price: "25", brand: "Salon Professional", description: "Shampoo for all hair types" },
        { name: "Hair Conditioner", price: "30", brand: "Salon Professional", description: "Deep care for damaged hair" },
        { name: "Face Serum", price: "45", brand: "Premium Skincare", description: "Anti-aging serum with hyaluronic acid" },
        { name: "Hand Cream", price: "15", brand: "Bella Vista", description: "Moisturizing cream with natural oils" }
      ],
      es: [
        { name: "Champú Profesional", price: "25", brand: "Salon Professional", description: "Champú para todo tipo de cabello" },
        { name: "Acondicionador", price: "30", brand: "Salon Professional", description: "Cuidado profundo para cabello dañado" },
        { name: "Sérum Facial", price: "45", brand: "Premium Skincare", description: "Sérum antiedad con ácido hialurónico" },
        { name: "Crema para Manos", price: "15", brand: "Bella Vista", description: "Crema hidratante con aceites naturales" }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
        alt: {
          hr: "Luksuzni salon interijer",
          en: "Luxurious salon interior",
          es: "Interior lujoso del salón"
        }
      },
      {
        url: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg",
        alt: {
          hr: "Stilistica za radom",
          en: "Stylist at work",
          es: "Estilista trabajando"
        }
      },
      {
        url: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
        alt: {
          hr: "Tretman lica",
          en: "Facial treatment",
          es: "Tratamiento facial"
        }
      },
      {
        url: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
        alt: {
          hr: "Manikura u tijeku",
          en: "Manicure in progress",
          es: "Manicura en progreso"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setSalonData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setSalonData(prev => ({
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
    setSalonData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].map((service, i) =>
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const updatePackage = (index: number, field: string, value: string | string[]) => {
    setSalonData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [currentLang]: prev.packages[currentLang].map((pkg, i) =>
          i === index ? { ...pkg, [field]: value } : pkg
        )
      }
    }));
  };

  const updateStylist = (index: number, field: string, value: string) => {
    setSalonData(prev => ({
      ...prev,
      stylists: {
        ...prev.stylists,
        [currentLang]: prev.stylists[currentLang].map((stylist, i) =>
          i === index ? { ...stylist, [field]: value } : stylist
        )
      }
    }));
  };

  const updateProduct = (index: number, field: string, value: string) => {
    setSalonData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [currentLang]: prev.products[currentLang].map((product, i) =>
          i === index ? { ...product, [field]: value } : product
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setSalonData(prev => ({
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
    const checkoutUrl = "https://buy.stripe.com/test_6oU9AUcVPer03Lkd3RdjO06";
    
    const websiteDataToSave = {
      salonData: salonData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000)
    };
    
    try {
      localStorage.setItem('savedSalonData', JSON.stringify(websiteDataToSave));
      console.log('Salon website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save salon website data:', error);
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
    setSalonData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addService = () => {
    setSalonData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: [...prev.services[currentLang], { category: "Category", name: t.service, price: "50", description: t.description }]
      }
    }));
  };

  const deletePackage = (index: number) => {
    setSalonData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [currentLang]: prev.packages[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addPackage = () => {
    setSalonData(prev => ({
      ...prev,
      packages: {
        ...prev.packages,
        [currentLang]: [...prev.packages[currentLang], { name: "Package", price: "100", services: ["Service 1", "Service 2"], description: t.description }]
      }
    }));
  };

  const deleteProduct = (index: number) => {
    setSalonData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [currentLang]: prev.products[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addProduct = () => {
    setSalonData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [currentLang]: [...prev.products[currentLang], { name: "Product", price: "25", brand: "Brand", description: t.description }]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = salonData.images.length;
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? totalImages - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === totalImages - 1 ? 0 : prev + 1);
    }
  };

  // Group services by category
  const servicesByCategory = salonData.services[currentLang].reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof salonData.services[typeof currentLang]>);

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
        style={{ backgroundImage: `url(${salonData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-white">
              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    value={salonData.name[currentLang]}
                    onChange={(e) => updateLocalizedField("name", e.target.value)}
                    className="text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.salonName}
                  />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <Input
                      value={salonData.location[currentLang]}
                      onChange={(e) => updateLocalizedField("location", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder={t.location}
                    />
                  </div>
                  <Textarea
                    value={salonData.tagline[currentLang]}
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
                    {salonData.name[currentLang]}
                  </h1>
                  <div className="flex items-center text-xl mb-6">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span>{salonData.location[currentLang]}</span>
                  </div>
                  <p className="text-2xl lg:text-3xl mb-8 font-light">
                    {salonData.tagline[currentLang]}
                  </p>
                  <div className="flex flex-wrap gap-8 text-lg">
                    <div className="flex items-center">
                      <Sparkles className="w-6 h-6 mr-2 text-pink-400" />
                      <span>{salonData.yearsOpen} {t.yearsOpen}</span>
                    </div>
                    <div className="flex items-center">
                      <Scissors className="w-6 h-6 mr-2 text-purple-400" />
                      <span>{salonData.stylistsCount} {t.stylists}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-red-400" />
                      <span>{salonData.clientsCount} {t.clients}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-6 h-6 mr-2 text-yellow-400" />
                      <span>{salonData.averageRating} {t.reviews}</span>
                    </div>
                  </div>
                  <Button size="lg" className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg">
                    <Calendar className="w-6 h-6 mr-2" />
                    {t.bookAppointment}
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
            <h2 className="text-4xl font-bold mb-8">{t.aboutSalon}</h2>
            {isEditing ? (
              <Textarea
                value={salonData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="text-lg leading-relaxed"
                placeholder={t.salonDescription}
                rows={6}
              />
            ) : (
              <p className="text-lg leading-relaxed text-gray-600">
                {salonData.description[currentLang]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.ourServices}</h2>
          <div className="space-y-12">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-center mb-8 text-pink-600">{category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => {
                    const globalIndex = salonData.services[currentLang].findIndex(s => s === service);
                    return (
                      <Card key={globalIndex} className="relative">
                        {isEditing && (
                          <Button
                            onClick={() => deleteService(globalIndex)}
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
                                  onChange={(e) => updateService(globalIndex, "name", e.target.value)}
                                  className="font-bold"
                                />
                              ) : (
                                <span>{service.name}</span>
                              )}
                            </div>
                            <Badge variant="secondary" className="ml-2">
                              {isEditing ? (
                                <div className="flex items-center">
                                  <span>€</span>
                                  <Input
                                    value={service.price}
                                    onChange={(e) => updateService(globalIndex, "price", e.target.value)}
                                    className="w-16 mx-1 text-center font-bold border-0 bg-transparent"
                                  />
                                </div>
                              ) : (
                                `€${service.price}`
                              )}
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {isEditing ? (
                            <div className="space-y-2">
                              <Input
                                value={service.category}
                                onChange={(e) => updateService(globalIndex, "category", e.target.value)}
                                placeholder="Category"
                                className="text-sm text-pink-600 font-semibold"
                              />
                              <Textarea
                                value={service.description}
                                onChange={(e) => updateService(globalIndex, "description", e.target.value)}
                                placeholder={t.description}
                                rows={2}
                              />
                            </div>
                          ) : (
                            <p className="text-gray-600">{service.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="text-center mt-8">
              <Button onClick={addService} variant="outline">
                <Scissors className="w-4 h-4 mr-2" />
                {t.addService}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Spa Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.spaPackages}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {salonData.packages[currentLang].map((pkg, index) => (
              <Card key={index} className="relative border-pink-200">
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
                <CardHeader className="text-center bg-pink-50">
                  <CardTitle className="text-pink-700">
                    {isEditing ? (
                      <Input
                        value={pkg.name}
                        onChange={(e) => updatePackage(index, "name", e.target.value)}
                        className="text-center font-bold"
                      />
                    ) : (
                      pkg.name
                    )}
                  </CardTitle>
                  <div className="text-3xl font-bold text-pink-600">
                    {isEditing ? (
                      <div className="flex items-center justify-center">
                        <span>€</span>
                        <Input
                          value={pkg.price}
                          onChange={(e) => updatePackage(index, "price", e.target.value)}
                          className="w-20 mx-2 text-center font-bold"
                        />
                      </div>
                    ) : (
                      `€${pkg.price}`
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <Textarea
                        value={pkg.description}
                        onChange={(e) => updatePackage(index, "description", e.target.value)}
                        placeholder={t.description}
                        rows={3}
                      />
                      <div>
                        <Label>Services (comma separated):</Label>
                        <Textarea
                          value={pkg.services.join(", ")}
                          onChange={(e) => updatePackage(index, "services", e.target.value.split(", "))}
                          rows={3}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <ul className="space-y-2">
                        {pkg.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center">
                            <Gift className="w-4 h-4 mr-2 text-pink-500" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button className="w-full mt-6 bg-pink-600 hover:bg-pink-700">
                    {t.bookAppointment}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {isEditing && (
            <div className="text-center mt-8">
              <Button onClick={addPackage} variant="outline">
                <Gift className="w-4 h-4 mr-2" />
                {t.addPackage}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.ourTeam}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {salonData.stylists[currentLang].map((stylist, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${stylist.image})`}}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {isEditing ? (
                      <Input
                        value={stylist.name}
                        onChange={(e) => updateStylist(index, "name", e.target.value)}
                        placeholder={t.stylistName}
                      />
                    ) : (
                      stylist.name
                    )}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-3">
                    {isEditing ? (
                      <Input
                        value={stylist.specialty}
                        onChange={(e) => updateStylist(index, "specialty", e.target.value)}
                        placeholder="Specialty"
                      />
                    ) : (
                      stylist.specialty
                    )}
                  </p>
                  <p className="text-gray-600">
                    {isEditing ? (
                      <Textarea
                        value={stylist.description}
                        onChange={(e) => updateStylist(index, "description", e.target.value)}
                        placeholder={t.description}
                        rows={3}
                      />
                    ) : (
                      stylist.description
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.retailProducts}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salonData.products[currentLang].map((product, index) => (
              <Card key={index} className="relative">
                {isEditing && (
                  <Button
                    onClick={() => deleteProduct(index)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 z-10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-bold mb-2">
                      {isEditing ? (
                        <Input
                          value={product.name}
                          onChange={(e) => updateProduct(index, "name", e.target.value)}
                          className="text-center"
                        />
                      ) : (
                        product.name
                      )}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {isEditing ? (
                        <Input
                          value={product.brand}
                          onChange={(e) => updateProduct(index, "brand", e.target.value)}
                          className="text-center text-sm"
                        />
                      ) : (
                        product.brand
                      )}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {isEditing ? (
                        <Textarea
                          value={product.description}
                          onChange={(e) => updateProduct(index, "description", e.target.value)}
                          rows={2}
                          className="text-sm"
                        />
                      ) : (
                        product.description
                      )}
                    </p>
                    <div className="text-lg font-bold text-pink-600">
                      {isEditing ? (
                        <div className="flex items-center justify-center">
                          <span>€</span>
                          <Input
                            value={product.price}
                            onChange={(e) => updateProduct(index, "price", e.target.value)}
                            className="w-16 mx-2 text-center font-bold"
                          />
                        </div>
                      ) : (
                        `€${product.price}`
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {isEditing && (
            <div className="text-center mt-8">
              <Button onClick={addProduct} variant="outline">
                <Sparkles className="w-4 h-4 mr-2" />
                {t.addProduct}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.photoGallery}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {salonData.images.map((image, index) => (
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
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t.contactInfo}</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={salonData.hostPhone}
                    onChange={(e) => updateField("hostPhone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.phoneNumber}
                  />
                ) : (
                  <span>{salonData.hostPhone}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={salonData.hostEmail}
                    onChange={(e) => updateField("hostEmail", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.emailAddress}
                  />
                ) : (
                  <span>{salonData.hostEmail}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={salonData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.website}
                  />
                ) : (
                  <span>{salonData.website}</span>
                )}
              </div>
            </div>
            <div className="mt-12">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Calendar className="w-6 h-6 mr-2" />
                {t.bookAppointment}
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
                value={salonData.name[currentLang]}
                onChange={(e) => updateLocalizedField("name", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white text-center"
              />
            ) : (
              salonData.name[currentLang]
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
                  value={salonData.facebookUrl}
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
                  value={salonData.instagramUrl}
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
            <DialogTitle>{salonData.images[selectedImageIndex]?.alt[currentLang]}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={salonData.images[selectedImageIndex]?.url}
              alt={salonData.images[selectedImageIndex]?.alt[currentLang]}
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