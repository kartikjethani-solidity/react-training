import { FC } from "react";
import { H1 } from "../h1";
import { User } from "../../types/user";

// PROPS
export const Profile: FC<User> = ({ name, email, address, isLoggedIn }) => {
  return (
    <>
      <H1 heading={name} />
      <h2>, {email}</h2>
      <div>{address?.firstLine}</div>
      <div>Is the user Logged in - {isLoggedIn ? "Yes" : "No"}</div>
    </>
  );
};
