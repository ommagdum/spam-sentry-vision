
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, LayoutDashboard, History as HistoryIcon, Home } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/history", label: "History", icon: HistoryIcon },
  ];

  const authLinks = [
    { path: "/login", label: "Sign In", icon: LogIn, variant: "outline" as const },
    { path: "/register", label: "Sign Up", icon: UserPlus, variant: "default" as const },
  ];

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden" aria-label="Menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-900 text-white border-r border-gray-700">
        <div className="flex flex-col h-full">
          <div className="py-6">
            <h2 className="text-xl font-bold text-center mb-6">Menu</h2>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button 
                    variant={isActive(link.path) ? "default" : "ghost"} 
                    className="w-full justify-start"
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto pb-6 border-t border-gray-700 pt-6">
            <div className="flex flex-col gap-2">
              {authLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button 
                    variant={link.variant} 
                    className="w-full"
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopNav = () => (
    <div className="hidden md:flex justify-between items-center w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.path}>
              <Link to={link.path}>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle({ 
                    className: isActive(link.path) ? "bg-primary text-white" : ""
                  })} 
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-4">
        {authLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            <Button variant={link.variant} className="flex items-center gap-2 hover-lift">
              <link.icon className="w-4 h-4" /> {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="container px-4 pt-6 mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          SpamGuard
        </Link>
        
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </header>
  );
};

export default Navigation;
