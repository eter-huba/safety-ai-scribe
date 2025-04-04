
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, X, AlertTriangle, Shield, User, Building, FileText } from "lucide-react";

const packages = [
  {
    icon: <User className="h-10 w-10 text-safety-blue" />,
    name: "Basic",
    price: "$49",
    period: "per month",
    description: "Essential safety documentation for small businesses",
    features: [
      "Up to 5 different document types",
      "Monthly regulation updates",
      "Basic risk assessment",
      "Email support",
      "PDF exports"
    ],
    notIncluded: [
      "Custom industry templates",
      "Advanced AI customization",
      "Compliance monitoring"
    ],
    color: "bg-white",
    highlight: false
  },
  {
    icon: <Building className="h-10 w-10 text-white" />,
    name: "Professional",
    price: "$149",
    period: "per month",
    description: "Comprehensive safety management for growing companies",
    features: [
      "Up to 20 different document types",
      "Weekly regulation updates",
      "Advanced risk assessment",
      "Industry-specific templates",
      "Priority email & chat support",
      "Multiple export formats",
      "Basic compliance monitoring"
    ],
    notIncluded: [
      "Custom API integration",
      "Dedicated account manager"
    ],
    color: "bg-safety-blue",
    highlight: true
  },
  {
    icon: <Shield className="h-10 w-10 text-safety-teal" />,
    name: "Enterprise",
    price: "$399",
    period: "per month",
    description: "Complete safety compliance solution for large organizations",
    features: [
      "Unlimited document types",
      "Real-time regulation updates",
      "Enterprise-grade risk assessment",
      "Custom API integration",
      "Dedicated account manager",
      "24/7 priority support",
      "Advanced compliance monitoring",
      "Custom branding options",
      "Multi-location support"
    ],
    notIncluded: [],
    color: "bg-white",
    highlight: false
  }
];

const PackageCard: React.FC<{
  pack: typeof packages[0];
}> = ({ pack }) => {
  const textColor = pack.highlight ? "text-white" : "text-safety-dark";
  const subTextColor = pack.highlight ? "text-white/80" : "text-gray-600";
  const buttonVariant = pack.highlight ? "secondary" : "default";
  const buttonClass = pack.highlight 
    ? "bg-white text-safety-blue hover:bg-white/90" 
    : "bg-safety-blue text-white hover:bg-safety-blue/90";
  
  return (
    <div className={`${pack.color} rounded-xl shadow-lg overflow-hidden border ${pack.highlight ? 'border-safety-blue' : 'border-gray-200'}`}>
      {pack.highlight && (
        <div className="bg-safety-orange text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <div className={`inline-block p-3 rounded-lg ${pack.highlight ? 'bg-safety-blue/30' : 'bg-safety-blue/10'} mb-4`}>
          {pack.icon}
        </div>
        
        <h3 className={`text-2xl font-bold mb-1 ${textColor}`}>{pack.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className={`text-3xl font-bold ${textColor}`}>{pack.price}</span>
          <span className={`ml-1 ${subTextColor}`}>{pack.period}</span>
        </div>
        
        <p className={`mb-6 ${subTextColor}`}>{pack.description}</p>
        
        <Button className={`w-full mb-6 ${buttonClass}`}>
          Choose Plan
        </Button>
        
        <div className="space-y-3">
          <p className={`font-medium ${textColor}`}>Includes:</p>
          {pack.features.map((feature, idx) => (
            <div key={idx} className="flex">
              <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${pack.highlight ? 'text-white' : 'text-safety-teal'}`} />
              <span className={subTextColor}>{feature}</span>
            </div>
          ))}
          
          {pack.notIncluded.length > 0 && (
            <>
              <p className={`font-medium mt-4 ${textColor}`}>Not included:</p>
              {pack.notIncluded.map((feature, idx) => (
                <div key={idx} className="flex">
                  <X className={`h-5 w-5 mr-3 flex-shrink-0 ${pack.highlight ? 'text-white/70' : 'text-gray-400'}`} />
                  <span className={pack.highlight ? 'text-white/70' : 'text-gray-400'}>{feature}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  return (
    <section className="py-16 bg-safety-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-safety-dark mb-4">Choose the Right Safety Package</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a plan that fits your organization's size and safety compliance needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pack, index) => (
            <PackageCard key={index} pack={pack} />
          ))}
        </div>
        
        <div className="mt-12 bg-white border border-safety-orange/30 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-start">
            <AlertTriangle className="text-safety-orange h-6 w-6 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-safety-dark mb-2">Need a custom solution?</h4>
              <p className="text-gray-600 mb-4">
                We offer tailored safety compliance packages for industries with specific regulatory requirements. 
                Contact us to discuss your unique needs.
              </p>
              <Button variant="outline" className="border-safety-orange text-safety-orange hover:bg-safety-orange hover:text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
