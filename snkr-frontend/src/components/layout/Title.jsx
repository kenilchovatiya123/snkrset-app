import React from "react";
import { Link } from "react-router-dom";

const Title = ({ text1, text2 }) => {
  return (
    <div className="px-2 py-2 hidden sm:block">
      <div className="text-gray-800 space-x-1 text-[12px] uppercase flex items-center gap-1">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <p>{">"}</p>
        <p>{text1}</p>
        <p>{">"}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Title;
