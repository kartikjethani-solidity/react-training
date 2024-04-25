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
        className="bg-blue-300 h-40 w-40 flex items-center m-20 cursor-pointer overflow-hidden shadow-lg rounded-3xl justify-center font-bold"
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
