import { toggle } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

    const tg = () => {
        dispatch(toggle());
    }

    const clrcart = () => {
        dispatch(clearCart())
        tg()
    }

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from yuor shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={clrcart}>
            confirm
          </button>
          <button className="btn clear-btn" onClick={tg}>cancel</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
