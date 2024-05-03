import { FC, MouseEventHandler } from "react";
import { H1 } from "../h1";
import { User } from "../../types/user";

type ProfileProps = {
  user: User;
  clickHandler: any;
};

// PROPS
export const Profile: FC<ProfileProps> = ({ user, clickHandler }) => {
  const setCurrentUser = () => {
    clickHandler(user);
  };

  return (
    <>
      <div
        className="bg-red-300 flex-row items-center m-20 h-20 w-20 cursor-pointer"
        onClick={setCurrentUser}
      >
        <span className="text-white text-lg font-semibold">{user.name}</span>
      </div>

      {/* <h2>, {email}</h2>
      <div>{address?.firstLine}</div>
      <div>Is the user Logged in - {isLoggedIn ? "Yes" : "No"}</div> */}
    </>
  );
};
