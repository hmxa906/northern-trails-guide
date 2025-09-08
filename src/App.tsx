// src/App.tsx
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackendTest from "./pages/components/BackendTest";

// pages
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import TravelGuides from "./pages/TravelGuides";
import EstimatedCosts from "./pages/EstimatedCosts";
import About from "./pages/About";
import LoginPage from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPage from "./pages/auth/reset-page";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  // ✅ useEffect inside the component
  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => console.log("Backend response:", data))
      .catch(err => console.error("Error connecting to backend:", err));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* public */}
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/travel-guides" element={<TravelGuides />} />
            <Route path="/estimated-costs" element={<EstimatedCosts />} />
            <Route path="/about" element={<About />} />
            <Route path="/BackendTest" element={<BackendTest />} />

            {/* auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPage />} />

            {/* fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
