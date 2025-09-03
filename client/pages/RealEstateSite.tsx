import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Home, Clock, Users, Building, Shield, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Award, Calendar, Euro, Bath, Bed, Square } from "lucide-react";

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
    yearsExperience: "godina iskustva",
    agents: "agenata",
    properties: "nekretnina",
    aboutAgency: "O našoj agenciji",
    agencyDescription: "Opis agencije",
    featuredProperties: "Izdvojena svojstva",
    property: "Nekretnina",
    photoGallery: "Foto galerija",
    imageDescription: "Opis slike",
    pricing: "Cijene",
    property_unit: "nekretnina",
    reviews: "recenzija",
    contactAgent: "Kontaktiraj agenta",
    ourAgents: "Naši agenti",
    agentName: "Ime agenta",
    description: "Opis",
    contactInfo: "Kontakt informacije",
    headAgent: "Glavni agent",
    hostName: "Ime agenta",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    website: "Web stranica",
    footerText: "Vaš dom je naša misija",
    purchaseTemplate: "Kupi ovaj predložak",
    apartments: "Stanovi",
    houses: "Kuće",
    commercial: "Poslovni prostori",
    land: "Zemljišta",
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
    expertValuation: "Stručna procjena",
    marketKnowledge: "Poznavanje tržišta",
    legalSupport: "Pravna podrška",
    quickSale: "Brza prodaja",
    sqm: "m²",
    bedrooms: "spavaća soba",
    bathrooms: "kupaona",
    viewProperty: "Pregledaj",
    scheduleViewing: "Zakaži razgledavanje",
    propertyType: "Tip nekretnine",
    budget: "Budžet",
    requestInfo: "Zatraži informacije"
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
    agencyName: "Agency Name",
    location: "Location",
    tagline: "Tagline",
    yearsExperience: "years of experience",
    agents: "agents",
    properties: "properties",
    aboutAgency: "About Our Agency",
    agencyDescription: "Agency Description",
    featuredProperties: "Featured Properties",
    property: "Property",
    photoGallery: "Photo Gallery",
    imageDescription: "Image Description",
    pricing: "Pricing",
    property_unit: "property",
    reviews: "reviews",
    contactAgent: "Contact Agent",
    ourAgents: "Our Agents",
    agentName: "Agent Name",
    description: "Description",
    contactInfo: "Contact Information",
    headAgent: "Head Agent",
    hostName: "Agent Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    website: "Website",
    footerText: "Your home is our mission",
    purchaseTemplate: "Purchase This Template",
    apartments: "Apartments",
    houses: "Houses",
    commercial: "Commercial",
    land: "Land",
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
    expertValuation: "Expert Valuation",
    marketKnowledge: "Market Knowledge",
    legalSupport: "Legal Support",
    quickSale: "Quick Sale",
    sqm: "sqm",
    bedrooms: "bedroom",
    bathrooms: "bathroom",
    viewProperty: "View",
    scheduleViewing: "Schedule Viewing",
    propertyType: "Property Type",
    budget: "Budget",
    requestInfo: "Request Information"
  }
};

