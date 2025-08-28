import { useState } from "react";
import { Search, Menu, X, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    "Technology", "World News", "Business", "Sports", "Health", 
    "Environment", "Politics", "Entertainment", "Science"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Global Insights
              </h1>
              <p className="text-xs text-muted-foreground">News & Stories</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-smooth font-medium">
                Categories
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                <div className="grid grid-cols-2 p-4 gap-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="text-sm text-card-foreground hover:text-primary transition-smooth py-1"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Countries
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 w-64 bg-secondary/50 border-border"
              />
            </div>
            <Button variant="outline" size="sm" className="text-foreground border-border">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="primary-gradient text-primary-foreground">
              Subscribe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-secondary/50 border-border"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              <a href="#" className="block text-card-foreground hover:text-primary transition-smooth font-medium">
                Home
              </a>
              <div>
                <p className="font-medium text-card-foreground mb-2">Categories</p>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#" className="block text-card-foreground hover:text-primary transition-smooth font-medium">
                Countries
              </a>
              <a href="#" className="block text-card-foreground hover:text-primary transition-smooth font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button className="w-full primary-gradient text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;