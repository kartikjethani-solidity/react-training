import { useEffect, useState } from "react";
import "./App.css";
import { Profile } from "./components/profile";
import { User } from "./types/user";
import { H1 } from "./components/h1";
import { UserListing } from "./components/user-listing";
import { Modal } from "./components/modal";
import { LoginForm } from "./components/login-form";

function App() {
  // STATE
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const myClassName = isLoggedIn ? "a" : "b";

  return (
    <Modal title="Login Modal">
      <LoginForm>
        {/* <InputField>
        </InputField> */}
      </LoginForm>
    </Modal>
  );
}

export default App;
