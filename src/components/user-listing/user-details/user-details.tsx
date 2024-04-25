import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
      <div className="inline-block	p-5 bg-yellow-300 rounded-xl">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Is Logged In?: {isLoggedIn}</div>
      </div>
    </>
  );
};
