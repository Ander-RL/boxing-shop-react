import React, { Fragment, useState } from "react";

import Container from "../components/UI/Container";
import ProductCard from "../components/Card/ProductCard";
import BoxingGlovesImg from "../assets/img/Gloves.jpg";

const ShopPage = () => {

  const [showModal, setShowModal] = useState(false);

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

  function modalFilter() {
    return (
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
    );
  };

  const filterButtonHandler = () => {
    console.log(showModal);
    if (showModal === false) { setShowModal(true); }
    else { setShowModal(false); };
  };

  const filterOnClickHandler = (filter) => {
    const filterId = filter.target.attributes.id.nodeValue;
    const currentButtonClasss = document.getElementById(filterId);
    const fillterAllButtonClass = document.getElementById("filterAll");

    switch (filterId) {
      case "filterAll":
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClasss);
        break;
      case "filterPunchingBags":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClasss);
        break;
      case "filterGloves":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClasss);
        break;
      case "filterPads":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClasss);
        break;
      case "filterHeadguards":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClasss);
        break;
      case "filterVandages":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClasss);
        break;
      case "filterMouthPieces":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClasss);
        break;
      default:
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClasss);
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
              tabindex="-1"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={filterButtonHandler}>
              Filter&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="bi bi-funnel-fill"></i>
            </button>
          </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Filter Products</h5>
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
