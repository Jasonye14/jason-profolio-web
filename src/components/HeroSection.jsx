import React from "react";

function HeroSection() {
  return (
    <div className="flex item-center justify-center flex-col py-10">
      <div className="text-center mx-auto">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
          Hi there, I'm Jason!
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
            I love to learn and grow my skills. Most importantly, I code stuff.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border border-transparent text-base 
          font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          See works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
