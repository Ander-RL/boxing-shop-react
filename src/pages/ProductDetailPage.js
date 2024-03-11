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
        <div className="row">
            <div className="col-8 bg-info">
                <h2>Product detail page</h2>
                <img src={`/img/${productData.img}`} class="img-fluid" alt="..."></img>
            </div>
            <div className="col-4 bg-warning">
                <h3>{productData.name}</h3>
                <h5>{productData.description}</h5>
                <p>Price: {productData.unitaryAmount}</p>
                <p>Stock: {productData.quantity}</p>
                <button onClick={addToCartHandler} className="btn btn-outline-dark btn-sm mt-auto">
                    <i className="bi bi-cart2"></i>
                    &nbsp;&nbsp;Add to cart
                </button>
            </div>
        </div>
    );
}