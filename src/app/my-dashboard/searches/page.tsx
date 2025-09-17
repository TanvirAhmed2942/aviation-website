import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SavedSearches = () => {
  const savedSearches = [
    {
      id: 1,
      route: 'JFK → LAX',
      details: 'Any • 2 passengers',
      lastChecked: 'Last checked: 2 hours ago',
      priceAlert: 'Price alert: $5,000'
    },
    {
      id: 2,
      route: 'MIA → LAS',
      details: 'Apr 2025 • 4 passengers',
      lastChecked: 'Last checked: 1 day ago',
      priceAlert: 'Price alert: $7,500'
    }
  ];

  return (
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Saved Searches</h1>
        <p className="text-gray-600 text-sm sm:text-base">Track your favorite flight routes</p>
      </div>

      {/* Search Cards */}
      <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-5">
        {savedSearches.map((search) => (
          <Card key={search.id} className="rounded-sm shadow hover:shadow-lg transition-shadow duration-200 bg-transparent p-3 sm:p-4">
            <CardContent className="p-0">
              <div className="">
                <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {search.route}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                      {search.details}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-red-600 border px-3 py-1.5 sm:px-4 sm:py-2 hover:text-red-700 hover:bg-red-50 h-auto font-normal text-xs sm:text-sm self-start xs:self-auto"
                  >
                    Delete
                  </Button>
                </div>

                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
                  <span>{search.lastChecked}</span>
                  <span className="font-medium">{search.priceAlert}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {savedSearches.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-sm sm:text-base">No saved searches found.</p>
        </div>
      )}
    </div>
  );
};

export default SavedSearches;