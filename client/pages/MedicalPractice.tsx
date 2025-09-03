import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Stethoscope, Clock, Users, Shield, Heart, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Calendar, FileText, AlertTriangle, UserCheck } from "lucide-react";

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
    practiceName: "Naziv ordinacije",
    location: "Lokacija",
    tagline: "Slogan",
    yearsOpen: "godina rada",
    doctors: "doktora",
    patients: "pacijenata",
    aboutPractice: "O našoj ordinaciji",
    practiceDescription: "Opis ordinacije",
    ourServices: "Naše usluge",
    service: "Usluga",
    ourDoctors: "Naši doktori",
    appointmentScheduling: "Zakazivanje termina",
    insuranceAccepted: "Prihvaćamo osiguranja",
    patientResources: "Informacije za pacijente",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    price: "cijena",
    reviews: "recenzija",
    scheduleAppointment: "Zakaži pregled",
    doctorName: "Ime doktora",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headDoctor: "Glavni liječnik",
    hostName: "Ime doktora",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Vaše zdravlje je naša prioriteta",
    buyWebsite: "Kupi Web Stranicu",
    buyWebsiteTitle: "Kupi Web Stranicu",
    firstName: "Ime",
    lastName: "Prezime",
    email: "Email",
    phone: "Telefon",
    company: "Ordinacija",
    companyOptional: "Ordinacija (opcionalno)",
    purchase: "Kupi",
    purchaseDetails: "Unesite svoje podatke za kupnju:",
    howToFindUs: "Kako do nas",
    delete: "Obriši",
    addService: "Dodaj uslugu",
    addInsurance: "Dodaj osiguranje",
    findUsOn: "Pronađite nas na",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    yourHealthOurPriority: "Vaše zdravlje, naša prioriteta",
    medicalSpecialties: "Medicinske specijalnosti",
    officeHours: "Radno vrijeme",
    emergencyContact: "Hitni kontakt",
    patientTestimonials: "Mišljenja pacijenata",
    healthTips: "Zdravstveni savjeti",
    preparationInstructions: "Upute za pripremu",
    medicalForms: "Medicinski obrasci",
    bookOnline: "Zakaži online",
    emergencyHours: "24/7 hitna služba",
    qualification: "Kvalifikacija",
    specialty: "Specijalnost",
    experience: "Iskustvo",
    acceptedInsurance: "Prihvaćena osiguranja"
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
    practiceName: "Practice name",
    location: "Location",
    tagline: "Tagline",
    yearsOpen: "years open",
    doctors: "doctors",
    patients: "patients",
    aboutPractice: "About Our Practice",
    practiceDescription: "Practice description",
    ourServices: "Our Services",
    service: "Service",
    ourDoctors: "Our Doctors",
    appointmentScheduling: "Appointment Scheduling",
    insuranceAccepted: "Insurance Accepted",
    patientResources: "Patient Resources",
    photoGallery: "Photo Gallery",
    imageDescription: "Image description",
    pricing: "Pricing",
    price: "price",
    reviews: "reviews",
    scheduleAppointment: "Schedule Appointment",
    doctorName: "Doctor name",
    description: "Description",
    contactInfo: "Contact Information",
    headDoctor: "Head Physician",
    hostName: "Doctor name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    website: "Website",
    footerText: "Your health is our priority",
    buyWebsite: "Buy Website",
    buyWebsiteTitle: "Buy Website",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Practice",
    companyOptional: "Practice (optional)",
    purchase: "Purchase",
    purchaseDetails: "Enter your details for purchase:",
    howToFindUs: "How to find us",
    delete: "Delete",
    addService: "Add service",
    addInsurance: "Add insurance",
    findUsOn: "Find us on",
    instagramUrl: "Instagram URL",
    facebookUrl: "Facebook URL",
    discountBadge: "(90% OFF!)",
    yourHealthOurPriority: "Your Health, Our Priority",
    medicalSpecialties: "Medical Specialties",
    officeHours: "Office Hours",
    emergencyContact: "Emergency Contact",
    patientTestimonials: "Patient Testimonials",
    healthTips: "Health Tips",
    preparationInstructions: "Preparation Instructions",
    medicalForms: "Medical Forms",
    bookOnline: "Book Online",
    emergencyHours: "24/7 Emergency",
    qualification: "Qualification",
    specialty: "Specialty",
    experience: "Experience",
    acceptedInsurance: "Accepted Insurance"
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
    practiceName: "Nombre de la práctica",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsOpen: "años abierto",
    doctors: "doctores",
    patients: "pacientes",
    aboutPractice: "Sobre Nuestra Práctica",
    practiceDescription: "Descripción de la práctica",
    ourServices: "Nuestros Servicios",
    service: "Servicio",
    ourDoctors: "Nuestros Doctores",
    appointmentScheduling: "Programación de Citas",
    insuranceAccepted: "Seguro Aceptado",
    patientResources: "Recursos para Pacientes",
    photoGallery: "Galería de Fotos",
    imageDescription: "Descripción de imagen",
    pricing: "Precios",
    price: "precio",
    reviews: "reseñas",
    scheduleAppointment: "Programar Cita",
    doctorName: "Nombre del doctor",
    description: "Descripción",
    contactInfo: "Información de Contacto",
    headDoctor: "Médico Principal",
    hostName: "Nombre del doctor",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    website: "Sitio web",
    footerText: "Su salud es nuestra prioridad",
    buyWebsite: "Comprar Sitio Web",
    buyWebsiteTitle: "Comprar Sitio Web",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    company: "Práctica",
    companyOptional: "Práctica (opcional)",
    purchase: "Comprar",
    purchaseDetails: "Ingrese sus datos para la compra:",
    howToFindUs: "Cómo encontrarnos",
    delete: "Eliminar",
    addService: "Agregar servicio",
    addInsurance: "Agregar seguro",
    findUsOn: "Encuéntranos en",
    instagramUrl: "URL de Instagram",
    facebookUrl: "URL de Facebook",
    discountBadge: "(90% OFF!)",
    yourHealthOurPriority: "Su Salud, Nuestra Prioridad",
    medicalSpecialties: "Especialidades Médicas",
    officeHours: "Horario de Consulta",
    emergencyContact: "Contacto de Emergencia",
    patientTestimonials: "Testimonios de Pacientes",
    healthTips: "Consejos de Salud",
    preparationInstructions: "Instrucciones de Preparación",
    medicalForms: "Formularios Médicos",
    bookOnline: "Reservar en Línea",
    emergencyHours: "Emergencia 24/7",
    qualification: "Calificación",
    specialty: "Especialidad",
    experience: "Experiencia",
    acceptedInsurance: "Seguro Aceptado"
  }
};

