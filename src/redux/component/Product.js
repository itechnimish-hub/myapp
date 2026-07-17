import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function Product() {

    const dispatch = useDispatch();
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 25000 },
        { id: 3, name: "Headphone", price: 3000 },
    ];
    
    return (
        <>
            <h1>Products</h1>

            {products.map(product => (
                <div >

                    <h3>{product.name}</h3>

                    <h4>₹{product.price}</h4>

                    <button
                        onClick={() =>
                            dispatch(addToCart(product))
                        }
                    >
                        Add To Cart
                    </button>

                    <hr />

                </div>
            ))}
        </>
    );
}

export default Product;