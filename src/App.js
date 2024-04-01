import React, { useEffect } from "react";
import Prouducts from "./components/Prouducts";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import SidebarProduct from "./components/cart/SidebarProduct";
import Sidebar from "./components/cart/Sidebar";

const App = () => {
  const data = useSelector((state) => state.y);
  console.log(data);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Prouducts />
    </>
  );
};

export default App;