export default function MedicalPractice() {
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

  const [practiceData, setPracticeData] = useState({
    name: {
      hr: "Poliklinika Zdravlje",
      en: "Health Medical Center", 
      es: "Centro Médico Salud"
    },
    location: {
      hr: "Zagreb, Hrvatska",
      en: "Zagreb, Croatia",
      es: "Zagreb, Croacia"
    },
    tagline: {
      hr: "Suvremena medicina u službi vašeg zdravlja",
      en: "Modern medicine in service of your health",
      es: "Medicina moderna al servicio de su salud"
    },
    description: {
      hr: "Dobrodošli u Polikliniku Zdravlje, moderan medicinski centar koji pruža sveobuhvatnu zdravstvenu skrb najviših standarda. Naš tim iskusnih liječnika koristi najnoviju medicinsku tehnologiju kako bi vam pružio najbolju moguću skrb. Posebno smo posvećeni preventivnoj medicini i holističkom pristupu liječenju.",
      en: "Welcome to Health Medical Center, a modern medical facility providing comprehensive healthcare of the highest standards. Our team of experienced physicians uses the latest medical technology to provide you with the best possible care. We are particularly dedicated to preventive medicine and a holistic approach to treatment.",
      es: "Bienvenido al Centro Médico Salud, una instalación médica moderna que brinda atención médica integral de los más altos estándares. Nuestro equipo de médicos experimentados utiliza la última tecnología médica para brindarle la mejor atención posible. Estamos particularmente dedicados a la medicina preventiva y un enfoque holístico del tratamiento."
    },
    yearsOpen: "15",
    doctorsCount: "12",
    patientsCount: "8500",
    averageRating: "4.8",
    hostName: "Dr. Marko Petrović",
    hostPhone: "+385 1 234 5678",
    hostEmail: "info@poliklinika-zdravlje.hr",
    emergencyPhone: "+385 1 234 5679",
    website: "www.poliklinika-zdravlje.hr",
    instagramUrl: "https://instagram.com/poliblažlije",
    facebookUrl: "https://facebook.com/poliklinika.zdravlje",
    heroImage: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
    services: {
      hr: [
        { name: "Opća medicina", description: "Temeljiti zdravstveni pregledi i preventivna skrb", price: "150" },
        { name: "Kardiologija", description: "Dijagnostika i liječenje srčanih bolesti", price: "200" },
        { name: "Dermatologija", description: "Pregledi kože, dijagnostika i liječenje kožnih problema", price: "180" },
        { name: "Ginekologija", description: "Ginekološki pregledi i preventivna skrb za žene", price: "200" },
        { name: "Oftalmologija", description: "Pregledi vida i dijagnostika očnih bolesti", price: "160" },
        { name: "Laboratorijski nalazi", description: "Sveobuhvatni laboratorijski testovi", price: "80" },
        { name: "Ultrazvuk", description: "UZV pregledi različitih organa", price: "120" },
        { name: "EKG", description: "Elektrokardiogram srca", price: "100" }
      ],
      en: [
        { name: "General Medicine", description: "Thorough health examinations and preventive care", price: "150" },
        { name: "Cardiology", description: "Diagnosis and treatment of heart conditions", price: "200" },
        { name: "Dermatology", description: "Skin examinations, diagnosis and treatment of skin problems", price: "180" },
        { name: "Gynecology", description: "Gynecological examinations and preventive care for women", price: "200" },
        { name: "Ophthalmology", description: "Eye examinations and diagnosis of eye diseases", price: "160" },
        { name: "Laboratory Results", description: "Comprehensive laboratory tests", price: "80" },
        { name: "Ultrasound", description: "Ultrasound examinations of various organs", price: "120" },
        { name: "EKG", description: "Electrocardiogram of the heart", price: "100" }
      ],
      es: [
        { name: "Medicina General", description: "Exámenes de salud exhaustivos y atención preventiva", price: "150" },
        { name: "Cardiología", description: "Diagnóstico y tratamiento de enfermedades cardíacas", price: "200" },
        { name: "Dermatología", description: "Exámenes de piel, diagnóstico y tratamiento de problemas cutáneos", price: "180" },
        { name: "Ginecología", description: "Exámenes ginecológicos y atención preventiva para mujeres", price: "200" },
        { name: "Oftalmología", description: "Exámenes de la vista y diagnóstico de enfermedades oculares", price: "160" },
        { name: "Resultados de Laboratorio", description: "Pruebas de laboratorio integrales", price: "80" },
        { name: "Ultrasonido", description: "Exámenes de ultrasonido de varios órganos", price: "120" },
        { name: "EKG", description: "Electrocardiograma del corazón", price: "100" }
      ]
    },
    doctors: {
      hr: [
        { 
          name: "Dr. Marko Petrović", 
          specialty: "Specijalist opće medicine", 
          qualification: "Dr. med., spec. opće medicine",
          experience: "20+ godina iskustva",
          description: "Glavni liječnik s dugogodišnjim iskustvom u dijagnostici i preventivnoj medicini",
          image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
        },
        { 
          name: "Dr. Ana Novak", 
          specialty: "Kardiolog", 
          qualification: "Dr. med., spec. kardiologije",
          experience: "15+ godina iskustva",
          description: "Stručnjak za dijagnostiku i liječenje srčanih bolesti",
          image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
        },
        { 
          name: "Dr. Petra Jurić", 
          specialty: "Dermatolog", 
          qualification: "Dr. med., spec. dermatovenerologije",
          experience: "12+ godina iskustva",
          description: "Specijalist za kožne bolesti i estetsku dermatologiju",
          image: "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg"
        }
      ],
      en: [
        { 
          name: "Dr. Marko Petrović", 
          specialty: "General Medicine Specialist", 
          qualification: "MD, General Medicine Specialist",
          experience: "20+ years experience",
          description: "Chief physician with extensive experience in diagnostics and preventive medicine",
          image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
        },
        { 
          name: "Dr. Ana Novak", 
          specialty: "Cardiologist", 
          qualification: "MD, Cardiology Specialist",
          experience: "15+ years experience",
          description: "Expert in diagnosis and treatment of heart conditions",
          image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
        },
        { 
          name: "Dr. Petra Jurić", 
          specialty: "Dermatologist", 
          qualification: "MD, Dermatovenerology Specialist",
          experience: "12+ years experience",
          description: "Specialist in skin diseases and aesthetic dermatology",
          image: "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg"
        }
      ],
      es: [
        { 
          name: "Dr. Marko Petrović", 
          specialty: "Especialista en Medicina General", 
          qualification: "MD, Especialista en Medicina General",
          experience: "20+ años de experiencia",
          description: "Médico principal con amplia experiencia en diagnósticos y medicina preventiva",
          image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
        },
        { 
          name: "Dr. Ana Novak", 
          specialty: "Cardióloga", 
          qualification: "MD, Especialista en Cardiología",
          experience: "15+ años de experiencia",
          description: "Experta en diagnóstico y tratamiento de enfermedades cardíacas",
          image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
        },
        { 
          name: "Dr. Petra Jurić", 
          specialty: "Dermatóloga", 
          qualification: "MD, Especialista en Dermatovenereología",
          experience: "12+ años de experiencia",
          description: "Especialista en enfermedades de la piel y dermatología estética",
          image: "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg"
        }
      ]
    },
    insurance: {
      hr: [
        "HZZO - Hrvatski zavod za zdravstveno osiguranje",
        "Croatia osiguranje",
        "Allianz Hrvatska",
        "Generali osiguranje",
        "Triglav osiguranje",
        "Wiener Städtische osiguranje"
      ],
      en: [
        "HZZO - Croatian Health Insurance Fund",
        "Croatia Insurance",
        "Allianz Croatia",
        "Generali Insurance",
        "Triglav Insurance",
        "Wiener Städtische Insurance"
      ],
      es: [
        "HZZO - Fondo de Seguro de Salud de Croacia",
        "Seguros Croatia",
        "Allianz Croacia",
        "Seguros Generali",
        "Seguros Triglav",
        "Seguros Wiener Städtische"
      ]
    },
    officeHours: {
      hr: [
        { day: "Ponedjeljak - Petak", hours: "07:00 - 20:00" },
        { day: "Subota", hours: "08:00 - 14:00" },
        { day: "Nedjelja", hours: "Zatvoreno" },
        { day: "Hitni slučajevi", hours: "24/7" }
      ],
      en: [
        { day: "Monday - Friday", hours: "07:00 - 20:00" },
        { day: "Saturday", hours: "08:00 - 14:00" },
        { day: "Sunday", hours: "Closed" },
        { day: "Emergency", hours: "24/7" }
      ],
      es: [
        { day: "Lunes - Viernes", hours: "07:00 - 20:00" },
        { day: "Sábado", hours: "08:00 - 14:00" },
        { day: "Domingo", hours: "Cerrado" },
        { day: "Emergencia", hours: "24/7" }
      ]
    },
    healthTips: {
      hr: [
        { title: "Redoviti zdravstveni pregledi", content: "Preventivni pregledi omogućavaju rabu dijagnostiku potencijalnih zdravstvenih problema." },
        { title: "Zdrava prehrana", content: "Uravnotežena prehrana bogata voćem i povrćem je temelj dobrog zdravlja." },
        { title: "Fizička aktivnost", content: "Redovito vježbanje pomaže u održavanju zdravlja srca i općenito dobrom zdravlju." },
        { title: "Dovoljno sna", content: "7-8 sati kvalitetnog sna dnevno je bitno za regeneraciju organizma." }
      ],
      en: [
        { title: "Regular Health Check-ups", content: "Preventive examinations enable early diagnosis of potential health problems." },
        { title: "Healthy Diet", content: "A balanced diet rich in fruits and vegetables is the foundation of good health." },
        { title: "Physical Activity", content: "Regular exercise helps maintain heart health and overall well-being." },
        { title: "Adequate Sleep", content: "7-8 hours of quality sleep daily is essential for body regeneration." }
      ],
      es: [
        { title: "Chequeos Regulares de Salud", content: "Los exámenes preventivos permiten el diagnóstico temprano de posibles problemas de salud." },
        { title: "Dieta Saludable", content: "Una dieta equilibrada rica en frutas y verduras es la base de la buena salud." },
        { title: "Actividad Física", content: "El ejercicio regular ayuda a mantener la salud del corazón y el bienestar general." },
        { title: "Sueño Adecuado", content: "7-8 horas de sueño de calidad al día son esenciales para la regeneración del cuerpo." }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
        alt: {
          hr: "Moderna medicinska oprema",
          en: "Modern medical equipment",
          es: "Equipo médico moderno"
        }
      },
      {
        url: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg",
        alt: {
          hr: "Liječnik s pacijentom",
          en: "Doctor with patient",
          es: "Doctor con paciente"
        }
      },
      {
        url: "https://images.pexels.com/photos/4167700/pexels-photo-4167700.jpeg",
        alt: {
          hr: "Medicinska sala za preglede",
          en: "Medical examination room",
          es: "Sala de examen médico"
        }
      },
      {
        url: "https://images.pexels.com/photos/4167449/pexels-photo-4167449.jpeg",
        alt: {
          hr: "Laboratorij za testove",
          en: "Laboratory for tests",
          es: "Laboratorio para pruebas"
        }
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const updateField = (field: string, value: string) => {
    setPracticeData(prev => ({ ...prev, [field]: value }));
  };

  const updateLocalizedField = (field: string, value: string) => {
    setPracticeData(prev => ({
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
    setPracticeData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].map((service, i) =>
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const updateDoctor = (index: number, field: string, value: string) => {
    setPracticeData(prev => ({
      ...prev,
      doctors: {
        ...prev.doctors,
        [currentLang]: prev.doctors[currentLang].map((doctor, i) =>
          i === index ? { ...doctor, [field]: value } : doctor
        )
      }
    }));
  };

  const updateInsurance = (index: number, value: string) => {
    setPracticeData(prev => ({
      ...prev,
      insurance: {
        ...prev.insurance,
        [currentLang]: prev.insurance[currentLang].map((insurance, i) =>
          i === index ? value : insurance
        )
      }
    }));
  };

  const updateHealthTip = (index: number, field: string, value: string) => {
    setPracticeData(prev => ({
      ...prev,
      healthTips: {
        ...prev.healthTips,
        [currentLang]: prev.healthTips[currentLang].map((tip, i) =>
          i === index ? { ...tip, [field]: value } : tip
        )
      }
    }));
  };

  const updateImage = (index: number, value: string) => {
    setPracticeData(prev => ({
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
    const checkoutUrl = "https://buy.stripe.com/test_00wdRa6xr82CchQaVJdjO07";
    
    const websiteDataToSave = {
      practiceData: practiceData,
      purchaseData: purchaseData,
      currentLanguage: currentLang,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000)
    };
    
    try {
      localStorage.setItem('savedPracticeData', JSON.stringify(websiteDataToSave));
      console.log('Medical practice website data saved successfully for 24 hours');
      alert('Website content saved! You can now proceed to payment.');
    } catch (error) {
      console.error('Failed to save medical practice website data:', error);
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
    setPracticeData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: prev.services[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addService = () => {
    setPracticeData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [currentLang]: [...prev.services[currentLang], { name: t.service, description: t.description, price: "100" }]
      }
    }));
  };

  const deleteInsurance = (index: number) => {
    setPracticeData(prev => ({
      ...prev,
      insurance: {
        ...prev.insurance,
        [currentLang]: prev.insurance[currentLang].filter((_, i) => i !== index)
      }
    }));
  };

  const addInsurance = () => {
    setPracticeData(prev => ({
      ...prev,
      insurance: {
        ...prev.insurance,
        [currentLang]: [...prev.insurance[currentLang], "Insurance Company"]
      }
    }));
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const totalImages = practiceData.images.length;
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
        style={{ backgroundImage: `url(${practiceData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-white">
              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    value={practiceData.name[currentLang]}
                    onChange={(e) => updateLocalizedField("name", e.target.value)}
                    className="text-5xl font-bold bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.practiceName}
                  />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <Input
                      value={practiceData.location[currentLang]}
                      onChange={(e) => updateLocalizedField("location", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      placeholder={t.location}
                    />
                  </div>
                  <Textarea
                    value={practiceData.tagline[currentLang]}
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
                    {practiceData.name[currentLang]}
                  </h1>
                  <div className="flex items-center text-xl mb-6">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span>{practiceData.location[currentLang]}</span>
                  </div>
                  <p className="text-2xl lg:text-3xl mb-8 font-light">
                    {practiceData.tagline[currentLang]}
                  </p>
                  <div className="flex flex-wrap gap-8 text-lg">
                    <div className="flex items-center">
                      <Shield className="w-6 h-6 mr-2 text-green-400" />
                      <span>{practiceData.yearsOpen} {t.yearsOpen}</span>
                    </div>
                    <div className="flex items-center">
                      <UserCheck className="w-6 h-6 mr-2 text-blue-400" />
                      <span>{practiceData.doctorsCount} {t.doctors}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-6 h-6 mr-2 text-red-400" />
                      <span>{practiceData.patientsCount} {t.patients}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-6 h-6 mr-2 text-yellow-400" />
                      <span>{practiceData.averageRating} {t.reviews}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                      <Calendar className="w-6 h-6 mr-2" />
                      {t.scheduleAppointment}
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                      <AlertTriangle className="w-6 h-6 mr-2" />
                      {t.emergencyHours}
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
            <h2 className="text-4xl font-bold mb-8">{t.aboutPractice}</h2>
            {isEditing ? (
              <Textarea
                value={practiceData.description[currentLang]}
                onChange={(e) => updateLocalizedField("description", e.target.value)}
                className="text-lg leading-relaxed"
                placeholder={t.practiceDescription}
                rows={6}
              />
            ) : (
              <p className="text-lg leading-relaxed text-gray-600">
                {practiceData.description[currentLang]}
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
            {practiceData.services[currentLang].map((service, index) => (
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
                        <span className="text-blue-700">{service.name}</span>
                      )}
                    </div>
                    <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                      {isEditing ? (
                        <div className="flex items-center">
                          <Input
                            value={service.price}
                            onChange={(e) => updateService(index, "price", e.target.value)}
                            className="w-16 mx-1 text-center font-bold border-0 bg-transparent"
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
                <Stethoscope className="w-4 h-4 mr-2" />
                {t.addService}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.ourDoctors}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceData.doctors[currentLang].map((doctor, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${doctor.image})`}}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {isEditing ? (
                      <Input
                        value={doctor.name}
                        onChange={(e) => updateDoctor(index, "name", e.target.value)}
                        placeholder={t.doctorName}
                      />
                    ) : (
                      doctor.name
                    )}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {isEditing ? (
                      <Input
                        value={doctor.specialty}
                        onChange={(e) => updateDoctor(index, "specialty", e.target.value)}
                        placeholder={t.specialty}
                      />
                    ) : (
                      doctor.specialty
                    )}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {isEditing ? (
                      <Input
                        value={doctor.qualification}
                        onChange={(e) => updateDoctor(index, "qualification", e.target.value)}
                        placeholder={t.qualification}
                        className="text-sm"
                      />
                    ) : (
                      doctor.qualification
                    )}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {isEditing ? (
                      <Input
                        value={doctor.experience}
                        onChange={(e) => updateDoctor(index, "experience", e.target.value)}
                        placeholder={t.experience}
                        className="text-sm"
                      />
                    ) : (
                      doctor.experience
                    )}
                  </p>
                  <p className="text-gray-600">
                    {isEditing ? (
                      <Textarea
                        value={doctor.description}
                        onChange={(e) => updateDoctor(index, "description", e.target.value)}
                        placeholder={t.description}
                        rows={3}
                      />
                    ) : (
                      doctor.description
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Insurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Office Hours */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">{t.officeHours}</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {practiceData.officeHours[currentLang].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="font-medium">{schedule.day}</span>
                        </div>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      <span className="font-medium text-red-800">{t.emergencyContact}</span>
                    </div>
                    <p className="text-red-700 mt-1">
                      {isEditing ? (
                        <Input
                          value={practiceData.emergencyPhone}
                          onChange={(e) => updateField("emergencyPhone", e.target.value)}
                          className="bg-red-50 border-red-200"
                        />
                      ) : (
                        practiceData.emergencyPhone
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Accepted Insurance */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">{t.acceptedInsurance}</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {practiceData.insurance[currentLang].map((insurance, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 mr-3 text-green-600" />
                          {isEditing ? (
                            <Input
                              value={insurance}
                              onChange={(e) => updateInsurance(index, e.target.value)}
                              className="bg-gray-50 border-gray-200"
                            />
                          ) : (
                            <span>{insurance}</span>
                          )}
                        </div>
                        {isEditing && (
                          <Button
                            onClick={() => deleteInsurance(index)}
                            variant="destructive"
                            size="sm"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  {isEditing && (
                    <div className="text-center mt-6">
                      <Button onClick={addInsurance} variant="outline">
                        <Shield className="w-4 h-4 mr-2" />
                        {t.addInsurance}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.healthTips}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceData.healthTips[currentLang].map((tip, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      {isEditing ? (
                        <Input
                          value={tip.title}
                          onChange={(e) => updateHealthTip(index, "title", e.target.value)}
                          className="text-lg font-bold"
                        />
                      ) : (
                        tip.title
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={tip.content}
                      onChange={(e) => updateHealthTip(index, "content", e.target.value)}
                      rows={4}
                      className="text-sm"
                    />
                  ) : (
                    <p className="text-gray-600 text-sm">{tip.content}</p>
                  )}
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
            {practiceData.images.map((image, index) => (
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
                    value={practiceData.hostPhone}
                    onChange={(e) => updateField("hostPhone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.phoneNumber}
                  />
                ) : (
                  <span>{practiceData.hostPhone}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={practiceData.hostEmail}
                    onChange={(e) => updateField("hostEmail", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.emailAddress}
                  />
                ) : (
                  <span>{practiceData.hostEmail}</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 mr-3" />
                {isEditing ? (
                  <Input
                    value={practiceData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder={t.website}
                  />
                ) : (
                  <span>{practiceData.website}</span>
                )}
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                <Calendar className="w-6 h-6 mr-2" />
                {t.bookOnline}
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                <FileText className="w-6 h-6 mr-2" />
                {t.medicalForms}
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
                value={practiceData.name[currentLang]}
                onChange={(e) => updateLocalizedField("name", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white text-center"
              />
            ) : (
              practiceData.name[currentLang]
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
                  value={practiceData.facebookUrl}
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
                  value={practiceData.instagramUrl}
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
            <DialogTitle>{practiceData.images[selectedImageIndex]?.alt[currentLang]}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={practiceData.images[selectedImageIndex]?.url}
              alt={practiceData.images[selectedImageIndex]?.alt[currentLang]}
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