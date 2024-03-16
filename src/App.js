import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { store } from "./store";
import {
    About,
    Cart,
    Checkout,
    Error,
    HomeLayout,
    Landing,
    Login,
    Orders,
    Products,
    Register,
    SingleProduct,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as allProductsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as orderLoader } from "./pages/Orders";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import "./App.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader(queryClient),
            },

            {
                path: "about",
                element: <About />,
            },

            {
                path: "cart",
                element: <Cart />,
            },

            {
                path: "checkout",
                element: <Checkout />,
                loader: checkoutLoader(store),
                action: checkoutAction(store, queryClient),
            },

            {
                path: "products",
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: allProductsLoader(queryClient),
            },
            {
                path: "orders",
                element: <Orders />,
                errorElement: <Error />,
                loader: orderLoader(store, queryClient),
            },

            {
                path: "products/:id",
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader(queryClient),
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store),
    },
]);



function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>;
        </QueryClientProvider>
    );
}

export default App;
