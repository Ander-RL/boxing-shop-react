import React from "react";

import Container from "../components/UI/Container";

import BoxingGlovesImg from "../assets/img/Gloves.jpg";


const CheckoutPage = () => {
    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                    <div className="col-lg-8 col-md-6">
                        <div className="card m-1">
                            <div className="row g-0">
                                <div className="row g-0">
                                    <div className="row g-0">
                                        <div className="col-4 col-lg-2">
                                            <img src={BoxingGlovesImg} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-8 col-lg-10">
                                            <div className="card-body">
                                                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                                                    <div className="col-lg-8 col-sm-6 me-2">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6 me-2">
                                                        <h5 className="card-title">Avaliable</h5>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="card-footer">
                                            <p className="card-text"><small className="text">Items total: </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div class="card m-1">
                                <div class="card-body">
                                    <h5 class="card-title">Shipping details</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div class="card m-1">
                                <div class="card-body">
                                    <h5 class="card-title">Payment</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div class="card m-1">
                                <div class="card-body">
                                    <h5 class="card-title">Helpful links</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </React.Fragment >
    );
};

export default CheckoutPage;