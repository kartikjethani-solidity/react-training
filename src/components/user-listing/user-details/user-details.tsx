import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <div
        className={`max-w-sm border border-gray-200 rounded-lg shadow ${
          isLoggedIn ? "bg-blue-700" : "bg-red-500 dark:bg-gray-800"
        } dark:border-gray-700`}
      >
        <a href="/">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="/">
            <h5
              className={`mb-2 text-2xl font-bold tracking-tight ${
                isLoggedIn ? "text-white" : "text-white dark:text-white"
              }`}
            >
              {name}
            </h5>
          </a>
          <p
            className={`mb-3 font-normal ${
              isLoggedIn ? "text-white" : "text-white dark:text-white"
            }`}
          >
            {email}
          </p>
          <a
            href="/"
            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center ${
              isLoggedIn
                ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                : "text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
            } rounded-lg`}
          >
            {isLoggedIn ? "Loggen In" : "Logged out"}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
