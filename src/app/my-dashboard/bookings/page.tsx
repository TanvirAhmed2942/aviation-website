"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { useState } from 'react';

const FlightBookings = () => {
  const [activeTab, setActiveTab] = useState('All');

  const bookings = [
    {
      id: 1,
      route: 'JFK → LAX',
      date: 'Mar 15, 2025',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 hover:bg-blue-200'
    },
    {
      id: 2,
      route: 'SFO → MIA',
      date: 'Mar 10, 2025',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 hover:bg-blue-200'
    },
    {
      id: 3,
      route: 'ORD → DFW',
      date: 'Feb 28, 2025',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-800 hover:bg-green-200'
    },
    {
      id: 4,
      route: 'LGA → BOS',
      date: 'Feb 20, 2025',
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-800 hover:bg-red-200'
    }
  ];

  const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

  const filteredBookings = activeTab === 'All'
    ? bookings
    : bookings.filter(booking => booking.status === activeTab);

  const getTabCount = (tab: any) => {
    if (tab === 'All') return bookings.length;
    return bookings.filter(booking => booking.status === tab).length;
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
            <CardContent className="px-5 ">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 ">
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

                  <Button
                    variant="outline"
                    className="text-gray-700 hover:bg-gray-50 border-gray-300"
                  >
                    View Details
                  </Button>
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