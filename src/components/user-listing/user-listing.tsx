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
<<<<<<< HEAD
      {users.map((user) => {
        return <Profile email={user.email} name={user.name} id={user.id} />;
      })}

      {/* <UserDetails id{1} /> */}
=======
      <div>
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
            isLoggedIn={selectedUser.isLoggedIn}
          />
        )}
      </div>
>>>>>>> ffc60df6795c7327d6f0c18d130e432f172aa2cc
    </>
  );
};
