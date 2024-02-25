import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Container from "../components/UI/Container";
import CheckoutProductCard from "../components/Card/CheckoutProductCard";
import CheckoutProductModalCard from "../components/Card/CheckoutProductModalCard";


const CheckoutPage = () => {

    const cartItems = useSelector(state => state.cart.items);
    const cartTotal = useSelector(state => state.cart.totalAmount);

    const [standard, setStandard] = useState(false);
    const [express, setExpress] = useState(true);
    const [totalShipping, setTotalShipping] = useState(10);
    const [totalCheckout, setTotalCheckout] = useState(cartTotal + totalShipping);
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const [isOrderSent, setIsOrderSent] = useState(false);
    const [response, setResponse] = useState({
        customerId: 0,
        orderId: 0,
        products: [],
        totalAmount: 0
    });
    const [products, setProducts] = useState([]);


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

    function sendOrder() {
        setIsOrderSent(true);

        var order = {
            customerId: 458907,
            products: []
        };

        cartItems.forEach(element => {
            order.products.push(
                {
                    purchasedProduct: element.id,
                    quantity: element.quantity
                }
            );
        });

        fetch('http://localhost:8080/react/v1/orders/checkout',
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(order),
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("[LOG][CheckoutPage][sendOrder] data:", data);
                setOrderResponse(data);
            })
            .catch((err) => {
                console.log("[LOG][CheckoutPage][sendOrder] error:", err.message);
            });
    }

    const setOrderResponse = (data) => {
        let list = [];
        cartItems.forEach((product, index) => {
            list.push(
                <CheckoutProductModalCard
                key={product.id}
                id={product.id}
                title={product.name}
                img={product.img}
                quantity={product.quantity}
                price={product.price}
                totalPrice={product.totalPrice}
                description={product.description}
            />
            )
        });
        setResponse(data);
        setProducts(list);
        setIsOrderSent(false);
        console.log("[LOG][CheckoutPage][setOrderResponse] list:", list);
    };


    useEffect(() => {
        if (response.customerId !== 0 && products.length !== 0) {
            setIsOrderConfirmed(true);
        } else {
            setIsOrderConfirmed(false);
        }
        console.log("[LOG][CheckoutPage][useEffect] Products:", products);
    }, [products]);

    const handleClose = () => {
        setIsOrderConfirmed(false);
        setIsOrderSent(false);
    };

    const orderReadyModal = (
        <Modal show={isOrderConfirmed} onHide={handleClose} size="m" backdrop='static' centered='true' scrollable='true'>
            <Modal.Header closeButton>
                <Modal.Title>Order details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Order id: {response.orderId}</p>
                <p>Customer id: {response.customerId}</p>
                <p>Total amount: {response.totalAmount}€</p>
                {products}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

    const preparingOrderModal = (
        <Modal show={!isOrderConfirmed && isOrderSent} onHide={handleClose} size="m" backdrop='static' centered='true'>
            <Modal.Header>
                <Modal.Title>Preparing order, please wait.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Preparing order, please wait.</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="row p-2 pt-3 justify-content-end">
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
                                        <div className="card-text">
                                            Shipping = {totalShipping}€
                                        </div>
                                        <div className="card-text">
                                            Items total = {cartTotal}€
                                        </div>
                                    </div>
                                    <div className="flex-row">
                                        <div className="card-footer">
                                            <p className="card-text text-end fw-bolder"><small className="text">Order total: {totalCheckout}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column d-sm-flex flex-sm-row">
                                <div className="card m-1 w-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Helpful links</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="card m-1 w-100">
                                    <button type="button" onClick={sendOrder} className="btn btn-dark" disabled={cartItems.length === 0 ? true : false}>
                                        Order now&nbsp;&nbsp;
                                        <i className="bi bi-cart-fill text-light"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {isOrderConfirmed ? orderReadyModal : preparingOrderModal}

            </Container>
        </React.Fragment >
    );
};

export default CheckoutPage;