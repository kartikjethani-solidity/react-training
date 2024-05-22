import "./App.css";
import { LoginForm } from "./components/login-form";
import Counter from "./components/counter";
import { ToolkitCounter } from "./components/toolkit-counter";

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

  // return <Counter />;

  return <ToolkitCounter count={1} />;

  return (
    <Modal title="Login Modal">
      <LoginForm>
        <Modal title="Edit Profile Pic">
          <h1></h1>
        </Modal>
      </LoginForm>
    </Modal>
  );

  // return (
  //   <div className="App">
  //     {user ? (
  //       <Profile
  //         user={user}
  //         clickHandler={() => {}}
  //         // address={{
  //         //   firstLine: "Corenthum",
  //         //   city: "Noida",
  //         //   state: "UP",
  //         // }}
  //       />
  //     ) : (
  //       <button onClick={signIn}>Sign In</button>
  //     )}

  //     <div className={myClassName}>Hello</div>

  //     {/* <Profile
  //       email="shivansh@abc.com"
  //       id={2}
  //       name="Shivansh"
  //       address={{
  //         firstLine: "Corenthum",
  //         city: "Noida",
  //         state: "UP",
  //       }}
  //     /> */}

  //     <div style={{ marginTop: "100px" }}>
  //       <H1 heading="List of all users" />
  //       <div style={{ marginTop: "20px" }}>
  //         <UserListing />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
