import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    // <>
    //   {/* <div className="bg-black text-white flex  ">
    //     <div>Name: {name}</div>
    //     <div > Email: {email}</div>
    //     <div> Is Logged In?: {isLoggedIn}</div>
    //   </div> */}
    //   <div className=" flex items-center justify-center">
    //     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center align-middle">
    //       <div className="flex justify-end px-4 pt-4">
    //         <button
    //           id="dropdownButton"
    //           data-dropdown-toggle="dropdown"
    //           className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
    //           type="button"
    //         >
    //           <span className="sr-only">Open dropdown</span>
    //           <svg
    //             className="w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 16 3"
    //           >
    //             <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    //           </svg>
    //         </button>
    //         <div
    //           id="dropdown"
    //           className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    //         >
    //           <ul className="py-2" aria-labelledby="dropdownButton">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //               >
    //                 Edit
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //               >
    //                 Export Data
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //               >
    //                 Delete
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-center pb-10">
    //         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
    //           Name: {name}
    //         </h5>
    //         <span className="text-sm text-gray-500 dark:text-gray-400">
    //           Email: {email}
    //         </span>
    //         <span className="text-sm text-gray-500 dark:text-gray-400">
    //           Is Logged In?: {isLoggedIn}
    //         </span>
    //         <div className="flex mt-4 md:mt-6"> </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div className="p-1 flex flex-wrap items-center justify-center">
      <div
        className={`max-w-sm border border-gray-200 rounded-lg shadow ${
          isLoggedIn ? "bg-blue-700" : "bg-red-500 dark:bg-gray-800"
        } dark:border-gray-700`}
      >
        <a href="/">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
          <p className={`mb-3 font-normal ${isLoggedIn ? "text-white" : "text-white dark:text-white"}`}>{email}</p>
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
