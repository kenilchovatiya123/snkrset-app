import React from "react";
import { Link } from "react-router-dom";

const Title = ({ text1, text2 }) => {
  return (
    <div className="sm:px-6 px-2 py-4">
      <div className="text-sm text-gray-600 space-x-1">
        <Link to="/" className="hover:underline text-black">
          Home
        </Link>
        <span>{">"}</span>
        <span>{text1}</span>
        <span>{">"}</span>
        <span className="font-medium text-black">{text2}</span>
      </div>
    </div>
  );
};

export default Title;
