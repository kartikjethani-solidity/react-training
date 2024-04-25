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
      <div className="flex flex-row flex-1 justify-center ">
        {users.map((user) => {
          return (
            <div className=" bg-gray-200 m-10 cursor-pointer content-center p-18 w-40 h-40 rounded-md">
              <Profile user={user} clickHandler={setSelectedUser} />
            </div>
          );
        })}
      </div>

      <div>
        {selectedUser && (
          <UserDetails
            id={selectedUser.id}
            email={selectedUser.email}
            name={selectedUser.name}
            isLoggedIn={selectedUser.isLoggedIn}
          />
        )}
      </div>
    </>
  );
};
