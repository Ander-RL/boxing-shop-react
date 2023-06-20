import React from "react";

import BoxingGirlImg from "../../assets/img/BoxingGirlBags.jpg";
import BoxingBoysImg from "../../assets/img/BoxingBoys2.jpg";
import ContrastImg from "../../assets/img/Contrast.jpg";
import KickGirlImg from "../../assets/img/KickGirl.jpg";
import StretchingImg from "../../assets/img/Stretching.jpg";

const Carousel = props => {
    return (
        <div id="carouselIntroSlides" class="carousel slide" data-bs-ride="carousel" data-pause="hover">
            <div class="carousel-inner" id="carousel-innerIntro">

                <div class="carousel-item active">
                    <img src={BoxingGirlImg} class="d-block w-100" alt="BoxingGirlImg" />
                </div>
                <div class="carousel-item">
                    <img src={BoxingBoysImg} class="d-block w-100" alt="BoxingBoysImg" />
                </div>
                <div class="carousel-item">
                    <img src={ContrastImg} class="d-block w-100" alt="ContrastImg" />
                </div>
                <div class="carousel-item">
                    <img src={KickGirlImg} class="d-block w-100" alt="KickGirlImg" />
                </div>
                <div class="carousel-item">
                    <img src={StretchingImg} class="d-block w-100" alt="StretchingImg" />
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIntroSlides" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIntroSlides" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>


            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIntroSlides" data-bs-slide-to="0" class="active"
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