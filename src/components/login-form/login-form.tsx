import { ChangeEventHandler } from "react";
import React from "react";
// import { useState } from "react";
import type { RootState } from "../../redux-toolkit-store";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux-toolkit-store/slices/counter/username.slice";
import { modifyUserPassword } from "../../redux-toolkit-store/slices/counter/userpassword.slice";
import { modifyUserEmail } from "../../redux-toolkit-store/slices/counter/useremail.slice";
// import userEvent from "@testing-library/user-event";

// const [formState, setFormState] = useState<LoginFormState>({
//   email: "",
//   password: "",
// });

type LoginFormState = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const username = useSelector((usernamestate: RootState) => usernamestate.username.value);
  const userPassword = useSelector((state: RootState) => state.userPassword.value);

  const dispatch = useDispatch();

  const handleUserNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(incrementByAmount(e.target.value));
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(modifyUserPassword(e.target.value));
  };

  const validateUsername = (): boolean => {
    if (!username || /\d/.test(username)) {
      console.log("Username must not be empty and should contain only alphabets.");
      return false;
    }
    return true;
  };

  const postFormData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, password: 123 }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Submission successful", data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleSubmit = () => {
    if (validateUsername()) {
      postFormData();
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
                value={username}
                onChange={handleUserNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                value={userPassword}
                onChange={handlePasswordChange}
                required
              />

              <a
                href="/"
                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                  checked
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <a
                href="/"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Account
              </a>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
