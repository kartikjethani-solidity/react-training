import React, { ChangeEventHandler, FC, PropsWithChildren, useState } from "react";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isUsernameValid, setUsernameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    // Validate username and password
    let usernameValid = true;
    let passwordValid = true;

    if (!user.username.trim()) {
      setUsernameValid(false);
      usernameValid = false;
    } else {
      setUsernameValid(true);
    }

    if (!user.password.trim()) {
      setPasswordValid(false);
      passwordValid = false;
    } else {
      setPasswordValid(true);
    }

    // If all inputs are valid, submit the form
    if (usernameValid && passwordValid) {
      // Proceed with form submission
      console.log("Form submitted");
    }
  };

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDisclaimerAgreed(e.target.checked);
  };

  return (
    <form className="max-w-sm mx-auto">
    <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter username</label>
      <input 
        type="text" 
        id="username" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Enter username" 
        value={user.username} 
        onChange={handleChange} 
        name="username" 
      />
      {!isUsernameValid && <div className="text-red-500 text-xs">Username is required</div>}
    </div>
    <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Password</label>
      <input 
        type="password" 
        id="password" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Enter Password" 
        value={user.password} 
        onChange={handleChange} 
        name="password" 
      />
      {!isPasswordValid && <div className="text-red-500 text-xs">Password is required</div>}
    </div>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input 
          id="remember" 
          type="checkbox" 
          value="" 
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
          checked={isDisclaimerAgreed} 
          onChange={handleCheckboxChange} 
          required 
        />
      </div>
      <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button 
      type="submit" 
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
      onClick={handleSubmit}
    >
      Login
    </button>
  </form>
  
  );
};