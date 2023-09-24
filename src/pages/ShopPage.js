import React, { Fragment } from "react";

import Container from "../components/UI/Container";
import ProductCard from "../components/Card/ProductCard";
import BoxingGlovesImg from "../assets/img/Gloves.jpg";

const ShopPage = () => {

  const items = [];

  for (let i = 0; i < 23; i++) {
    items.push(
      <ProductCard
        key={i}
        id={i}
        img={BoxingGlovesImg}
        title={`Product ${i}`}
        description={`Description ${i}`}
        price="20"
      />
    );
  };

  function modalFilter() {
    return (
      <div className="row p-2">
        <ul className="nav flex-column justify-content-center">
          <li className="nav-item" key="1">
            <button
              id="filterPunchingBags"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Punchin Bags</button>
          </li>
          <li className="nav-item" key="2">
            <button
              id="filterGloves"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Boxing Gloves</button>
          </li>
          <li class="nav-item" key="3">
            <button
              id="filterPads"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Training Pads</button>
          </li>
          <li class="nav-item" key="4">
            <button
              id="filterHeadguards"
              class="nav-link active text-muted"
              onClick={filterOnClickHandler}>Headguards</button>
          </li>
          <li className="nav-item" key="5">
            <button
              id="filterVandages"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Vandages</button>
          </li>
          <li className="nav-item" key="6">
            <button
              id="filterMouthPieces"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Mouthpieces</button>
          </li>
          <li className="nav-item" key="7">
            <button
              id="filterAll"
              className="nav-link active"
              tabIndex="-1"
              onClick={filterOnClickHandler}>All</button>
          </li>
        </ul>
      </div>
    );
  };

  const filterOnClickHandler = (filter) => {
    const filterId = filter.target.attributes.id.nodeValue;
    const currentButtonClass = document.getElementById(filterId);
    const fillterAllButtonClass = document.getElementById("filterAll");

    switch (filterId) {
      case "filterAll":
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClass);
        break;
      case "filterPunchingBags":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        break;
      case "filterGloves":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        break;
      case "filterPads":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        break;
      case "filterHeadguards":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        break;
      case "filterVandages":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        break;
      case "filterMouthPieces":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        break;
      default:
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClass);
        break;
    };
  };

  return (
    <Fragment>
      <Container type="fluid" id="shop">

        <div className="row p-2 pt-3 justify-content-end">
          <div class="col d-flex justify-content-end">
            <button
              id="showFilter"
              class="btn btn-outline-dark btn"
              tabIndex="-1"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
              Filter&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="bi bi-funnel-fill"></i>
            </button>
          </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Filter by product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {modalFilter()}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark">Filter</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          {items}
        </div>
      </Container>
    </Fragment>
  );
};

export default ShopPage;

function toggleFilter(currentButtonClass) {
  if (currentButtonClass.classList.contains('text-muted')) {
    currentButtonClass.classList.remove("text-muted");
  } else {
    currentButtonClass.classList.add("text-muted");
  };
}

function disableFilterAll(filterButtonClass) {
  if (!filterButtonClass.classList.contains('text-muted')) {
    filterButtonClass.classList.add("text-muted");
  };
}

function toggleFilterDisableRemaining(currentFilter) {
  const filterList = ["filterAll", "filterPunchingBags", "filterGloves", "filterPads", "filterHeadguards", "filterVandages", "filterMouthPieces"];

  filterList.forEach((filter) => {
    if (filter !== currentFilter) {
      const filterButtonClass = document.getElementById(filter);
      if (!filterButtonClass.classList.contains('text-muted')) {
        filterButtonClass.classList.add("text-muted");
      };
    };
  });


}
