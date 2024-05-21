import React from "react";

export const BaseRoom: React.FC = () => {
  return (
    <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105 ">
      <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center"></div>
      <div className="p-2 flex justify-center">
        <a href="#">
          <img className="rounded-md" />
        </a>
      </div>

      <div className="px-4 pb-3">
        <div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white "></h5>
          </a>
        </div>
      </div>
    </div>
  );
};
