import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/modal/modalSlice";
import CartItem from "./cartItem";



const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const clrcartalert = () => {
    dispatch(toggle())
  }

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clrcartalert}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
