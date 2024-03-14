import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartList() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <div>
            {cartItems.map((item) => (
                <CartItem key={item.cartID} {...item} />
            ))}
        </div>
    );
}

export default CartList;
