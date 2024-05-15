import { ChangeEventHandler } from "react";
import React from "react";
import type { RootState } from "../../redux-toolkit-store";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux-toolkit-store/slices/counter/username.slice";

// type User = {
//   username: string;
//   password: string;
// };

export const LoginForm = () => {
  // const [isDisclaimerAgreed, setDisclaimerAgreed] = useState(false);

  // const [user, setUser] = useState<User>({ username: "", password: "" });

  const username = useSelector((state: RootState) => state.username.value);

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
        className="border border-red-300"
        name="username"
        placeholder="enter username"
      />
      <input
        value={user?.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="border border-red-300"
        type="password"
        name="password"
      />

      <button onClick={handleSubmit}>Login</button>

      {children}
    </div>
  );
};
