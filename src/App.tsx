import { useEffect, useState } from "react";
import "./App.css";
import { Profile } from "./components/profile";
import { User } from "./types/user";
import { H1 } from "./components/h1";
import { UserListing } from "./components/user-listing";
import { Modal } from "./components/modal";
import { LoginForm } from "./components/login-form";

function App() {
  return (
    <Modal title="Sign Up Modal">
      <LoginForm />
    </Modal>
  );
}

export default App;
