import React from "react";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">

                <Container type="fluid" style="" id="navbar">

                    <Link to="/" class="navbar-brand text-black" href="#">PLUS ULTRA</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link text-black" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/prueba" class="nav-link text-black" href="#">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-black" href="#">My Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-black" href="#">Shopping Cart&nbsp;&nbsp;<i class="bi bi-cart-fill"></i></a>
                            </li>
                        </ul>
                    </div>

                </Container>

            </nav>
        </React.Fragment>
    );
};

export default Navbar;