import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import Container from "../components/UI/Container";
import CheckoutProductCard from "../components/Card/CheckoutProductCard";


const CheckoutPage = () => {

    const [standard, setStandard] = useState(false);
    const [express, setExpress] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);

    const cartItems = useSelector(state => state.cart.items);

    const shippingMethodHandler = (e) => {
        console.log(e.target.id);

        const shippingMethod = e.target.id;

        if(shippingMethod === "expressShipping" && express === false) {
            setExpress(true);
            setStandard(false);
        }

        if(shippingMethod === "standardShipping" && standard === false) {
            setExpress(false);
            setStandard(true);
        }
    };

    useEffect(() => {
        if(express){
            setTotalAmount(10);
        } else {
            setTotalAmount(2);
        }
    }, [standard, express]);

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                    <div className="col-lg-8 col-md-6">

                        {cartItems.map(cartItem =>
                            <CheckoutProductCard
                                key={cartItem.id}
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
                            <div className="card m-1 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Shipping details</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Select your shipping method</h6>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioStandardShipping" id="standardShipping" checked={standard} onChange={shippingMethodHandler} />
                                        <label className="form-check-label" htmlFor="standardShipping">
                                            Standard shipping
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioExpressShipping" id="expressShipping" checked={express} onChange={shippingMethodHandler} />
                                        <label className="form-check-label" htmlFor="expressShipping">
                                            Express shipping
                                        </label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div className="card m-1 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Payment</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Here is your order's total amount</h6>
                                    <p className="card-text">{totalAmount}€</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div className="card m-1 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Helpful links</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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