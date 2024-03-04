import React from "react";

const OrderCard = ({clickHandler,...props}) => {

    return (
        <div className="card p-0 m-1" style={{ maxWidth: '18rem' }} key={props.id}>
            <div className="row g-0">
                <div className="row g-0">
                    <div className="col-8 col-lg-10">
                        <div className="card-body">
                            <div className="col">
                                <h5 className="card-title">Order id: {props.orderId}</h5>
                                <p className="card-text p-0 m-0">Customer id: {props.customerId}</p>
                                <p className="card-text p-0 m-0">Address: Night City</p>
                            </div>
                            <div className="flex-row mt-1">
                                <button className="btn btn-outline-dark btn-sm mt-auto" onClick={clickHandler}>
                                    <i className="bi bi-arrows-fullscreen"></i>
                                    &nbsp;&nbsp;Show Products
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="card-footer">
                        <p className="card-text text-end fw-bolder">Order total: {props.totalAmount}€</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;