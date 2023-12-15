import React from "react";

import Container from "../components/UI/Container";


const AccountPage = () => {

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">

                    <div className="col">

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div className="card m-1 w-100">

                                <div className="card border-dark rounded-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><h5 className="card-title">Account information</h5></div>
                                            <div className="col-2"><i class="bi bi-caret-right-fill"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><h5 className="card-title">My orders</h5></div>
                                            <div className="col-2"><i class="bi bi-caret-right-fill"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><h5 className="card-title">Address book</h5></div>
                                            <div className="col-2"><i class="bi bi-caret-right-fill"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><h5 className="card-title">Wishlist</h5></div>
                                            <div className="col-2"><i class="bi bi-caret-right-fill"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col"><h5 className="card-title">Change password</h5></div>
                                            <div className="col-2"><i class="bi bi-caret-right-fill"></i></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10">

                        <div className="card m-1 w-100 border-black">
                            <div className="card-body">
                                <h5 className="card-title">Account information</h5>
                                <hr className="bg-dark border-2 border-top border-black" />
                                <div className="row">
                                    <div className="col"><h6 className="fw-bold">First name</h6></div>
                                    <div className="col-10"><h6>Johnny</h6></div>
                                </div>
                                <hr className="bg-dark border-2 border-top border-black" />
                                <div className="row">
                                    <div className="col"><h6 className="fw-bold">Second name</h6></div>
                                    <div className="col-10"><h6>Silverhand</h6></div>
                                </div>
                                <hr className="bg-dark border-2 border-top border-black" />
                                <div className="row">
                                    <div className="col"><h6 className="fw-bold">Email</h6></div>
                                    <div className="col-10"><h6>JohnnyRocks@arasaka.com</h6></div>
                                </div>
                                <hr className="bg-dark border-2 border-top border-black" />
                                <div className="row">
                                    <div className="col"><h6 className="fw-bold">Birthdate</h6></div>
                                    <div className="col-10"><h6>01/01/2077</h6></div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </Container>
        </React.Fragment >
    );
};

export default AccountPage;