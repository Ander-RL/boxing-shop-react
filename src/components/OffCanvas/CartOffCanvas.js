import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";

const CartOffCanvas = (props) => {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id={props.id} aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">{props.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        {cartItems.length > 0 ? <Cart /> : <p>Your shopping cart is empty</p>}
                    </div>
                </div>
                <nav className="navbar navbar-light bg-light">
                    <div className="col-auto me-auto ms-3 fs-5 fw-bold">
                        Total amount:&nbsp;&nbsp;{totalAmount}€
                    </div>
                    <div className="col-auto me-3 justify-content-end">
                    <Link to="/checkout" className="nav-link" href="#">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="offcanvas" href="#">
                            Checkout&nbsp;&nbsp;
                            <i className="bi bi-cart-fill text-light"></i>
                        </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default CartOffCanvas;