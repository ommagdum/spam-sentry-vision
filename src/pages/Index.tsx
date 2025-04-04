
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("01");
  
  // Simulate changing section numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection(prev => {
        const current = parseInt(prev);
        return current < 5 ? `0${current + 1}` : "01";
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold">
            N
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className="navigation-link active">Home</Link>
            <Link to="#" className="navigation-link">About us</Link>
            <Link to="#" className="navigation-link">Services</Link>
            <Link to="#" className="navigation-link">Contact us</Link>
          </nav>
          
          {/* Search Button */}
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50">
            <Search className="w-5 h-5" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20 pb-6 px-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-xl font-medium py-2 border-b border-white/10">Home</Link>
            <Link to="#" className="text-xl font-medium py-2 border-b border-white/10">About us</Link>
            <Link to="#" className="text-xl font-medium py-2 border-b border-white/10">Services</Link>
            <Link to="#" className="text-xl font-medium py-2 border-b border-white/10">Contact us</Link>
            <div className="flex pt-4">
              <Link to="/login" className="w-1/2 text-center py-2 text-white/80">Sign In</Link>
              <Link to="/register" className="w-1/2 text-center py-2 text-white border border-white/10 rounded-md">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}
      
      {/* Vertical Social Links */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col space-y-16 writing-vertical">
          <a href="#" className="transform -rotate-90 origin-center text-sm font-medium text-white/70 hover:text-white transition">Facebook</a>
          <a href="#" className="transform -rotate-90 origin-center text-sm font-medium text-white/70 hover:text-white transition">Instagram</a>
          <a href="#" className="transform -rotate-90 origin-center text-sm font-medium text-white/70 hover:text-white transition">LinkedIn</a>
        </div>
      </div>
      
      {/* Section Numbers */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col space-y-8">
          <span className={`section-number ${currentSection === "01" ? "text-white" : ""}`}>01</span>
          <span className={`section-number ${currentSection === "02" ? "text-white" : ""}`}>02</span>
          <span className={`section-number ${currentSection === "03" ? "text-white" : ""}`}>03</span>
          <span className={`section-number ${currentSection === "04" ? "text-white" : ""}`}>04</span>
          <span className={`section-number ${currentSection === "05" ? "text-white" : ""}`}>05</span>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="min-h-screen earth-background">
        <div className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-16 max-w-6xl mx-auto pt-20">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <div className="mb-12 md:mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 cosmic-star">
                COMING SOON
              </h1>
              <p className="text-xl md:text-2xl text-white/70 tracking-wide">
                STAY TUNED AND WE WILL UPDATE YOU
              </p>
            </div>
            
            {/* Email Subscription */}
            <div className="flex flex-col md:flex-row mb-16 md:mb-24 w-full max-w-xl">
              <Input 
                type="email" 
                placeholder="Type your email" 
                className="bg-white/10 border-white/10 text-white mb-3 md:mb-0 md:rounded-r-none"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full md:rounded-l-none px-8">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
            
            {/* Auth Links */}
            <div className="mt-12 flex md:hidden gap-4">
              <Link to="/login">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover-lift">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary hover:bg-primary/90 text-white hover-lift">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
