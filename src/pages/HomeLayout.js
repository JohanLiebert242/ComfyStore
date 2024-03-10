import { Link, Outlet } from "react-router-dom";
import { SubmitBtn, Header, Navbar } from "../components";

function HomeLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <section className="align-element py-20">
                <Outlet />
            </section>
        </>
    );
}

export default HomeLayout;
