import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, Menu, X, User } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/chat", label: "AI Support" },
    { path: "/booking", label: "Book Session" },
    { path: "/resources", label: "Resources" },
    { path: "/forum", label: "Community" },
    { path: "/screening", label: "Screening Tools" },
    { path: "/helpline", label: "Helpline" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-foreground">MindSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/admin">
              <Button variant="calm" size="sm">
                <User className="h-4 w-4 mr-1" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-primary/10 ${
                  isActive(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="calm" size="sm" className="w-full mt-2">
                <User className="h-4 w-4 mr-1" />
                Admin Dashboard
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}