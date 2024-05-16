import { FC, MouseEventHandler, useEffect, useState } from "react";
import { User } from "../../types/user";
import { Profile } from "../profile";
import { H1 } from "../h1";
import { UserDetails } from "./user-details";
import { calculationPromise } from "../../utils/promises";

type Props = {
  users: Array<User>;
};

export const UserListing = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    // consuming a promise
    calculationPromise
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("inside finally block");
      });

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((items) => {
        setUsers(items);
      })
      .catch((errorMessage) => console.error(errorMessage));
  }, []);

  const setUserFromProfile = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className=" flex justify-center">
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
    </>
  );
};
