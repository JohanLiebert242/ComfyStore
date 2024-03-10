import { NavLink } from "react-router-dom";

const navLinks = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "/about", text: "About" },
    { id: 3, url: "/products", text: "Products" },
    { id: 2, url: "/cart", text: "Cart" },
    { id: 2, url: "/orders", text: "Orders" },
    { id: 2, url: "/checkout", text: "Checkout" },
];

function NavLinks() {
    return (
        <>
            {navLinks.map((link) => (
                <li className="capitalize" key={link.id}>
                    <NavLink to={link.url}>{link.text}</NavLink>
                </li>
            ))}
        </>
    );
}

export default NavLinks;
