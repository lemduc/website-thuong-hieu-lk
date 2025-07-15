import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Về LK", href: "/about" },
  { label: "Thương hiệu", href: "/brands" },
  { label: "Phác đồ điều trị", href: "/treatments" },
  { label: "Tin tức sự kiện", href: "/news" },
  { label: "Q&A", href: "/faq" },
  { label: "Liên hệ", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={cn(
              "font-bold text-2xl transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              LK Distribution
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "font-medium transition-colors duration-300 hover:text-green-700",
                  isScrolled ? "text-gray-700" : "text-white",
                  location.pathname === item.href && (isScrolled ? "text-green-700" : "text-white font-bold")
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                className="bg-green-700 text-white hover:bg-green-800"
              >
                Liên hệ ngay
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "py-2 font-medium text-gray-700 hover:text-green-700",
                  location.pathname === item.href && "text-green-700 font-bold"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="pt-4">
              <Button className="w-full bg-green-700 text-white hover:bg-green-800">
                Liên hệ ngay
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;