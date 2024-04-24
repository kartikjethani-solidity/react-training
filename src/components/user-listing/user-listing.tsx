import { FC, MouseEventHandler, useEffect, useState } from "react";
import { User } from "../../types/user";
import { Profile } from "../profile";
import { H1 } from "../h1";
import { UserDetails } from "./user-details";

type Props = {
  users: Array<User>;
};

export const UserListing = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((items) => {
        setUsers(items);
      });
  }, []);

  const setUserFromProfile = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="flex m-2 border rounded bg-slate-100">
        {users.map((user) => {
          return <Profile user={user} clickHandler={setSelectedUser} />;
        })}
      </div>

      <div>
        {selectedUser && (
          <UserDetails
            id={selectedUser.id}
            email={selectedUser.email}
            name={selectedUser.name}
            phone={selectedUser.phone}
            isLoggedIn={selectedUser.isLoggedIn}
            address={selectedUser.address}
          />
        )}
      </div>
    </>
  );
};
