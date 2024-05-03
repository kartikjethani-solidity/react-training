
import React from "react";
import { useState, ChangeEventHandler, FC, PropsWithChildren } from "react";

type User = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export const LoginForm: FC<PropsWithChildren> = () => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email || !emailRegex.test(user.email)) {
      errors.push("Enter valid email address");
    }
    if (!user.password || user.password.length < 6) {
      errors.push("too short password");
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
      <div className="login-form ">



        <div className="bg-slate-500 m-6 w-6/12 h-72 inline-block  ">
          <div className="error-message mt-3">
        {errorMessages.map((message, index) => (
          <p key={index} style={{ color: "red" }}>
            {message}
          </p>
          
        ))}
        </div>
          <div className="form-group mt-3 ">
            <input
              id="email"
              className="border border-gray-300 rounded-sm px-2 py-1 border mb-2 w-1/3"
              value={user.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter username"
              maxLength={100}
            />
          </div>
          <div className="form-group">
            <input
              className="border border-gray-300 rounded-sm px-2 py-1 mb-2 w-1/3"
              id="password"
              type="password"
              name="password"
              placeholder="Enter Password"

              value={user.password}
              onChange={handleChange}

            />
          </div>

          <div className="mb-3">
            <div className="fbn">
              {" "}
              <button
                className="bg-[#f9593a] hover:bg-[#ef4727] text-white w-1/3 rounded font-semibold py-2.5"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={isDisclaimerAgreed}
                onChange={(e) => setDisclaimerAgreed(e.target.checked)}
                id="disclaimer"
              />
              <label htmlFor="disclaimer" className="text-green-500 mb-2">
                terms and conditions
              </label>
            </div>

            <div className="form-container--footer text-center">
              <p className="text-sm leading-3 mb-2">
                <button className="btn btn-link text-[#2ebe6e] hover:text-blue-500">
                  forgott password
                </button>
              </p>
              <p className="text-xs leading-3">
                create account ?
                <button

                  className=" text-[#2ebe6e] hover:text-blue-500 px-1 "
                >
                  {"  "}
                  sign UP
                </button>
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );

}
