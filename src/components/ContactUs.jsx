import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import "../styles/contact.css";
const ContactUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full" id="contact-section">
      <div className="hidden md:block py-8 px-12 bg-orange-200">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white before:absolute before:rounded-lg">
          Contact Us
        </h2>
        <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Send us your query, we'll get back to you shortly.
        </p>
        <div className="flex justify-between">
          <form action="#" class="space-y-8 w-96">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 box-size"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 box-size"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-sm font-medium sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-zinc-300 bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-2 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Send message
            </button>
          </form>
          <div class="flex-col">
            <p class="mb-4 tracking-tight font-600 box-size">Address</p>
            <div class="flex">
              <IoLocationSharp />
              <span class="contact-location">81, Hauz Khas</span>
            </div>
            <div class="flex py-4">
              <ImMobile />
              <span class="contact-location">9965606060</span>
            </div>
            <div class="flex">
              <MdOutlineMailOutline />
              <span class="contact-location">foodstopshop@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* For mobile view */}
      <div class="py-2 lg:py-4 px-4 mx-auto md:hidden bg-orange-200 pb-4">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Send us your query, we'll get back to you shortly.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-sm font-medium sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-zinc-300 bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-2 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
