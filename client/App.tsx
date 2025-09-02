import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VacationHouse from "./pages/VacationHouse";
import HairstylistSite from "./pages/HairstylistSite";
import RestaurantSite from "./pages/RestaurantSite";
import LawyersSite from "./pages/LawyersSite";
import FarmSite from "./pages/FarmSite";
import EmploymentAgencySite from "./pages/EmploymentAgencySite";
import NewsPortalSite from "./pages/NewsPortalSite";
import ElectricianSite from "./pages/ElectricianSite";
import MusicianSite from "./pages/MusicianSite";
import DentalClinicSite from "./pages/DentalClinicSite";
import AutoRepairShopSite from "./pages/AutoRepairShopSite";
import PlumberSite from "./pages/PlumberSite";
import RealEstateSite from "./pages/RealEstateSite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vacation-house" element={<VacationHouse />} />
          <Route path="/hairstylist-site" element={<HairstylistSite />} />
          <Route path="/restaurant-site" element={<RestaurantSite />} />
          <Route path="/lawyers-site" element={<LawyersSite />} />
          <Route path="/farm-site" element={<FarmSite />} />
          <Route path="/employment-agency-site" element={<EmploymentAgencySite />} />
          <Route path="/news-portal-site" element={<NewsPortalSite />} />
          <Route path="/electrician-site" element={<ElectricianSite />} />
          <Route path="/musician-site" element={<MusicianSite />} />
          <Route path="/dental-clinic-site" element={<DentalClinicSite />} />
          <Route path="/auto-repair-shop-site" element={<AutoRepairShopSite />} />
          <Route path="/plumber-site" element={<PlumberSite />} />
          <Route path="/real-estate-site" element={<RealEstateSite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
