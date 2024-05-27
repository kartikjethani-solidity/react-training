import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { removeItem, decreaseItemQuantity, increaseItemQuantity, getCartTotal } from "../features/cartSlice";
import { RootState } from "../app/store";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state: RootState) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Products</Link>
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">cart({totalQuantity})</Link>
        </MDBBtn>
        <MDBBtn color="light"></MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
