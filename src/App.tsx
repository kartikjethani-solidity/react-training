import { useState } from "react";
import "./App.css";
import { Profile } from "./components/profile";
import { User } from "./types/user";

function App() {
  const signIn = () => {
    // api call to sign the user in which returns true or false
    const user = {
      isLoggedIn: true,
      name: "Kartik",
      id: 1,
      email: "kj@gmail.com",
    };

    // useReducer

    setLoggedIn(user.isLoggedIn);
    setUser(user);
  };
  // STATE
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const myClassName = isLoggedIn ? "a" : "b";

  return (
    <div className="App">
      {user ? (
        <Profile
          email={user.email}
          id={user.id}
          name={user.name}
          // address={{
          //   firstLine: "Corenthum",
          //   city: "Noida",
          //   state: "UP",
          // }}
        />
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}

      <div className={myClassName}>Hello</div>

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
    </div>
  );
}

export default App;
