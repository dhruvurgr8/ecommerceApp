import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ShowProducts = ({ data }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount((preState) => preState + 1);
    dispatch({
      type: "INC",
      payload: { id: data.id, price: data.price },
    });
  };

  const decrement = () => {
    setCount((preState) => preState - 1);
    dispatch({
      type: "DEC",
      payload: { id: data.id, price: data.price },
    });
  };

  return (
    <div className="content-wrapper">
      <img width={300} height={300} src={data.image} alt={data.title} />
      <div className="content">
        <h3>{data.title}</h3>
        <div className="price-cat">
          <p>
            Price:
            <b>{data.price}</b>
          </p>
          <p>
            Category:-
            <b>{data.category}</b>
          </p>
        </div>
        {count === 0 ? (
          <button onClick={increment} className="btn-cart">
            Add to Cart
          </button>
        ) : (
          <div>
            <span className="btn-count">
              <button onClick={decrement}>-</button>
              {count}
              <button onClick={increment}>+</button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowProducts;
