import { formatPrice, generateAmountOptions } from "../utils";
import { UseDispatch, useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/CartSlice";

function CartItem({
    amount,
    cartID,
    chosenColor,
    company,
    image,
    price,
    productID,
    title,
}) {
    const dollarAmount = formatPrice(price);
    const dispatch = useDispatch();

    const handleRemoveItem = () => {};

    const handleEditAmount = () => {};

    return (
        <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
            <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
            />
            <div className="sm:ml-16 sm:w-48">
                <h3 className="capitalize font-medium">{title}</h3>
                <h4 className="mt-2 capitalize text-sm text-neutral-content">
                    {company}
                </h4>
                <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                    Color:
                    <span
                        className="badge badge-sm"
                        style={{ backgroundColor: chosenColor }}
                    ></span>
                </p>
            </div>
            <div className="sm:ml-12">
                <div className="form-control max-w-xs">
                    <label htmlFor="amount" className="label p-0">
                        <span className="label-text">Amount</span>
                    </label>
                    <select
                        name="amount"
                        id="amount"
                        className="mt-2 select select-base select-bordered select-xs"
                        value={amount}
                        onChange={handleEditAmount}
                    >
                        {generateAmountOptions(amount + 5)}
                    </select>
                </div>
                <button
                    onClick={handleRemoveItem}
                    className="mt-2 link link-primary link-hover text-sm"
                >
                    Remove
                </button>
            </div>
            <span className="font-medium sm:ml-auto">{dollarAmount}</span>
        </article>
    );
}

export default CartItem;
