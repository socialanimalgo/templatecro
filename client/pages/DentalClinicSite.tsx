import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Heart, Clock, Users, Shield, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Award, Calendar, Stethoscope } from "lucide-react";

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
    clinicName: "Naziv ordinacije",
    location: "Lokacija",
    tagline: "Slogan",
    yearsExperience: "godina iskustva",
    dentists: "doktora",
    treatments: "tretmana",
    aboutClinic: "O našoj ordinaciji",
    clinicDescription: "Opis ordinacije",
    ourServices: "Naše usluge",
    service: "Usluga",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    treatment_unit: "tretman",
    reviews: "recenzija",
    scheduleAppointment: "Zakaži termin",
    ourDentists: "Naši doktori",
    dentistName: "Ime doktora",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headDentist: "Glavni doktor",
    hostName: "Ime doktora",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Vaš osmijeh je naša misija",
    purchaseTemplate: "Kupi ovaj predložak",
    generalDentistry: "Opća stomatologija",
    orthodontics: "Ortodoncija",
    cosmetic: "Estetska stomatologija",
    implants: "Implanti",
    workingHours: "Radno vrijeme",
    monday: "Ponedjeljak",
    tuesday: "Utorak",
    wednesday: "Srijeda",
    thursday: "Četvrtak",
    friday: "Petak",
    saturday: "Subota",
    sunday: "Nedjelja",
    closed: "Zatvoreno",
    drTitle: "Dr.",
    specialist: "Specijalist",
    experience: "Iskustvo",
    years: "godina",
    preventiveCare: "Preventivna skrb",
    modernEquipment: "Moderna oprema",
    qualifiedStaff: "Stručno osoblje",
    patientCare: "Briga za pacijente"
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
    clinicName: "Clinic Name",
    location: "Location",
    tagline: "Tagline",
    yearsExperience: "years of experience",
    dentists: "dentists",
    treatments: "treatments",
    aboutClinic: "About Our Clinic",
    clinicDescription: "Clinic Description",
    ourServices: "Our Services",
    service: "Service",
    photoGallery: "Photo Gallery",
    imageDescription: "Image Description",
    pricing: "Pricing",
    treatment_unit: "treatment",
    reviews: "reviews",
    scheduleAppointment: "Schedule Appointment",
    ourDentists: "Our Dentists",
    dentistName: "Dentist Name",
    description: "Description",
    contactInfo: "Contact Information",
    headDentist: "Head Dentist",
    hostName: "Dentist Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    website: "Website",
    footerText: "Your smile is our mission",
    purchaseTemplate: "Purchase This Template",
    generalDentistry: "General Dentistry",
    orthodontics: "Orthodontics",
    cosmetic: "Cosmetic Dentistry",
    implants: "Dental Implants",
    workingHours: "Working Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    drTitle: "Dr.",
    specialist: "Specialist",
    experience: "Experience",
    years: "years",
    preventiveCare: "Preventive Care",
    modernEquipment: "Modern Equipment",
    qualifiedStaff: "Qualified Staff",
    patientCare: "Patient Care"
  }
};

