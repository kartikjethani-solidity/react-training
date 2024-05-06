import { useEffect, useState } from "react";
import "./App.css";
import { Profile } from "./components/profile";
import { User } from "./types/user";
import { H1 } from "./components/h1";
import { UserListing } from "./components/user-listing";
import { Modal } from "./components/modal";
import { LoginForm } from "./components/login-form";

import {
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="/dashboard/1?name=kartik">Dashboard</Link>
            <Link to="/dashboard/2?name=shivansh">Dashboard</Link>
            <Link to="/dashboard/3">Dashboard</Link>
            <Link to="/dashboard/4">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Screen</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Screen</h2>
    </div>
  );
}

function Dashboard() {
  let { userId } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");
  if (name) {
    // some logic
  }

  console.log({ userId, name });

  return (
    <div>
      <h2>Dashboard Screen</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "About",
    path: "/about",
    component: <About />,
  },
];

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

// function App() {
//   const signIn = () => {
//     // api call to sign the user in which returns true or false
//     const user = {
//       isLoggedIn: true,
//       name: "Kartik",
//       id: 1,
//       email: "kj@gmail.com",
//     };

//     // useReducer

//     setLoggedIn(user.isLoggedIn);
//     setUser(user);
//   };

//   const users = [
//     { isLoggedIn: true, name: "Kartik", id: 1, email: "kj@gmail.com" },
//     {
//       isLoggedIn: false,
//       name: "Shivansh",
//       id: 1,
//       email: "shivansh@gmail.com",
//     },
//     { isLoggedIn: true, name: "Kamya", id: 1, email: "kamya@gmail.com" },
//   ];
//   // STATE
//   const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
//   const [user, setUser] = useState<User>();
//   const myClassName = isLoggedIn ? "a" : "b";

//   return (
//     <Modal title="Login Modal">
//       <LoginForm>
//         <Modal title="Edit Profile Pic">
//           <h1></h1>
//         </Modal>
//       </LoginForm>
//     </Modal>
//   );

//   // return (
//   //   <div className="App">
//   //     {user ? (
//   //       <Profile
//   //         user={user}
//   //         clickHandler={() => {}}
//   //         // address={{
//   //         //   firstLine: "Corenthum",
//   //         //   city: "Noida",
//   //         //   state: "UP",
//   //         // }}
//   //       />
//   //     ) : (
//   //       <button onClick={signIn}>Sign In</button>
//   //     )}

//   //     <div className={myClassName}>Hello</div>

//   //     {/* <Profile
//   //       email="shivansh@abc.com"
//   //       id={2}
//   //       name="Shivansh"
//   //       address={{
//   //         firstLine: "Corenthum",
//   //         city: "Noida",
//   //         state: "UP",
//   //       }}
//   //     /> */}

//   //     <div style={{ marginTop: "100px" }}>
//   //       <H1 heading="List of all users" />
//   //       <div style={{ marginTop: "20px" }}>
//   //         <UserListing />
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
// }

export default App;
