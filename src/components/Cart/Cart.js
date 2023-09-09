import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(cartItem =>
          <li
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.name,
              quantity: cartItem.quantity,
              total: cartItem.totalPrice,
              price: cartItem.price
            }}
          />
        )
        }
      </ul>
    </div>
  );
};

export default Cart;
