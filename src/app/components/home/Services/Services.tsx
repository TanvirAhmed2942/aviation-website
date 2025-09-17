const Services = () => {
  return (
    <div className="w-full bg-gray-100 py-4 sm:py-6 md:py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
        {/* Item 1 */}
        <div className="text-center px-4 sm:px-5 md:px-6 w-full md:w-auto">
          <div className="flex flex-col items-center">
            {/* Icon for mobile */}
            <div className="md:hidden mb-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
              4000+ jets for different purposes
            </h3>
          </div>
        </div>

        {/* Divider for mobile */}
        <div className="md:hidden w-16 h-px bg-gray-200 my-2"></div>

        {/* Vertical Divider for desktop */}
        <div className="hidden md:block w-px h-12 lg:h-16 bg-gray-200"></div>

        {/* Item 2 */}
        <div className="text-center px-4 sm:px-5 md:px-6 w-full md:w-auto">
          <div className="flex flex-col items-center">
            {/* Icon for mobile */}
            <div className="md:hidden mb-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
              Finest and Safest private jets
            </h3>
          </div>
        </div>

        {/* Divider for mobile */}
        <div className="md:hidden w-16 h-px bg-gray-200 my-2"></div>

        {/* Vertical Divider for desktop */}
        <div className="hidden md:block w-px h-12 lg:h-16 bg-gray-200"></div>

        {/* Item 3 */}
        <div className="text-center px-4 sm:px-5 md:px-6 w-full md:w-auto">
          <div className="flex flex-col items-center">
            {/* Icon for mobile */}
            <div className="md:hidden mb-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
              24/7 Assisting you along the way
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;