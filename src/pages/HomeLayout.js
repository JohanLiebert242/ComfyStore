import { Link, Outlet } from "react-router-dom";
import { SubmitBtn, Header } from "../components";

function HomeLayout() {
    return (
        <section className="align-element">
            <Outlet />
        </section>
    );
}

export default HomeLayout;
