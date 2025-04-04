
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
          <h1 className="text-3xl font-bold text-safety-dark mb-4">AI Safety Documentation Generator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create customized safety documentation specific to your industry and company needs. All generated documents comply with current regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-safety-dark mb-4">Document Parameters</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industry
                  </label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="food">Food Processing</SelectItem>
                      <SelectItem value="warehouse">Warehouse & Logistics</SelectItem>
                      <SelectItem value="office">Office Environment</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Size
                  </label>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (1-49 employees)</SelectItem>
                      <SelectItem value="medium">Medium (50-249 employees)</SelectItem>
                      <SelectItem value="large">Large (250+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Document Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                      <SelectItem value="safety-policy">Safety Policy</SelectItem>
                      <SelectItem value="training-requirements">Training Requirements</SelectItem>
                      <SelectItem value="emergency-procedures">Emergency Procedures</SelectItem>
                      <SelectItem value="inspection-checklist">Inspection Checklist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specific Requirements or Hazards
                  </label>
                  <Textarea 
                    placeholder="Describe any specific requirements, hazards, or areas of concern..."
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
                      Generating...
                    </>
                  ) : (
                    <>Generate Documentation</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="preview">Document Preview</TabsTrigger>
                <TabsTrigger value="history">Generation History</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    {!documentGenerated ? (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                        <FileText className="h-16 w-16 text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-700">No Document Generated Yet</h3>
                        <p className="text-gray-500 mt-2 max-w-xs">
                          Fill in the parameters and click "Generate Documentation" to create your safety document.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold text-safety-dark">
                            {industry === "construction" ? "Construction Risk Assessment" : "Safety Document"}
                          </h3>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={handleCopy}>
                              {copied ? (
                                <>
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4 mr-1" />
                                  Copy
                                </>
                              )}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-md p-4 h-[350px] overflow-y-auto bg-white text-left">
                          <h4 className="font-bold text-lg mb-2">OSHA-Compliant Risk Assessment</h4>
                          <p className="text-sm text-gray-500 mb-4">Generated on April 4, 2025 | Based on latest OSHA regulations</p>
                          
                          <h5 className="font-semibold mb-2">1. Hazard Identification</h5>
                          <p className="mb-3 text-sm">
                            This risk assessment identifies potential hazards in a construction environment with specific focus on fall protection, electrical safety, and hazardous material handling as specified in the requirements.
                          </p>
                          
                          <h5 className="font-semibold mb-2">2. Risk Evaluation</h5>
                          <p className="mb-3 text-sm">
                            Based on the company size and industry specifications, the following risk levels have been assigned:
                          </p>
                          <ul className="list-disc pl-5 mb-3 text-sm">
                            <li>Fall hazards: High risk</li>
                            <li>Electrical hazards: Medium risk</li>
                            <li>Chemical exposure: Medium-high risk</li>
                            <li>Equipment operation: Medium risk</li>
                          </ul>
                          
                          <h5 className="font-semibold mb-2">3. Control Measures</h5>
                          <p className="mb-3 text-sm">
                            The following control measures must be implemented according to OSHA standard 1926.500 for fall protection and 1926.400 for electrical safety:
                          </p>
                          <ul className="list-disc pl-5 mb-3 text-sm">
                            <li>Guardrail systems installed on all elevated surfaces over 6 feet</li>
                            <li>Personal Fall Arrest Systems (PFAS) required for all workers at heights</li>
                            <li>Regular inspection of all electrical equipment and tools</li>
                            <li>Proper grounding and GFCI protection for all electrical circuits</li>
                            <li>Hazardous material storage according to SDS requirements</li>
                          </ul>

                          <p className="text-xs text-gray-400 mt-4">
                            This document was generated using AI based on the latest OSHA regulations. Review by a safety professional is recommended.
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
                      <h3 className="text-lg font-medium text-gray-700">No Generation History</h3>
                      <p className="text-gray-500 mt-2 max-w-xs">
                        Your document generation history will appear here after you create your first document.
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
