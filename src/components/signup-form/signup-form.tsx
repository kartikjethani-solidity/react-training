/*
import { useState, useEffect, GetDerivedStateFromError } from "react";
// import "react-training/src/css/signup-form.css";

export function SignUp() {
  type FormErrors = {
    username: "";
    password: "";
    confirmPassword: "";
  };
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name: string, value: string) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleUsernameChange = (username: string) => {
    setFormInput({ ...formInput, username });
  };

  const validateFormInput = () => {
    // e.preventDefault();
    // const errors: FormErrors={};
    // if (!formInput.username && !formInput.password) {
    //   setFormError({
    //     ...formError,
    //     username: "Enter valid username address",
    //     password: "Password should not be empty",
    //   });
    //   console.log("inside username and password empty");
    // }
    // if (!formInput.username) {
    //   setFormError({
    //     ...formError,
    //     username: "Enter valid username address",
    //   });
    //   console.log("inside username empty");
    // }
    // if (formInput.confirmPassword != formInput.password) {
    //   setFormError({
    //     ...formError,
    //     confirmPassword: "Password and confirm password should be same",
    //   });
    //   console.log("inside same");
    // }
    // if (!formInput.password) {
    //   setFormError({
    //     ...formError,
    //     password: "Password should not be empty",
    //   });
    //   console.log("inside username empty");
    //   // }
    //   setFormError(formError);
    //   return Object.keys(formError).length === 0;
  };

  const isUsernameValid = () => {
    if (formInput.username == "") {
      setFormError({
        ...formError,
        username: "Enter valid username address",
      });
    } else {
      setFormError({
        ...formError,
        username: "",
      });
    }
  };

  const isPasswordValid = () => {
    if (!formInput.password) {
      setFormError({
        ...formError,
        password: "Password should not be empty",
      });
    } else {
      setFormError({
        ...formError,
        password: "",
      });
    }
  };

  const isConfirmPasswordValid = () => {
    if (formInput.confirmPassword != formInput.password) {
      setFormError({
        ...formError,
        confirmPassword: "Password and confirm password should be same",
      });
    } else {
      setFormError({
        ...formError,
        confirmPassword: "",
      });
    }
  };

  const handleSubmit = async () => {
    // if (!validateFormInput()) return;

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInput),
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error submitting form", error);
      console.log("error");
    }
  };

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">SIGN UP FORM</h4>
        </div>

        <div className="card-body">
          <form>
            <p className="label">Username</p>
            <input
              value={formInput.username}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              onBlur={isUsernameValid}
              name="username"
              type="text"
              className="input"
              placeholder="Enter username"
            />
            <p className="error-message">{formError.username}</p>
            <p className="label">Password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              onBlur={isPasswordValid}
              name="password"
              type="password"
              className="input"
              placeholder="Enter Password"
            />
            <p className="error-message">{formError.password}</p>
            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              onBlur={isConfirmPasswordValid}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>
            <button
              type="button"
              // onClick={addDetails}
            >
              Sign Up
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}
*/

import React, { ChangeEventHandler, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux-toolkit-store";
import { usernameHandle } from "../../redux-toolkit-store/slices/username";

export const SignUp = () => {
  type FormErrors = {
    username: "";
    password: "";
    confirmPassword: "";
  };
  const username = useSelector((state: RootState) => state.username.value);
  const password = useSelector((state: RootState) => state.password.value);
  const confirmPassword = useSelector((state: RootState) => state.confirmPassword.value);

  const dispatch = useDispatch();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(usernameHandle(e.target.value));
  };

  const [formError, setFormError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const isUsernameValid = (): boolean => {
    if (!username) {
      setFormError({
        ...formError,
        username: "Enter valid username address",
      });
      return false;
    } else {
      setFormError({
        ...formError,
        username: "",
      });
      return true;
    }
  };

  // const isPasswordValid = () => {
  //   if (!password) {
  //     setFormError({
  //       ...formError,
  //       password: "Password should not be empty",
  //     });
  //   } else {
  //     setFormError({
  //       ...formError,
  //       password: "",
  //     });
  //   }
  // };

  // const isConfirmPasswordValid = () => {
  //   if (formInput.confirmPassword != formInput.password) {
  //     setFormError({
  //       ...formError,
  //       confirmPassword: "Password and confirm password should be same",
  //     });
  //   } else {
  //     setFormError({
  //       ...formError,
  //       confirmPassword: "",
  //     });
  //   }
  // };

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
    if (isUsernameValid()) {
      postFormData();
    }
  };

  return (
    <>
      <h4 className="title">SIGN UP FORM</h4>

      <form>
        <p className="label">Username</p>
        <input
          value={username}
          onChange={handleChange}
          onBlur={isUsernameValid}
          name="username"
          type="text"
          className="input"
          placeholder="Enter username"
        />
        <p className="error-message">{formError.username}</p>
        {/* <p className="label">Password</p>
        <input
          value={formInput.password}
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
          onBlur={isPasswordValid}
          name="password"
          type="password"
          className="input"
          placeholder="Enter Password"
        />
        <p className="error-message">{formError.password}</p> */}
        {/* <p className="label">Confirm Password</p>
        <input
          value={formInput.confirmPassword}
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
          onBlur={isConfirmPasswordValid}
          name="confirmPassword"
          type="password"
          className="input"
          placeholder="Confirm Password"
        />
        <p className="error-message">{formError.confirmPassword}</p> */}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};
