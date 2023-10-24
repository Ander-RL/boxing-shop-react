import React from "react";

import { useDispatch } from 'react-redux';

import { cartActions } from "../../store/cart-slice";

const CheckoutProductCard = (props) => {

    const dispatch = useDispatch();

    const { id, title, price, totalPrice, img, description, quantity } = props;

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
        <div className="card m-1" key={id}>
            <div className="row g-0">
                <div className="row g-0">
                    <div className="row g-0">
                        <div className="col-4 col-lg-2">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-8 col-lg-10">
                            <div className="card-body">
                                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                                    <div className="col-lg-8 col-sm-6 me-2">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{description}</p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 me-2">
                                        <div className="d-flex flex-row-reverse">
                                            <h5 className="text">In Stock</h5>
                                        </div>

                                        <div className="d-flex flex-row-reverse">
                                            <div className="btn-group btn-group-sm" role="group" aria-label="Add Remove">
                                                <button type="button" className="btn btn-dark" onClick={removeFromCartHandler} >-1</button>
                                                <button type="button" className="btn btn-outline-dark">{quantity}</button>
                                                <button type="button" className="btn btn-dark" onClick={addToCartHandler} >+1</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="card-footer">
                            <p className="card-text text-end fw-bolder"><small className="text">Item total: {totalPrice}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProductCard;