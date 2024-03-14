import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useLoaderData, Link } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

export const loader = async ({ params }) => {
    const res = await customFetch(`/products/${params.id}`);

    const singleProduct = res.data.data;

    return { singleProduct };
};

function SingleProduct() {
    const { singleProduct } = useLoaderData();

    const { image, title, description, price, colors, company } =
        singleProduct.attributes;

    const dollarAmount = formatPrice(price);

    const [amount, setAmount] = useState(1);
    const [chosenColor, setChosenColor] = useState(colors[0]);

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value));
    };

    const dispatch = useDispatch();

    const cartItem = {
        cartID: singleProduct.id + chosenColor,
        productID: singleProduct.id,
        image,
        title,
        price,
        company,
        chosenColor,
        amount,
    };

    const addItemToCart = () => {
        dispatch(addItem({ product: cartItem }));
    };

    return (
        <section>
            <div className="text-md breadcrumbs">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </div>

            {/* Product Content */}
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
                <img
                    src={image}
                    alt={title}
                    className="w-96 h-96 object-cover rounded-lg lg:w-full"
                />
                <div>
                    <h1 className="capitalize text-3xl font-bold">{title}</h1>
                    <h4 className="text-xl text-neutral-content font-bold mt-2">
                        {company}
                    </h4>
                    <p className="mt-3 text-xl">{dollarAmount}</p>
                    <p className="mt-6 leading-8">{description}</p>

                    {/* Colors */}
                    <div className="mt-6">
                        <h4 className="text-md font-medium tracking-wider capitalize">
                            colors
                        </h4>
                        <div className="mt-2">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    style={{ background: color }}
                                    onClick={() => setChosenColor(color)}
                                    className={`badge w-6 h-6 mr-2 ${
                                        color === chosenColor &&
                                        "border-2 border-secondary"
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                    {/* Select amount */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <h4 className="text-md font-medium tracking-wider capitalize">
                                Amount
                            </h4>
                        </label>
                        <select
                            className="select select-secondary select-bordered select-md"
                            value={amount}
                            onChange={handleAmount}
                        >
                            {generateAmountOptions(20)}
                        </select>
                    </div>
                    {/* Buttons */}
                    <div className="mt-10 ">
                        <button
                            className="btn btn-secondary btn-md"
                            onClick={addItemToCart}
                        >
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleProduct;
