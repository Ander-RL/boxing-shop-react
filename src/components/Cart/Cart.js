import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items); // listen to any changes in the cart

  return (
    <div>
        {cartItems.map(cartItem =>
            <CartItem 
            name={cartItem.name} 
            description={cartItem.description}
            quantity={cartItem.quantity}
            price={cartItem.price}
            totalPrice={cartItem.totalPrice}
            img={cartItem.img}
            />
        )
        }
    </div>
  );
};

export default Cart;
