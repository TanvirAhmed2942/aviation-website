"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Info } from "lucide-react";
import { useState } from "react";

const FlightBookings = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState<{
    id: number;
    route: string;
    date: string;
    status: string;
    statusColor: string;
    flightNumber: string;
    departure: string;
    arrival: string;
    duration: string;
    terminal: string;
    gate: string;
    seat: string;
    baggage: string;
    airline: string;
    aircraft: string;
    passengers: number;
    amenities: string[];
    price: string;
    bookingNumber: string;
  } | null>(null);

  const bookings = [
    {
      id: 1,
      route: "JFK → LAX",
      date: "Mar 15, 2025",
      status: "Upcoming",
      statusColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      flightNumber: "AA123",
      departure: "10:30 AM",
      arrival: "1:45 PM",
      duration: "3h 15m",
      terminal: "Terminal 8",
      gate: "B12",
      seat: "14A",
      baggage: "1 checked bag",
      airline: "American Airlines",
      aircraft: "Gulfstream G650",
      passengers: 4,
      amenities: ["Wi-Fi", "Catering", "Flight Attendant", "Pet Friendly"],
      price: "$12,500",
      bookingNumber: "23423",
    },
    {
      id: 2,
      route: "SFO → MIA",
      date: "Mar 10, 2025",
      status: "Upcoming",
      statusColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      flightNumber: "UA456",
      departure: "10:15 AM",
      arrival: "05:45 PM",
      duration: "5h 30m",
      terminal: "Terminal 3",
      gate: "C7",
      seat: "22C",
      baggage: "2 checked bags",
      airline: "United Airlines",
      aircraft: "Bombardier Global 7500",
      passengers: 2,
      amenities: ["Wi-Fi", "Catering", "Flight Attendant"],
      price: "$18,750",
      bookingNumber: "23424",
    },
    {
      id: 3,
      route: "ORD → DFW",
      date: "Feb 28, 2025",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800 hover:bg-green-200",
      flightNumber: "DL789",
      departure: "06:30 AM",
      arrival: "08:15 AM",
      duration: "1h 45m",
      terminal: "Terminal 5",
      gate: "D3",
      seat: "8F",
      baggage: "1 checked bag",
      airline: "Delta Air Lines",
      aircraft: "Cessna Citation X+",
      passengers: 6,
      amenities: ["Wi-Fi", "Catering", "Flight Attendant", "Pet Friendly"],
      price: "$8,900",
      bookingNumber: "23425",
    },
    {
      id: 4,
      route: "LGA → BOS",
      date: "Feb 20, 2025",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800 hover:bg-red-200",
      flightNumber: "B6101",
      departure: "07:00 AM",
      arrival: "08:45 AM",
      duration: "1h 45m",
      terminal: "Terminal C",
      gate: "C15",
      seat: "11B",
      baggage: "0 checked bags",
      airline: "JetBlue",
      aircraft: "Embraer Legacy 650",
      passengers: 3,
      amenities: ["Wi-Fi", "Catering"],
      price: "$6,200",
      bookingNumber: "23426",
    },
  ];

  const tabs = ["All", "Upcoming", "Completed", "Cancelled"];

  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === activeTab);

  const getTabCount = (tab: string) => {
    if (tab === "All") return bookings.length;
    return bookings.filter((booking) => booking.status === tab).length;
  };

  const handleViewDetails = (booking: {
    id: number;
    route: string;
    date: string;
    status: string;
    statusColor: string;
    flightNumber: string;
    departure: string;
    arrival: string;
    duration: string;
    terminal: string;
    gate: string;
    seat: string;
    baggage: string;
    airline: string;
    aircraft: string;
    passengers: number;
    amenities: string[];
    price: string;
    bookingNumber: string;
  }) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          My Bookings
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">Manage your flight reservations</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap w-fit gap-2 mb-6 sm:mb-8 bg-gray-50  p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-3 py-2 rounded-md cursor-pointer text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2
              ${activeTab === tab
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }
            `}
          >
            {tab}
            <div className="flex items-center gap-1">
              <Info className="w-3 h-3" />
              <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {getTabCount(tab)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card
            key={booking.id}
            className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {booking.route}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{booking.date}</p>
                </div>

                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 sm:gap-4">
                  <Badge
                    variant="secondary"
                    className={`${booking.statusColor} border-0 font-medium px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm`}
                  >
                    {booking.status}
                  </Badge>

                  <Button
                    variant="outline"
                    className="text-gray-700 cursor-pointer hover:bg-gray-50 border-gray-300 text-xs sm:text-sm px-3 py-1.5 h-auto"
                    onClick={() => handleViewDetails(booking)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Booking Details Sheet */}
      <Sheet
        open={!!selectedBooking}
        onOpenChange={() => setSelectedBooking(null)}
      >
        <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto p-0">
          {selectedBooking && (
            <div className="h-full flex flex-col">
              <SheetHeader className="px-5 pt-6 pb-4 border-b border-gray-200">
                <SheetTitle className="text-xl font-bold text-gray-900">
                  Booking Details
                </SheetTitle>
                <SheetDescription className="text-sm text-gray-600">
                  Booking #{selectedBooking.bookingNumber}
                </SheetDescription>
              </SheetHeader>

              <div className="px-5 py-6 space-y-6 overflow-y-auto flex-1">
                {/* Route and Date */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {selectedBooking.route}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">{selectedBooking.date}</p>
                </div>

                {/* Schedule */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                    Schedule:
                  </h3>
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1 text-xs sm:text-sm">Departure</p>
                      <p className="font-medium text-sm sm:text-base">{selectedBooking.departure}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 text-xs sm:text-sm">Arrival</p>
                      <p className="font-medium text-sm sm:text-base">{selectedBooking.arrival}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 text-xs sm:text-sm">Duration</p>
                      <p className="font-medium text-sm sm:text-base">{selectedBooking.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Aircraft */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Aircraft:
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">{selectedBooking.aircraft}</p>
                </div>

                {/* Passengers */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Passengers:
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {selectedBooking.passengers} passengers
                  </p>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                    Amenities:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedBooking.amenities.map(
                      (amenity: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                        >
                          {amenity}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Price:</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {selectedBooking.price}
                  </p>
                </div>
              </div>

              {/* Action Buttons - Fixed at bottom */}
              <div className="p-5 border-t border-gray-200 bg-white mt-auto">
                <div className="flex flex-col xs:flex-row gap-3">
                  <Button className="flex-1 primary text-white text-sm sm:text-base py-2.5">
                    Modify Booking
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base py-2.5"
                  >
                    Download Details
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Empty State */}
      {filteredBookings.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-sm sm:text-base">
            No {activeTab.toLowerCase()} bookings found.
          </p>
        </div>
      )}
    </div>
  );
};

export default FlightBookings;