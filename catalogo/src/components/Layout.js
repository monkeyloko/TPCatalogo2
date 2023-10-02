import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Asegúrate de crear un archivo Layout.css para los estilos.

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
