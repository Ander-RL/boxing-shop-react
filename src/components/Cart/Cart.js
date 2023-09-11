import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items); // listen to any changes in the cart

  return (
    <div>
      <ul>
        {cartItems.map(cartItem =>
          <li key={cartItem.id}>
            <header>
              <h3>{cartItem.name}</h3>
              <div>
                ${cartItem.totalPrice}{' '}
                <span >(${cartItem.price})</span>
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
  );
};

export default Cart;
