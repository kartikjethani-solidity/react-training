import { ChangeEventHandler, useState } from "react";
import { H1 } from "../h1";
import { Address } from "../../types/address";

export const ValidationForm = () => {
  type User = {
    username: string;
    password: string;
    email: string;
    address: Address;
  };
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    email: "",
    address: { firstLine: "", zipcode: 0 },
  });

  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [tandcAgreed, settandcAgreed] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const tandcHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
    settandcAgreed(e.target.checked);
  };
  const validateForm = () => {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email || !emailRegex.test(user.email)) {
      errors.push("Enter valid email address");
    }

    if (!tandcAgreed) {
      errors.push("You must agree to the disclaimer");
    }

    setErrorMessages(errors);
    errorMessages.map((message, index) => {
      console.log(message);
    });

    return errors.length === 0;
  };
  const clickSubmit = () => {
    if (!validateForm()) return;
  };

  return (
    <>
      <H1 heading="registration form"></H1>

      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={user.username}
          size={50}
          placeholder="Enter your username here!!"
          required
          onChange={handleChange}
        />

        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" placeholder="Enter your First name" size={20} required />

        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" size={20} placeholder="Enter your last name" />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          size={50}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          // value={user.address}
          size={60}
          placeholder="Enter your ghr ka address"
        />

        <label htmlFor="country">Country:</label>
        <select name="country">
          <option selected value="Default">
            (Please select a country)
          </option>
          <option value="AF">Australia</option>
          <option value="AL">Canada</option>
          <option value="IN">India</option>
          <option value="AS">Russia</option>
          <option value="AD">USA</option>
        </select>

        <label id="gender">Gender:</label>
        <input type="radio" name="msex" value="Male" />
        <span>Male</span>
        <input type="radio" name="fsex" value="Female" />
        <span>Female</span>
        <input type="radio" name="osex" value="Other" />
        <span>Other</span>

        <label>Language:</label>
        <input type="checkbox" name="en" value="en" checked />
        <span>English</span>
        <input type="checkbox" name="nonen" value="noen" />
        <span>Non English</span>

        <label htmlFor="about">About:</label>
        <textarea name="about" id="about" placeholder="Enter your something interesting..."></textarea>

        <input type="checkbox" name="tandc" checked={tandcAgreed} onChange={tandcHandle} />
        <span>Agree with all the etrms and conditions??</span>

        <button type="submit" value="Submit" onClick={clickSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
