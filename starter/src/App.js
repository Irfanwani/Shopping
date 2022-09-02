import NavBar from "./components/Navbar";
import CartContainer from "./components/cartContainer";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isOpen, isLoading } = useSelector((state) => ({
    cartItems: state.cart.cartItems,
    isLoading: state.cart.isLoading,
    isOpen: state.modal.isOpen,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen ? <Modal /> : null}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
