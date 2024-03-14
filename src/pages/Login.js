import { Link, Form, redirect } from "react-router-dom";

import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

const url = "/auth/local";

// Truyền param là store để có thể access vào dispatch
// *Có thể console.log(store) để nhìn
export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        try {
            const res = await customFetch.post(url, data);
            store.dispatch(loginUser(res.data));
            toast.success("Successfully login");
            return redirect("/");
        } catch (error) {
            const message = error?.response?.data?.error?.message;
            toast.error(message);
            return null;
        }
    };

function Login() {
    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="POST"
                className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput
                    type="email"
                    label="email"
                    name="identifier"
                    defaultValue="test@test.com"
                />
                <FormInput
                    type="password"
                    label="Password"
                    name="password"
                    defaultValue="secret"
                />
                <div className="mt-4">
                    <SubmitBtn text="LOGIN" />
                </div>
                <button className="btn btn-secondary btn-block">
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
