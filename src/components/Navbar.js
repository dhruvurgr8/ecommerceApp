import React, { useRef } from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const totalProducts = useSelector((state) => state.y.products);
  const totalPrice = useSelector((state) => state.y.totalPrice.toFixed(2));
  const handleChange = (e) => {
    dispatch({ type: "FILTER", payload: e.target.value });
  };

  const sidebarRef = useRef(null);

  return (
    <nav>
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
      <span className="cart">
        Cart: Items:{totalProducts} Price:{totalPrice}
      </span>
    </nav>
  );
};

export default Navbar;

// This is the final code
