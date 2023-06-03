import React from "react";
import FooterComponent from "./FooterComponent";

const ContactForm = () => {
  return (
    <div className="relative  min-w-screen bg-gray-800">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="text-white text-5xl font-bold mb-20 justify-center underline section-header max-sm:text-3xl">
          Contact
        </div>

        <form action="#" class="space-y-8">
          <div>
            <label for="subject" class=" block mb-2  font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full  bg-gray-700 rounded-lg border border-gray-300 text-white focus:outline-none"
              placeholder="Jhon Doe"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2  font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="block p-3 w-full  bg-gray-700 rounded-lg border border-gray-300 text-white focus:outline-none"
              placeholder="name@email.com"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2  font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class=" block p-2.5 w-full  text-white  bg-gray-700 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            className="z-[1] bg-transparent text-white hover:text-gray-800 py-2 px-4 border
       border-white mt-10 text-xl hover:bg-emerald-500 transition-colors duration-300 hover:border-emerald-500 my-word-btn"
          >
            <span>Send message</span>
          </button>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ContactForm;
