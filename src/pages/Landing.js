import axios from "axios";
import { FeaturedProductsSection, Header, Navbar } from "../components";
import Hero from "../components/Hero";
import { customFetch } from "../utils/index";

const featuredProductsUrl = "/products?featured=true";

export const loader = async () => {
    const res = await customFetch(featuredProductsUrl);
    const featuredProducts = res.data.data;

    return { featuredProducts };
};

function Landing() {

    return (
        <>
            <Hero />
            <FeaturedProductsSection/>
        </>
    );
}

export default Landing;
