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
            <img src={props.img} class="card-img-top" alt="" />
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <p class="card-text">{props.price}€</p>
                <button onClick={addToCartHandler} class="btn btn-outline-dark btn-sm mt-auto">
                    <i class="bi bi-cart2"></i>
                    &nbsp;&nbsp;Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;