export default function RealEstateSite() {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<'hr' | 'en'>('hr');
  const [isEditing, setIsEditing] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg");
  const [tempImageUrl, setTempImageUrl] = useState("");
  
  const t = translations[currentLang];

  const [agencyData, setAgencyData] = useState({
    name: currentLang === 'hr' ? "Prime Nekretnine Zagreb" : "Prime Real Estate Zagreb",
    location: currentLang === 'hr' ? "Zagreb, Hrvatska" : "Zagreb, Croatia",
    tagline: currentLang === 'hr' ? "Vaš pouzdani partner za nekretnine" : "Your trusted real estate partner",
    description: currentLang === 'hr' ? 
      "S više od 12 godina iskustva u području nekretnina, specijalizirani smo za prodaju i najam stanova, kuća i poslovnih prostora u Zagrebu i okolici. Naš tim iskusnih agenata pruža personalizirane usluge i stručno savjetovanje kroz cijeli proces kupovine ili prodaje." :
      "With over 12 years of experience in real estate, we specialize in the sale and rental of apartments, houses and commercial spaces in Zagreb and surrounding areas. Our team of experienced agents provides personalized service and professional advice throughout the buying or selling process.",
    phone: "+385 1 234 5678",
    email: "info@prime-nekretnine.hr",
    website: "www.prime-nekretnine.hr"
  });

  const properties = [
    {
      id: 1,
      title: currentLang === 'hr' ? "Luksuzni stan - Centar" : "Luxury Apartment - Center",
      type: t.apartments,
      price: "€250,000",
      location: currentLang === 'hr' ? "Zagreb, Centar" : "Zagreb, Center",
      bedrooms: 3,
      bathrooms: 2,
      sqm: 85,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    },
    {
      id: 2,
      title: currentLang === 'hr' ? "Obiteljska kuća" : "Family House",
      type: t.houses,
      price: "€180,000",
      location: currentLang === 'hr' ? "Zagreb, Špansko" : "Zagreb, Špansko",
      bedrooms: 4,
      bathrooms: 3,
      sqm: 120,
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
    },
    {
      id: 3,
      title: currentLang === 'hr' ? "Poslovni prostor" : "Commercial Space",
      type: t.commercial,
      price: "€120,000",
      location: currentLang === 'hr' ? "Zagreb, Trnje" : "Zagreb, Trnje",
      bedrooms: 0,
      bathrooms: 1,
      sqm: 65,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
    },
    {
      id: 4,
      title: currentLang === 'hr' ? "Moderni stan" : "Modern Apartment",
      type: t.apartments,
      price: "€200,000",
      location: currentLang === 'hr' ? "Zagreb, Novi Zagreb" : "Zagreb, New Zagreb",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 60,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
    }
  ];

  const agents = [
    {
      id: 1,
      name: currentLang === 'hr' ? "Marija Novak" : "Marija Novak",
      specialty: currentLang === 'hr' ? "Glavna agentka, Specijalist za stanove" : "Head Agent, Apartment Specialist",
      experience: "12",
      image: "https://images.pexels.com/photos/5668474/pexels-photo-5668474.jpeg",
      description: currentLang === 'hr' ? "Iskusna agentka s dugogodišnjim iskustvom u prodaji stanova u centru Zagreba." : "Experienced agent with years of experience in apartment sales in Zagreb center."
    },
    {
      id: 2,
      name: currentLang === 'hr' ? "Petar Horvat" : "Petar Horvat",
      specialty: currentLang === 'hr' ? "Specijalist za kuće i zemljišta" : "Houses and Land Specialist",
      experience: "10",
      image: "https://images.pexels.com/photos/5668476/pexels-photo-5668476.jpeg",
      description: currentLang === 'hr' ? "Stručnjak za prodaju obiteljskih kuća i zemljišta u zagrebačkoj okolici." : "Expert in selling family houses and land in the Zagreb area."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description: currentLang === 'hr' ? "Luksuzni stanovi" : "Luxury apartments"
    },
    {
      url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      description: currentLang === 'hr' ? "Obiteljske kuće" : "Family houses"
    },
    {
      url: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
      description: currentLang === 'hr' ? "Poslovni prostori" : "Commercial spaces"
    },
    {
      url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      description: currentLang === 'hr' ? "Moderni stanovi" : "Modern apartments"
    }
  ];

  const workingHours = [
    { day: t.monday, hours: "09:00 - 18:00" },
    { day: t.tuesday, hours: "09:00 - 18:00" },
    { day: t.wednesday, hours: "09:00 - 18:00" },
    { day: t.thursday, hours: "09:00 - 18:00" },
    { day: t.friday, hours: "09:00 - 18:00" },
    { day: t.saturday, hours: "09:00 - 15:00" },
    { day: t.sunday, hours: t.closed }
  ];

  const updateAgencyData = (field: string, value: string) => {
    setAgencyData(prev => ({ ...prev, [field]: value }));
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
                  value={agencyData.name}
                  onChange={(e) => updateAgencyData('name', e.target.value)}
                  className="text-4xl md:text-6xl font-bold bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.agencyName}
                />
                <Input
                  value={agencyData.tagline}
                  onChange={(e) => updateAgencyData('tagline', e.target.value)}
                  className="text-xl bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.tagline}
                />
                <Input
                  value={agencyData.location}
                  onChange={(e) => updateAgencyData('location', e.target.value)}
                  className="text-lg bg-white/10 border-white/20 text-white placeholder-white/70"
                  placeholder={t.location}
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{agencyData.name}</h1>
                <p className="text-xl md:text-2xl mb-4">{agencyData.tagline}</p>
                <div className="flex items-center text-lg mb-8">
                  <MapPin className="w-5 h-5 mr-2" />
                  {agencyData.location}
                </div>
                <div className="flex flex-wrap gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">12+</div>
                    <div className="text-sm opacity-90">{t.yearsExperience}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm opacity-90">{t.agents}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">200+</div>
                    <div className="text-sm opacity-90">{t.properties}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.aboutAgency}</h2>
            {isEditing ? (
              <Textarea
                value={agencyData.description}
                onChange={(e) => updateAgencyData('description', e.target.value)}
                className="w-full min-h-[120px]"
                placeholder={t.agencyDescription}
              />
            ) : (
              <p className="text-lg text-muted-foreground mb-12">{agencyData.description}</p>
            )}

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Euro className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.expertValuation}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Precizna procjena vrijednosti nekretnina' : 'Precise real estate valuation'}
                </p>
              </div>
              <div className="text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.marketKnowledge}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Duboko poznavanje lokalnog tržišta' : 'Deep knowledge of local market'}
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.legalSupport}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Potpuna pravna podrška kroz proces' : 'Complete legal support throughout the process'}
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t.quickSale}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === 'hr' ? 'Brza i efikasna prodaja nekretnina' : 'Fast and efficient property sales'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.featuredProperties}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600 text-white">
                    {property.price}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-green-600" />
                    {property.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.sqm}{t.sqm}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      {t.viewProperty}
                    </Button>
                    <Button size="sm" className="flex-1">
                      {t.contactAgent}
                    </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.ourAgents}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                    <p className="text-green-600 font-medium mb-2">{agent.specialty}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{agent.experience} {t.years} {t.experience.toLowerCase()}</span>
                    </div>
                    <p className="text-muted-foreground">{agent.description}</p>
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
      <section className="py-16 px-4 bg-green-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contactInfo}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">{t.contactAgent}</h3>
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Input
                          value={agencyData.phone}
                          onChange={(e) => updateAgencyData('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.phoneNumber}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <Input
                          value={agencyData.email}
                          onChange={(e) => updateAgencyData('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.emailAddress}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <Input
                          value={agencyData.website}
                          onChange={(e) => updateAgencyData('website', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/70"
                          placeholder={t.website}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <span>{agencyData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <span>{agencyData.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <span>{agencyData.website}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-900 hover:bg-gray-100"
                    data-testid="purchase-button"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t.purchaseTemplate}
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">{t.requestInfo}</h3>
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
                    placeholder={t.propertyType}
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Input 
                    placeholder={t.budget}
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Textarea 
                    placeholder={currentLang === 'hr' ? 'Dodatne informacije' : 'Additional information'} 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70"
                  />
                  <Button className="w-full bg-white text-green-900 hover:bg-gray-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t.scheduleViewing}
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
            <Home className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">{agencyData.name}</span>
          </div>
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}