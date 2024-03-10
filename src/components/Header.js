import {Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-neutral py-2 text-neutral-content">
                <div className="align-element flex justify-center sm:justify-end">
                    <div className="align-element flex justify-center sm:justify-end">
                        <Link className="link link-hover text-xs sm:text-sm" to="/login">Sign in / Guest</Link>
                        <Link className="link link-hover text-xs sm:text-sm" to="/register">Create Account</Link>
                    </div>
                </div>
            </header>
    );
}

export default Header;