export default function DentalClinicSite() {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<'hr' | 'en'>('hr');
  const [isEditing, setIsEditing] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg");
  const [tempImageUrl, setTempImageUrl] = useState("");
  
  const t = translations[currentLang];

  const [clinicData, setClinicData] = useState({
    name: currentLang === 'hr' ? "DentaCare Zagreb" : "DentaCare Zagreb",
    location: currentLang === 'hr' ? "Zagreb, Hrvatska" : "Zagreb, Croatia",
    tagline: currentLang === 'hr' ? "Vaš osmijeh je naša strast" : "Your smile is our passion",
    description: currentLang === 'hr' ? 
      "Moderna stomatološka ordinacija s više od 15 godina iskustva u pružanju vrhunske stomatološke skrbi. Naš tim stručnjaka koristi najnoviju tehnologiju kako bi osigurao najbolje rezultate za naše pacijente." :
      "Modern dental clinic with over 15 years of experience providing top-quality dental care. Our team of specialists uses the latest technology to ensure the best results for our patients.",
    phone: "+385 1 234 5678",
    email: "info@dentacare-zagreb.hr",
    website: "www.dentacare-zagreb.hr"
  });

  const services = [
    {
      id: 1,
      name: t.generalDentistry,
      description: currentLang === 'hr' ? "Kompletna oralna zdravstvena skrb za cijelu obitelj" : "Complete oral health care for the whole family",
      price: "200 - 800 HRK",
      image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg"
    },
    {
      id: 2,
      name: t.orthodontics,
      description: currentLang === 'hr' ? "Ispravka nepravilnog položaja zubi i čeljusti" : "Correction of irregular tooth and jaw position",
      price: "8000 - 25000 HRK",
      image: "https://images.pexels.com/photos/6528003/pexels-photo-6528003.jpeg"
    },
    {
      id: 3,
      name: t.cosmetic,
      description: currentLang === 'hr' ? "Estetski tretmani za savršen osmijeh" : "Aesthetic treatments for the perfect smile",
      price: "500 - 3000 HRK",
      image: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg"
    },
    {
      id: 4,
      name: t.implants,
      description: currentLang === 'hr' ? "Trajno rješenje za nedostajuće zube" : "Permanent solution for missing teeth",
      price: "5000 - 15000 HRK",
      image: "https://images.pexels.com/photos/6528007/pexels-photo-6528007.jpeg"
    }
  ];

  const dentists = [
    {
      id: 1,
      name: currentLang === 'hr' ? "Dr. Ana Marić" : "Dr. Ana Marić",
      specialty: currentLang === 'hr' ? "Glavna doktorica, Specijalist ortodoncije" : "Head Dentist, Orthodontics Specialist",
      experience: "15",
      image: "https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg",
      description: currentLang === 'hr' ? "Iskusna ortodontkinja s diplomom iz Zagreba i specijalizam u Beču." : "Experienced orthodontist with degree from Zagreb and specialization in Vienna."
    },
    {
      id: 2,
      name: currentLang === 'hr' ? "Dr. Marko Petrović" : "Dr. Marko Petrović",
      specialty: currentLang === 'hr' ? "Specijalist za implante" : "Implant Specialist",
      experience: "12",
      image: "https://images.pexels.com/photos/5998476/pexels-photo-5998476.jpeg",
      description: currentLang === 'hr' ? "Stručnjak za dentalne implante s međunarodnim certifikatima." : "Dental implant expert with international certifications."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg",
      description: currentLang === 'hr' ? "Moderna ordinacija" : "Modern clinic"
    },
    {
      url: "https://images.pexels.com/photos/6528003/pexels-photo-6528003.jpeg",
      description: currentLang === 'hr' ? "Najnovija oprema" : "Latest equipment"
    },
    {
      url: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg",
      description: currentLang === 'hr' ? "Udobna čekaonica" : "Comfortable waiting room"
    },
    {
      url: "https://images.pexels.com/photos/6528007/pexels-photo-6528007.jpeg",
      description: currentLang === 'hr' ? "Sterilizacija" : "Sterilization"
    }
  ];

  const workingHours = [
    { day: t.monday, hours: "08:00 - 20:00" },
    { day: t.tuesday, hours: "08:00 - 20:00" },
    { day: t.wednesday, hours: "08:00 - 20:00" },
    { day: t.thursday, hours: "08:00 - 20:00" },
    { day: t.friday, hours: "08:00 - 18:00" },
    { day: t.saturday, hours: "08:00 - 14:00" },
    { day: t.sunday, hours: t.closed }
  ];

  const updateClinicData = (field: string, value: string) => {
    setClinicData(prev => ({ ...prev, [field]: value }));
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
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundUrl})` }}
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
                  value={clinicData.name}
                  onChange={(e) => updateClinicData('name', e.target.value)}
                  className="text-4xl md:text-6xl font-bold bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.clinicName}
                />
                <Input
                  value={clinicData.tagline}
                  onChange={(e) => updateClinicData('tagline', e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.tagline}
                />
                <Input
                  value={clinicData.location}
                  onChange={(e) => updateClinicData('location', e.target.value)}
                  className="text-lg bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.location}
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{clinicData.name}</h1>
                <p className="text-xl md:text-2xl mb-4">{clinicData.tagline}</p>
                <div className="flex items-center text-lg mb-8">
                  <MapPin className="w-5 h-5 mr-2" />
                  {clinicData.location}
                </div>
                <div className="flex flex-wrap gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">{t.yearsExperience}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2</div>
                    <div className="text-sm opacity-90">{t.dentists}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.aboutClinic}</h2>
            {isEditing ? (
              <Textarea
                value={clinicData.description}
                onChange={(e) => updateClinicData('description', e.target.value)}
                className="w-full min-h-[120px]"
                placeholder={t.clinicDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground mb-12">{clinicData.description}</p>
            )}

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.preventiveCare}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Redoviti pregledi i preventiva' : 'Regular checkups and prevention'}
                </p>
              </div>
              <div className="text-center">
                <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.modernEquipment}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Najnovija medicinska tehnologija' : 'Latest medical technology'}
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.qualifiedStaff}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Licencirani i iskusni stručnjaci' : 'Licensed and experienced professionals'}
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.patientCare}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Individualna pažnja svakom pacijentu' : 'Individual attention to every patient'}
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
                    <Heart className="w-5 h-5 text-blue-600" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">{service.price}</span>
                    <Button size="sm">{t.scheduleAppointment}</Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.ourDentists}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dentists.map((dentist) => (
              <Card key={dentist.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={dentist.image} 
                      alt={dentist.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-bold mb-2">{t.drTitle} {dentist.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{dentist.specialty}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{dentist.experience} {t.years} {t.experience.toLowerCase()}</span>
                    </div>
                    <p className="text-muted-foreground">{dentist.description}</p>
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
                <h3 className="text-xl font-bold mb-6">{t.scheduleAppointment}</h3>
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Input
                          value={clinicData.phone}
                          onChange={(e) => updateClinicData('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.phoneNumber}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <Input
                          value={clinicData.email}
                          onChange={(e) => updateClinicData('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.emailAddress}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <Input
                          value={clinicData.website}
                          onChange={(e) => updateClinicData('website', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.website}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <span>{clinicData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <span>{clinicData.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <span>{clinicData.website}</span>
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
                <h3 className="text-xl font-bold mb-6">{currentLang === 'hr' ? 'Zakaži online' : 'Book Online'}</h3>
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
                    type="date"
                    className="bg-white/10 border-white/20 text-white"
                  />
                  <Textarea 
                    placeholder={currentLang === 'hr' ? 'Dodatne napomene' : 'Additional notes'} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Button className="w-full bg-white text-blue-900 hover:bg-gray-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t.scheduleAppointment}
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
            <Heart className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">{clinicData.name}</span>
          </div>
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}