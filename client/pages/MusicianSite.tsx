import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Music, Calendar, Users, Volume2, Play, Pause, Video, ExternalLink, Edit2, Camera, Phone, Mail, Globe, Upload, X, ShoppingCart, ArrowLeft, Headphones, Mic, Music2 } from "lucide-react";

// Language translations
const translations = {
  hr: {
    editMode: "Uredi",
    previewMode: "Pregledaj",
    backToTemplates: "Natrag na predloške",
    changeBackground: "Promijeni pozadinu",
    uploadFromComputer: "Učitaj s računala",
    browseFiles: "Pregledaj datoteke",
    or: "ILI",
    pasteImageUrl: "Zalijepi URL slike",
    useUrl: "Koristi URL",
    cancel: "Odustani",
    artistName: "Naziv izvođača",
    location: "Lokacija",
    tagline: "Slogan",
    yearsActive: "godina aktivnosti",
    tracks: "objavljenih pjesama",
    fans: "obožavatelja",
    aboutArtist: "O meni",
    artistDescription: "Opis izvođača",
    musicPortfolio: "Glazbeni portfolio",
    trackTitle: "Naziv pjesme",
    audioFile: "Audio datoteka",
    soundcloudLink: "SoundCloud link",
    spotifyLink: "Spotify link",
    videoContent: "Video sadržaj",
    videoTitle: "Naziv videa",
    videoUrl: "YouTube/Vimeo URL",
    events: "Nastupi",
    eventTitle: "Naziv događaja",
    eventDate: "Datum",
    eventLocation: "Lokacija događaja",
    testimonials: "Preporuke",
    testimonial: "Preporuka",
    fanName: "Ime obožavatelja",
    reviewText: "Tekst recenzije",
    contactUs: "Kontaktiraj me",
    contactInfo: "Kontakt informacije",
    firstName: "Ime",
    lastName: "Prezime",
    phone: "Telefon",
    email: "Email",
    website: "Web stranica",
    description: "Opis",
    phoneNumber: "Broj telefona",
    emailAddress: "Email adresa",
    footerText: "Glazba koja inspirira i pokreće",
    buyWebsite: "Kupi web stranicu",
    buyWebsiteTitle: "Kupi web stranicu",
    purchaseDetails: "Kupi ovaj predložak za samo €49.99 (90% popust) i prilagodi ga svojoj glazbenoj karijeri.",
    purchase: "Kupi",
    companyOptional: "Bend/Label (opcionalno)",
    discountBadge: "(90% POPUST!)",
    playTrack: "Reproduciraj",
    pauseTrack: "Pauziraj",
    listenOn: "Slušaj na",
    watchVideo: "Pogledaj video",
    upcomingShows: "Nadolazeći nastupi",
    pastShows: "Prošli nastupi"
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
    artistName: "Artist name",
    location: "Location",
    tagline: "Tagline",
    yearsActive: "years active",
    tracks: "released tracks",
    fans: "fans",
    aboutArtist: "About me",
    artistDescription: "Artist description",
    musicPortfolio: "Music portfolio",
    trackTitle: "Track title",
    audioFile: "Audio file",
    soundcloudLink: "SoundCloud link",
    spotifyLink: "Spotify link",
    videoContent: "Video content",
    videoTitle: "Video title",
    videoUrl: "YouTube/Vimeo URL",
    events: "Events",
    eventTitle: "Event title",
    eventDate: "Date",
    eventLocation: "Event location",
    testimonials: "Testimonials",
    testimonial: "Testimonial",
    fanName: "Fan name",
    reviewText: "Review text",
    contactUs: "Contact me",
    contactInfo: "Contact information",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    email: "Email",
    website: "Website",
    description: "Description",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    footerText: "Music that inspires and moves",
    buyWebsite: "Buy website",
    buyWebsiteTitle: "Buy website",
    purchaseDetails: "Buy this template for only €49.99 (90% OFF) and customize it for your music career.",
    purchase: "Purchase",
    companyOptional: "Band/Label (optional)",
    discountBadge: "(90% OFF!)",
    playTrack: "Play",
    pauseTrack: "Pause",
    listenOn: "Listen on",
    watchVideo: "Watch video",
    upcomingShows: "Upcoming shows",
    pastShows: "Past shows"
  },
  es: {
    editMode: "Editar",
    previewMode: "Vista previa",
    backToTemplates: "Volver a plantillas",
    changeBackground: "Cambiar fondo",
    uploadFromComputer: "Subir desde computadora",
    browseFiles: "Explorar archivos",
    or: "O",
    pasteImageUrl: "Pegar URL de imagen",
    useUrl: "Usar URL",
    cancel: "Cancelar",
    artistName: "Nombre del artista",
    location: "Ubicación",
    tagline: "Eslogan",
    yearsActive: "años activo",
    tracks: "pistas lanzadas",
    fans: "fanáticos",
    aboutArtist: "Sobre mí",
    artistDescription: "Descripción del artista",
    musicPortfolio: "Portafolio musical",
    trackTitle: "Título de la pista",
    audioFile: "Archivo de audio",
    soundcloudLink: "Enlace de SoundCloud",
    spotifyLink: "Enlace de Spotify",
    videoContent: "Contenido de video",
    videoTitle: "Título del video",
    videoUrl: "URL de YouTube/Vimeo",
    events: "Eventos",
    eventTitle: "Título del evento",
    eventDate: "Fecha",
    eventLocation: "Ubicación del evento",
    testimonials: "Testimonios",
    testimonial: "Testimonio",
    fanName: "Nombre del fan",
    reviewText: "Texto de reseña",
    contactUs: "Contáctame",
    contactInfo: "Información de contacto",
    firstName: "Nombre",
    lastName: "Apellido",
    phone: "Teléfono",
    email: "Email",
    website: "Sitio web",
    description: "Descripción",
    phoneNumber: "Número de teléfono",
    emailAddress: "Dirección de email",
    footerText: "Música que inspira y mueve",
    buyWebsite: "Comprar sitio web",
    buyWebsiteTitle: "Comprar sitio web",
    purchaseDetails: "Compra esta plantilla por solo €49.99 (90% DESCUENTO) y personalízala para tu carrera musical.",
    purchase: "Comprar",
    companyOptional: "Banda/Sello (opcional)",
    discountBadge: "(90% DESCUENTO!)",
    playTrack: "Reproducir",
    pauseTrack: "Pausar",
    listenOn: "Escuchar en",
    watchVideo: "Ver video",
    upcomingShows: "Próximos shows",
    pastShows: "Shows pasados"
  }
};

