import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

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
      // Fixed: Removed extra whitespace in URL
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop&crop=center'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-2">Saved Flights</h1>
        <p className="text-gray-600 border-b pb-3 max-w-3xl">Your shortlisted private jet options</p>
      </div>

      {/* Flight Cards */}
      <div className="space-y-6">
        {savedFlights.map((flight) => (
          <Card
            key={flight.id}
            className="border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            <CardContent className="p-4 sm:p-6">
              {/* Mobile: Stack | Desktop: Row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Flight Image */}
                <div className="flex-shrink-0 w-full sm:w-48 h-32">
                  <Image
                    src={flight.image}
                    alt={flight.aircraft}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Flight Details & Actions */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {flight.route}
                    </h3>
                    <p className="text-gray-600 mb-1">
                      {flight.aircraft}
                    </p>
                    <p className="text-gray-600">
                      {flight.date}
                    </p>
                  </div>

                  {/* Action Buttons - Stack on mobile */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
                    <Button className="bg-[#1B365D] hover:bg-[#1B365D] text-white w-full sm:w-auto px-6">
                      Book Now
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-red-600 border hover:text-red-700 hover:bg-red-50 w-full sm:w-auto px-4"
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                {/* Price - Full width on mobile, right-aligned on desktop */}
                <div className="flex-shrink-0 w-full sm:w-auto text-center sm:text-right mt-4 sm:mt-0">
                  <span className="text-2xl font-semibold text-gray-900 block">
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
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No saved flights found.</p>
        </div>
      )}
    </div>
  );
};

export default SavedFlights;