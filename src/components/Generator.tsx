
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, FileText, Download, Copy, CheckCircle } from "lucide-react";

const Generator: React.FC = () => {
  const [industry, setIndustry] = useState<string>("");
  const [companySize, setCompanySize] = useState<string>("");
  const [specifics, setSpecifics] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [documentGenerated, setDocumentGenerated] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setDocumentGenerated(true);
    }, 3000);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-safety-dark mb-4">Generátor bezpečnostní dokumentace s AI</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vytvořte přizpůsobenou bezpečnostní dokumentaci specifickou pro vaše odvětví a potřeby společnosti. Všechny vygenerované dokumenty jsou v souladu s aktuálními předpisy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-safety-dark mb-4">Parametry dokumentu</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Odvětví
                  </label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte své odvětví" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Stavebnictví</SelectItem>
                      <SelectItem value="manufacturing">Výroba</SelectItem>
                      <SelectItem value="healthcare">Zdravotnictví</SelectItem>
                      <SelectItem value="food">Zpracování potravin</SelectItem>
                      <SelectItem value="warehouse">Sklady a logistika</SelectItem>
                      <SelectItem value="office">Kancelářské prostředí</SelectItem>
                      <SelectItem value="retail">Maloobchod</SelectItem>
                      <SelectItem value="other">Jiné</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Velikost společnosti
                  </label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte velikost společnosti" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Malá (1-49 zaměstnanců)</SelectItem>
                      <SelectItem value="medium">Střední (50-249 zaměstnanců)</SelectItem>
                      <SelectItem value="large">Velká (250+ zaměstnanců)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Typ dokumentu
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte typ dokumentu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="risk-assessment">Hodnocení rizik</SelectItem>
                      <SelectItem value="safety-policy">Bezpečnostní politika</SelectItem>
                      <SelectItem value="training-requirements">Požadavky na školení</SelectItem>
                      <SelectItem value="emergency-procedures">Nouzové postupy</SelectItem>
                      <SelectItem value="inspection-checklist">Kontrolní seznam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specifické požadavky nebo rizika
                  </label>
                  <Textarea 
                    placeholder="Popište jakékoli specifické požadavky, rizika nebo oblasti zájmu..."
                    value={specifics}
                    onChange={(e) => setSpecifics(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <Button 
                  className="w-full bg-safety-blue hover:bg-safety-blue/90 mt-4"
                  onClick={handleGenerate}
                  disabled={isGenerating || !industry || !companySize}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generuji...
                    </>
                  ) : (
                    <>Vygenerovat dokumentaci</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="preview">Náhled dokumentu</TabsTrigger>
                <TabsTrigger value="history">Historie generování</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    {!documentGenerated ? (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                        <FileText className="h-16 w-16 text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-700">Zatím nebyl vygenerován žádný dokument</h3>
                        <p className="text-gray-500 mt-2 max-w-xs">
                          Vyplňte parametry a klikněte na "Vygenerovat dokumentaci" pro vytvoření bezpečnostního dokumentu.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold text-safety-dark">
                            {industry === "construction" ? "Hodnocení rizik ve stavebnictví" : "Bezpečnostní dokument"}
                          </h3>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={handleCopy}>
                              {copied ? (
                                <>
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Zkopírováno
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4 mr-1" />
                                  Kopírovat
                                </>
                              )}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Stáhnout
                            </Button>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-md p-4 h-[350px] overflow-y-auto bg-white text-left">
                          <h4 className="font-bold text-lg mb-2">Hodnocení rizik v souladu s předpisy</h4>
                          <p className="text-sm text-gray-500 mb-4">Vygenerováno 4. dubna 2025 | Na základě nejnovějších bezpečnostních předpisů</p>
                          
                          <h5 className="font-semibold mb-2">1. Identifikace nebezpečí</h5>
                          <p className="mb-3 text-sm">
                            Toto hodnocení rizik identifikuje potenciální nebezpečí ve stavebním prostředí se specifickým zaměřením na ochranu proti pádu, elektrickou bezpečnost a manipulaci s nebezpečnými materiály, jak je uvedeno v požadavcích.
                          </p>
                          
                          <h5 className="font-semibold mb-2">2. Vyhodnocení rizik</h5>
                          <p className="mb-3 text-sm">
                            Na základě velikosti společnosti a specifikací odvětví byly přiřazeny následující úrovně rizika:
                          </p>
                          <ul className="list-disc pl-5 mb-3 text-sm">
                            <li>Nebezpečí pádu: Vysoké riziko</li>
                            <li>Elektrická nebezpečí: Střední riziko</li>
                            <li>Expozice chemikáliím: Středně vysoké riziko</li>
                            <li>Provoz zařízení: Střední riziko</li>
                          </ul>
                          
                          <h5 className="font-semibold mb-2">3. Kontrolní opatření</h5>
                          <p className="mb-3 text-sm">
                            Následující kontrolní opatření musí být zavedena podle normy 1926.500 pro ochranu proti pádu a 1926.400 pro elektrickou bezpečnost:
                          </p>
                          <ul className="list-disc pl-5 mb-3 text-sm">
                            <li>Zábradlí instalované na všech vyvýšených površích nad 1,8 metru</li>
                            <li>Osobní ochranné systémy proti pádu (PFAS) vyžadované pro všechny pracovníky ve výškách</li>
                            <li>Pravidelná kontrola veškerého elektrického vybavení a nářadí</li>
                            <li>Správné uzemnění a ochrana GFCI pro všechny elektrické obvody</li>
                            <li>Skladování nebezpečných materiálů podle požadavků SDS</li>
                          </ul>

                          <p className="text-xs text-gray-400 mt-4">
                            Tento dokument byl vygenerován pomocí AI na základě nejnovějších bezpečnostních předpisů. Doporučuje se kontrola bezpečnostním odborníkem.
                          </p>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="h-[400px] flex flex-col items-center justify-center text-center">
                      <h3 className="text-lg font-medium text-gray-700">Žádná historie generování</h3>
                      <p className="text-gray-500 mt-2 max-w-xs">
                        Historie generování dokumentů se zde zobrazí po vytvoření prvního dokumentu.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
