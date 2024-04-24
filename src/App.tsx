import { useEffect, useState } from "react";
import "./App.css";
import { Profile } from "./components/profile";
import { User } from "./types/user";
import { H1 } from "./components/h1";
import { UserListing } from "./components/user-listing";

function App() {
  const signIn = () => {
    // api call to sign the user in which returns true or false
    const user = {
      isLoggedIn: true,
      name: "Kartik",
      id: 1,
      email: "kj@gmail.com",
      phone:9876321432,
      address: {
        houseNo: "D-48 sector-15",
        city: "Chandigarh",
        state: "Chandigarh",
        zipcode: 765683,
        country:"India"
      }
    };

    // useReducer

    setLoggedIn(user.isLoggedIn);
    setUser(user);
  };

  const users = [
    { isLoggedIn: true, name: "Kartik", id: 1, email: "kj@gmail.com" },
    {
      isLoggedIn: false,
      name: "Shivansh",
      id: 1,
      email: "shivansh@gmail.com",
    },
    { isLoggedIn: true, name: "Kamya", id: 1, email: "kamya@gmail.com" },
  ];
  // STATE
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const myClassName = isLoggedIn ? "a" : "b";

  return (
    <div className="App">
      {/* {user ? (
        <Profile
          user={user}
          clickHandler={() => { }}
        // address={{
        //   firstLine: "Corenthum",
        //   city: "Noida",
        //   state: "UP",
        // }}
        />
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}

      <div className={myClassName}>Hello</div> */}

      {/* <Profile
        email="shivansh@abc.com"
        id={2}
        name="Shivansh"
        address={{
          firstLine: "Corenthum",
          city: "Noida",
          state: "UP",
        }}
      /> */}

      <div className="flex justify-center " style={{ marginTop: "100px" }}>
        <div className="">
          <H1 heading="List of all users" />
          <div className="">
            <UserListing />
          </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
