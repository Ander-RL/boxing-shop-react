import React, { Fragment, useEffect, useState } from "react";

import Container from "../components/UI/Container";
import ProductCardList from "../assets/items/ProductCardItems";

const filterList = ["filterAll", "filterPunchingBags", "filterGloves", "filterPads", "filterHeadguards", "filterVandages", "filterMouthPieces"];

const ShopPage = () => {

  const[items, setItems] = useState(ProductCardList);
  const[visibleProducts, setVisibleProducts] = useState(ProductCardList);

  let tempArray = [];

  useEffect(()=> {
    setItems(visibleProducts);
  }, [visibleProducts, items]);

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
          <li className="nav-item" key="3">
            <button
              id="filterPads"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Training Pads</button>
          </li>
          <li className="nav-item" key="4">
            <button
              id="filterHeadguards"
              className="nav-link active text-muted"
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
        tempArray = ProductCardList;
        break;
      case "filterPunchingBags":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection(tempArray, "bag");
        break;
      case "filterGloves":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection(tempArray, "gloves");
        break;
      case "filterPads":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection(tempArray, "pads");
        break;
      case "filterHeadguards":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection(tempArray, "headguard");
        break;
      case "filterVandages":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection(tempArray, "vandages");
        break;
      case "filterMouthPieces":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection(tempArray, "mouth");
        break;
      default:
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClass);
        tempArray = ProductCardList;
        break;
    };
  };

  const storeSelection = (tempArray, keyword) => {
    ProductCardList.forEach(product => product.props.title.toLowerCase().includes(keyword) && tempArray.push(product));
    console.log(tempArray);
  };

  const displayFilteredHandler = () => {
    console.log(tempArray);
    setVisibleProducts(tempArray);
  };

  return (
    <Fragment>
      <Container type="fluid" id="shop">

        <div className="row p-2 pt-3 justify-content-end">
          <div className="col d-flex justify-content-end">
            <button
              id="showFilter"
              className="btn btn-outline-dark btn"
              tabIndex="-1"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
              Filter&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
        </div>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Filter by product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {modalFilter()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-dark" onClick={displayFilteredHandler}>Filter</button>
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

  filterList.forEach((filter) => {
    if (filter !== currentFilter) {
      const filterButtonClass = document.getElementById(filter);
      if (!filterButtonClass.classList.contains('text-muted')) {
        filterButtonClass.classList.add("text-muted");
      };
    };
  });


}
