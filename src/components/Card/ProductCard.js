import React from "react";
import { useDispatch } from 'react-redux';

import { cartActions } from "../../store/cart-slice";

const ProductCard = (props) => {
    const dispatch = useDispatch();

    const { id, title, price, img, description } = props;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id: id,
            price: Number(price),
            quantity: 1,
            totalPrice: Number(price),
            name: title,
            img: img,
            description: description
        }));
    };

    return (
        <div className="card text-bg-light m-2 shadow p-3 bg-white rounded" style={{ maxWidth: '18rem' }} key={props.id}>
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.price}€</p>
                <button onClick={addToCartHandler} className="btn btn-outline-dark btn-sm mt-auto">
                    <i className="bi bi-cart2"></i>
                    &nbsp;&nbsp;Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;