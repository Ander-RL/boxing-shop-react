import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Container from "../components/UI/Container";
import BoxingGlovesImg from "../assets/img/Gloves.jpg";

const ShopPage = () => {

  const items = [];

  for (let i = 0; i < 23; i++) {
    items.push(
      <div className="card text-bg-light m-2 shadow p-3 bg-white rounded" style={{ maxWidth: '18rem' }} key={i}>
        <img src={BoxingGlovesImg} class="card-img-top" alt="" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">title</h5>
          <p class="card-text">description</p>
          <Link to="" class="btn btn-outline-dark btn-sm mt-auto">
            <i class="bi bi-cart2"></i>
            &nbsp;&nbsp;Add to cart
          </Link>
        </div>
      </div>
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