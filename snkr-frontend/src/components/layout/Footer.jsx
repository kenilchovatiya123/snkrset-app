import React from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* <div>
          <h1 className="mb-5 font-bold text-[32px]">THE.SNKRSET</h1>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            saepe consequuntur at voluptate illum quas sequi reprehenderit sit
            temporibus repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis, similique.
          </p>
        </div> */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/footwear">Delivery</NavLink>
            <NavLink to="/collections">Privacy Policy</NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/footwear">Delivery</NavLink>
            <NavLink to="/collections">Privacy Policy</NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">CUSTOMER SERVICES</p>
          <ul className="flex flex-col gap-1 text-gray-600">
          <NavLink to="/contact">Contact us</NavLink>
            <li>My Account</li>
            <li>Help</li>
            <li>Shipping</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-3 text-sm text-center">
          The.snkrcloset - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
