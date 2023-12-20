import React from "react";

const AddressBookCard = (props) => {

    //const { id, title, price, totalPrice, img, description, quantity } = props;

    return (
        <div className="card m-1 w-100 border-black">
            <div className="card-body">
                <h5 className="card-title">My Address</h5>
                <hr className="bg-dark border-2 border-top border-black" />
                <div className="row">
                    <div className="col"><h6 className="fw-bold">Door</h6></div>
                    <div className="col-10"><h6>C</h6></div>
                </div>
                <hr className="bg-dark border-2 border-top border-black" />
                <div className="row">
                    <div className="col"><h6 className="fw-bold">Floor</h6></div>
                    <div className="col-10"><h6>1</h6></div>
                </div>
                <hr className="bg-dark border-2 border-top border-black" />
                <div className="row">
                    <div className="col"><h6 className="fw-bold">Street/Square</h6></div>
                    <div className="col-10"><h6>Ferguson St</h6></div>
                </div>
                <hr className="bg-dark border-2 border-top border-black" />
                <div className="row">
                    <div className="col"><h6 className="fw-bold">City/Town</h6></div>
                    <div className="col-10"><h6>Night City</h6></div>
                </div>
                <hr className="bg-dark border-2 border-top border-black" />
                <div className="row">
                    <div className="col"><h6 className="fw-bold">Country</h6></div>
                    <div className="col-10"><h6>Free City of Night City</h6></div>
                </div>
                <hr className="bg-dark border-2 border-top border-black" />
                <div className="row">
                    <div className="col"><h6 className="fw-bold">Postal Code</h6></div>
                    <div className="col-10"><h6>76546745</h6></div>
                </div>
            </div>
        </div>
    );
};

export default AddressBookCard;