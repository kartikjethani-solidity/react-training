import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addToCart } from "../features/cartSlice";

export default function ProductCard() {
  const items = useSelector((state: RootState) => state.allCart.items);
  const dispatch = useDispatch();

  // store mein jo bhi name de rhe reducers ka uska use kr skte hain

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((item: any) => (
            <MDBCol key={item.id} size="md">
              <MDBCard>
                <MDBCardImage src="item.img" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to cart</MDBBtn>

                  {/* <!-- ---------1-----> yha se addToCart function mein item pass hoga aur cartSlice mein reducer bna hua hai
                  us mein chala jaega as a state................................ --> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
