
import React from 'react';
import NavBar from "@/components/NavBar";
import { Building2, BookOpen, Users, Orbit, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="bg-safety-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About SafetyAI</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We're on a mission to make workplaces safer through accessible, AI-powered safety documentation.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-safety-dark mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SafetyAI was founded in 2023 by a team of workplace safety experts and AI specialists who recognized a critical problem: many businesses struggle to keep up with constantly changing safety regulations.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to create a solution that would make professional-grade safety documentation accessible to businesses of all sizes, not just those with dedicated safety departments.
              </p>
              <p className="text-gray-600">
                Today, our AI-powered platform is helping hundreds of companies across multiple industries maintain safer workplaces and stay compliant with the latest regulations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-safety-gray p-6 rounded-lg">
                <Building2 className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Our Mission</h3>
                <p className="text-gray-600">To make workplace safety accessible to all businesses through AI-powered solutions.</p>
              </div>
              
              <div className="bg-safety-gray p-6 rounded-lg">
                <BookOpen className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Our Expertise</h3>
                <p className="text-gray-600">Combined 50+ years of experience in workplace safety regulations.</p>
              </div>
              
              <div className="bg-safety-gray p-6 rounded-lg">
                <Users className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Our Team</h3>
                <p className="text-gray-600">Safety professionals, AI experts, and regulatory specialists.</p>
              </div>
              
              <div className="bg-safety-gray p-6 rounded-lg">
                <Orbit className="h-10 w-10 text-safety-blue mb-3" />
                <h3 className="font-semibold text-lg text-safety-dark mb-2">Our Technology</h3>
                <p className="text-gray-600">Advanced AI models trained on latest safety regulations and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-safety-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-safety-dark mb-8 text-center">Why Choose SafetyAI?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-safety-blue/10 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-safety-blue" />
                </div>
                <h3 className="font-semibold text-lg text-safety-dark">Regulatory Expertise</h3>
              </div>
              <p className="text-gray-600">
                Our system is regularly updated with the latest workplace safety regulations and industry-specific guidelines.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-safety-blue/10 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-safety-blue" />
                </div>
                <h3 className="font-semibold text-lg text-safety-dark">AI Innovation</h3>
              </div>
              <p className="text-gray-600">
                We leverage the latest in AI technology to provide customized safety documentation that meets your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-safety-blue/10 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-safety-blue" />
                </div>
                <h3 className="font-semibold text-lg text-safety-dark">Customer Success</h3>
              </div>
              <p className="text-gray-600">
                Our dedicated support team includes safety professionals who understand your industry's unique challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-safety-dark mb-8">Meet Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="aspect-square bg-safety-gray rounded-full mb-4 mx-auto w-48"></div>
              <h3 className="font-semibold text-lg text-safety-dark">Sarah Johnson</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>
            
            <div>
              <div className="aspect-square bg-safety-gray rounded-full mb-4 mx-auto w-48"></div>
              <h3 className="font-semibold text-lg text-safety-dark">Michael Chen</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>
            
            <div>
              <div className="aspect-square bg-safety-gray rounded-full mb-4 mx-auto w-48"></div>
              <h3 className="font-semibold text-lg text-safety-dark">Amara Williams</h3>
              <p className="text-gray-600">Chief Safety Officer</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-safety-dark text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2025 SafetyAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
