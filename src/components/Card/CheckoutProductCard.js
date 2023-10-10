import React from "react";

const CheckoutProductCard = (props) => {

    const { id, title, price, img, description, quantity } = props;

    return (
        <div className="card m-1" key={id}>
            <div className="row g-0">
                <div className="row g-0">
                    <div className="row g-0">
                        <div className="col-4 col-lg-2">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-8 col-lg-10">
                            <div className="card-body">
                                <div className="d-flex flex-column d-sm-flex flex-sm-row">
                                    <div className="col-lg-8 col-sm-6 me-2">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{description}</p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 me-2">
                                        <h5 className="card-title">In Stock</h5>
                                        <p className="card-text">Amount&nbsp;&nbsp;
                                        <button type="button" className="btn btn-outline-dark">
                                            {quantity}</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="card-footer">
                            <p className="card-text text-end fw-bolder"><small className="text">Item total: {price}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProductCard;