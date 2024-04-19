import { FC } from "react";
import { User } from "../../types/user";
import { Profile } from "../profile";

type Props = {
  users: Array<User>;
};

export const UserListing: FC<Props> = ({ users }) => {
  // renders multiple user profiles

  return (
    <>
      {users.map((item) => {
        const modifiedUsers = {
          ...item,
          //   isLoggedIn: true,
        };
        return <Profile {...modifiedUsers} />;
      })}
    </>
  );
};
