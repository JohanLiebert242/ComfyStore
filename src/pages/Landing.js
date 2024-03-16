import axios from "axios";
import { FeaturedProductsSection, Header, Navbar } from "../components";
import Hero from "../components/Hero";
import { customFetch } from "../utils/index";

const featuredProductsUrl = "/products?featured=true";

const featuredProductsQuery = {
    queryKey: ["featuredProducts"],
    queryFn: () => customFetch(featuredProductsUrl),
};

export const loader = (queryClient) => async () => {
    const res = await queryClient.ensureQueryData(featuredProductsQuery);
    const featuredProducts = res.data.data;

    return { featuredProducts };
};

function Landing() {
    return (
        <>
            <Hero />
            <FeaturedProductsSection />
        </>
    );
}

export default Landing;
