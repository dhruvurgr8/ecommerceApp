import React, { forwardRef, useState, useImperativeHandle } from "react";
import "./sidebar.css";
import SidebarProduct from "./SidebarProduct";
import { useSelector } from "react-redux";

const Sidebar = forwardRef((_, ref) => {
  const [show, setShow] = useState(true);

  const products = useSelector((state) => {
    const productsList = state.x.products;
    const cart = state.y.cart;
    const list = [];
    productsList?.forEach((product) => {
      if (cart[product.id]) {
        list.push({ ...product, quantity: cart[product.id] });
      }
    });
    return list;
  }, []); // added an empty dependency array

  useImperativeHandle(ref, () => {
    return { setShow };
  });

  if (!show) {
    return null;
  }

  return (
    <div className="sidebar">
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="close-sidebar"
      >
        <i className="fa-solid fa-xmark fa-2xl"></i>
      </button>
      {products?.map((product, index) => {
        return <SidebarProduct key={index} product={product} />;
      })}
    </div>
  );
});

export default Sidebar;

// This is the final code
