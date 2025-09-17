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
    <div className="px-4 sm:px-6">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Overview</h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">View and manage your bookings, saved searches and more.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 md:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">{stat.label}</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 md:mb-8 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Bookings</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {recentBookings.map((booking, index) => (
            <div key={index} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{booking.route}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{booking.date}</p>
              </div>
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'upcoming'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-green-100 text-green-700'
                  }`}>
                  {booking.statusLabel}
                </span>
                <button className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors w-full xs:w-auto text-center">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 md:p-8 text-center text-white relative overflow-hidden mb-6 md:mb-8">
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready for Takeoff?</h3>
          <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">Book your next private flight and experience luxury in the skies.</p>
          <button className="bg-white text-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
            Book a Flight
          </button>
        </div>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 sm:w-24 sm:h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 border border-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;