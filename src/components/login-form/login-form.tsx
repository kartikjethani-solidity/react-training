import { url } from "inspector";
import { ChangeEventHandler, FC, PropsWithChildren, useState } from "react";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  //   const [username, setUsername] = useState<string>("kartik@gmail.com");
  //   const [password, setPassword] = useState<string>("");

  type User = {
    username: string;
    password: string;
  };

  const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

  const [user, setUser] = useState<User>({ username: "", password: "" });

  //   const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
  //     e
  //   ) => {
  //     setUsername(e.target.value);
  //   };

  //   const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
  //     e
  //   ) => {
  //     setPassword(e.target.value);
  //   };

  //   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //     const { name, value } = e.target;
  //     if (name === "username") {
  //       setUsername(value);
  //     } else if (name === "password") {
  //       setPassword(value);
  //     }
  //   };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    console.log(user, { name, value });
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    await fetch("/api/login", { method: "POST", body: JSON.stringify(user) });
  };

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.checked);
    setDisclaimerAgreed(e.target.checked);
  };

  return (
    <div className="mx-auto h-52 bg-orange-500">
      <input
        type="checkbox"
        checked={isDisclaimerAgreed}
        onChange={handleCheckboxChange}
      />

      <input
        value={user?.username}
        onChange={handleChange}
        className="border border-pink-300"
        name="username"
        placeholder="enter username"
      />
      <input
        value={user?.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="border border-pink-300"
        type="password"
        name="password"
      />

      <button onClick={handleSubmit}>Login</button>

      {children}
    </div>
  );
};
