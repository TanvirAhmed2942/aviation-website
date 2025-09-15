"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Info } from 'lucide-react';
import { useState } from 'react';

const FlightBookings = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const bookings = [
    {
      id: 1,
      route: 'JFK → LAX',
      date: 'Mar 15, 2025',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      flightNumber: 'AA123',
      departure: '08:00 AM',
      arrival: '11:30 AM',
      terminal: 'Terminal 8',
      gate: 'B12',
      seat: '14A',
      baggage: '1 checked bag',
      airline: 'American Airlines',
    },
    {
      id: 2,
      route: 'SFO → MIA',
      date: 'Mar 10, 2025',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      flightNumber: 'UA456',
      departure: '10:15 AM',
      arrival: '05:45 PM',
      terminal: 'Terminal 3',
      gate: 'C7',
      seat: '22C',
      baggage: '2 checked bags',
      airline: 'United Airlines',
    },
    {
      id: 3,
      route: 'ORD → DFW',
      date: 'Feb 28, 2025',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-800 hover:bg-green-200',
      flightNumber: 'DL789',
      departure: '06:30 AM',
      arrival: '08:15 AM',
      terminal: 'Terminal 5',
      gate: 'D3',
      seat: '8F',
      baggage: '1 checked bag',
      airline: 'Delta Air Lines',
    },
    {
      id: 4,
      route: 'LGA → BOS',
      date: 'Feb 20, 2025',
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-800 hover:bg-red-200',
      flightNumber: 'B6101',
      departure: '07:00 AM',
      arrival: '08:45 AM',
      terminal: 'Terminal C',
      gate: 'C15',
      seat: '11B',
      baggage: '0 checked bags',
      airline: 'JetBlue',
    },
  ];

  const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

  const filteredBookings = activeTab === 'All'
    ? bookings
    : bookings.filter(booking => booking.status === activeTab);

  const getTabCount = (tab: string) => {
    if (tab === 'All') return bookings.length;
    return bookings.filter(booking => booking.status === tab).length;
  };

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">Manage your flight reservations</p>
      </div>

      {/* Filter Tabs */}
      <div className="gap-1 mb-8 bg-gray-100 p-1 rounded-lg inline-flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-all duration-200 flex items-center gap-2
              ${activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
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
          <Card key={booking.id} className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <CardContent className="px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {booking.route}
                  </h3>
                  <p className="text-gray-600">{booking.date}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Badge
                    variant="secondary"
                    className={`${booking.statusColor} border-0 font-medium px-3 py-1`}
                  >
                    {booking.status}
                  </Badge>

                  {/* Sheet Trigger Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-gray-700 cursor-pointer hover:bg-gray-50 border-gray-300"
                        onClick={() => handleViewDetails(booking)}
                      >
                        View Details
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-md overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Flight Details</SheetTitle>
                        <SheetDescription>
                          Information about your upcoming trip.
                        </SheetDescription>
                      </SheetHeader>

                      <div className="py-5 flex flex-col justify-between border border-red-500 w-full h-screen  space-y-4 px-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Flight Number</p>
                            <p className="font-medium">{booking.flightNumber}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Airline</p>
                            <p className="font-medium">{booking.airline}</p>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <h4 className="font-medium text-gray-900 mb-2">Schedule</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Departure</p>
                              <p className="font-medium">{booking.departure}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Arrival</p>
                              <p className="font-medium">{booking.arrival}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Terminal</p>
                              <p className="font-medium">{booking.terminal}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Gate</p>
                              <p className="font-medium">{booking.gate}</p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <h4 className="font-medium text-gray-900 mb-2">Seat & Baggage</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Seat</p>
                              <p className="font-medium">{booking.seat}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Baggage</p>
                              <p className="font-medium">{booking.baggage}</p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <h4 className="font-medium text-gray-900 mb-2">Status</h4>
                          <Badge
                            variant="secondary"
                            className={`${booking.statusColor} border-0 font-medium px-3 py-1`}
                          >
                            {booking.status}
                          </Badge>
                        </div>

                        <div>
                          <Button
                            variant="outline"
                            className="w-full mt-6"
                            onClick={() => setSelectedBooking(null)}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No {activeTab.toLowerCase()} bookings found.</p>
        </div>
      )}
    </div>
  );
};

export default FlightBookings;