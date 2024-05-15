import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
      <div className="h-20 place-items-center mb-8 flex justify-center m-7">
        <div className="bg-emerald-300 grid-cols-1 divide-y f text-centre rounded-lg">
          <div className="ml-3 mr-3 mt-3 mb-2">Name: {name}</div>
          <div className="ml-3 mr-3 mt-3 mb-2">Email: {email}</div>
          <div className="ml-3 mr-3 mt-3 mb-2">Is Logged In ?: {isLoggedIn}</div>
        </div>
      </div>
    </>
  );
};
