import { useSelector } from "react-redux";
import { CartList, CartTotal, TitleSection } from "../components";
import { Link } from "react-router-dom";

function Cart() {
    const user = null;

    const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

    if (numItemsInCart < 1) {
        return (
            <>
                <TitleSection text="Your cart is empty" />
            </>
        );
    } else {
        return (
            <>
                <TitleSection text="Shopping Cart" />
                <div className="mt-8 grid gap-8  lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <CartList />
                    </div>
                    <div className="lg:col-span-4 lg:pl-4">
                        <CartTotal />
                        {user ? (
                            <Link
                                to='/checkout' className='btn btn-primary btn-block mt-8'
                            >
                                Proceed to checkout
                            </Link>
                        ) : (
                            <Link 
                                to='/login' className='btn btn-primary btn-block mt-8'
                            >
                                Please login
                            </Link>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Cart;
