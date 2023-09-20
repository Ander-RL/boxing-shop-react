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

  const filterOnClickHandler = (filter) => {
    const filterId = filter.target.attributes.id.nodeValue;
    const currentButtonClasss = document.getElementById(filterId);

    console.log(currentButtonClasss);

    switch (filterId) {
      case "filterAll":
        console.log(filterId);
        break;
      case "filterPunchingBags":
        if (currentButtonClasss.classList.contains('text-muted')) {
          currentButtonClasss.classList.remove("text-muted");
        } else {
          currentButtonClasss.classList.add("text-muted");
        };
        break;
      case "filterGloves":
        console.log(filterId);
        break;
      case "filterPads":
        console.log(filterId);
        break;
      case "filterHeadguards":
        console.log(filterId);
        break;
      case "filterVandages":
        console.log(filterId);
        break;
      case "filterMouthPieces":
        console.log(filterId);
        break;
      default:
        console.log("filterAll");
        break;
    };
  };

  return (
    <Fragment>
      <Container type="fluid" id="shop">

        <div className="row p-2">
          <ul class="nav flex-column flex-sm-row justify-content-center">
            <li class="nav-item">
              <button
                id="filterPunchingBags"
                class="nav-link active text-muted"
                aria-current="page"
                onClick={filterOnClickHandler}>Punchin Bags</button>
            </li>
            <li class="nav-item">
              <button
                id="filterGloves"
                class="nav-link active text-muted"
                onClick={filterOnClickHandler}>Boxing Gloves</button>
            </li>
            <li class="nav-item">
              <button
                id="filterPads"
                class="nav-link active text-muted"
                onClick={filterOnClickHandler}>Training Pads</button>
            </li>
            <li class="nav-item">
              <button
                id="filterHeadguards"
                class="nav-link active text-muted"
                onClick={filterOnClickHandler}>Headguards</button>
            </li>
            <li class="nav-item">
              <button
                id="filterVandages"
                class="nav-link active text-muted"
                onClick={filterOnClickHandler}>Vandages</button>
            </li>
            <li class="nav-item">
              <button
                id="filterMouthPieces"
                class="nav-link active text-muted"
                onClick={filterOnClickHandler}>Mouthpieces</button>
            </li>
            <li class="nav-item">
              <button
                id="filterAll"
                class="nav-link active"
                tabindex="-1"
                onClick={filterOnClickHandler}>All</button>
            </li>
          </ul>
        </div>

        <div className="row align-items-center justify-content-center">
          {items}
        </div>
      </Container>
    </Fragment>
  );
};

export default ShopPage;