import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/CartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

function Header() {
    const user = useSelector((state) => state.userState.user);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate("/");
        dispatch(logoutUser());
        dispatch(clearCart());
        queryClient.removeQueries();

    };

    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className="align-element flex justify-center sm:justify-end">
                <div className="flex gap-x-6 justify-center items-center">
                    {user ? (
                        <div className="flex gap-x-2 sm:gap-x-8 items-center">
                            <p className="text-xs sm:text-sm">
                                Hello, {user.username}
                            </p>
                            <button
                                className="btn btn-xs btn-outline btn-primary "
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link
                                className="link link-hover text-xs sm:text-sm"
                                to="/login"
                            >
                                Sign in / Guest
                            </Link>
                            <Link
                                className="link link-hover text-xs sm:text-sm"
                                to="/register"
                            >
                                Create Account
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
