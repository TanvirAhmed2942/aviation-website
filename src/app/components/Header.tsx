"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bell,
  ChevronRight,
  CreditCard,
  DollarSign,
  Menu,
  Plane,
  User,
  X
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

// Data declarations
const navigationLinks = [
  { label: "Home", href: "/" },
  {
    label: "Charter",
    hashtag: "charter" // This will create a hash link to /#charter
  },
  {
    label: "Empty Legs",
    hashtag: "EmptyLegs" // This will create a hash link to /#EmptyLegs
  },
  {
    label: "Helicopter",
    hashtag: "helicopter" // This will create a hash link to /#helicopter
  },
  { label: "Contact", href: "/contact" },
];

const actionCards = [
  {
    id: 1,
    title: "Golden Jet Card",
    icon: <CreditCard className="w-4 h-4 text-yellow-500" />,
    className:
      "px-3 py-2 bg-yellow-50 shadow-0 border border-yellow-500 cursor-pointer rounded-sm select-none",
    textColor: "text-yellow-500",
    showArrow: true,
    href: "/golden-jet-card",
  },
  {
    id: 2,
    title: "Earn $400",
    icon: <DollarSign className="w-4 h-4 text-[#1B365D]" />,
    className:
      "px-3 py-2 bg-white shadow-0 border border-gray-300 cursor-pointer rounded-sm select-none",
    textColor: "text-[#1B365D]",
    showArrow: false,
    href: "/earn-400",
  },
];

const actionIcons = [
  {
    id: 1,
    icon: <FaRegHeart className="w-5 h-5" />,
    className: "text-gray-600 hover:text-gray-900",
    href: "/my-dashboard/searches",
  },
  {
    id: 2,
    icon: <Bell className="w-5 h-5" />,
    className: "text-gray-600 hover:text-gray-900 relative",
    hasBadge: true,
    href: "/my-dashboard/notifications",
  },
  {
    id: 3,
    icon: <User className="w-5 h-5" />,
    className: "text-gray-600 hover:text-gray-900",
    href: "/my-dashboard/overview",
  },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper function to get the correct href
  const getHref = (item) => {
    if (item.href) {
      return item.href; // Regular route
    } else if (item.hashtag) {
      return `/#${item.hashtag}`; // Hash link
    }
    return "/"; // Fallback
  };



  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div onClick={() => router.push('/')} className="flex items-center cursor-pointer space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Plane className="w-5 h-5 text-white transform rotate-45" />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                NEXFLIGHT
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-3">
              {navigationLinks.map((link) => (
                <Link key={link.label} href={getHref(link)}>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Action Cards - Hidden on mobile, visible on tablet and up */}
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
              {actionCards.map((card) => (
                <Card key={card.id} className={card.className}>
                  <Link href={card.href}>
                    <div className="flex items-center space-x-2 text-white cursor-pointer">
                      {card.icon}
                      <span className={`font-medium text-sm ${card.textColor}`}>
                        {card.title}
                      </span>
                      {card.showArrow && (
                        <ChevronRight className={`w-4 h-4 ${card.textColor}`} />
                      )}
                    </div>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {actionIcons.map((action) => (
                <Button
                  key={action.id}
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 rounded-full ${action.className}`}
                  onClick={() => action.href && router.push(action.href)}
                >
                  {action.icon}
                  {action.hasBadge && (
                    <Badge className="absolute top-2 right-2 w-2 h-2 p-0 bg-red-500 rounded-full"></Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-1 sm:ml-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden border-t border-gray-200 transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-2 py-3 space-y-1">
            {navigationLinks.map((link) => (
              <Link key={link.label} href={getHref(link)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            {/* Mobile-only action cards */}
            <div className="sm:hidden grid grid-cols-1 gap-2 mt-3 px-2">
              {actionCards.map((card) => (
                <Card key={card.id} className={card.className}>
                  <Link href={card.href} onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-2 text-white cursor-pointer">
                      {card.icon}
                      <span className={`font-medium text-sm ${card.textColor}`}>
                        {card.title}
                      </span>
                      {card.showArrow && (
                        <ChevronRight className={`w-4 h-4 ${card.textColor}`} />
                      )}
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}