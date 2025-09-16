"use client";

import {
  BarChart3,
  Bell,
  Bookmark,
  Calendar,
  Heart,
  LogOut,
  MessageCircle,
  Settings,
  Users,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState("overview");
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = useMemo(
    () => [
      {
        id: "overview",
        icon: BarChart3,
        label: "Overview",
        route: "/my-dashboard/overview",
      },
      {
        id: "bookings",
        icon: Calendar,
        label: "My Bookings",
        route: "/my-dashboard/bookings",
      },
      {
        id: "searches",
        icon: Heart,
        label: "Saved Searches",
        route: "/my-dashboard/searches",
      },
      {
        id: "flights",
        icon: Bookmark,
        label: "Saved Flights",
        route: "/my-dashboard/flights",
      },
      {
        id: "referrals",
        icon: Users,
        label: "Referrals",
        route: "/my-dashboard/referrals",
      },
      {
        id: "notifications",
        icon: Bell,
        label: "Notifications",
        route: "/my-dashboard/notifications",
      },
      {
        id: "settings",
        icon: Settings,
        label: "Settings",
        route: "/my-dashboard/settings",
      },
    ],
    []
  );

  // Update active section based on current pathname
  useEffect(() => {
    const currentMenuItem = menuItems.find((item) => item.route === pathname);
    if (currentMenuItem) {
      setActiveSection(currentMenuItem.id);
    }
  }, [pathname, menuItems]);

  const handleMenuItemClick = (itemId: string, route: string) => {
    setActiveSection(itemId);
    router.push(route);
  };

  return (
    <div className="container mx-auto">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">
          View and manage your bookings, saved searches and more.
        </p>
      </div>
      <div className="flex pt-5">
        {/* Sidebar */}
        <div className="w-72 py-3 rounded-lg bg-white shadow-sm border h-fit border-gray-200">
          <div className="px-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              SELECT MENU
            </p>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id, item.route)}
                    className={`w-full flex cursor-pointer text-base items-center px-3 py-3 font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-8 px-4 ">
            <button
              onClick={() => router.push("/")} // Add your logout route here
              className="w-full flex items-center cursor-pointer px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Log out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}

          {/* Footer */}
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="mt-8 py-2 flex justify-between items-center text-sm text-gray-500">
        <p>© 2025 NEXFLIGHT. All rights reserved.</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
}
