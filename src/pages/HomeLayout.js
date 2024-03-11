import { Link, Outlet, useNavigation } from "react-router-dom";
import { SubmitBtn, Header, Navbar } from "../components";
import Loading from "../components/Loading";

function HomeLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <>
            <Header />
            <Navbar />
            {isLoading ? 
            (
                <Loading />
            ) : 
            (
                <section className="align-element py-20">
                <Outlet />
                </section>
            )}
        </>
    );
}

export default HomeLayout;
