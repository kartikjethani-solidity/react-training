import { FC } from "react";
import { User,} from "../../../types/user";

// type Props = {
//   user: User;
  
// };

export const UserDetails: FC<User> = ({ email, name, isLoggedIn, phone,address:{ houseNo, city, state, zipcode,country } }) => {
  //   const { name, email, isLoggedIn } = user;

  return (
    <>

    <div className="w-full max-w-sm bg-teal-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block m-5">
    <div className="flex justify-center p-4">
      <div className="">
      <img className=" inline-block bg-slate-100 w-28 h-28 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt= {name} />
        <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
        <div className="">Email : {email}</div>
        <div className="">Phone No : {phone}</div>
        <p className="">Address : {houseNo}, {city},{state},{zipcode}</p>
        <div className="">Is Logged In? : {isLoggedIn}</div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};