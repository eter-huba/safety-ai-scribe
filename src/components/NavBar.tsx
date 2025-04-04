
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Book, Package } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-safety-blue" />
          <span className="font-bold text-xl text-safety-blue">ScheidlAI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-safety-blue transition-colors">
            Home
          </Link>
          <Link to="/packages" className="text-gray-600 hover:text-safety-blue transition-colors">
            Packages
          </Link>
          <Link to="/generator" className="text-gray-600 hover:text-safety-blue transition-colors">
            Generator
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-safety-blue transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-safety-blue hover:bg-opacity-90 text-white">
            Login
          </Button>
          <Button variant="outline" className="border-safety-blue text-safety-blue hover:bg-safety-blue hover:text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
