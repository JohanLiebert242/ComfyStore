import { Filter, PaginationContainer, ProductContainer } from "../components";

import { customFetch } from "../utils/index";

export const loader = async () => {
    const res = await customFetch("/products");

    const products = res.data.data;

    const meta = res.data.meta;

    return { products, meta };
};

function Products() {
    return (
        <>
            <Filter />
            <ProductContainer />
            {/* <PaginationContainer/> */}
        </>
    );
}

export default Products;
