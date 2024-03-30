import React, { useEffect } from "react";
import Prouducts from "./components/Prouducts";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state) => state.y);
  console.log(data);
  return (
    <>
      <Navbar />
      <Prouducts />
    </>
  );
};

export default App;
