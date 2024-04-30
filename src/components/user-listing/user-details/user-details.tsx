import { FC } from "react";
import { User } from "../../../types/user";

type Props = {
  user: User;
};

export const UserDetails: FC<User> = ({ email, name, isLoggedIn }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>
    <div className="flex items-center w-full justify-center ">
    <div className="bg-blue-100 shadow-xl rounded-lg py-3">
    <div className="bg-yellow">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Is Logged In?: {isLoggedIn}</div>
      </div>
      </div>
    </div>
    
    {/* <div className="bg-yellow">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Is Logged In?: {isLoggedIn}</div>
      </div> */}
    </>
  );
};
