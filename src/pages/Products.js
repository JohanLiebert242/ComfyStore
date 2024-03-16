import { Filter, PaginationContainer, ProductContainer } from "../components";

import { customFetch } from "../utils/index";

const allProductsQuery = (queryParams) => {
    const { search, category, company, sort, price, shipping, page } =
        queryParams;

    return {
        queryKey: [
            "allproducts",
            search ?? "",
            category ?? "all",
            company ?? "all",
            sort ?? "a-z",
            price ?? 100000,
            shipping ?? false,
            page ?? 1,
        ],
        queryFn: () => customFetch("/products", {
            params: queryParams
        }),
    };
};

export const loader =
    (queryClient) =>
    async ({ request }) => {
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);

        const res = await queryClient.ensureQueryData(allProductsQuery(params));

        const products = res.data.data;

        const meta = res.data.meta;

        return { products, meta, params };
    };

function Products() {
    return (
        <>
            <Filter />
            <ProductContainer />
            <PaginationContainer />
        </>
    );
}

export default Products;
