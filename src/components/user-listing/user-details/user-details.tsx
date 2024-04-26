import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
      <div className="bg-yellow">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Is Logged In?: {isLoggedIn}</div>
      </div>
    </>
  );
};
