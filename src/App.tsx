import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import CorporateSecurity from "./pages/CorporateSecurity";
import ResidentialSecurity from "./pages/ResidentialSecurity";
import EventSecurity from "./pages/EventSecurity";
import IndustrialSecurity from "./pages/IndustrialSecurity";
import SkilledManpower from "./pages/SkilledManpower";
import UnskilledLabour from "./pages/UnskilledLabour";
import FacilityManagement from "./pages/FacilityManagement";
import BusinessConsultancy from "./pages/BusinessConsultancy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/corporate-security-services" element={<CorporateSecurity />} />
          <Route path="/residential-security-services" element={<ResidentialSecurity />} />
          <Route path="/event-security-services" element={<EventSecurity />} />
          <Route path="/industrial-security-services" element={<IndustrialSecurity />} />
          <Route path="/skilled-manpower-supply" element={<SkilledManpower />} />
          <Route path="/unskilled-labour-supply" element={<UnskilledLabour />} />
          <Route path="/facility-management-staff" element={<FacilityManagement />} />
          <Route path="/business-consultancy" element={<BusinessConsultancy />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
