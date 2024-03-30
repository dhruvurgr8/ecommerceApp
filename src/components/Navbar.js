import React from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const totalProducts = useSelector((state) => state.y.products);
  const totalPrice = useSelector((state) => state.y.totalPrice.toFixed(2));
  const handleChange = (e) => {
    dispatch({ type: "FILTER", payload: e.target.value });
  };
  return (
    <navbar>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search any Products here"
      />
      <span>
        Cart: Items:{totalProducts} Price:{totalPrice}
      </span>
    </navbar>
  );
};

export default Navbar;
