import { useLoaderData, Link } from "react-router-dom";

function SingleProductItem() {
    const { singleProduct } = useLoaderData();
    console.log(singleProduct);

    const { image, title, description, price, colors, company } =
        singleProduct.attributes;
    return (
        <div>
            <div>
                <Link>Home</Link>
                <Link>Products</Link>
            </div>
            <section>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{company}</p>
                    <span>{price}</span>
                    <p>{description}</p>
                    <span>Colors</span>
                </div>
            </section>
        </div>
    );
}

export default SingleProductItem;
