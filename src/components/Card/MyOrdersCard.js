import React from "react";

const AddressBookCard = (props) => {

    //const { id, title, price, totalPrice, img, description, quantity } = props;

    return (
        <div className="card m-1 w-100 border-black">
            <div className="card-body">
                <h5 className="card-title">My Orders</h5>
                <hr className="bg-dark border-2 border-top border-black" />

                <div className="card m-1 w-100 border-black">
                    <div className="card-body">
                        <h5 className="card-title">My Order Nº1</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddressBookCard;