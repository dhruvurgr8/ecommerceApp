import React from "react";
import "./sidebar.css";
import { useDispatch } from "react-redux";
const SidebarProduct = ({ product }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: "INC",
      payload: { id: product.id, price: product.price },
    });
  };
  const decrement = () => {
    dispatch({
      type: "DEC",
      payload: { id: product.id, price: product.price },
    });
  };
  return (
    <>
      <div className="side-wrapper">
        <div>
          <img width={100} height={100} src={product.image} />
        </div>
        <div className="content">
          <p>
            <b>{product.title}</b>
          </p>
          <p>Price:{product.price}</p>
        </div>
        <div className="btn-group">
          <button onClick={decrement}>-</button>
          <p>{product.quantity}</p>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>
  );
};

export default SidebarProduct;
