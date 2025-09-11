const Services = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col w-full md:flex-row items-center justify-center gap-28 py-3">
        {/* Item 1 */}
        <div className="text-center px-6">
          <h3 className="text-xl md:text-xl font-medium text-gray-800 mb-2">
            4000+ jets for different purposes
          </h3>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] h-[80px] bg-gray-200"></div>

        {/* Item 2 */}
        <div className="text-center px-6">
          <h3 className="text-xl md:text-xl font-medium text-gray-800 mb-2">
            Finest and Safest private jets
          </h3>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] h-[80px] bg-gray-200"></div>

        {/* Item 3 */}
        <div className="text-center px-6">
          <h3 className="text-xl md:text-xl font-medium text-gray-800 mb-2">
            24/7 Assisting you along the way
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
