"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Type definitions
type NavigationLink = {
  label: string;
  href?: string;
  hashtag?: string;
};

type LanguageCode = "ENG" | "FR" | "ES";

const Navbar = () => {
  const [selected, setSelected] = useState<LanguageCode>("ENG");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const links: NavigationLink[] = [
    {
      label: "Charter",
      hashtag: "charter", // This will create a link to /#charter
    },
    {
      label: "Empty Legs",
      hashtag: "EmptyLegs", // This will create a link to /#EmptyLegs
    },
    {
      label: "Helicopter",
      hashtag: "helicopter", // This will create a link to /#helicopter
    },
    {
      label: "About",
      href: "/about-us", // This will create a regular route link
    },
    {
      label: "Blog",
      href: "/blog", // This will create a regular route link
    },
  ];

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
  };

  // Helper function to get the correct href
  const getHref = (item: NavigationLink): string => {
    if (item.href) {
      return item.href; // Regular route
    } else if (item.hashtag) {
      return `/#${item.hashtag}`; // Hash link
    }
    return "/"; // Fallback
  };

  return (
    <header className="relative z-20 transition-all duration-1000 translate-y-0 opacity-100">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-5 backdrop-blur-sm bg-white/5 border-b border-white/10">
        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {links.map((item, index) => (
            <Link
              key={index}
              href={getHref(item)}
              className="text-white hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Logo - Responsive sizing */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              width={200}
              height={80}
              alt="Website logo"
              className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64"
            />
          </Link>
        </div>

        {/* Desktop Right Side Controls - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center focus:border-none w-20 lg:w-28 cursor-pointer outline-none space-x-1 lg:space-x-2 text-white transition-all duration-300 px-2 lg:px-3 py-2 rounded-lg hover:bg-white/5 text-sm lg:text-base">
                <Globe className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">{selected}</span>
                <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-white bg-white/20 backdrop-blur-md cursor-pointer border-none rounded-md shadow-md">
              <DropdownMenuItem onClick={() => setSelected("ENG")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelected("FR")}>
                French
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelected("ES")}>
                Spanish
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Phone Button - Responsive text */}
          <button className="hidden lg:flex items-center space-x-2 text-white border border-white/30 rounded-lg px-3 xl:px-4 py-2 hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 text-sm xl:text-base">
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">Call Us: +1 800 555-1234</span>
            <span className="xl:hidden">Call Us</span>
          </button>

          {/* Phone Icon Only - Tablet view */}
          <button className="lg:hidden flex items-center justify-center text-white border border-white/30 rounded-lg p-2 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            <Phone className="w-4 h-4" />
          </button>

          {/* Search Flights Button */}
          <button className="bg-white text-black px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer text-sm lg:text-base">
            <span className="hidden sm:inline">Search Flights</span>
            <span className="sm:hidden">Search</span>
          </button>
        </div>

        {/* Mobile Menu Button Container for smaller screens */}
        <div className="md:hidden flex items-center space-x-2">
          <button className="bg-white text-black px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
            Search
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        >
          <div className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-white/10 backdrop-blur-md border-r border-white/20">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src={"/images/logo.png"}
                  width={150}
                  height={60}
                  alt="Website logo"
                  className="w-32 h-auto"
                />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="text-white p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-6 space-y-6">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={getHref(item)}
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-blue-300 transition-all duration-300 py-2 text-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Controls */}
              <div className="space-y-4 pt-4 border-t border-white/20">
                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center w-full justify-between text-white p-3 rounded-lg hover:bg-white/5 border border-white/20">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5" />
                        <span>Language: {selected}</span>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-white bg-white/20 backdrop-blur-md border-none rounded-md shadow-md w-64">
                    <DropdownMenuItem onClick={() => setSelected("ENG")}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelected("FR")}>
                      French
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelected("ES")}>
                      Spanish
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Phone Button */}
                <button className="flex items-center w-full space-x-3 text-white border border-white/30 rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span>+1 800 555-1234</span>
                </button>

                {/* Search Flights Button */}
                <button className="w-full bg-white text-black py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  Search Flights
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
