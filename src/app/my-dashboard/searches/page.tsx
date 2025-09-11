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
    <div className="">
      {/* Header */}
      <div className=" border-b">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Saved Searches</h1>
        <p className="text-gray-600 pb-4">Track your favorite flight routes</p>
      </div>

      {/* Search Cards */}
      <div className="space-y-6 pt-5">
        {savedSearches.map((search) => (
          <Card key={search.id} className="rounded-sm shadow hover:shadow-lg transition-shadow duration-200 bg-transparent p-3">
            <CardContent className="p-0">
              <div className="">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {search.route}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {search.details}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-red-600 border px-4 py-2 hover:text-red-700 hover:bg-red-50 h-auto font-normal text-sm"
                  >
                    Delete
                  </Button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{search.lastChecked}</span>
                  <span>{search.priceAlert}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {savedSearches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No saved searches found.</p>
        </div>
      )}
    </div>
  );
};

export default SavedSearches;