import React, { Fragment } from "react";

import Container from "../components/UI/Container";
import ProductCard from "../components/Card/ProductCard";
import BoxingGlovesImg from "../assets/img/Gloves.jpg";

const ShopPage = () => {

  const items = [];

  for (let i = 0; i < 23; i++) {
    items.push(
      <ProductCard
        id={i}
        img={BoxingGlovesImg}
        title={`Product ${i}`}
        description={`Description ${i}`}
        price="20"
      />
    );
  };

  return (
    <Fragment>
      <Container type="fluid" style="p-4" id="shop">
        <div className="row align-items-center justify-content-center">
          {items}
        </div>
      </Container>
    </Fragment>
  );
};

export default ShopPage;