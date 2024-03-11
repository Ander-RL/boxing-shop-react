import React from "react";
import Navbar from "../components/Layout/Toolbar/Navbar";


const ErrorPage = () => {

    return (
        <React.Fragment>
            <Navbar />
            <h3 className="d-flex flex-col-6 justify-content-center mt-5">
                <div className="alert alert-danger text-center" role="alert">
                    This page could not be found!
                </div>
            </h3>
        </React.Fragment >
    );
};

export default ErrorPage;