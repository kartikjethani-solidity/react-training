import React, { ChangeEventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux-toolkit-store";
import { incrementByAmount } from "../../redux-toolkit-store/slices/counter/username.slice";

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
    <div>
      <input
        value={username}
        onChange={handleChange}
        className="border border-red-300"
        name="username"
        placeholder="Enter username"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
