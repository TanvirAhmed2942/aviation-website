"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("ENG");

  const links = [
    {
      label: "Charter",
      href: "/charter",
    },

    {
      label: "Empty Legs",
      href: "/empty-legs",
    },
    {
      label: "Helicopter",
      href: "/helicopter",
    },
    {
      label: "About",
      href: "/about-us",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
  return (
    <header className="relative z-20 transition-all duration-1000 translate-y-0 opacity-100">
      <div className="flex justify-between items-center px-8 py-5 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <nav className="flex items-center space-x-8">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Logo with animation */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <Image
            src={"/images/logo.png"}
            width={250}
            height={100}
            alt="Website logo"
          />
        </div>

        <div className="flex items-center space-x-4 cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center focus:border-none w-28 cursor-pointer outline-none space-x-2 text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5">
                <Globe className="w-4 h-4" />
                <span>{selected}</span>
                <ChevronDown className="w-4 h-4" />
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

          <button className="flex items-center space-x-2 text-white border border-white/30 rounded-lg px-4 py-2 hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
            <Phone className="w-4 h-4" />
            <span>Call Us: +1 800 555-1234</span>
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
            Search Flights
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
