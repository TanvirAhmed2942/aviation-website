
const page = () => {

  const stats = [
    { label: 'Total Flights', value: '23' },
    { label: 'Upcoming Flights', value: '2' },
    { label: 'Total Spent', value: '$45,230' },
    { label: 'Rewards Earned', value: '$1,250' },
  ];



  const recentBookings = [
    {
      route: 'JFK → LAX',
      date: 'Mar 15, 2025',
      status: 'upcoming',
      statusLabel: 'Upcoming'
    },
    {
      route: 'SFO → MIA',
      date: 'Mar 10, 2025',
      status: 'completed',
      statusLabel: 'Completed'
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">Overview</h2>
        <p className="text-gray-600 mt-1">View and manage your bookings, saved searches and more.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {recentBookings.map((booking, index) => (
            <div key={index} className="p-6 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{booking.route}</h4>
                <p className="text-sm text-gray-600">{booking.date}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'upcoming'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-green-100 text-green-700'
                  }`}>
                  {booking.statusLabel}
                </span>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Ready for Takeoff?</h3>
          <p className="text-slate-300 mb-6">Book your next private flight and experience luxury in the skies.</p>
          <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Book a Flight
          </button>
        </div>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;