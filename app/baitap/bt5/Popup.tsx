import { RiErrorWarningLine } from 'react-icons/ri';

const Popup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <div className="flex items-center mb-4">
          <RiErrorWarningLine className="text-red-500 text-2xl mr-2" />
          <h2 className="text-lg font-medium">Delete blog post</h2>
        </div>
        <p className="mb-4">Are you sure you want to delete this post? This action cannot be undone.</p>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Cancel
          </button>
          <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;