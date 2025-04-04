
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, AlertTriangle, FileText } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-safety-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-safety-blue/10 text-safety-blue text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              <span>AI-Powered Workplace Safety</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-safety-dark leading-tight">
              Ensure workplace compliance with <span className="text-safety-blue">AI-generated</span> safety documentation
            </h1>
            
            <p className="text-lg text-gray-600">
              Generate comprehensive safety documentation that's tailored to your industry and compliant with the latest regulations. Save time, reduce risk, and keep your workplace safe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-safety-blue hover:bg-opacity-90 text-white px-8 py-6 text-lg">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-safety-blue text-safety-blue hover:bg-safety-blue hover:text-white px-8 py-6 text-lg">
                View Packages
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="text-safety-teal w-5 h-5 mr-2" />
                <span>Industry-specific templates</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="text-safety-teal w-5 h-5 mr-2" />
                <span>Updated with latest laws</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="text-safety-teal w-5 h-5 mr-2" />
                <span>AI-powered customization</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-safety-orange w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold text-safety-dark">Sample Safety Protocol</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 font-medium">Construction Site - Fall Prevention</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FileText className="text-safety-blue w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">OSHA Compliant Fall Protection Procedures</p>
                  </div>
                  <div className="flex items-center">
                    <FileText className="text-safety-blue w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Risk Assessment Documentation</p>
                  </div>
                  <div className="flex items-center">
                    <FileText className="text-safety-blue w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Worker Training Requirements</p>
                  </div>
                  <div className="flex items-center">
                    <FileText className="text-safety-blue w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Equipment Inspection Guidelines</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-safety-teal hover:bg-opacity-90">
                    Generate Documentation
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 bottom-4 right-4 w-full h-full bg-safety-blue/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
