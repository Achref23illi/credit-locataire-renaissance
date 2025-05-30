import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Request from "./pages/Request";
import CreditRequest from "./pages/CreditRequest";
import JudiciairesRequest from "./pages/JudiciairesRequest";
import RegieRequest from "./pages/RegieRequest";
import NotFound from "./pages/NotFound";
import ConsentForm from "./pages/ConsentForm";
import PaymentForm from "./pages/PaymentForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demande" element={<Request />} />
          <Route path="/demande/credit" element={<CreditRequest />} />
          <Route path="/demande/judiciaires" element={<JudiciairesRequest />} />
          <Route path="/demande/regie" element={<RegieRequest />} />
          <Route path="/consent-form" element={<ConsentForm />} />
          <Route path="/payment-form" element={<PaymentForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
