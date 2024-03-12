import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormShipping from "./FormShipping";

function Filter() {
    const { meta, params } = useLoaderData();

    const { search, category, company, order, priceRange, shipping } = params;

    return (
        <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {/* Search */}
            <FormInput
                type="search"
                name="search"
                label="Search Product"
                size="input-sm"
                defaultValue={search}
            />
            {/* Category */}
            <FormSelect
                label="Select category"
                name="category"
                defaultValue={category}
                size="select-sm"
                lists={meta.categories}
            />
            {/* Company */}
            <FormSelect
                label="Select company"
                name="company"
                defaultValue={company}
                size="select-sm"
                lists={meta.companies}
            />
            {/* Sort */}
            <FormSelect
                label="Sort by"
                name="order"
                defaultValue={order}
                size="select-sm"
                lists={["a-z", "z-a", "high", "low"]}
            />

            {/* Price Range */}
            <FormRange
                label="Select price"
                name="priceRange"
                size="range-sm"
                defaultValue={priceRange}
            />

            {/* FreeShip */}
            <FormShipping
                label="Free shipping"
                name="shipping"
                size="checkbox-sm"
                defaultValue={shipping}
            />

            {/* Buttons */}
            <button type="submit" className="btn btn-primary btn-sm ">
                SEARCH
            </button>
            <Link to="/products" className="btn btn-accent btn-sm">
                RESET
            </Link>
        </Form>
    );
}

export default Filter;
