import React from "react";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import CartOffCanvas from "../../OffCanvas/CartOffCanvas";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">

                <Container type="fluid" style="" id="navbar">

                    <Link to="/" className="navbar-brand text-black" href="#">PLUS ULTRA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-black" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link text-black" href="#">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/account" className="nav-link text-black" href="#">My Account</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-black" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">My Cart&nbsp;&nbsp;
                                <i className="bi bi-cart-fill text-black"></i></button>
                            </li>
                        </ul>
                    </div>

                </Container>

            </nav>

            <CartOffCanvas
                id="offcanvasCart"
                title="Shopping Cart"
            />

        </React.Fragment>
    );
};

export default Navbar;