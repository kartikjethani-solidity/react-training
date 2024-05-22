import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectLoading,
  selectError,
} from "../../toolkit-store/slices/product-slice/product.slice";
import { AppDispatch, RootState } from "../../toolkit-store/toolkit.store";
import ProductComponent from "../product-components/product-component";

const ProductListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
