import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../toolkit-store/toolkit.store";
import { fetchProducts, selectAllProducts, selectLoading, selectError } from "../../toolkit-store/slices/product-slice";

const ProductComponent: React.FC = () => {
  const products = useSelector(selectAllProducts);

  const renderList = products.map((product: { id: any; title: any; image: any; price: any; category: any }) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
