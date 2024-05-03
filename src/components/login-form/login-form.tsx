// import { url } from "inspector";
// import { ChangeEventHandler, FC, PropsWithChildren, useState } from "react";

// export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
//   //   const [username, setUsername] = useState<string>("kartik@gmail.com");
//   //   const [password, setPassword] = useState<string>("");

//   type User = {
//     username: string;
//     password: string;
//   };

//   const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

//   const [user, setUser] = useState<User>({ username: "", password: "" });

//   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     const { name, value } = e.target;
//     console.log(user, { name, value });
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async () => {
//     await fetch("/api/login", { method: "POST", body: JSON.stringify(user) });
//   };

//   const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
//     console.log(e.target.checked);
//     setDisclaimerAgreed(e.target.checked);
//   };

//   return (
//     <div className="mx-auto h-52 bg-orange-500">
//       <input
//         type="checkbox"
//         checked={isDisclaimerAgreed}
//         onChange={handleCheckboxChange}
//       />

//       <input
//         value={user?.username}
//         onChange={handleChange}
//         className="border border-red-300"
//         name="username"
//         placeholder="enter username"
//       />
//       <input
//         value={user?.password}
//         onChange={handleChange}
//         placeholder="Enter Password"
//         className="border border-red-300"
//         type="password"
//         name="password"
//       />

//       <button onClick={handleSubmit}>Login</button>

//       {children}
//     </div>
//   );
// };
import React from "react";
import { useState, ChangeEventHandler, FC, PropsWithChildren } from "react";

type User = {
  username: string;
  password: string;
};

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
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
      data.then(() => console.log("successful", data));
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="login-form">
      {errorMessages.map((message, index) => (
        <p key={index} style={{ color: "black" }}>
          {message}
        </p>
      ))}

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

      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={isDisclaimerAgreed}
          onChange={(e) => setDisclaimerAgreed(e.target.checked)}
          id="disclaimer"
        />
        <label htmlFor="disclaimer" className="text-red-500">
          Disclaimer
        </label>
      </div>

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
