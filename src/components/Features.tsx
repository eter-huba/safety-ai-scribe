
import React from 'react';
import { FileCheck, Shield, Clock, Brain, RefreshCw, FileText } from "lucide-react";

const features = [
  {
    icon: <FileCheck className="h-6 w-6 text-safety-blue" />,
    title: "Dokumentace v souladu s předpisy",
    description: "Všechny dokumenty jsou generovány v souladu s nejnovějšími předpisy a zákony o bezpečnosti práce."
  },
  {
    icon: <Shield className="h-6 w-6 text-safety-blue" />,
    title: "Hodnocení rizik",
    description: "Hodnocení rizik s podporou AI přizpůsobené vašemu konkrétnímu odvětví a podmínkám na pracovišti."
  },
  {
    icon: <Clock className="h-6 w-6 text-safety-blue" />,
    title: "Úspora času",
    description: "Vytvořte komplexní bezpečnostní dokumentaci během minut namísto dnů nebo týdnů."
  },
  {
    icon: <Brain className="h-6 w-6 text-safety-blue" />,
    title: "Přizpůsobení pomocí AI",
    description: "Naše AI se přizpůsobuje vašim specifickým potřebám a vytváří personalizované bezpečnostní protokoly."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-safety-blue" />,
    title: "Pravidelné aktualizace",
    description: "Zůstaňte aktuální díky automatickým aktualizacím při změnách bezpečnostních předpisů a zákonů."
  },
  {
    icon: <FileText className="h-6 w-6 text-safety-blue" />,
    title: "Různé formáty",
    description: "Exportujte svou dokumentaci v různých formátech včetně PDF, Word a HTML."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-safety-dark mb-4">Funkce, které udrží vaše pracoviště bezpečné</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Naše platforma s podporou umělé inteligence poskytuje vše, co potřebujete k udržení bezpečného pracoviště a dodržování předpisů.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-safety-blue/10 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-safety-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
