import { FC, MouseEventHandler, useEffect, useState } from "react";
import { User } from "../../types/user";
import { Profile } from "../profile";

type Props = {
  users: Array<User>;
};

export const UserListing = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((items) => {
        setUsers(items);
      });
  }, []);

  return (
    <>
      {users.map((user) => {
        return <Profile email={user.email} name={user.name} id={user.id} />;
      })}
    </>
  );
};
