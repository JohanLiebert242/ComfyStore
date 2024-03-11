import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
import {loader as landingLoader} from './pages/Landing';

import "./App.css";

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
                loader: landingLoader
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
            },

            {
                path: "products",
                element: <Products />,
            },
            {
                path: "orders",
                element: <Orders />,
            },

            {
                path: "products:/id",
                element: <SingleProduct />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
