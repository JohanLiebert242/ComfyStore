import FormInput from "./FormInput";
import { Form, redirect } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/CartSlice";

export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const { firstName, address } = Object.fromEntries(formData);
        const user = store.getState().userState.user;

        const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

        const info = {
            firstName,
            address,
            chargeTotal: orderTotal,
            orderTotal: formatPrice(orderTotal),
            cartItems,
            numItemsInCart,
        };

        try {
            const res = await customFetch.post(
                "/orders",
                { data: info },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            store.dispatch(clearCart());
            toast.success("Order placed successfully");
            return redirect("/orders");
        } catch (error) {
            console.log(error);
            const message =
                error?.response?.data?.message ||
                "There was an error with your order. Please try again.";
            toast.error(message);
            return null;
        }
    };

function CheckoutForm() {
    return (
        <Form method="POST" className="flex flex-col gap-y-4">
            <h3 className="font-medium text-xl">Shipping Information</h3>
            <FormInput label="First name" type="text" name="firstName" />
            <FormInput label="Address" type="text" name="address" />
            <div className="mt-4">
                <SubmitBtn text="PLACE YOUR ORDER" />
            </div>
        </Form>
    );
}

export default CheckoutForm;
