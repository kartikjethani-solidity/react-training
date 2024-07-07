import Navbar from "./Navbar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/Dhruv.gif" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 100%;
  }
`;

export default Header;
