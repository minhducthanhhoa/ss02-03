const FormLogin = () => {
    return (
      <div className="w-full max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Form Sign up</h2>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-700 font-medium">
                Phone number
              </label>
              <div className="flex">
                <div className="pr-2">
                  <select className="w-20 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="US">US +1</option>
                  </select>
                </div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (123) 456-789"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="text-gray-700 font-medium">
                Address
              </label>
              <textarea
                id="address"
                placeholder="Tell us a little about the project..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">Skills</p>
              <div className="flex items-center">
                <input type="checkbox" id="html" className="mr-2" />
                <label htmlFor="html" className="text-gray-700 font-medium">
                  HTML
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="javascript" className="mr-2" />
                <label htmlFor="javascript" className="text-gray-700 font-medium">
                  JavaScript
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ux-design" className="mr-2" />
                <label htmlFor="ux-design" className="text-gray-700 font-medium">
                  UX design
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="reactjs" className="mr-2" />
                <label htmlFor="reactjs" className="text-gray-700 font-medium">
                  React JS
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="css" className="mr-2" />
                <label htmlFor="css" className="text-gray-700 font-medium">
                  CSS
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="java" className="mr-2" />
                <label htmlFor="java" className="text-gray-700 font-medium">
                  Java
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FormLogin;