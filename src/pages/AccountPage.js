import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import Container from "../components/UI/Container";
import CheckoutProductCard from "../components/Card/CheckoutProductCard";


const AccountPage = () => {

    const cartItems = useSelector(state => state.cart.items);
    const cartTotal = useSelector(state => state.cart.totalAmount);

    const [standard, setStandard] = useState(false);
    const [express, setExpress] = useState(true);
    const [totalShipping, setTotalShipping] = useState(10);
    const [totalCheckout, setTotalCheckout] = useState(cartTotal + totalShipping);

    const shippingMethodHandler = (e) => {
        console.log(e.target.id);

        const shippingMethod = e.target.id;

        if (shippingMethod === "expressShipping" && express === false) {
            setExpress(true);
            setStandard(false);
        }

        if (shippingMethod === "standardShipping" && standard === false) {
            setExpress(false);
            setStandard(true);
        }
    };

    useEffect(() => {
        if (express) {
            setTotalShipping(10);
        } else {
            setTotalShipping(2);
        }
        setTotalCheckout(cartTotal + totalShipping);

    }, [standard, express, totalShipping, totalCheckout, cartTotal]);

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">

                    <div className="col">

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div className="card m-1 w-100">

                                <div className="card border-dark rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Account information</h5><i class="bi bi-caret-right-fill"></i>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">My orders</h5><i class="bi bi-caret-right-fill"></i>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Address book</h5><i class="bi bi-caret-right-fill"></i>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Wishlist</h5><i class="bi bi-caret-right-fill"></i>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Change password</h5><i class="bi bi-caret-right-fill"></i>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10">

                        <div className="card m-1 w-100">

                            <div className="card border-dark rounded-0">
                                <div className="card-body">
                                    <h5 className="card-title">Account information</h5><i class="bi bi-caret-right-fill"></i>
                                </div>
                            </div>

                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h5 className="card-title">My orders</h5><i class="bi bi-caret-right-fill"></i>
                                </div>
                            </div>

                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h5 className="card-title">Address book</h5><i class="bi bi-caret-right-fill"></i>
                                </div>
                            </div>

                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h5 className="card-title">Wishlist</h5><i class="bi bi-caret-right-fill"></i>
                                </div>
                            </div>

                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h5 className="card-title">Change password</h5><i class="bi bi-caret-right-fill"></i>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </Container>
        </React.Fragment >
    );
};

export default AccountPage;