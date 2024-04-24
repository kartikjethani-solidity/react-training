import { FC } from "react";
import { H1 } from "../h1";
import { User } from "../../types/user";

// PROPS
export const Profile: FC<User> = ({ name, email, address, isLoggedIn }) => {
  return (
    <>
      <div>
        <H1 heading={name} />
      </div>
      {/* <h2>, {email}</h2>
      <div>{address?.firstLine}</div>
      <div>Is the user Logged in - {isLoggedIn ? "Yes" : "No"}</div> */}
    </>
  );
};
