const Select = () => {
    return (
      <div className="w-full">
        <label className="text-gray-700 font-medium mb-2 block">Input Label</label>
        <div className="relative">
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Select an option</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M5 13a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center">
            <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
            <span className="text-gray-700 font-medium">Option 1</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
            <span className="text-gray-700 font-medium">Option 2</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
            <span className="text-gray-700 font-medium">Option 3</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
            <span className="text-gray-700 font-medium">Option 4</span>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
            Clear
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    );
  };
  
  export default Select;