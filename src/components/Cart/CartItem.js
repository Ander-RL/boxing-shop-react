import React from "react";
import { useDispatch } from 'react-redux';

import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
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

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };

    return (
        <div class="row mb-1">
            <div class="col-sm-12">
                <div class="card text-bg-light shadow p-0 bg-white rounded" style={{ maxHeight: '18rem' }}>
                    <div class="row card-body">
                        <div class="col-sm-6" style={{ maxWidth: '50%' }}>
                            <div class="row">
                                <div class="row">
                                    <h5 class="card-title">{props.name}</h5>
                                </div>
                                <div class="row">
                                    <p class="card-text">{props.description}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row">
                                    <p class="card-text">Product: {props.price}€</p>
                                </div>
                                <div class="row">
                                    <p class="card-text fw-bold">Total: {props.totalPrice}€</p>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-6 mt-auto">
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Add Remove">
                                        <button type="button" class="btn btn-dark" onClick={addToCartHandler} >+1</button>
                                        <button type="button" class="btn btn-outline-dark">{props.quantity}</button>
                                        <button type="button" class="btn btn-dark" onClick={removeFromCartHandler} >-1</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="col-sm-6" src={props.img} alt="sans" style={{ maxWidth: '50%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;