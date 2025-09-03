import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Car, Clock, Users, Wrench, Shield, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Award, Calendar, Settings, CheckCircle } from "lucide-react";

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
    shopName: "Naziv servisa",
    location: "Lokacija",
    tagline: "Slogan",
    yearsExperience: "godina iskustva",
    mechanics: "mehaničara",
    services: "usluga",
    aboutShop: "O našem servisu",
    shopDescription: "Opis servisa",
    ourServices: "Naše usluge",
    service: "Usluga",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    service_unit: "usluga",
    reviews: "recenzija",
    scheduleService: "Zakaži servis",
    ourTeam: "Naš tim",
    mechanicName: "Ime mehaničara",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headMechanic: "Glavni mehaničar",
    hostName: "Ime mehaničara",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Vaš automobil u sigurnim rukama",
    purchaseTemplate: "Kupi ovaj predložak",
    engineRepair: "Popravak motora",
    brakeService: "Servis kočnica",
    oilChange: "Zamjena ulja",
    diagnostics: "Dijagnostika",
    workingHours: "Radno vrijeme",
    monday: "Ponedjeljak",
    tuesday: "Utorak",
    wednesday: "Srijeda",
    thursday: "Četvrtak",
    friday: "Petak",
    saturday: "Subota",
    sunday: "Nedjelja",
    closed: "Zatvoreno",
    specialist: "Specijalist",
    experience: "Iskustvo",
    years: "godina",
    qualityParts: "Kvalitetni dijelovi",
    quickService: "Brz servis",
    expertTechnicians: "Stručni tehničari",
    warrantyWork: "Jamstvo na rad",
    carMake: "Marka automobila",
    carModel: "Model",
    issueDescription: "Opis problema",
    bookService: "Rezerviraj servis"
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
    shopName: "Shop Name",
    location: "Location",
    tagline: "Tagline",
    yearsExperience: "years of experience",
    mechanics: "mechanics",
    services: "services",
    aboutShop: "About Our Shop",
    shopDescription: "Shop Description",
    ourServices: "Our Services",
    service: "Service",
    photoGallery: "Photo Gallery",
    imageDescription: "Image Description",
    pricing: "Pricing",
    service_unit: "service",
    reviews: "reviews",
    scheduleService: "Schedule Service",
    ourTeam: "Our Team",
    mechanicName: "Mechanic Name",
    description: "Description",
    contactInfo: "Contact Information",
    headMechanic: "Head Mechanic",
    hostName: "Mechanic Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    website: "Website",
    footerText: "Your car in safe hands",
    purchaseTemplate: "Purchase This Template",
    engineRepair: "Engine Repair",
    brakeService: "Brake Service",
    oilChange: "Oil Change",
    diagnostics: "Diagnostics",
    workingHours: "Working Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    specialist: "Specialist",
    experience: "Experience",
    years: "years",
    qualityParts: "Quality Parts",
    quickService: "Quick Service",
    expertTechnicians: "Expert Technicians",
    warrantyWork: "Warranty Work",
    carMake: "Car Make",
    carModel: "Model",
    issueDescription: "Issue Description",
    bookService: "Book Service"
  }
};

