import React from "react";

const AccountInfoCard = (props) => {

    //const { id, title, price, totalPrice, img, description, quantity } = props;

    return (
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
    );
};

export default AccountInfoCard;