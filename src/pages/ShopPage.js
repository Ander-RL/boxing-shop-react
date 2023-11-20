import React, { Fragment, useEffect, useState, useRef } from "react";
//import { useDispatch, useSelector } from 'react-redux';

//import { fetchShopData } from "../store/shop-thunk";
import Container from "../components/UI/Container";
import ProductCardList from "../assets/items/ProductCardItems";
import ProductCard from "../components/Card/ProductCard";

const filterList = ["filterAll", "filterPunchingBags", "filterGloves", "filterPads", "filterHeadguards", "filterVandages", "filterMouthPieces"];

const ShopPage = () => {

  //const dispatch = useDispatch();
  const [items, setItems] = useState(ProductCardList);
  const [visibleProducts, setVisibleProducts] = useState([]);

  //const shopItems = useSelector(state => state.shop.items); // listen to any changes in the shop

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("[LOG][Render Count] ", renderCount);
  });

  const setProductList = (shopItems) => {
    let list = [];
    shopItems.forEach(item => list.push(
      <ProductCard
        key={item.id}
        id={item.id}
        img={`/img/${item.img}`}
        title={item.name}
        description={item.description}
        price={item.price}
      />
    ));
    setVisibleProducts(list);
  };
  
  //setProductList(shopItems);

  let tempArray = [];
  let selectedProducts = [];
  let allProducts = ["gloves", "headguard", "hookbag", "mouthpiece", "pads", "vandages"];

  /*useEffect(() => {
    //dispatch(fetchShopData());
  }, [visibleProducts, dispatch]);*/

  useEffect(() => {
    fetch('http://localhost:8080/react/v1/products')
       .then((res) => res.json())
       .then((data) => {
          setProductList(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

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
        //tempArray = ProductCardList;
        selectedProducts = allProducts;
        break;
      case "filterPunchingBags":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        //storeSelection(tempArray, "bag");
        storeSelection("bag");
        break;
      case "filterGloves":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        //storeSelection(tempArray, "gloves");
        storeSelection("gloves");
        break;
      case "filterPads":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        //storeSelection(tempArray, "pads");
        storeSelection("pads");
        break;
      case "filterHeadguards":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        //storeSelection(tempArray, "headguard");
        storeSelection("headguard");
        break;
      case "filterVandages":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        //storeSelection(tempArray, "vandages");
        storeSelection("vandages");
        break;
      case "filterMouthPieces":
        disableFilterAll(fillterAllButtonClass);
        toggleFilter(currentButtonClass);
        //storeSelection(tempArray, "mouth");
        storeSelection("mouthpiece");
        break;
      default:
        toggleFilterDisableRemaining(filterId);
        toggleFilter(currentButtonClass);
        //tempArray = ProductCardList;
        selectedProducts = allProducts;
        break;
    };
  };

  const storeSelection = (keyword) => {
    //ProductCardList.forEach(product => product.props.title.toLowerCase().includes(keyword) && tempArray.push(product));
    selectedProducts.push(keyword);
  };

  const displayFilteredHandler = () => {
    console.log(JSON.stringify(selectedProducts));
   fetch('http://localhost:8080/react/v1/products/selectedProducts', 
   {
    method: 'POST', 
    mode: 'cors', 
    body: JSON.stringify(selectedProducts),
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    }
  })
      .then((res) => res.json())
      .then((data) => {
         setProductList(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

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
