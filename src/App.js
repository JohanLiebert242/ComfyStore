import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {store} from './store';
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
import { loader as allProductsLoader} from './pages/Products';
import { loader as checkoutLoader} from './pages/Checkout';
import { action as registerAction} from './pages/Register';
import { action as loginAction} from './pages/Login';

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
                loader: landingLoader,
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
                errorElement: <Error />,
                loader: checkoutLoader(store)
            },

            {
                path: "products",
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: allProductsLoader
            },
            {
                path: "orders",
                element: <Orders />,
            },

            {
                path: "products/:id",
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
        action: registerAction
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store)
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
