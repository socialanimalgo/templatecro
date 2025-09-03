import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Wrench, Clock, Users, Droplets, Shield, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Award, Calendar, Settings, CheckCircle, Zap } from "lucide-react";

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
    companyName: "Naziv tvrtke",
    location: "Lokacija",
    tagline: "Slogan",
    yearsExperience: "godina iskustva",
    plumbers: "vodoinstalatera",
    services: "usluga",
    aboutCompany: "O našoj tvrtki",
    companyDescription: "Opis tvrtke",
    ourServices: "Naše usluge",
    service: "Usluga",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    service_unit: "usluga",
    reviews: "recenzija",
    callPlumber: "Pozovi vodoinstalatera",
    ourTeam: "Naš tim",
    plumberName: "Ime vodoinstalatera",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headPlumber: "Glavni vodoinstalater",
    hostName: "Ime vodoinstalatera",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Brza i pouzdana vodoinstalaterska usluga",
    purchaseTemplate: "Kupi ovaj predložak",
    pipeFitting: "Postavljanje cijevi",
    leakRepair: "Popravak curenja",
    drainCleaning: "Čišćenje odvoda",
    heatingInstall: "Instalacija grijanja",
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
    quickResponse: "Brza usluga",
    emergencyService: "Hitne intervencije",
    licensedWork: "Licencirani rad",
    qualityGuarantee: "Garancija kvalitete",
    emergencyCall: "Hitna intervencija",
    available24h: "Dostupni 24h",
    problemDescription: "Opis problema",
    requestService: "Zatraži uslugu"
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
    companyName: "Company Name",
    location: "Location",
    tagline: "Tagline",
    yearsExperience: "years of experience",
    plumbers: "plumbers",
    services: "services",
    aboutCompany: "About Our Company",
    companyDescription: "Company Description",
    ourServices: "Our Services",
    service: "Service",
    photoGallery: "Photo Gallery",
    imageDescription: "Image Description",
    pricing: "Pricing",
    service_unit: "service",
    reviews: "reviews",
    callPlumber: "Call Plumber",
    ourTeam: "Our Team",
    plumberName: "Plumber Name",
    description: "Description",
    contactInfo: "Contact Information",
    headPlumber: "Head Plumber",
    hostName: "Plumber Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    website: "Website",
    footerText: "Fast and reliable plumbing service",
    purchaseTemplate: "Purchase This Template",
    pipeFitting: "Pipe Installation",
    leakRepair: "Leak Repair",
    drainCleaning: "Drain Cleaning",
    heatingInstall: "Heating Installation",
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
    quickResponse: "Quick Response",
    emergencyService: "Emergency Service",
    licensedWork: "Licensed Work",
    qualityGuarantee: "Quality Guarantee",
    emergencyCall: "Emergency Call",
    available24h: "Available 24h",
    problemDescription: "Problem Description",
    requestService: "Request Service"
  }
};

