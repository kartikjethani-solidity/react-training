import { FC, PropsWithChildren, useState } from "react";
import { H1 } from "../h1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  type User = {
    username: string;
    password: string;
  };

  const initialValues = { username: "", password: "" };
  const [user, setUser] = useState<User>(initialValues);
  const [PasswordFormat, setPasswordFormat] = useState<boolean>(false);
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const passwordFormatTrue: React.FocusEventHandler<HTMLInputElement> = () => {
    setPasswordFormat(true);
  };
  const passwordFormatFalse: React.FocusEventHandler<HTMLInputElement> = () => {
    setPasswordFormat(false);
  };

  const handleChange: any = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
    console.log(user);
  };

  const validatePassword = (e: any) => {
    const password = e.target.value;

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(password)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }

    setUpperValidated(upper.test(password));
    setNumberValidated(number.test(password));
    setSpecialValidated(special.test(password));
    setLengthValidated(length.test(password));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setFormErrors(validate(user));
  };

  const invalid = { color: "#999" }; // Dull text color
  const valid = { color: "black" };
  return (
    <>
      <H1 heading="LOGIN/SIGN UP Page"></H1>
      <div>
        <pre>{JSON.stringify(user, undefined, 2)}</pre>
        <form>
          <label htmlFor="username">Username </label>
          <input
            value={user.username}
            type="text"
            name="username"
            placeholder="Enter username "
            required
            onChange={handleChange}
          />

          <label htmlFor="password">Password </label>
          <input
            type="password"
            value={user.password}
            name="password"
            placeholder="Enter password"
            required
            onFocus={passwordFormatTrue}
            onBlur={passwordFormatFalse}
            onChange={(e) => {
              handleChange(e);
              validatePassword(e);
            }}
          />

          <button type="submit" value="Submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      {PasswordFormat && (
        <div id="message">
          <h3>Password must contain the following:</h3>{" "}
          <p id="letter" style={lowerValidated ? valid : invalid}>
            <FontAwesomeIcon icon={lowerValidated ? faCheck : faTimes} /> A <b>lower case</b> letter{" "}
          </p>
          <p id="capital" style={upperValidated ? valid : invalid}>
            <FontAwesomeIcon icon={upperValidated ? faCheck : faTimes} /> A <b>capital (uppercase)</b> letter{" "}
          </p>{" "}
          <p id="number" style={numberValidated ? valid : invalid}>
            <FontAwesomeIcon icon={numberValidated ? faCheck : faTimes} /> A <b>number</b>{" "}
          </p>{" "}
          <p id="specialchar" style={specialValidated ? valid : invalid}>
            <FontAwesomeIcon icon={specialValidated ? faCheck : faTimes} /> A <b>special character</b>{" "}
          </p>{" "}
          <p id="length" style={lengthValidated ? valid : invalid}>
            <FontAwesomeIcon icon={lengthValidated ? faCheck : faTimes} /> Minimum <b>8 characters</b>{" "}
          </p>{" "}
        </div>
      )}
    </>
  );
};
