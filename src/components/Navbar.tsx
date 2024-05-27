import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>All Products</span>
        <MDBBtn color="dark">Cart(0)</MDBBtn>

        <MDBBtn color="light"></MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
