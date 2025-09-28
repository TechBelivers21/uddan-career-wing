import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.quiz'), path: "/quiz" },
    { name: t('nav.courses'), path: "/courses" },
    { name: t('nav.colleges'), path: "/colleges" },
    { name: t('nav.timeline'), path: "/timeline" },
    { name: t('nav.resources'), path: "/resources" },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="bg-gradient-hero p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Uddan</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Auth Buttons & Language Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              onClick={() => navigate("/login")}
              className="text-foreground hover:text-primary"
            >
              {t('nav.login')}
            </Button>
            <Button 
              onClick={() => navigate("/register")}
              className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all duration-300"
            >
              {t('nav.register')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
               <div className="flex flex-col space-y-2 pt-4">
                 <LanguageSwitcher />
                 <Button 
                   variant="ghost" 
                   onClick={() => {
                     navigate("/login");
                     setIsMenuOpen(false);
                   }}
                   className="w-full"
                 >
                   {t('nav.login')}
                 </Button>
                 <Button 
                   onClick={() => {
                     navigate("/register");
                     setIsMenuOpen(false);
                   }}
                   className="w-full bg-gradient-hero text-primary-foreground"
                 >
                   {t('nav.register')}
                 </Button>
               </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;