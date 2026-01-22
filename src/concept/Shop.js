import React, { useReducer } from "react";

const initialState = {
    cart: []
};

function cartReducer(state, action) {
    const cart = [...state.cart];

    switch (action.type) {
        case "ADD_TO_CART": {
            const i = cart.findIndex(p => p.id === action.payload.id);
            if (i >= 0) {
                cart[i].count += 1;
            } else {
                cart.push({ ...action.payload, count: 1 });
            }
            return { ...state, cart };
        }

        case "REMOVE_FROM_CART": {
            return { ...state, cart: cart.filter(p => p.id !== action.payload) };
        }

        case "INCREASE": {
            const i = cart.findIndex(p => p.id === action.payload);
            if (i >= 0) cart[i].count += 1;
            return { ...state, cart };
        }

        case "DECREASE": {
            const i = cart.findIndex(p => p.id === action.payload);
            if (i >= 0 && cart[i].count > 1) cart[i].count -= 1;
            return { ...state, cart };
        }

        default:
            return state;
    }
}

export default function Shop() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const products = [
        { id: 101, name: "Echo Dot", price: 4499, image: "📻" },
        { id: 102, name: "Fire TV Stick", price: 3999, image: "📺" },
        { id: 103, name: "Kindle", price: 7999, image: "📘" },
        { id: 104, name: "Boat Headset", price: 1299, image: "🎧" }
    ];

    const totalBill = state.cart.reduce((sum, p) => sum + p.price * p.count, 0);

    return (


        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-3">Amazon Style Shop</h1>



            <h2 className="text-xl font-semibold mt-5">Cart</h2>

            {state.cart.length === 0 && <p className="mt-2">Your cart is empty.</p>}

            {state.cart.map(p => (
                <div key={p.id} className="flex items-center justify-between border p-2 rounded mt-2">
                    <div>
                        <p className="font-medium">{p.image} {p.name}</p>
                        <p className="text-sm">₹{p.price} × {p.count}</p>
                        <p className="text-sm font-semibold">Subtotal: ₹{p.price * p.count}</p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <div className="flex gap-1">
                            <button onClick={() => dispatch({ type: "INCREASE", payload: p.id })} className="px-2 border rounded">+</button>
                            <button onClick={() => dispatch({ type: "DECREASE", payload: p.id })} className="px-2 border rounded">−</button>
                        </div>
                        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: p.id })} className="px-2 border rounded">
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            {state.cart.length > 0 && (
                <div className="border-t pt-3 mt-4 text-lg font-bold">
                    Total: ₹{totalBill}
                </div>
            )}
            <h2 className="text-xl font-semibold">Products</h2>
            <div className="grid grid-cols-2 gap-3 mt-2">
                {products.map(p => (
                    <div key={p.id} className="border p-2 rounded-lg shadow-sm">
                        <div className="text-3xl">{p.image}</div>
                        <p className="font-medium">{p.name}</p>
                        <p>₹{p.price}</p>
                        <button
                            onClick={() => dispatch({ type: "ADD_TO_CART", payload: p })}
                            className="mt-1 px-2 py-1 border rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}
