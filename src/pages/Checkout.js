import { useSelector } from "react-redux";
import { CartTotal, CheckoutForm, TitleSection } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => async () => {
    // console.log(store);
    const user = store.getState().userState.user;
    if (!user) {
        toast.error("You must be logged in to access checkout!");
        return redirect("/login");
    }
    return null;
};

function Checkout() {
    const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

    if (numItemsInCart < 1) {
        return <TitleSection text="Your cart is empty" />;
    }

    return (
        <>
            <TitleSection text="Place your order" />
            <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
                <CheckoutForm />
                <CartTotal />
            </div>
        </>
    );
}

export default Checkout;
