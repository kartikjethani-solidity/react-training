import { url } from "inspector";
import { ChangeEventHandler, FC, PropsWithChildren, useState } from "react";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  const [firstName, setUserFirstName] = useState<string>("");
  const [lastName, setUserLastName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDisclaimerAgreed, setDisclaimerAgreed] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const firstNameHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserFirstName(e.target.value);
  };
  const lastNameHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setUserLastName(e.target.value);
  };

  const emailHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserEmail(e.target.value);
  };
  const passwordHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDisclaimerAgreed(e.target.checked);
  };

  const validateForm = () => {
    const errors = [];

    if (!password || password.length < 6) {
      errors.push("password.length >=6");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userEmail || !emailRegex.test(userEmail)) {
      errors.push("Enter valid email address");
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

  return (
    <>
      <div className="flex-auto">
        <div className=" bg-slate-400 flex justify-center ">
          <label htmlFor="First Name" className="mr-7">
            First Name{" "}
          </label>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={firstNameHandler}
            placeholder="Enter First Name"
            name="First Name"
          />
          <br />
        </div>
        <div className="flex justify-center bg-slate-400 ">
          <label htmlFor="Last Name" className=" mr-7">
            {" "}
            Last Name{" "}
          </label>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={lastNameHandler}
            placeholder="Enter Last Name "
            name="Last Name"
          ></input>
        </div>
        <br />
        <div className=" bg-slate-400 flex justify-center">
          <label htmlFor="Email" className=" mr-7">
            Enter Email{" "}
          </label>
          <br />
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={emailHandler}
            placeholder="Please Enter Email"
          ></input>
        </div>
        <div className=" bg-gray-400 flex justify-center">
          <label htmlFor="Password" className=" mr-7">
            Enter Password
          </label>
          <br />
          <input type="password" value={password} onChange={passwordHandler} placeholder="Enter Password" />
        </div>
        <br />
        <div className="flex justify-center bg-slate-400">
          <input type="checkbox" onChange={handleCheckboxChange} name="disclaimer" />
          <label className=" mr-7">Plese read and agree the disclaimer in order to proceed.</label>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Sign Up
      </button>
    </>
  );
};

// export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
//   //   const [username, setUsername] = useState<string>("kartik@gmail.com");
//   //   const [password, setPassword] = useState<string>("");

//   // const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

//   // const [user, setUser] = useState<User>({ username: "", password: "" });

//   //   const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
//   //     e
//   //   ) => {
//   //     setUsername(e.target.value);
//   //   };

//   //   const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
//   //     e
//   //   ) => {
//   //     setPassword(e.target.value);
//   //   };

//   //   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//   //     const { name, value } = e.target;
//   //     if (name === "username") {
//   //       setUsername(value);
//   //     } else if (name === "password") {
//   //       setPassword(value);
//   //     }
//   //   };

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
// const [useName , setUserName] = useState<string>(""); //-------------->for userName
// const [password , setPassword] = useState<string>(" ");
//   <input   value ={userName}   ></input>

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
