import React, { useState } from "react";
import Title from "../components/layout/Title";
import NewsLetter from "../components/homepage/NewsLetter";

const Contact = () => {
  //   const onSubmitHandler = async (event) => {
  //     event.preventDefault();
  //   };

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <form
        // onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Your full name*"
          required
        />
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="The best number to catch you on*"
          required
        />
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Your email address*"
          required
        />
        <textarea
          className="w-full px-3 py-2 h-44 border border-gray-800 resize-none"
          placeholder="Type your message here*"
          required
        ></textarea>
        <button className="bg-black text-white font-light px-8 py-2 mt-4 w-full">
          Submit Contact
        </button>
      </form>
      <div className="pt-10">
        <NewsLetter/>
      </div>
    </div>
  );
};

export default Contact;
