import { H1 } from "../h1";

export const ValidationForm = () => {
  return (
    <>
      <H1 heading="registration form"></H1>

      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" size={50} placeholder="Enter your username here!!" required />

        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" placeholder="Enter your First name" size={20} required />

        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" size={20} placeholder="Enter your last name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" size={50} placeholder="Enter your email" />

        <label htmlFor="address">Address:</label>
        <input type="text" name="address" size={60} placeholder="Enter your ghr ka address" />

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

        <input type="checkbox" name="tandc" value="tandc" />
        <span>Agree with all the etrms and conditions??</span>

        <button type="submit" value="Submit ">
          Submit
        </button>
      </form>
    </>
  );
};
