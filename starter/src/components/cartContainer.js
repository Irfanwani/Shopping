import { useSelector } from 'react-redux'
import CartItem from './cartItem'

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector((store) => store.cart);

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )

    }

    return <div>cart container</div>
}

export default CartContainer;