import React from "react";
import { assets } from "../assets/assets";

const PrivacyPolicy = () => {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50 text-gray-800 border-t border-gray-300 border-b">
      {/* Intro Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-normal mb-4">
          Why Shop With Us?
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Fast Delivery */}
        <div className="flex items-center gap-6">
          <img
            src={assets.fastShipping}
            alt="Fast Delivery"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
          <div>
            <p className="text-[16px] font-medium">Fast Delivery</p>
            <p className="text-gray-500 text-[12px]">
              Lightning-fast delivery across the country.
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex items-center gap-6">
          <img
            src={assets.paymentSecurity}
            alt="Secure Payment"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
          <div>
            <p className="text-[16px] font-medium">Secure Payment</p>
            <p className="text-gray-500 text-[12px]">
              Safe transactions through trusted gateways and methods.
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center gap-6">
          <img
            src={assets.freeShipping}
            alt="Free Shipping"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
          <div>
            <p className="text-[16px] font-medium">Free Shipping</p>
            <p className="text-gray-500 text-[12px]">
              Absolutely free express delivery on every order, no hidden
              charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
