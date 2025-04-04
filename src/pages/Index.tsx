
import React from 'react';
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, FileCheck, BarChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <Hero />
      
      <Features />
      
      <Packages />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-safety-dark mb-4">Důvěřují nám bezpečnostní profesionálové</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Připojte se ke stovkám společností, které používají naši AI pro udržení svých pracovišť bezpečných a v souladu s předpisy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-safety-gray p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold text-safety-dark mb-2">98%</h3>
              <p className="text-gray-600">Míra souladu s předpisy pro společnosti používající naši platformu</p>
            </div>
            
            <div className="bg-safety-gray p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FileCheck className="h-12 w-12 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold text-safety-dark mb-2">10,000+</h3>
              <p className="text-gray-600">Bezpečnostních dokumentů vygenerovaných měsíčně</p>
            </div>
            
            <div className="bg-safety-gray p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <BarChart className="h-12 w-12 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold text-safety-dark mb-2">75%</h3>
              <p className="text-gray-600">Snížení času na zpracování bezpečnostní dokumentace</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-safety-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Připraveni změnit bezpečnost vašeho pracoviště?</h2>
            <p className="text-white/80 text-lg mb-8">
              Začněte ještě dnes vytvářet profesionální bezpečnostní dokumentaci v souladu s předpisy pomocí naší platformy založené na umělé inteligenci.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-safety-blue hover:bg-white/90 px-8 py-6 text-lg">
                Začněte zdarma
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                Naplánujte si demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-safety-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ScheidlAI</h3>
              <p className="text-white/70">
                Dokumentace a soulad s bezpečností práce s podporou umělé inteligence.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rychlé odkazy</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Domů</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Balíčky</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Generátor</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">O nás</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Zdroje</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Bezpečnostní pokyny</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Aktualizace předpisů</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Centrum nápovědy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontaktujte nás</h4>
              <ul className="space-y-2">
                <li className="text-white/70">kontakt@safetyai.com</li>
                <li className="text-white/70">1-800-SAFETY-AI</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2025 ScheidlAI. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
