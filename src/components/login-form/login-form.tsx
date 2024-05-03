
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
    <>
      <div className="login-form">
        {errorMessages.map((message, index) => (
          <p key={index} style={{ color: "red" }}>
            {message}
          </p>
        ))}
<div></div>
        <input
          value={user.username}
          onChange={handleChange}
          name="username"
          placeholder="Enter username"
        />
        <input
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter Password"
          type="password"
        />
        <input
          value={user.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter email"
          type="email"
        />
        <input
          value={user.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
          placeholder="Enter phone number"
          type="tel"
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isDisclaimerAgreed}
            onChange={(e) => setDisclaimerAgreed(e.target.checked)}
            id="disclaimer"
          />
          <label htmlFor="disclaimer" className="text-green-500">
            Disclaimer
          </label>
        </div>

        <button onClick={handleSubmit}>submit</button>

      </div>
    </>
  );

};
