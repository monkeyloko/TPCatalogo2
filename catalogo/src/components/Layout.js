import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/productos" className="navbar-link">
                            Productos
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
