<<<<<<< HEAD
import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
      <div className="p-1 flex flex-wrap items-center justify-center">
        <div
          className={`flex-shrink-0 m-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl  rounded-lg max-w-xs shadow-lg ${
            isLoggedIn ? "bg-green-300 " : "bg-pink-500"
          }`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;
"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{name}</span>
            <div className=" justify-between">
              <span className="block font-semibold text-xl">{email}</span>
              <div className="block   text-white-500 text-xs font-bold px-3 py-2 leading-none  items-center">
                {isLoggedIn ? "Logged In" : "Logged Out"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
=======
import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
      {/* <div className="bg-black text-white flex  ">
        <div>Name: {name}</div>
        <div > Email: {email}</div>
        <div> Is Logged In?: {isLoggedIn}</div>
      </div> */}
      <div className=" flex items-center justify-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center align-middle">
          <div className="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Name: {name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Email: {email}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Is Logged In?: {isLoggedIn}
            </span>
            <div className="flex mt-4 md:mt-6"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
>>>>>>> redux
