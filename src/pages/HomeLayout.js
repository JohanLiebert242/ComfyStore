import { Outlet } from "react-router-dom";
import { SubmitBtn } from "../components";

function HomeLayout() {
    return (
        <>
            <h1>HomeLayout page</h1>
            <Outlet />
        </>
    );
}

export default HomeLayout;
