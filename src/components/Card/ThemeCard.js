import React from "react";
import { Link } from "react-router-dom";

const ThemeCard = props => {
  return (
    <div className="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
      <img src={props.img} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={props.to} className="btn btn-outline-dark btn-sm mt-auto m-1"><i className="bi bi-cart2"></i>
          &nbsp;&nbsp;shop now
        </Link>
      </div>
    </div>
  );
};

export default ThemeCard;