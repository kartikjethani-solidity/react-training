import { Profile } from "./components/profile";
import { User } from "./types/user";
import { H1 } from "./components/h1";
import { UserListing } from "./components/user-listing";
import { Modal } from "./components/modal";
import ProductDetails from "./components/product-details/product-details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/product-listing/product-listing";

function App() {
  // const signIn = () => {
  //   // api call to sign the user in which returns true or false
  //   const user = {
  //     isLoggedIn: true,
  //     name: "Kartik",
  //     id: 1,
  //     email: "kj@gmail.com",
  //   };
  //   // useReducer
  //   setLoggedIn(user.isLoggedIn);
  //   setUser(user);
  // };
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
  // // STATE
  // const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  // const [user, setUser] = useState<User>();
  // const myClassName = isLoggedIn ? "a" : "b";
  // return <Counter />;
  // return <ToolkitCounter count={1} />;
  // return (
  //   <Modal title="Login Modal">
  //     <LoginForm>
  //       <Modal title="Edit Profile Pic">
  //         <h1></h1>
  //       </Modal>
  //     </LoginForm>
  //   </Modal>
  // );
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

  return (
    <div className="App">
      <Router>
        <Modal title={"shopping krlooooooo"} />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
