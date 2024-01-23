import React from "react";

const MyOrdersProductCard = (props) => {
    
    const totalPrice = props.price * props.quantity;

    return (
        <div className="card text-bg-light m-2 shadow p-3 bg-white rounded" style={{ maxWidth: '18rem' }} key={props.id}>
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body d-flex flex-column">

                <div className="card-body  bg-body-tertiary rounded mb-3">
                    <h5 className="card-title align-self-center">{props.title}</h5>
                    <span className="card-text fw-light pb-4 align-self-center">{props.description}</span>
                </div>

                <div className="card-body bg-body-tertiary rounded mb-3 text-center">
                    <div className="row ">
                        <span className="badge bg-secondary rounded-pill">PRICE</span>
                        <span className="card-text">{props.price}€</span>
                    </div>
                    <div className="row">
                        <span className="badge bg-secondary rounded-pill">QUANTITY</span>
                        <span className="card-text">{props.quantity}</span>
                    </div>
                    <div className="row">
                        <span className="badge bg-secondary rounded-pill">TOTAL PRICE</span>
                        <span className="card-text">{totalPrice}€</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyOrdersProductCard;