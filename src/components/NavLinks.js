import { NavLink } from "react-router-dom";

const navLinks = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "about", text: "About" },
    { id: 3, url: "products", text: "Products" },
    { id: 4, url: "cart", text: "Cart" },
    { id: 5, url: "orders", text: "Orders" },
    { id: 6, url: "checkout", text: "Checkout" },
];

function NavLinks() {
    return (
        <>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <NavLink className="capitalize" to={link.url}>
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </>
    );
}

export default NavLinks;
