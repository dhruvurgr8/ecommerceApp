import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchResults from "./fetchResults";
import "./app.css";
import ShowProduct from "./ShowProducts";

const Products = () => {
  const products = useSelector((state) => state.x.products);
  const dispatch = useDispatch();

  const filteredQuery = useSelector((state) => state.x.filter);

  useEffect(() => {
    fetchResults(dispatch);
  }, [dispatch]);

  if (!products) {
    return <p>Loading....</p>;
  }

  let filteredData = products;

  if (filteredQuery) {
    filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(filteredQuery.toLowerCase())
    );
  }

  return (
    <div className="wrapper">
      {filteredData.map((product) => (
        <ShowProduct key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;