export default function AutoRepairShopSite() {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<'hr' | 'en'>('hr');
  const [isEditing, setIsEditing] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg");
  const [tempImageUrl, setTempImageUrl] = useState("");
  
  const t = translations[currentLang];

  const [shopData, setShopData] = useState({
    name: currentLang === 'hr' ? "AutoServis Zagreb" : "AutoRepair Zagreb",
    location: currentLang === 'hr' ? "Zagreb, Hrvatska" : "Zagreb, Croatia",
    tagline: currentLang === 'hr' ? "Profesionalan servis za sve marke automobila" : "Professional service for all car brands",
    description: currentLang === 'hr' ? 
      "Ponosni smo na više od 20 godina iskustva u automobilskoj industriji. Naš tim stručnih mehaničara pruža kvalitetne usluge popravka i održavanja za sve marke i modele vozila. Koristimo originalne i visokokvalitetne dijelove te najsuvremeniju opremu." :
      "We are proud of over 20 years of experience in the automotive industry. Our team of skilled mechanics provides quality repair and maintenance services for all makes and models of vehicles. We use original and high-quality parts and state-of-the-art equipment.",
    phone: "+385 1 234 5678",
    email: "info@autoservis-zagreb.hr",
    website: "www.autoservis-zagreb.hr"
  });

  const services = [
    {
      id: 1,
      name: t.engineRepair,
      description: currentLang === 'hr' ? "Kompletan popravak i održavanje motora" : "Complete engine repair and maintenance",
      price: "500 - 3000 HRK",
      image: "https://images.pexels.com/photos/4480464/pexels-photo-4480464.jpeg"
    },
    {
      id: 2,
      name: t.brakeService,
      description: currentLang === 'hr' ? "Zamjena kočionih pločica, diskova i servis" : "Brake pad, disc replacement and service",
      price: "200 - 800 HRK",
      image: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg"
    },
    {
      id: 3,
      name: t.oilChange,
      description: currentLang === 'hr' ? "Redovita zamjena motornog ulja i filtera" : "Regular engine oil and filter change",
      price: "150 - 400 HRK",
      image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg"
    },
    {
      id: 4,
      name: t.diagnostics,
      description: currentLang === 'hr' ? "Kompjuterska dijagnostika kvarova" : "Computer fault diagnostics",
      price: "100 - 300 HRK",
      image: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg"
    }
  ];

  const mechanics = [
    {
      id: 1,
      name: currentLang === 'hr' ? "Ivo Marković" : "Ivo Marković",
      specialty: currentLang === 'hr' ? "Glavni mehaničar, Specijalist za motore" : "Head Mechanic, Engine Specialist",
      experience: "20",
      image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg",
      description: currentLang === 'hr' ? "Iskusni mehaničar s dugogodišnjim iskustvom u popravci motora." : "Experienced mechanic with years of experience in engine repair."
    },
    {
      id: 2,
      name: currentLang === 'hr' ? "Marko Petrović" : "Marko Petrović",
      specialty: currentLang === 'hr' ? "Specijalist za elektroniku" : "Electronics Specialist",
      experience: "15",
      image: "https://images.pexels.com/photos/3807742/pexels-photo-3807742.jpeg",
      description: currentLang === 'hr' ? "Stručnjak za automobilsku elektroniku i dijagnostiku." : "Expert in automotive electronics and diagnostics."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg",
      description: currentLang === 'hr' ? "Moderni servis" : "Modern workshop"
    },
    {
      url: "https://images.pexels.com/photos/4480464/pexels-photo-4480464.jpeg",
      description: currentLang === 'hr' ? "Profesionalna oprema" : "Professional equipment"
    },
    {
      url: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
      description: currentLang === 'hr' ? "Servis vozila" : "Vehicle service"
    },
    {
      url: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg",
      description: currentLang === 'hr' ? "Dijagnostika" : "Diagnostics"
    }
  ];

  const workingHours = [
    { day: t.monday, hours: "07:00 - 19:00" },
    { day: t.tuesday, hours: "07:00 - 19:00" },
    { day: t.wednesday, hours: "07:00 - 19:00" },
    { day: t.thursday, hours: "07:00 - 19:00" },
    { day: t.friday, hours: "07:00 - 19:00" },
    { day: t.saturday, hours: "08:00 - 16:00" },
    { day: t.sunday, hours: t.closed }
  ];

  const updateShopData = (field: string, value: string) => {
    setShopData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setBackgroundUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = () => {
    if (tempImageUrl.trim()) {
      setBackgroundUrl(tempImageUrl.trim());
      setTempImageUrl("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
        {/* Language Toggle */}
        <div className="flex bg-white rounded-lg shadow-lg p-1">
          <Button
            onClick={() => setCurrentLang('hr')}
            variant={currentLang === 'hr' ? "default" : "ghost"}
            size="sm"
            className="text-lg px-2"
          >
            🇭🇷
          </Button>
          <Button
            onClick={() => setCurrentLang('en')}
            variant={currentLang === 'en' ? "default" : "ghost"}
            size="sm"
            className="text-lg px-2"
          >
            🇬🇧
          </Button>
        </div>


        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="bg-white shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToTemplates}
        </Button>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})` }}
      >
        {isEditing && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white">
                <Camera className="w-4 h-4 mr-2" />
                {t.changeBackground}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.changeBackground}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-upload">{t.uploadFromComputer}</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-2"
                  />
                </div>
                <div className="text-center text-muted-foreground">{t.or}</div>
                <div className="space-y-2">
                  <Label>{t.pasteImageUrl}</Label>
                  <div className="flex gap-2">
                    <Input
                      value={tempImageUrl}
                      onChange={(e) => setTempImageUrl(e.target.value)}
                      placeholder="https://..."
                    />
                    <Button onClick={handleUrlChange}>{t.useUrl}</Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        <div className="container mx-auto px-4 text-white">
          <div className="max-w-4xl">
            {isEditing ? (
              <div className="space-y-4">
                <Input
                  value={shopData.name}
                  onChange={(e) => updateShopData('name', e.target.value)}
                  className="text-4xl md:text-6xl font-bold bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.shopName}
                />
                <Input
                  value={shopData.tagline}
                  onChange={(e) => updateShopData('tagline', e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.tagline}
                />
                <Input
                  value={shopData.location}
                  onChange={(e) => updateShopData('location', e.target.value)}
                  className="text-lg bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.location}
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{shopData.name}</h1>
                <p className="text-xl md:text-2xl mb-4">{shopData.tagline}</p>
                <div className="flex items-center text-lg mb-8">
                  <MapPin className="w-5 h-5 mr-2" />
                  {shopData.location}
                </div>
                <div className="flex flex-wrap gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">20+</div>
                    <div className="text-sm opacity-90">{t.yearsExperience}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm opacity-90">{t.mechanics}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">{t.reviews}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.aboutShop}</h2>
            {isEditing ? (
              <Textarea
                value={shopData.description}
                onChange={(e) => updateShopData('description', e.target.value)}
                className="w-full min-h-[120px]"
                placeholder={t.shopDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground mb-12">{shopData.description}</p>
            )}

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.qualityParts}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Koristimo samo originalne dijelove' : 'We use only original parts'}
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.quickService}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Brza i efikasna usluga' : 'Fast and efficient service'}
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.expertTechnicians}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Certificirani i iskusni mehaničari' : 'Certified and experienced mechanics'}
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.warrantyWork}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Jamstvo na sve izvršene radove' : 'Warranty on all performed work'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.ourServices}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-red-600" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-red-600">{service.price}</span>
                    <Button size="sm">{t.scheduleService}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.workingHours}</h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className={`${schedule.hours === t.closed ? 'text-red-600' : 'text-green-600'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.ourTeam}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mechanics.map((mechanic) => (
              <Card key={mechanic.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={mechanic.image} 
                      alt={mechanic.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-bold mb-2">{mechanic.name}</h3>
                    <p className="text-red-600 font-medium mb-2">{mechanic.specialty}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{mechanic.experience} {t.years} {t.experience.toLowerCase()}</span>
                    </div>
                    <p className="text-muted-foreground">{mechanic.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.photoGallery}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.url} 
                  alt={image.description}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-red-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contactInfo}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">{t.scheduleService}</h3>
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Input
                          value={shopData.phone}
                          onChange={(e) => updateShopData('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.phoneNumber}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <Input
                          value={shopData.email}
                          onChange={(e) => updateShopData('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.emailAddress}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <Input
                          value={shopData.website}
                          onChange={(e) => updateShopData('website', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.website}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <span>{shopData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <span>{shopData.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <span>{shopData.website}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-900 hover:bg-gray-100"
                    data-testid="purchase-button"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t.purchaseTemplate}
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">{t.bookService}</h3>
                <div className="space-y-4">
                  <Input 
                    placeholder={currentLang === 'hr' ? 'Vaše ime' : 'Your name'} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Input 
                    placeholder={t.phoneNumber} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Input 
                    placeholder={t.carMake}
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Input 
                    placeholder={t.carModel}
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Textarea 
                    placeholder={t.issueDescription} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Button className="w-full bg-white text-red-900 hover:bg-gray-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t.scheduleService}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="w-6 h-6 text-red-400" />
            <span className="text-xl font-bold">{shopData.name}</span>
          </div>
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}