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
        className="bg-red-300 flex items-center m-5 cursor-pointer overflow-hidden shadow-lg justify-center rounded-3xl h-40 w-40
        font-semibold "
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
