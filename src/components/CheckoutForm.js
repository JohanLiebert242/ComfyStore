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
        //Phải lấy đúng key là name vì API đã được tạo như vậy -> nếu sai -> lỗi
        const { name, address } = Object.fromEntries(formData);
        const user = store.getState().userState.user;
        const { cartItems, numItemsInCart, orderTotal } = store.getState().cart;

        const info = {
            name,
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
            const message = error?.response?.data?.error?.message;
            toast.error(message);

            //Token is expired or unauthorized error
            if (error.response.status === 401 || 403) return redirect("/login");
            return null;
        }
    };

function CheckoutForm() {
    return (
        <Form method="POST" className="flex flex-col gap-y-4">
            <h3 className="font-medium text-xl">Shipping Information</h3>

            {/* Đặt name của input đúng với api */}
            <FormInput label="First name" type="text" name="name" />
            <FormInput label="Address" type="text" name="address" />
            <div className="mt-4">
                <SubmitBtn text="PLACE YOUR ORDER" />
            </div>
        </Form>
    );
}

export default CheckoutForm;
