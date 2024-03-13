import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cartActions } from "../store/cart-slice";


export function ProductDetailPage() {

  const dispatch = useDispatch();
  const [productData, setProductData] = useState(
    {
      productId: 0,
      keyword: "Loading",
      name: "Loading",
      img: "PlaceHolder.jpg",
      quantity: 0,
      unitaryAmount: 0,
      description: "Loading"
    }
  );

  const { productId } = useParams();

  useEffect(() => {
    fetchProductData(productId);
  }, []);

  function fetchProductData(products) {
    fetch(`http://localhost:8080/react/v1/products/${productId}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log("[LOG][ProductDetailPage][fetchProductData] Data:", data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id: productId,
      price: Number(productData.unitaryAmount),
      quantity: 1,
      totalPrice: Number(productData.unitaryAmount),
      name: productData.name,
      img: productData.img,
      description: productData.description
    }));
  };

  return (
    <div className="row bg-primary">
      <div className="col-sm-8 bg-warning">

        <div class="row row-cols-2 m-1">
          <div className="col p-0">
            <img src={`/img/${productData.img}`} className="img-fluid" alt="..." />
            </div>
          <div className="col p-0">
            <img src={`/img/${productData.img}`} className="img-fluid" alt="..." />
            </div>
          <div className="col p-0">
            <img src={`/img/${productData.img}`} className="img-fluid" alt="..." />
            </div>
          <div className="col p-0">
            <img src={`/img/${productData.img}`} className="img-fluid" alt="..." />
            </div>
        </div>

      </div>
      <div className="col-sm-4">

        <div className="card m-1">
          <h3 className="card-header">{productData.name}</h3>
          <div className="card-body">
            <h5 className="card-title">{productData.description}</h5>
            <p className="card-text">Price: {productData.unitaryAmount}</p>
            <p className="card-text">Stock: {productData.quantity}</p>
            <button onClick={addToCartHandler} className="btn btn-outline-dark btn-sm mt-auto">
              <i className="bi bi-cart2"></i>
              &nbsp;&nbsp;Add to cart
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}