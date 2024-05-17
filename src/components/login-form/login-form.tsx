<<<<<<< HEAD
import { ChangeEventHandler } from "react";
import React from "react";
import { useState } from "react";
import type { RootState } from "../../redux-toolkit-store";
=======
import React, { ChangeEventHandler } from "react";
>>>>>>> 6b1f4d66cc8f9d831d15d825c8e3e75e429f2b28
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux-toolkit-store";
import { incrementByAmount } from "../../redux-toolkit-store/slices/counter/username.slice";

<<<<<<< HEAD
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

export const LoginForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);
  // const count = useSelector()
  const dispatch = useDispatch();
  // const [user, setUser] = useState<User>({ username: "", password: "" });

  const username = useSelector((state: RootState) => state.username.value);

  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   const { name, value } = e.target;
  //   console.log(user, { name, value });
  //   setUser({ ...user, [name]: value });
  // };

  // const handleSubmit = async () => {
  //   await fetch("/api/login", { method: "POST", body: JSON.stringify(user) });
  // };

  // const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   console.log(e.target.checked);
  //   setDisclaimerAgreed(e.target.checked);
  // };

  const validateForm = () => {
    const newErrors: LoginFormState = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      newErrors.email = "Invalid email address";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(user.password)) {
      newErrors.password = "Password must be at least 8 characters long and include at least one letter and one number";
    }

    setErrors(newErrors);

    // Return true if no errors
    return !newErrors.email && !newErrors.password;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (!validateForm()) return;

=======
export const LoginForm = () => {
  const username = useSelector((state: RootState) => state.username.value);
  const dispatch = useDispatch();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(incrementByAmount(e.target.value));
  };

  const validateUsername = (): boolean => {
    if (!username || /\d/.test(username)) {
      console.log(
        "Username must not be empty and should contain only alphabets."
      );
      return false;
    }
    return true;
  };

  const postFormData = async () => {
>>>>>>> 6b1f4d66cc8f9d831d15d825c8e3e75e429f2b28
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
        body: JSON.stringify(user),
      });

=======
        body: JSON.stringify({ name: username, password: 123 }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

>>>>>>> 6b1f4d66cc8f9d831d15d825c8e3e75e429f2b28
      const data = await response.json();
      console.log("Submission successful", data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
<<<<<<< HEAD
  };

  return (
    // <div className="mx-auto h-52 bg-orange-500">
    //   <input
    //     type="checkbox"
    //     checked={isDisclaimerAgreed}
    //     onChange={handleCheckboxChange}
    //   />

    //   <input
    //     value={user?.username}
    //     onChange={handleChange}
    //     className="border border-red-300"
    //     name="username"
    //     placeholder="enter username"
    //   />
    //   <input
    //     value={user?.password}
    //     onChange={handleChange}
    //     placeholder="Enter Password"
    //     className="border border-red-300"
    //     type="password"
    //     name="password"
    //   />

    //   <button onClick={handleSubmit}>Login</button>

    //   {children}
    // </div>
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              value={user.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
              value={user.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
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
          >
            Login
          </button>
        </form>
      </div>
=======
  };

  const handleSubmit = () => {
    if (validateUsername()) {
      postFormData();
    }
  };

  return (
    <div>
      <input
        value={username}
        onChange={handleChange}
        className="border border-red-300"
        name="username"
        placeholder="Enter username"
      />
      <button onClick={handleSubmit}>Submit</button>
>>>>>>> 6b1f4d66cc8f9d831d15d825c8e3e75e429f2b28
    </div>
  );
};
