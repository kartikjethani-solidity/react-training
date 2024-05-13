<<<<<<< HEAD
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
        className="bg-purple-400 flex items-center justify-center m-10 h-24 w-60 cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
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
=======
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
        <H1 heading={user.name} />
      </div>
      {/* <h2>, {email}</h2>
      <div>{address?.firstLine}</div>
      <div>Is the user Logged in - {isLoggedIn ? "Yes" : "No"}</div> */}
    </>
  );
};
>>>>>>> redux
