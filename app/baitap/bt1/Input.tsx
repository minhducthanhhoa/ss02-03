import { FaEye } from 'react-icons/fa';

const Input = () => {
  return (
    <div className="w-full">
      <label className="text-blue-500 text-sm font-medium mb-1 block">Label</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Placeholder"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
          <FaEye className="text-gray-500 hover:text-gray-700" />
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-1">Helper Text</p>
    </div>
  );
};

export default Input;