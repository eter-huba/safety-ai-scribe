
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
            <h2 className="text-3xl md:text-4xl font-bold text-safety-dark mb-4">Trusted by Safety Professionals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of companies that rely on our AI to keep their workplaces safe and compliant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-safety-gray p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold text-safety-dark mb-2">98%</h3>
              <p className="text-gray-600">Compliance rate for companies using our platform</p>
            </div>
            
            <div className="bg-safety-gray p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FileCheck className="h-12 w-12 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold text-safety-dark mb-2">10,000+</h3>
              <p className="text-gray-600">Safety documents generated monthly</p>
            </div>
            
            <div className="bg-safety-gray p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <BarChart className="h-12 w-12 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold text-safety-dark mb-2">75%</h3>
              <p className="text-gray-600">Reduction in safety documentation time</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-safety-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your workplace safety?</h2>
            <p className="text-white/80 text-lg mb-8">
              Start generating professional, compliant safety documentation today with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-safety-blue hover:bg-white/90 px-8 py-6 text-lg">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                Schedule a Demo
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
              <h3 className="font-bold text-lg mb-4">SafetyAI</h3>
              <p className="text-white/70">
                AI-powered workplace safety documentation and compliance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Home</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Packages</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Generator</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Safety Guidelines</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Regulatory Updates</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-white/70">contact@safetyai.com</li>
                <li className="text-white/70">1-800-SAFETY-AI</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2025 SafetyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
