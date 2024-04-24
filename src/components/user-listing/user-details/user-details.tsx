import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
      <div className="grid h-20 place-items-center mb-8 ">
        <div className="grid grid-cols-1 divide-y f text-centre ">
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Is Logged In ?: {isLoggedIn}</div>
        </div>
      </div>
    </>
  );
};
