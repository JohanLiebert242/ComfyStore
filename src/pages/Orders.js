import { redirect, useLoaderData } from "react-router-dom";
import { OrderList, PaginationContainer, TitleSection } from "../components";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const loader =
    (store) =>
    async ({ request }) => {
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        const user = store.getState().userState.user;
        if (!user) {
            toast.warn("You must be logged in to access orders");
            return redirect("/login");
        }

        try {
            const res = await customFetch("/orders", {
                params,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            return { orders: res.data.data, meta: res.data.meta };
        } catch (error) {
            console.log(error);
            const message = error?.response?.data?.error?.message;
            toast.error(message);
            if (error?.response?.status === 401 || 403)
                return redirect("/login");

            return null;
        }
    };

function Orders() {
    const { meta } = useLoaderData();
    const totalOrders = meta.pagination.total;

    if (totalOrders === 0) {
        return <TitleSection text="Please make an order" />;
    }

    return (
        <>
            <TitleSection text="Your orders" />
            <OrderList />
            <PaginationContainer />
        </>
    );
}

export default Orders;
