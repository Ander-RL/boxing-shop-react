import React from "react";
import Container from "../../UI/Container";

const Footer = () => {
    return (
        <Container type="fluid" style="bg-light p-5" id="footer">
            <div className="row">

                <div className="col-lg col-md-12">
                </div>

                <div className="col-lg col-md-12">
                </div>

                <div className="col-lg-4 col-md-12">
                    <div className="row">
                        <div className="footerContentCol col p-0">
                            <h3 className="h6 text-dark m-0 mb-3">ABOUT US</h3>
                            <div className="row m-0">
                                <a className="p-0" href="">About Plus Ultra</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Best Sellers</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Careers</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Reviews</a>
                            </div>
                        </div>

                        <div className="footerContentCol col p-0">
                            <h3 className="h6 text-dark m-0 mb-3">HELP</h3>
                            <div className="row m-0">
                                <a className="p-0" href="">Delivery status</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Returns & Exchanges</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Warranty information</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Payment options</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">Size charts</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href="">FAQ</a>
                            </div>
                        </div>

                        <div className="footerContentCol col p-0">
                            <h3 className="h6 text-dark m-0 mb-3">CONTACT US</h3>
                            <div className="row m-0">
                                <a className="p-0" href=""><i className="bi bi-facebook"></i>  Facebook</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href=""><i className="bi bi-twitter"></i>  Twitter</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href=""><i className="bi bi-instagram"></i>  Instagram</a>
                            </div>
                            <div className="row m-0">
                                <a className="p-0" href=""><i className="bi bi-youtube"></i>  Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg col-md-12">
                </div>

                <div className="col-lg col-md-12">
                </div>

            </div>
        </Container>
    );
};

export default Footer;