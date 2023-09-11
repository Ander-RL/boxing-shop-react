import React, { Fragment } from "react";
import ProductCard from "../components/Card/ProductCard";

const PruebaPage = () => {

  return (
    <Fragment>
      <h1>PRUEBA PAGE</h1>

      <ProductCard
        id="1"
        img=""
        title="Product1"
        description="Description1"
        price="20"
      />

      <ProductCard
        id="2"
        img=""
        title="Product2"
        description="Description2"
        price="40"
      />

    </Fragment>
  );
};

export default PruebaPage;