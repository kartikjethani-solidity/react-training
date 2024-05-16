import React from "react";
import { useState, ChangeEventHandler, FC, PropsWithChildren } from "react";

type User = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = [];

    if (!user.username || /\d/.test(user.username)) {
      errors.push("Username: ( !empty + only alphabets ");
    }

    if (!user.password || user.password.length < 6) {
      errors.push("password.length >=6");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email || !emailRegex.test(user.email)) {
      errors.push("Enter valid email address");
    }

    const phoneNumberRegex = /^(?:(?:\+?91[\-\s]?)?[0-9]{10})$/;
    if (!user.phoneNumber || !phoneNumberRegex.test(user.phoneNumber)) {
      errors.push("Enter a valid 10-digit Indian phone number");
    }

    if (!isDisclaimerAgreed) {
      errors.push("You must agree to the disclaimer");
    }

    setErrorMessages(errors);
    errorMessages.map((message, index) => {
      console.log(message);
    });
    return errors.length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      data.then(() => console.log("Submission successful", data));
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="login-form">
      {errorMessages.map((message, index) => (
        <p key={index} style={{ color: "red" }}>
          {message}
        </p>
      ))}

      <input value={user.username} onChange={handleChange} name="username" placeholder="Enter username" />
      <input
        value={user.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter Password"
        type="password"
      />
      <input value={user.email} onChange={handleChange} name="email" placeholder="Enter email" type="email" />
      <input
        value={user.phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
        placeholder="Enter phone number"
        type="tel"
      />
      <div className="checkbox-container flex items-center">
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Disclaimer
          </label>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        submit
      </button>
    </div>
  );
};
