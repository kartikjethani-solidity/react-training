import { FC, PropsWithChildren, useState } from "react";
import { H1 } from "../h1";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  // const showValidFormat = () => {
  //   <PasswordFormat />;
  // };
  const [PasswordFormat, setPasswordFormat] = useState<boolean>(false);

  const passwordFormatTrue: React.FocusEventHandler<HTMLInputElement> = () => {
    setPasswordFormat(true);
  };
  const passwordFormatFalse: React.FocusEventHandler<HTMLInputElement> = () => {
    setPasswordFormat(false);
  };

  const passwordCorrection = () => {
    var lowerCaseLetters = /[a-z]/g;
    var Upper;
  };
  return (
    <>
      <H1 heading="LOGIN/SIGN UP Page"></H1>
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onFocus={passwordFormatTrue}
            onBlur={passwordFormatFalse}
            onKeyUp={passwordCorrection}
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
