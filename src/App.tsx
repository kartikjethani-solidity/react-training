import "./App.css";
import { LoginForm } from "./components/login-form";
<<<<<<< HEAD
// import { Counter } from "./components/counter-toolkit";
// import Counter from "./components/counter";

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

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

  const signIn = () => {
    const user = {
      isLoggedin: true,
      name: "Dhruv",
      id: 1,
      email: "dhruv@worksimpli",
    };

    setLoggedIn(user.isLoggedin);
    setUser(user);
  };

  // const users = [
  //   { isLoggedIn: true, name: "Kartik", id: 1, email: "kj@gmail.com" },
  //   {
  //     isLoggedIn: false,
  //     name: "Shivansh",
  //     id: 1,
  //     email: "shivansh@gmail.com",
  //   },
  //   { isLoggedIn: true, name: "Kamya", id: 1, email: "kamya@gmail.com" },
  // ];
  // STATE
  // const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  // const [user, setUser] = useState<User>();
  const myClassName = isLoggedIn ? "a" : "b";

  // return <Counter />;

  return (
    // <Modal title="Login Modal">
    <LoginForm />

    // </Modal>
  );
  {
    /* <Modal title="Edit Profile Pic">
          <h1></h1>
        </Modal> */
  }
  {
    /* </LoginForm> */
  }
  // return (
  //   <div className="App">
  //     {user ? (
  //       <Profile
  //         user={user}
  //         clickHandler={() => {}}
  //         address={{
  //           firstLine: "Corenthum",
  //           city: "Noida",
  //           state: "UP",
  //         }}
  //       />
  //     ) : (
  //       <button onClick={signIn}>Sign In</button>
  //     )}

  //     <div className={myClassName}>Hello</div>

  //     <Profile
  //       email="shivansh@abc.com"
  //       id={2}
  //       name="Shivansh"
  //       address={{
  //         firstLine: "Corenthum",
  //         city: "Noida",
  //         state: "UP",
  //       }}
  //     />

  //     <div style={{ marginTop: "100px" }}>
  //       <H1 heading="List of all users" />
  //       <div style={{ marginTop: "20px" }}>
  //         <UserListing />
  //       </div>
  //     </div>
  //   </div>

  //--------------TAILWIND CARDS-------------------------
  // return (
  //   <div className="App">
  //     {user ? (
  //       <div className="grid grid-cols-3 place-items-center">
  //         <Profile user={user} clickHandler={() => {}} />
  //       </div>
  //     ) : (
  //       <button
  //         type="button"
  //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  //         onClick={signIn}
  //       >
  //         Signin
  //       </button>
  //     )}
  //     <div style={{ marginTop: "100px" }}>
  //       <H1 heading="List of all users" />
  //       <div style={{ marginTop: "20px" }}>
  //         <UserListing />
  //       </div>
  //     </div>
  //   </div>
  // );
=======
// import Counter from "./components/counter";

function App() {
  return <LoginForm />;
>>>>>>> 6b1f4d66cc8f9d831d15d825c8e3e75e429f2b28
}

export default App;
