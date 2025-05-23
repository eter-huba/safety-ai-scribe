
import React from 'react';
import NavBar from "@/components/NavBar";
import Generator from "@/components/Generator";

const GeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="bg-safety-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ScheidlAI Generátor bezpečnostní dokumentace</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Vytvářejte přizpůsobenou bezpečnostní dokumentaci, která vyhovuje nejnovějším předpisům, pomocí ScheidlAI.
          </p>
        </div>
      </div>
      <Generator />
      <footer className="bg-safety-dark text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2025 ScheidlAI. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorPage;
