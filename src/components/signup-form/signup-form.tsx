import { useState, useEffect } from "react";
// import "react-training/src/css/signup-form.css";

export function SignUp() {
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

  const validateFormInput = () => {
    // e.preventDefault();
    let inputError = {
      username: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.username && !formInput.password) {
      setFormError({
        ...inputError,
        username: "Enter valid username address",
        password: "Password should not be empty",
      });
    }

    if (!formInput.username) {
      setFormError({
        ...inputError,
        username: "Enter valid username address",
      });
    }

    if (formInput.confirmPassword != formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
    }

    setFormError(inputError);
    return Object.keys(inputError).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateFormInput()) return;

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
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className="error-message">{formError.password}</p>
            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
                validateFormInput();
              }}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>
            <button onClick={handleSubmit}>Sign Up</button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}
