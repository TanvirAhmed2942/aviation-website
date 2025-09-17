"use client";

import {
  BarChart3,
  Bell,
  Bookmark,
  Calendar,
  Heart,
  LogOut,
  Menu,
  MessageCircle,
  Settings,
  Users,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (isSidebarOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {/* Mobile header with menu button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>

      <div className="p-4 lg:p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900 hidden lg:block">Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1 hidden lg:block">
          View and manage your bookings, saved searches and more.
        </p>
      </div>

      <div className="flex pt-5 flex-col lg:flex-row">
        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"></div>
        )}
        {/* Sidebar */}
        <div
          id="sidebar"
          className={`fixed lg:static top-0 left-0 z-50 lg:z-auto w-72 h-full py-3 rounded-lg bg-white shadow-sm border border-gray-200 transform transition-transform duration-300 ease-in-out lg:transform-none ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
        >
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
                    className={`w-full flex cursor-pointer text-base items-center px-3 py-3 font-medium rounded-md transition-colors ${isActive
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

          <div className="mt-8 px-4">
            <button
              onClick={() => router.push("/")}
              className="w-full flex items-center cursor-pointer px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Log out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8 w-full">
          {children}

          {/* Footer */}
          <div className="mt-8 py-2 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2025 NEXFLIGHT. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Version 1.0.0</p>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-30">
          <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}