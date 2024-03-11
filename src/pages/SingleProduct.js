import { customFetch } from "../utils";

import { SingleProductItem } from "../components";

export const loader = async ({ params }) => {
    const res = await customFetch(`/products/${params.id}`);

    const singleProduct = res.data.data;

    return { singleProduct };
};

function SingleProduct() {
    return (
        <>
            <SingleProductItem />
        </>
    );
}

export default SingleProduct;
