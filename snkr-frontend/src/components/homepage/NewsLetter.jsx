import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-4 py-10">
      {/* Content Section */}
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg sm:text-xl font-semibold text-gray-800">
          Want to be the first to access the latest drops? Sign up here!
        </p>

        {/* Input + Subscribe Button */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-6 py-2 w-full sm:w-auto bg-black text-white rounded-md hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
