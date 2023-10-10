import React from "react";

import Container from "../components/UI/Container";

import BoxingGlovesImg from "../assets/img/Gloves.jpg";
import CheckoutProductCard from "../components/Card/CheckoutProductCard";


const CheckoutPage = () => {
    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                    <div className="col-lg-8 col-md-6">

                        <CheckoutProductCard
                            title="Product1"
                            img={BoxingGlovesImg}
                            quantity="5"
                            price="30€" 
                            description="Product description"
                        />

                        <CheckoutProductCard
                            title="Product2"
                            img={BoxingGlovesImg}
                            price="25€"
                            quantity="2" 
                            description="Product description"
                        />

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