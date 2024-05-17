import React, { ChangeEventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux-toolkit-store";
import { userNameUpdate, userPasswordUpdate } from "../../redux-toolkit-store/slices/counter/username.slice";

export const LoginForm = () => {
  const username = useSelector((state: RootState) => state.username.userid);
  const dispatch = useDispatch();
  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(userNameUpdate(e.target.value));
  };

  const userPassword = useSelector((state: RootState) => state.username.userPassword);
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(userPasswordUpdate(e.target.value));
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
    <div className="border h-32 w-80 mx-auto align-middle bg-slate-500 m-5 rounded flex justify-center flex-col">
    <div className="">
      <input
        value={username}
        onChange={handleChangeUsername}
        className="border m-1 border-red-300 rounded"
        name="username"
        placeholder="Enter username"
      />
    </div>
        <div>
        <input
          value={userPassword}
          onChange={handleChangePassword}
          className="border m-1 border-red-300 rounded"
          name="userPassword"
          type="password"
          placeholder="Enter user Password"
        />
      </div>
      <div>
      <button className="bg-orange-500 m-1 rounded" onClick={handleSubmit}>Submit</button>
      </div>


      
      </div>

      
  );
};
