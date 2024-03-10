import { Link, Outlet } from "react-router-dom";
import { SubmitBtn } from "../components";

function HomeLayout() {
    return (
        <section className="align-element py-20">
            <Outlet />
        </section>
    );
}

export default HomeLayout;
