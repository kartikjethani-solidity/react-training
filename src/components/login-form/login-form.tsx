import React, { ChangeEventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux-toolkit-store";
import { modifyUserName } from "../../redux-toolkit-store/slices/counter/username.slice";
import { modifyUserPassword } from "../../redux-toolkit-store/slices/counter/userpassword.slice";
import { useState } from "react";
export const LoginForm = () => {
  const username = useSelector((state: RootState) => state.username.value);
  const password = useSelector((state: RootState) => state.userPassword.value);

  const dispatch = useDispatch();

  const handleUserNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(modifyUserName(e.target.value));
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(modifyUserPassword(e.target.value));
  };

  type FormErrors = {
    username: "";
    password: "";
  };

  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });
  const validateUsername = (): boolean => {
    if (!username || /\d/.test(username)) {
      setFormError({ ...FormErrors, username: "Enter valid username address" });
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
      <input
        value={username}
        onChange={handleUserNameChange}
        className="border"
        name="username"
        placeholder="Enter username"
      />

      <input
        value={password}
        type="password"
        onChange={handlePasswordChange}
        className="border"
        name="password"
        placeholder="Enter password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
