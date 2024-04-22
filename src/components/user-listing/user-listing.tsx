import { FC, MouseEventHandler, useEffect, useState } from "react";
import { User } from "../../types/user";
import { Profile } from "../profile";

type Props = {
  users: Array<User>;
};

export const UserListing: FC<Props> = ({ users }) => {
  // renders multiple user profiles

  // get users data from swapi
  // display name, height, age, hair_color
  // create a neat UI - refer tailwind ui components
  const updateUser: MouseEventHandler<HTMLButtonElement> = (event) => {
    const hashedEmail = "xxxx@xyz.com";
    setEmail(hashedEmail);
    // const updatedName = "Dhruv";
    // setName(updatedName);
  };

  const [email, setEmail] = useState<string>(users[0].email);
  const [name, setName] = useState<string>(users[0].name);

  // useEffect(() => {
  //   alert(`${name} ${email}`);
  // }, [name, email]);

  return (
    <>
      {users.map((user) => {
        return <Profile email={email} name={user.name} id={user.id} />;
      })}
      <button onClick={updateUser}>Hide Email</button>
    </>
  );
};
