"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bell,
  CreditCard,
  DollarSign,
  Heart,
  Plane,
  User,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Data declarations
const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Charter", href: "/charter" },
  { label: "Empty Legs", href: "/empty-legs" },
  { label: "Helicopter", href: "/helicopter" },
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
    icon: <Heart className="w-5 h-5" />,
    className: "text-gray-600 hover:text-gray-900",
    href: "/my-dashboard/searches",
  },
  {
    id: 2,
    icon: <Bell className="w-7 h-7" />,
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
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Plane className="w-5 h-5 text-white transform rotate-45" />
              </div>
              <span className="text-xl font-bold text-gray-900">NEXFLIGHT</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-3">
              {navigationLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
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

            {/* Action Icons */}
            <div className="flex items-center space-x-2">
              {actionIcons.map((action) => (
                <Button
                  key={action.id}
                  variant="ghost"
                  size="icon"
                  className={action.className}
                  onClick={() => action.href && router.push(action.href)}
                >
                  {action.icon}
                  {action.hasBadge && (
                    <Badge className="absolute top-1 right-2 w-2 h-2 p-0 bg-red-500 rounded-full"></Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-3 space-y-2">
          {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
