import React, { Fragment, useEffect, useState, useRef } from "react";

import './ShopPage.css';

import Container from "../components/UI/Container";
import ProductCardList from "../assets/items/ProductCardItems";
import ProductCard from "../components/Card/ProductCard";

const filterList = ["filterAll", "filterPunchingBags", "filterGloves", "filterPads", "filterHeadguards", "filterVandages", "filterMouthPieces"];

const ShopPage = () => {

  let selectedProducts = [];
  let allProducts = ["gloves", "headguard", "hookbag", "mouthpiece", "pads", "vandages", "bag"];

  const [items, setItems] = useState(ProductCardList);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [paginationButtons, setPaginationButtons] = useState([]);
  const [numberElements, setNumberElements] = useState(5);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("[LOG][ShopPage][Render Count] ", renderCount);
  });

  const setProductList = (shopItems) => {
    console.log("[LOG][ShopPage][setProductList] dataItems:", shopItems);
    let list = [];
    shopItems.forEach(item => list.push(
      <ProductCard
        key={item.productId}
        id={item.productId}
        img={`/img/${item.img}`}
        title={item.name}
        description={item.description}
        price={item.unitaryAmount}
      />
    ));
    setVisibleProducts(list);
  };

  useEffect(() => {
    fetchProductData(allProducts);
  }, []);

  useEffect(() => {
    fetchProductData(allProducts);
  }, [currentPage, numberElements]);

  useEffect(() => {
    setItems(visibleProducts);
  }, [visibleProducts]);

  function modalFilter() {
    return (
      <div className="row p-2">
        <ul className="nav flex-column justify-content-center">
          <li className="nav-item" key="1">
            <button
              id="filterPunchingBags"
              className="nav-link active text-muted"
              onClick={filterOnClickHandler}>Punching Bags</button>
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
        selectedProducts = allProducts;
        break;
      case "filterPunchingBags":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection("bag");
        break;
      case "filterGloves":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection("gloves");
        break;
      case "filterPads":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection("pads");
        break;
      case "filterHeadguards":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection("headguard");
        break;
      case "filterVandages":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection("vandages");
        break;
      case "filterMouthPieces":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        storeSelection("mouthpiece");
        break;
      default:
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClass);
        selectedProducts = allProducts;
        break;
    };
  };

  const storeSelection = (keyword) => {
    selectedProducts.push(keyword);
  };

  const displayFilteredHandler = () => {
    toggleFilterDisableRemaining("filterAll");
    fetchProductData(selectedProducts);
  };

  const pageSelectorHandler = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const createPaginationButtons = (totalPages) => {
    var buttons = []
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <li className="page-item" key={i}><a className="page-link text-dark" href="#" onClick={() => pageSelectorHandler(i)}>{i + 1}</a></li>
      );
    }
    setPaginationButtons(buttons);
  }

  const pageHandler = (step) => {
    if (step === "previous") {
      currentPage !== 0 && setCurrentPage(currentPage - 1);
    } else {
      currentPage < (totalPages - 1) && setCurrentPage(currentPage + 1);
    }
  }

  function showNumberOfElements(numberOfElements) {
    setNumberElements(numberOfElements);
  };

  function fetchProductData(products) {
    fetch(`http://localhost:8080/react/v1/products/selectedProducts?page=${currentPage}&size=${numberElements}`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(products),
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setCurrentPage(data.pageable.pageNumber);
        setTotalPages(data.totalPages);
        setProductList(data.content);
        createPaginationButtons(data.totalPages);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

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
                <button type="button" className="btn btn-dark" onClick={displayFilteredHandler} data-bs-dismiss="modal">Filter</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          {items}
        </div>

        <div className="d-flex row justify-content-center align-items-center mt-3">

          <div className="d-flex flex-row justify-content-center">
            <nav aria-label="Page">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link text-dark" href="#" aria-label="Previous" onClick={() => pageHandler("previous")}>
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {paginationButtons.length !== 0 && paginationButtons}
                <li className="page-item">
                  <a className="page-link text-dark" href="#" aria-label="Next" onClick={() => pageHandler("next")}>
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="d-flex flex-row justify-content-center mb-4">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {numberElements}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" onClick={() => showNumberOfElements(5)}>5</a></li>
                <li><a class="dropdown-item" onClick={() => showNumberOfElements(10)}>10</a></li>
                <li><a class="dropdown-item" onClick={() => showNumberOfElements(20)}>20</a></li>
              </ul>
            </div>
          </div>

        </div>

      </Container>
    </Fragment >
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
