import { SubmitBtn, FormInput } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "/auth/local/register";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log(data);

    try {
        const res = await customFetch.post(url, data);
        toast.success("Successfully login");
        return redirect("/login");
    } catch (error) {
        const message = error?.response?.data?.error?.message;
        toast.error(message);
        return null;
    }
};

function Register() {
    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="POST"
                className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">Register</h4>
                <FormInput label="Username" type="text" name="username" />
                <FormInput label="Email" type="email" name="email" />
                <FormInput label="Password" type="password" name="password" />
                <div className="mt-4">
                    <SubmitBtn text="REGISTER" />
                </div>
                <p className="text-center">
                    Already a member?
                    <Link
                        className="ml-2 link link-hover link-primary capitalize"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </Form>
        </section>
    );
}

export default Register;
