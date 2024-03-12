import { Filter, PaginationContainer, ProductContainer } from "../components";

import { customFetch } from "../utils/index";

export const loader = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    const res = await customFetch("/products", { params });

    const products = res.data.data;

    const meta = res.data.meta;

    return { products, meta, params };
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
