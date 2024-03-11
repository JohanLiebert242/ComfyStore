import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

import ProductList from "./ProductList";
import ProductGrid from "./ProductGrid";

function ProductContainer() {
    const [layout, setLayout] = useState("grid");

    const { meta } = useLoaderData();
    const { total } = meta.pagination;

    const setActiveStyle = (pattern) => {
        return `text-xl btn btn-circle btn-sm
             ${
                 pattern === layout
                     ? "btn-primary text-primary-content"
                     : "btn-ghost text-base-content"
             }`;
    };

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                <h4 className="font-medium text-md">
                    {total} {total <= 1 ? "product" : "products"}
                </h4>
                <div className="flex gap-x-2">
                    <button
                        className={setActiveStyle("grid")}
                        onClick={() => setLayout("grid")}
                    >
                        <BiCategory />
                    </button>
                    <button
                        className={setActiveStyle("list")}
                        onClick={() => setLayout("list")}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Product */}
            <div>
                {total === 0 ? (
                    <h5>Sorry, there was no item matched your search</h5>
                ) : layout === "list" ? (
                    <ProductList />
                ) : (
                    <ProductGrid />
                )}
            </div>
        </>
    );
}

export default ProductContainer;
