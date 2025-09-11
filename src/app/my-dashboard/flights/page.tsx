import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SavedFlights = () => {
  const savedFlights = [
    {
      id: 1,
      route: 'JFK → LAX',
      aircraft: 'Gulfstream G650',
      date: 'Mar 20, 2025',
      price: '$12,500',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      route: 'MIA → LAS',
      aircraft: 'Bombardier Global 6000',
      date: 'Apr 5, 2025',
      price: '$15,750',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop&crop=center'
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Saved Flights</h1>
        <p className="text-gray-600 border-b pb-3">Your shortlisted private jet options</p>
      </div>

      {/* Flight Cards */}
      <div className="space-y-6">
        {savedFlights.map((flight) => (
          <Card key={flight.id} className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <CardContent className="">
              <div className="flex gap-6">
                {/* Flight Image */}
                <div className="flex-shrink-0">
                  <img
                    src={flight.image}
                    alt={flight.aircraft}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                </div>

                {/* Flight Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {flight.route}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {flight.aircraft}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {flight.date}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="bg-[#1B365D] hover:bg-[#1B365D] text-white px-6">
                      Book Now
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="text-red-600 border hover:text-red-700 hover:bg-red-50 px-4"
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <span className="text-2xl font-semibold text-gray-900">
                    {flight.price}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {savedFlights.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No saved flights found.</p>
        </div>
      )}
    </div>
  );
};

export default SavedFlights;