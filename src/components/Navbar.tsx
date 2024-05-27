import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Products</Link>
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">Cart(0)</Link>
        </MDBBtn>
        <MDBBtn color="light"></MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
