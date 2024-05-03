import { FC, PropsWithChildren, useState } from "react";
import { H1 } from "../h1";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  // const showValidFormat = () => {
  //   <PasswordFormat />;
  // };

  type User = {
    username: string;
    password: string;
  };

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const [PasswordFormat, setPasswordFormat] = useState<boolean>(false);

  const passwordFormatTrue: React.FocusEventHandler<HTMLInputElement> = () => {
    setPasswordFormat(true);
  };
  const passwordFormatFalse: React.FocusEventHandler<HTMLInputElement> = () => {
    setPasswordFormat(false);
  };

  const usernamechange: any = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // const passwordCorrection = () => {
  // var lowerCaseLetters = /[a-z]/g;
  //     var isUpperCase = new RegExp(/(?=.*[A-Z])/g)

  return (
    <>
      <H1 heading="LOGIN/SIGN UP Page"></H1>
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input
            value={user.username}
            type="text"
            name="username"
            placeholder="Enter username"
            required
            onChange={usernamechange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            name="password"
            placeholder="Enter password"
            required
            onFocus={passwordFormatTrue}
            onBlur={passwordFormatFalse}
            onChange={usernamechange}

            // onKeyUp={passwordCorrection}
          />

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>

      {PasswordFormat && (
        <div id="message">
          <h3>Password must contain the following:</h3>{" "}
          <p id="letter" className="invalid">
            A <b>lowercase</b> letter{" "}
          </p>{" "}
          <p id="capital" className="invalid">
            A <b>capital (uppercase)</b> letter{" "}
          </p>{" "}
          <p id="number" className="invalid">
            A <b>number</b>{" "}
          </p>{" "}
          <p id="length" className="invalid">
            Minimum <b>8 characters</b>{" "}
          </p>{" "}
        </div>
      )}
    </>
  );
};

{
  /* <div className="mx-auto h-52 bg-orange-500">
      <input
        className="border border-red-300"
        name="username"
        placeholder="enter username"
      />
      <input
        placeholder="Enter Password"
        className="border border-red-300"
        type="password"
        name="password"
      />
      <button>Login</button>

      {children}
    </div> */
}
