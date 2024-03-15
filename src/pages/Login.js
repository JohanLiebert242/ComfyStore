import { Link, Form, redirect, useNavigate } from "react-router-dom";

import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

import { useDispatch } from "react-redux";

// Truyền param là store để có thể access vào dispatch
// *Có thể console.log(store) để nhìn
export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
            const response = await customFetch.post("/auth/local", data);
            store.dispatch(loginUser(response.data));
            toast.success("logged in successfully");
            return redirect("/");
        } catch (error) {
            console.log(error);
            const errorMessage =
                error?.response?.data?.error?.message ||
                "please double check your credentials";

            toast.error(errorMessage);
            return null;
        }
    };

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post("/auth/local", {
                identifier: "test@test.com",
                password: "secret",
            });
            dispatch(loginUser(response.data));
            toast.success("welcome guest user");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("guest user login error.please try later.");
        }
    };

    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="POST"
                className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput type="email" label="email" name="identifier" />
                <FormInput type="password" label="Password" name="password" />
                <div className="mt-4">
                    <SubmitBtn text="LOGIN" />
                </div>
                <button
                    onClick={loginAsGuestUser}
                    className="btn btn-secondary btn-block"
                    type="button"
                >
                    GUEST USER
                </button>
                <p className="text-center">
                    Not a member yet?
                    <Link
                        className="ml-2 link link-hover link-primary capitalize"
                        to="/register"
                    >
                        Register
                    </Link>
                </p>
            </Form>
        </section>
    );
}

export default Login;
