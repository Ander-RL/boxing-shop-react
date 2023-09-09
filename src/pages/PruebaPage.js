import React, { Fragment, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartActions } from "../store/cart-slice";
import Cart from "../components/Cart/Cart";

const PruebaPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items); // listen to any changes in the cart

  useEffect(() => {
    console.log("[LOG][PruebaPage] useEffect");
    if (cartItems != null) {
      console.log(cartItems);
    };
  }, [cartItems, dispatch]);

  const productPlaceHolder = {
    id: 1,
    title: "Product Place Holder",
    price: 20,
    description: "Description Place Holder"
  };

  const { id, title, price, description } = productPlaceHolder;

  const addToCartHandler = () => {
    console.log("[LOG] addToCartHandler");
    console.log("[LOG] cartItem: ", productPlaceHolder);
    dispatch(cartActions.addItemToCart({
      id: id,
      price: price,
      quantity: 1,
      totalPrice: price,
      name: title
    }));
  };

  return (
    <Fragment>
      <h1>PRUEBA PAGE</h1>
      <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <button onClick={addToCartHandler} class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>
            &nbsp;&nbsp;Add to Cart
          </button>
        </div>
      </div>

      <div>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map(cartItem =>

            <li key={cartItem.id}>
              <header>
                <h3>{cartItem.name}</h3>
                <div>
                  ${cartItem.totalPrice.toFixed(2)}{' '}
                  <span >(${cartItem.price.toFixed(2)})</span>
                </div>
              </header>
              <div>
                <div>
                  x <span>{cartItem.quantity}</span>
                </div>
                <div>
                  <button>-</button>
                  <button>+</button>
                </div>
              </div>
            </li>
          )
          }
        </ul>
      </div>

    </Fragment>
  );
};

export default PruebaPage;