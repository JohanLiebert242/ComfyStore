import { Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <>
            <h1>HomeLayout page</h1>
            <Outlet />
        </>
    );
}

export default HomeLayout;
