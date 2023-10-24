import React from "react";
import { useSelector } from 'react-redux';

import Container from "../components/UI/Container";
import CheckoutProductCard from "../components/Card/CheckoutProductCard";


const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                    <div className="col-lg-8 col-md-6">

                        {cartItems.map(cartItem =>
                            <CheckoutProductCard
                                id={cartItem.id}
                                title={cartItem.name}
                                img={cartItem.img}
                                quantity={cartItem.quantity}
                                price={cartItem.price}
                                totalPrice={cartItem.totalPrice}
                                description={cartItem.description}
                            />
                        )}
                    </div>


                    <div className="col-lg-4 col-md-6">

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div class="card m-1">
                                <div class="card-body">
                                    <h5 class="card-title">Shipping details</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div class="card m-1">
                                <div class="card-body">
                                    <h5 class="card-title">Payment</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div class="card m-1">
                                <div class="card-body">
                                    <h5 class="card-title">Helpful links</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </React.Fragment >
    );
};

export default CheckoutPage;