export default function PlumberSite() {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<'hr' | 'en'>('hr');
  const [isEditing, setIsEditing] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("https://images.pexels.com/photos/8609034/pexels-photo-8609034.jpeg");
  const [tempImageUrl, setTempImageUrl] = useState("");
  
  const t = translations[currentLang];

  const [companyData, setCompanyData] = useState({
    name: currentLang === 'hr' ? "AquaFix Zagreb" : "AquaFix Zagreb",
    location: currentLang === 'hr' ? "Zagreb, Hrvatska" : "Zagreb, Croatia",
    tagline: currentLang === 'hr' ? "24/7 vodoinstalaterske usluge" : "24/7 plumbing services",
    description: currentLang === 'hr' ? 
      "Specializirani smo za sve vrste vodoinstalaterskih radova s preko 15 godina iskustva. Naš tim stručnjaka dostupan je 24 sata dnevno za hitne intervencije. Pružamo kvalitetne usluge uz korištenje najmodernijih alata i materijala." :
      "We specialize in all types of plumbing work with over 15 years of experience. Our team of experts is available 24 hours a day for emergency interventions. We provide quality services using the most modern tools and materials.",
    phone: "+385 1 234 5678",
    email: "info@aquafix-zagreb.hr",
    website: "www.aquafix-zagreb.hr"
  });

  const services = [
    {
      id: 1,
      name: t.pipeFitting,
      description: currentLang === 'hr' ? "Profesionalno postavljanje svih vrsta cijevi" : "Professional installation of all types of pipes",
      price: "300 - 1500 HRK",
      image: "https://images.pexels.com/photos/1198178/pexels-photo-1198178.jpeg"
    },
    {
      id: 2,
      name: t.leakRepair,
      description: currentLang === 'hr' ? "Brz popravak curenja vode i kanalizacije" : "Quick repair of water and sewer leaks",
      price: "200 - 800 HRK",
      image: "https://images.pexels.com/photos/8090171/pexels-photo-8090171.jpeg"
    },
    {
      id: 3,
      name: t.drainCleaning,
      description: currentLang === 'hr' ? "Profesionalno čišćenje začepljenih odvoda" : "Professional cleaning of clogged drains",
      price: "150 - 500 HRK",
      image: "https://images.pexels.com/photos/8090174/pexels-photo-8090174.jpeg"
    },
    {
      id: 4,
      name: t.heatingInstall,
      description: currentLang === 'hr' ? "Instalacija i servis grijaćih sustava" : "Installation and service of heating systems",
      price: "1000 - 5000 HRK",
      image: "https://images.pexels.com/photos/7031714/pexels-photo-7031714.jpeg"
    }
  ];

  const plumbers = [
    {
      id: 1,
      name: currentLang === 'hr' ? "Josip Kovač" : "Josip Kovač",
      specialty: currentLang === 'hr' ? "Glavni vodoinstalater, Specijalist za grijanje" : "Head Plumber, Heating Specialist",
      experience: "18",
      image: "https://images.pexels.com/photos/8097256/pexels-photo-8097256.jpeg",
      description: currentLang === 'hr' ? "Iskusan vodoinstalater s dugogodišnjim iskustvom u instalaciji grijaćih sustava." : "Experienced plumber with years of experience in heating system installation."
    },
    {
      id: 2,
      name: currentLang === 'hr' ? "Ante Babić" : "Ante Babić",
      specialty: currentLang === 'hr' ? "Specijalist za hitne intervencije" : "Emergency Response Specialist",
      experience: "12",
      image: "https://images.pexels.com/photos/8090165/pexels-photo-8090165.jpeg",
      description: currentLang === 'hr' ? "Stručnjak za hitne vodoinstalaterske intervencije i popravke." : "Expert in emergency plumbing interventions and repairs."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/1198178/pexels-photo-1198178.jpeg",
      description: currentLang === 'hr' ? "Instalacija cijevi" : "Pipe installation"
    },
    {
      url: "https://images.pexels.com/photos/8090171/pexels-photo-8090171.jpeg",
      description: currentLang === 'hr' ? "Popravak slavine" : "Faucet repair"
    },
    {
      url: "https://images.pexels.com/photos/8090174/pexels-photo-8090174.jpeg",
      description: currentLang === 'hr' ? "Čišćenje odvoda" : "Drain cleaning"
    },
    {
      url: "https://images.pexels.com/photos/7031714/pexels-photo-7031714.jpeg",
      description: currentLang === 'hr' ? "Servis bojlera" : "Boiler service"
    }
  ];

  const workingHours = [
    { day: t.monday, hours: "06:00 - 22:00" },
    { day: t.tuesday, hours: "06:00 - 22:00" },
    { day: t.wednesday, hours: "06:00 - 22:00" },
    { day: t.thursday, hours: "06:00 - 22:00" },
    { day: t.friday, hours: "06:00 - 22:00" },
    { day: t.saturday, hours: "08:00 - 20:00" },
    { day: t.sunday, hours: "08:00 - 18:00" }
  ];

  const updateCompanyData = (field: string, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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
                  value={companyData.name}
                  onChange={(e) => updateCompanyData('name', e.target.value)}
                  className="text-4xl md:text-6xl font-bold bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.companyName}
                />
                <Input
                  value={companyData.tagline}
                  onChange={(e) => updateCompanyData('tagline', e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.tagline}
                />
                <Input
                  value={companyData.location}
                  onChange={(e) => updateCompanyData('location', e.target.value)}
                  className="text-lg bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.location}
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{companyData.name}</h1>
                <p className="text-xl md:text-2xl mb-4">{companyData.tagline}</p>
                <div className="flex items-center text-lg mb-8">
                  <MapPin className="w-5 h-5 mr-2" />
                  {companyData.location}
                </div>
                <Badge className="bg-red-600 text-white text-lg px-4 py-2 mb-8">
                  {t.available24h}
                </Badge>
                <div className="flex flex-wrap gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">{t.yearsExperience}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm opacity-90">{t.plumbers}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">800+</div>
                    <div className="text-sm opacity-90">{t.reviews}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold">{t.emergencyCall}</h3>
                <p className="text-sm opacity-90">{companyData.phone}</p>
              </div>
            </div>
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              {t.callPlumber}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.aboutCompany}</h2>
            {isEditing ? (
              <Textarea
                value={companyData.description}
                onChange={(e) => updateCompanyData('description', e.target.value)}
                className="w-full min-h-[120px]"
                placeholder={t.companyDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground mb-12">{companyData.description}</p>
            )}

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.quickResponse}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Stizemo u roku od 30 minuta' : 'We arrive within 30 minutes'}
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.emergencyService}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? '24/7 hitne intervencije' : '24/7 emergency interventions'}
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.licensedWork}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Licencirani i osigurani radovi' : 'Licensed and insured work'}
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.qualityGuarantee}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Garancija na sve radove' : 'Warranty on all work'}
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
                    <Droplets className="w-5 h-5 text-blue-600" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">{service.price}</span>
                    <Button size="sm">{t.callPlumber}</Button>
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
                      <span className="text-green-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-600 font-medium text-center">
                    {currentLang === 'hr' ? '⚡ Hitne intervencije dostupne 24/7' : '⚡ Emergency service available 24/7'}
                  </p>
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
            {plumbers.map((plumber) => (
              <Card key={plumber.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={plumber.image} 
                      alt={plumber.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-bold mb-2">{plumber.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{plumber.specialty}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{plumber.experience} {t.years} {t.experience.toLowerCase()}</span>
                    </div>
                    <p className="text-muted-foreground">{plumber.description}</p>
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
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contactInfo}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">{t.emergencyCall}</h3>
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Input
                          value={companyData.phone}
                          onChange={(e) => updateCompanyData('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.phoneNumber}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <Input
                          value={companyData.email}
                          onChange={(e) => updateCompanyData('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.emailAddress}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <Input
                          value={companyData.website}
                          onChange={(e) => updateCompanyData('website', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.website}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <span className="text-xl font-bold">{companyData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <span>{companyData.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <span>{companyData.website}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-gray-100"
                    data-testid="purchase-button"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t.purchaseTemplate}
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">{t.requestService}</h3>
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
                    placeholder={currentLang === 'hr' ? 'Adresa' : 'Address'} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Textarea 
                    placeholder={t.problemDescription} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Button className="w-full bg-white text-blue-900 hover:bg-gray-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t.requestService}
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
            <Droplets className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">{companyData.name}</span>
          </div>
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}