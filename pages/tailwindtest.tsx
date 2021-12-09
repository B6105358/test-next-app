import React from "react";
import 'tailwindcss/tailwind.css';
import Image from 'next/image'




const TailwindTest = () => {
  return (
    <div className="bg-red-100 h-screen" >
      <div className="p-5 w-screen  mx-auto bg-black shadow-md flex items-left">
        <div className="flex-shrink-0">
        </div>
        <div>
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-blue-400 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-blue-400 rounded"></div>
                  <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl font-medium text-white">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm  mt-20 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 flex items-left sm:space-y-0 sm:space-x-6">
        <img className="animate-pulse block mx-auto h-24 w-24 item-center flex justify-center rounded-full sm:mx-0 sm:flex-shrink-0" src="https://bit.ly/3pJmKX8" alt="Woman's Face"></img>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p className="text-gray-500 font-medium">
              Computer Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
    </div>
  )
};

export default TailwindTest;
