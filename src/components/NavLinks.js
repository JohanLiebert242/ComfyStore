import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navLinks = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "about", text: "About" },
    { id: 3, url: "products", text: "Products" },
    { id: 4, url: "cart", text: "Cart" },
    { id: 5, url: "orders", text: "Orders" },
    { id: 6, url: "checkout", text: "Checkout" },
];

function NavLinks() {
    const user = useSelector((state) => state.userState.user);

    return (
        <>
            {navLinks.map((link) => {
                if((link.url === 'orders' || link.url === 'checkout') && !user) return null;
                return (
                    <li key={link.id}>
                        <NavLink className="capitalize" to={link.url}>
                            {link.text}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );
}

export default NavLinks;
