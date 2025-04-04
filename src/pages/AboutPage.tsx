
import React from 'react';
import NavBar from "@/components/NavBar";
import { Building2, BookOpen, Users, Orbit, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="bg-safety-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">O ScheidlAI</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Naším posláním je zvýšit bezpečnost pracovišť prostřednictvím dostupné bezpečnostní dokumentace s podporou umělé inteligence.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-safety-dark mb-4">Náš příběh</h2>
              <p className="text-gray-600 mb-4">
                ScheidlAI byl založen v roce 2023 týmem odborníků na bezpečnost práce a specialistů na umělou inteligenci, kteří rozpoznali zásadní problém: mnoho podniků má potíže s udržením kroku s neustále se měnícími bezpečnostními předpisy.
              </p>
              <p className="text-gray-600 mb-4">
                Rozhodli jsme se vytvořit řešení, které by zpřístupnilo profesionální bezpečnostní dokumentaci podnikům všech velikostí, nejen těm s vlastními bezpečnostními odděleními.
              </p>
              <p className="text-gray-600">
                Dnes naše platforma založená na umělé inteligenci pomáhá stovkám společností napříč různými odvětvími udržovat bezpečnější pracoviště a dodržovat nejnovější předpisy.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-safety-gray p-6 rounded-lg">
                <Building2 className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Naše mise</h3>
                <p className="text-gray-600">Zpřístupnit bezpečnost práce všem podnikům prostřednictvím řešení s umělou inteligencí.</p>
              </div>
              
              <div className="bg-safety-gray p-6 rounded-lg">
                <BookOpen className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Naše zkušenosti</h3>
                <p className="text-gray-600">Celkem více než 50 let zkušeností s předpisy bezpečnosti práce.</p>
              </div>
              
              <div className="bg-safety-gray p-6 rounded-lg">
                <Users className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Náš tým</h3>
                <p className="text-gray-600">Bezpečnostní odborníci, experti na AI a specialisté na právní předpisy.</p>
              </div>
              
              <div className="bg-safety-gray p-6 rounded-lg">
                <Orbit className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Naše technologie</h3>
                <p className="text-gray-600">Pokročilé modely AI vyškolené na nejnovějších bezpečnostních předpisech a osvědčených postupech.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-safety-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-safety-dark mb-8 text-center">Proč zvolit ScheidlAI?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-safety-blue/10 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-safety-blue" />
                </div>
                <h3 className="font-semibold text-lg text-safety-dark">Znalost předpisů</h3>
              </div>
              <p className="text-gray-600">
                Náš systém je pravidelně aktualizován o nejnovější předpisy bezpečnosti práce a pokyny specifické pro dané odvětví.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-safety-blue/10 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-safety-blue" />
                </div>
                <h3 className="font-semibold text-lg text-safety-dark">Inovace v AI</h3>
              </div>
              <p className="text-gray-600">
                Využíváme nejnovější technologie umělé inteligence k poskytování přizpůsobené bezpečnostní dokumentace, která splňuje vaše specifické potřeby.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-safety-blue/10 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-safety-blue" />
                </div>
                <h3 className="font-semibold text-lg text-safety-dark">Podpora zákazníků</h3>
              </div>
              <p className="text-gray-600">
                Náš specializovaný tým podpory zahrnuje bezpečnostní odborníky, kteří rozumí jedinečným výzvám vašeho odvětví.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-safety-dark mb-8">Seznamte se s naším vedením</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="aspect-square bg-safety-gray rounded-full mb-4 mx-auto w-48"></div>
              <h3 className="font-semibold text-lg text-safety-dark">Sarah Johnson</h3>
              <p className="text-gray-600">CEO & spoluzakladatelka</p>
            </div>
            
            <div>
              <div className="aspect-square bg-safety-gray rounded-full mb-4 mx-auto w-48"></div>
              <h3 className="font-semibold text-lg text-safety-dark">Michael Chen</h3>
              <p className="text-gray-600">CTO & spoluzakladatel</p>
            </div>
            
            <div>
              <div className="aspect-square bg-safety-gray rounded-full mb-4 mx-auto w-48"></div>
              <h3 className="font-semibold text-lg text-safety-dark">Amara Williams</h3>
              <p className="text-gray-600">Vedoucí bezpečnosti</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-safety-dark text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2025 ScheidlAI. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
