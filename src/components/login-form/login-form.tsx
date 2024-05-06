import React from "react";
import {
  useState,
  useEffect,
  ChangeEventHandler,
  FC,
  PropsWithChildren,
} from "react";

type User = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};
type Error = {
  username?: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
  disclaimer?: string;
};
type FirstLoad = {
  username?: number;
  password?: number;
  email?: number;
  phoneNumber?: number;
};
export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  });
  const [errorMessages, setErrorMessages] = useState<Error>({});
  const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(true);
  const [disclaimerFirstLoad, setDisclaimerFirstState] = useState(false);
  const [firstLoads, setFirstLoad] = useState<FirstLoad>({
    username: 1,
    password: 1,
    email: 1,
    phoneNumber: 1,
  });
  // const [isFormPosted, setPostStatus]
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    // validateForm();
    setFirstLoad((prev) => ({ ...prev, [name]: 0 }));
  };

  const validateForm = () => {
    let errors: Error = {};

    if (!user.username || /\d/.test(user.username)) {
      if (!firstLoads.username)
        errors.username = "Username: ( !empty and only alphabets ) ";
    }

    if (!user.password || user.password.length < 6) {
      if (!firstLoads.password)
        errors.password = "password: ( !empty and .length>5 ) ";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email || !emailRegex.test(user.email)) {
      if (!firstLoads.email) errors.email = "Enter valid email address";
    }

    const phoneNumberRegex = /^(?:(?:\+?91[\-\s]?)?[0-9]{10})$/;
    if (!user.phoneNumber || !phoneNumberRegex.test(user.phoneNumber)) {
      if (!firstLoads.phoneNumber)
        errors.phoneNumber = "Enter a valid 10-digit Indian phone number";
    }

    if (!isDisclaimerAgreed) {
      if (!disclaimerFirstLoad)
        errors.disclaimer = "You must agree to the disclaimer";
    }

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  };

  const postFormData = async () => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      // data.then(() => console.log("Submission successful", data));
    } catch (error) {
      console.error("Error submitting form", error);
      console.log("error");
    }
  };
  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("invalid input");
      return;
    }
    postFormData();
  };
  useEffect(() => {
    validateForm();
  });
  const handleDisclaimer: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDisclaimerAgreed(e.target.checked);
    setDisclaimerFirstState(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            ></a>
          </p>
        </div>
        <div className=" bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid gap-6">
              <div className="col-span-12">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {errorMessages.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.username}
                  </p>
                )}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {errorMessages.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.password}
                  </p>
                )}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {errorMessages.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessages.email}
                  </p>
                )}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            {errorMessages.phoneNumber && (
              <p className="text-red-500 text-sm mt-2">
                {errorMessages.phoneNumber}
              </p>
            )}
          </div>
          <div className="checkbox-container mt-2">
            <input
              type="checkbox"
              id="disclaimer"
              name="disclaimer"
              checked={isDisclaimerAgreed}
              onChange={handleDisclaimer}
            />
            <label
              htmlFor="disclaimer"
              className={isDisclaimerAgreed ? "text-green-500" : "text-red-500"}
            >
              Disclaimer
            </label>
          </div>
          {errorMessages.disclaimer && (
            <p className="text-red-500 text-sm mt-1">
              {errorMessages.disclaimer}
            </p>
          )}
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSubmit}
          >
            Register : )
          </button>
          <div className="h-screen justify-center"></div>
        </div>
      </div>
    </div>
  );
};
