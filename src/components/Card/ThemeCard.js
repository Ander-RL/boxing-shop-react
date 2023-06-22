import React from "react";

const ThemeCard = props => {
    return(
        <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
        <img src={props.img} class="card-img-top" alt={props.imgAlt} />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
            now</a>
        </div>
      </div>
    );
};

export default ThemeCard;