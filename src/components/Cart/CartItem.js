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
        <div className="row mb-1">
            <div className="col-sm-12">
                <div className="card text-bg-light shadow p-0 bg-white rounded" style={{ maxHeight: '18rem' }}>
                    <div className="row card-body">
                        <div className="col-sm-6" style={{ maxWidth: '50%' }}>
                            <div className="row">
                                <div className="row">
                                    <h5 className="card-title">{props.name}</h5>
                                </div>
                                <div className="row">
                                    <p className="card-text">{props.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <p className="card-text">Product: {props.price}€</p>
                                </div>
                                <div className="row">
                                    <p className="card-text fw-bold">Total: {props.totalPrice}€</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6 mt-auto">
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Add Remove">
                                        <button type="button" className="btn btn-dark" onClick={removeFromCartHandler} >-1</button>
                                        <button type="button" className="btn btn-outline-dark">{props.quantity}</button>
                                        <button type="button" className="btn btn-dark" onClick={addToCartHandler} >+1</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="col-sm-6" src={props.img} alt="sans" style={{ maxWidth: '50%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;