export default function MusicianSite() {
  const [currentLang, setCurrentLang] = useState<'hr' | 'en' | 'es'>('hr');
  const [editMode, setEditMode] = useState(false);
  const [backgroundDialog, setBackgroundDialog] = useState(false);
  const [purchaseDialog, setPurchaseDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();
  const t = translations[currentLang];

  // Editable content state
  const [content, setContent] = useState({
    artistName: "DJ Phoenix",
    tagline: "Electronic beats that move your soul",
    location: "Zagreb, Croatia",
    about: "DJ and producer with over 8 years of experience creating unforgettable electronic music experiences. Specializing in house, techno, and progressive electronic music.",
    stats: {
      yearsActive: "8",
      tracks: "45",
      fans: "12K"
    },
    tracks: [
      {
        title: "Midnight Drive",
        audioUrl: "https://example.com/track1.mp3",
        soundcloudUrl: "https://soundcloud.com/djphoenix/midnight-drive",
        spotifyUrl: "https://open.spotify.com/track/example1"
      },
      {
        title: "Neon Lights",
        audioUrl: "https://example.com/track2.mp3",
        soundcloudUrl: "https://soundcloud.com/djphoenix/neon-lights",
        spotifyUrl: "https://open.spotify.com/track/example2"
      },
      {
        title: "Electric Dreams",
        audioUrl: "https://example.com/track3.mp3",
        soundcloudUrl: "https://soundcloud.com/djphoenix/electric-dreams",
        spotifyUrl: "https://open.spotify.com/track/example3"
      }
    ],
    videos: [
      {
        title: "Live at Club Escape",
        videoUrl: "https://youtube.com/watch?v=example1",
        thumbnailUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
      },
      {
        title: "Studio Session - Midnight Drive",
        videoUrl: "https://youtube.com/watch?v=example2",
        thumbnailUrl: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg"
      }
    ],
    events: [
      {
        title: "Electronic Summer Festival",
        date: "2024-07-15",
        location: "Pula Arena, Croatia",
        isUpcoming: true
      },
      {
        title: "Club Escape Residency",
        date: "2024-08-20",
        location: "Club Escape, Zagreb",
        isUpcoming: true
      },
      {
        title: "Warehouse Rave",
        date: "2024-03-10",
        location: "Industrial Zone, Split",
        isUpcoming: false
      }
    ],
    testimonials: [
      {
        name: "Marina K.",
        text: "DJ Phoenix knows how to read the crowd perfectly. Every set is a journey!"
      },
      {
        name: "Tomislav M.",
        text: "Incredible energy and amazing track selection. Always delivers!"
      },
      {
        name: "Ana L.",
        text: "The best electronic music experience I've ever had. Pure magic!"
      }
    ],
    contact: {
      phone: "+385 98 123 4567",
      email: "djphoenix@example.com",
      website: "www.djphoenix.com"
    }
  });

  const togglePlay = (trackId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };

  const updateContent = (field: string, value: any) => {
    setContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const backgroundImage = "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg";

  return (
    <div className="min-h-screen" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Top Controls */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <Button
          variant="outline"
          className="bg-white/90 backdrop-blur-sm"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToTemplates}
        </Button>

        <div className="flex gap-2">
          {/* Language Controls */}
          <div className="flex bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-1">
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
            <Button
              onClick={() => setCurrentLang('es')}
              variant={currentLang === 'es' ? "default" : "ghost"}
              size="sm"
              className="text-lg px-2"
            >
              🇪🇸
            </Button>
          </div>

          <Button
            variant="outline"
            className="bg-white/90 backdrop-blur-sm"
            onClick={() => setEditMode(!editMode)}
          >
            <Edit2 className="w-4 h-4 mr-2" />
            {editMode ? t.previewMode : t.editMode}
          </Button>

          <Dialog open={backgroundDialog} onOpenChange={setBackgroundDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
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
                  <Label>{t.pasteImageUrl}</Label>
                  <div className="flex gap-2">
                    <Input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                    <Button onClick={() => {
                      if (imageUrl) {
                        setBackgroundDialog(false);
                        setImageUrl("");
                      }
                    }}>
                      {t.useUrl}
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={purchaseDialog} onOpenChange={setPurchaseDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white" data-testid="purchase-button">
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t.buyWebsite} <span className="text-xs ml-1">{t.discountBadge}</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.buyWebsiteTitle}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {t.purchaseDetails}
                </p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName">{t.firstName}</Label>
                      <Input id="firstName" placeholder={t.firstName} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t.lastName}</Label>
                      <Input id="lastName" placeholder={t.lastName} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">{t.emailAddress}</Label>
                    <Input id="email" type="email" placeholder={t.emailAddress} />
                  </div>
                  <div>
                    <Label htmlFor="company">{t.companyOptional}</Label>
                    <Input id="company" placeholder={t.companyOptional} />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  {t.purchase} €49.99
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="mb-6">
            <Music className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          </div>
          
          {editMode ? (
            <div className="space-y-4">
              <Input
                value={content.artistName}
                onChange={(e) => updateContent('artistName', e.target.value)}
                className="text-4xl md:text-6xl font-bold bg-white/10 backdrop-blur-sm border-white/20 text-white text-center"
                placeholder={t.artistName}
              />
              <Input
                value={content.tagline}
                onChange={(e) => updateContent('tagline', e.target.value)}
                className="text-xl bg-white/10 backdrop-blur-sm border-white/20 text-white text-center"
                placeholder={t.tagline}
              />
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <Input
                  value={content.location}
                  onChange={(e) => updateContent('location', e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center max-w-sm"
                  placeholder={t.location}
                />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {content.artistName}
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                {content.tagline}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{content.location}</span>
              </div>
            </>
          )}

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              {editMode ? (
                <Input
                  value={content.stats.yearsActive}
                  onChange={(e) => updateContent('stats', {...content.stats, yearsActive: e.target.value})}
                  className="text-3xl font-bold text-purple-400 bg-white/10 backdrop-blur-sm border-white/20 text-center w-20"
                />
              ) : (
                <div className="text-3xl font-bold text-purple-400">{content.stats.yearsActive}</div>
              )}
              <div className="text-gray-400">{t.yearsActive}</div>
            </div>
            <div className="text-center">
              {editMode ? (
                <Input
                  value={content.stats.tracks}
                  onChange={(e) => updateContent('stats', {...content.stats, tracks: e.target.value})}
                  className="text-3xl font-bold text-pink-400 bg-white/10 backdrop-blur-sm border-white/20 text-center w-20"
                />
              ) : (
                <div className="text-3xl font-bold text-pink-400">{content.stats.tracks}</div>
              )}
              <div className="text-gray-400">{t.tracks}</div>
            </div>
            <div className="text-center">
              {editMode ? (
                <Input
                  value={content.stats.fans}
                  onChange={(e) => updateContent('stats', {...content.stats, fans: e.target.value})}
                  className="text-3xl font-bold text-blue-400 bg-white/10 backdrop-blur-sm border-white/20 text-center w-20"
                />
              ) : (
                <div className="text-3xl font-bold text-blue-400">{content.stats.fans}</div>
              )}
              <div className="text-gray-400">{t.fans}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">{t.aboutArtist}</h2>
            {editMode ? (
              <Textarea
                value={content.about}
                onChange={(e) => updateContent('about', e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white min-h-32"
                placeholder={t.artistDescription}
              />
            ) : (
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                {content.about}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Music Portfolio Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.musicPortfolio}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.tracks.map((track, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-purple-400" />
                    {editMode ? (
                      <Input
                        value={track.title}
                        onChange={(e) => {
                          const newTracks = [...content.tracks];
                          newTracks[index].title = e.target.value;
                          updateContent('tracks', newTracks);
                        }}
                        className="bg-white/10 border-white/20 text-white"
                        placeholder={t.trackTitle}
                      />
                    ) : (
                      track.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {editMode ? (
                    <div className="space-y-2">
                      <Input
                        value={track.audioUrl}
                        onChange={(e) => {
                          const newTracks = [...content.tracks];
                          newTracks[index].audioUrl = e.target.value;
                          updateContent('tracks', newTracks);
                        }}
                        placeholder={t.audioFile + " URL"}
                        className="bg-white/10 border-white/20 text-white text-sm"
                      />
                      <Input
                        value={track.soundcloudUrl}
                        onChange={(e) => {
                          const newTracks = [...content.tracks];
                          newTracks[index].soundcloudUrl = e.target.value;
                          updateContent('tracks', newTracks);
                        }}
                        placeholder={t.soundcloudLink}
                        className="bg-white/10 border-white/20 text-white text-sm"
                      />
                      <Input
                        value={track.spotifyUrl}
                        onChange={(e) => {
                          const newTracks = [...content.tracks];
                          newTracks[index].spotifyUrl = e.target.value;
                          updateContent('tracks', newTracks);
                        }}
                        placeholder={t.spotifyLink}
                        className="bg-white/10 border-white/20 text-white text-sm"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Audio Player Placeholder */}
                      <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-purple-400 hover:text-purple-300"
                          onClick={() => togglePlay(track.title)}
                        >
                          {isPlaying[track.title] ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </Button>
                        <div className="flex-1 bg-white/20 rounded-full h-2">
                          <div className="bg-purple-400 h-2 rounded-full w-1/3"></div>
                        </div>
                        <span className="text-xs text-gray-400">3:24</span>
                      </div>

                      {/* External Links */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1">
                          <Volume2 className="w-4 h-4 mr-1" />
                          SoundCloud
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1">
                          <Music2 className="w-4 h-4 mr-1" />
                          Spotify
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.videoContent}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.videos.map((video, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30">
                      <Video className="w-6 h-6 mr-2" />
                      {t.watchVideo}
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    {editMode ? (
                      <Input
                        value={video.title}
                        onChange={(e) => {
                          const newVideos = [...content.videos];
                          newVideos[index].title = e.target.value;
                          updateContent('videos', newVideos);
                        }}
                        className="bg-white/10 border-white/20 text-white"
                        placeholder={t.videoTitle}
                      />
                    ) : (
                      video.title
                    )}
                  </CardTitle>
                  {editMode && (
                    <Input
                      value={video.videoUrl}
                      onChange={(e) => {
                        const newVideos = [...content.videos];
                        newVideos[index].videoUrl = e.target.value;
                        updateContent('videos', newVideos);
                      }}
                      placeholder={t.videoUrl}
                      className="bg-white/10 border-white/20 text-white text-sm"
                    />
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.events}</h2>
          
          {/* Upcoming Shows */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">{t.upcomingShows}</h3>
            <div className="space-y-4">
              {content.events.filter(event => event.isUpcoming).map((event, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-sm border-white/10">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-8 h-8 text-purple-400" />
                      <div>
                        {editMode ? (
                          <div className="space-y-2">
                            <Input
                              value={event.title}
                              onChange={(e) => {
                                const newEvents = [...content.events];
                                const eventIndex = content.events.findIndex(e => e === event);
                                newEvents[eventIndex].title = e.target.value;
                                updateContent('events', newEvents);
                              }}
                              className="bg-white/10 border-white/20 text-white"
                              placeholder={t.eventTitle}
                            />
                            <div className="flex gap-2">
                              <Input
                                type="date"
                                value={event.date}
                                onChange={(e) => {
                                  const newEvents = [...content.events];
                                  const eventIndex = content.events.findIndex(e => e === event);
                                  newEvents[eventIndex].date = e.target.value;
                                  updateContent('events', newEvents);
                                }}
                                className="bg-white/10 border-white/20 text-white"
                              />
                              <Input
                                value={event.location}
                                onChange={(e) => {
                                  const newEvents = [...content.events];
                                  const eventIndex = content.events.findIndex(e => e === event);
                                  newEvents[eventIndex].location = e.target.value;
                                  updateContent('events', newEvents);
                                }}
                                className="bg-white/10 border-white/20 text-white"
                                placeholder={t.eventLocation}
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                            <p className="text-gray-400">{event.date} • {event.location}</p>
                          </>
                        )}
                      </div>
                    </div>
                    {!editMode && (
                      <Badge variant="outline" className="border-purple-400 text-purple-400">
                        {t.upcomingShows}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Shows */}
          <div>
            <h3 className="text-2xl font-bold text-gray-400 mb-6">{t.pastShows}</h3>
            <div className="space-y-4">
              {content.events.filter(event => !event.isUpcoming).map((event, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-sm border-white/10 opacity-75">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-8 h-8 text-gray-500" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300">{event.title}</h4>
                        <p className="text-gray-500">{event.date} • {event.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.testimonials}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {editMode ? (
                    <div className="space-y-2">
                      <Textarea
                        value={testimonial.text}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials];
                          newTestimonials[index].text = e.target.value;
                          updateContent('testimonials', newTestimonials);
                        }}
                        className="bg-white/10 border-white/20 text-white"
                        placeholder={t.reviewText}
                      />
                      <Input
                        value={testimonial.name}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials];
                          newTestimonials[index].name = e.target.value;
                          updateContent('testimonials', newTestimonials);
                        }}
                        className="bg-white/10 border-white/20 text-white"
                        placeholder={t.fanName}
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                      <p className="text-purple-400 font-semibold">- {testimonial.name}</p>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.contactUs}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  {editMode ? (
                    <Input
                      value={content.contact.phone}
                      onChange={(e) => updateContent('contact', {...content.contact, phone: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder={t.phoneNumber}
                    />
                  ) : (
                    <span className="text-gray-300">{content.contact.phone}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  {editMode ? (
                    <Input
                      value={content.contact.email}
                      onChange={(e) => updateContent('contact', {...content.contact, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder={t.emailAddress}
                    />
                  ) : (
                    <span className="text-gray-300">{content.contact.email}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  {editMode ? (
                    <Input
                      value={content.contact.website}
                      onChange={(e) => updateContent('contact', {...content.contact, website: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder={t.website}
                    />
                  ) : (
                    <span className="text-gray-300">{content.contact.website}</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{t.contactUs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder={t.firstName} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  <Input placeholder={t.lastName} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                </div>
                <Input placeholder={t.emailAddress} type="email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                <Textarea placeholder={t.description} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32" />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  {t.contactUs}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 {content.artistName}. {t.footerText}
          </p>
        </div>
      </footer>
    </div>
  );
}
