import { useDispatch, useSelector } from "react-redux";

import {
    increaseQty,
    decreaseQty,
    removeItem,
} from "../features/cart/cartSlice";

function Cart() {

    const dispatch = useDispatch();

    const { cartItems, totalQuantity, totalPrice } =
        useSelector(state => state.cart);

    return (
        <>
            <h1>Shopping Cart</h1>

            {cartItems.map(item => (

                <div key={item.id}>

                    <h3>{item.name}</h3>

                    <h4>₹{item.price}</h4>

                    <p>Quantity : {item.quantity}</p>

                    <button
                        onClick={() =>
                            dispatch(increaseQty(item.id))
                        }
                    >
                        +
                    </button>

                    <button
                        onClick={() =>
                            dispatch(decreaseQty(item.id))
                        }
                    >
                        -
                    </button>

                    <button
                        onClick={() =>
                            dispatch(removeItem(item.id))
                        }
                    >
                        Remove
                    </button>

                    <hr />

                </div>
            ))}

            <h2>Total Items : {totalQuantity}</h2>

            <h2>Total Price : ₹{totalPrice}</h2>

        </>
    );
}

export default Cart;