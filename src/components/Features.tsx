
import React from 'react';
import { FileCheck, Shield, Clock, Brain, RefreshCw, FileText } from "lucide-react";

const features = [
  {
    icon: <FileCheck className="h-6 w-6 text-safety-blue" />,
    title: "Compliant Documentation",
    description: "All documents are generated in compliance with the latest workplace safety regulations and laws."
  },
  {
    icon: <Shield className="h-6 w-6 text-safety-blue" />,
    title: "Risk Assessment",
    description: "AI-powered risk assessment tailored to your specific industry and workplace conditions."
  },
  {
    icon: <Clock className="h-6 w-6 text-safety-blue" />,
    title: "Time Saving",
    description: "Generate comprehensive safety documentation in minutes instead of days or weeks."
  },
  {
    icon: <Brain className="h-6 w-6 text-safety-blue" />,
    title: "AI Customization",
    description: "Our AI adapts to your specific needs, creating personalized safety protocols."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-safety-blue" />,
    title: "Regular Updates",
    description: "Stay current with automatic updates when safety regulations and laws change."
  },
  {
    icon: <FileText className="h-6 w-6 text-safety-blue" />,
    title: "Multiple Formats",
    description: "Export your documentation in various formats including PDF, Word, and HTML."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-safety-dark mb-4">Features That Keep Your Workplace Safe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to maintain a safe workplace and stay compliant with regulations.
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
