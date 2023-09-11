import React from "react";
import { useSelector } from 'react-redux';

import Cart from "../Cart/Cart";

const CartOffCanvas = (props) => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id={props.id} aria-labelledby="offcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">{props.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        {cartItems.length > 0 ? <Cart /> : <p>Your shopping cart is empty</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartOffCanvas;