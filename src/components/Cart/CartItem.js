import React from "react";

const CartItem = (props) => {
    return (
        <div class="row mb-1">
            <div class="col-sm-12">
                <div class="card text-bg-light shadow p-0 bg-white rounded">
                    <div class="row card-body">
                        <div class="col-sm-6">
                            <div class="row">
                                <h5 class="card-title">{props.name}</h5>
                                <p class="card-text">{props.description}</p>
                                    <p class="card-text">{props.price}€</p>
                                    <p class="card-text">{props.totalPrice}€</p>
                            </div>
                            <div class="row">
                            <div class="col-sm-6 mt-auto">
                                <div class="btn-group btn-group-sm" role="group" aria-label="Add Remove">
                                    <button type="button" class="btn btn-dark">+1</button>
                                    <button type="button" class="btn btn-outline-dark">{props.quantity}</button>
                                    <button type="button" class="btn btn-dark">-1</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <img class="col-sm-6" src={props.img} alt="sans" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;