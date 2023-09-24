import React from "react";

import BoxingGirlImg from "../../assets/img/BoxingGirlBags.jpg";
import BoxingBoysImg from "../../assets/img/BoxingBoys2.jpg";
import ContrastImg from "../../assets/img/Contrast.jpg";
import KickGirlImg from "../../assets/img/KickGirl.jpg";
import StretchingImg from "../../assets/img/Stretching.jpg";

const Carousel = props => {
    return (
        <div id="carouselIntroSlides" className="carousel slide" data-bs-ride="carousel" data-pause="hover">
            <div className="carousel-inner" id="carousel-innerIntro">

                <div className="carousel-item active">
                    <img src={BoxingGirlImg} className="d-block w-100" alt="BoxingGirlImg" />
                </div>
                <div className="carousel-item">
                    <img src={BoxingBoysImg} className="d-block w-100" alt="BoxingBoysImg" />
                </div>
                <div className="carousel-item">
                    <img src={ContrastImg} className="d-block w-100" alt="ContrastImg" />
                </div>
                <div className="carousel-item">
                    <img src={KickGirlImg} className="d-block w-100" alt="KickGirlImg" />
                </div>
                <div className="carousel-item">
                    <img src={StretchingImg} className="d-block w-100" alt="StretchingImg" />
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIntroSlides" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIntroSlides" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>


            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselIntroSlides" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselIntroSlides" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselIntroSlides" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselIntroSlides" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselIntroSlides" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

        </div>
    );
};

export default Carousel;