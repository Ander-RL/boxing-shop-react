import './App.css';

import BoxingGirlImg from "./img/BoxingGirlBags.jpg";
import BoxingBoysImg from "./img/BoxingBoys2.jpg";
import BoxingGlovesImg from "./img/Gloves.jpg";
import ContrastImg from "./img/Contrast.jpg";
import KickGirlImg from "./img/KickGirl.jpg";
import StretchingImg from "./img/Stretching.jpg";
import PunchingBagImg from "./img/HookBag.jpg";
import TrainingPadsImg from "./img/Pads.png";
import HeadGuardImg from "./img/Headguard.jpg";
import Vandages from "./img/Vandages.jpg";
import MouthPiecesImg from "./img/Mouthpiece.jpg";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">

        <div class="container-fluid">

          <a class="navbar-brand text-black" href="#">PLUS ULTRA</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-black" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="#">My Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="#">Shopping Cart&nbsp;&nbsp;<i class="bi bi-cart-fill"></i></a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div class="container-fluid p-0" id="intro">

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
      </div>



      <div class="container-fluid p-4 pb-0" id="about">

        <div class="row">

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{maxWidth: '30rem'}}>
              <img src={PunchingBagImg} class="card-img-top" alt="Punching bag" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">PUNCHING BAGS</h5>
                <p class="card-text">Measure the distance and throw your most powerful punches against our punching bads.
                  Don't worry, they can take it.</p>
                <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
                  now</a>
              </div>
            </div>
          </div>

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{maxWidth: '30rem'}}>
              <img src={BoxingGlovesImg} class="card-img-top" alt="Gloves" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">BOXING GLOVES</h5>
                <p class="card-text">Protect your hands while you kill the heretic, burn the mutant and purge the unclean.
                  10, 12, 14 and 16 oz available.</p>
                <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
                  now</a>
              </div>
            </div>
          </div>

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{maxWidth: '30rem'}}>
              <img src={TrainingPadsImg} class="card-img-top" alt="Pads" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">TRAINING PADS</h5>
                <p class="card-text">Train with others, perfect your technic and make enemies using our top of the line
                  pads. Suitable for punches, kicks and knee impacts.</p>
                <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
                  now</a>
              </div>
            </div>
          </div>

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{maxWidth: '30rem'}}>
              <img src={HeadGuardImg} class="card-img-top" alt="Headguard" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">HEADGUARDS</h5>
                <p class="card-text">Minimize neuron loses and broken noses using our high-tech headguards. All sizes
                  available.</p>
                <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
                  now</a>
              </div>
            </div>
          </div>

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{maxWidth: '30rem'}}>
              <img src={Vandages} class="card-img-top" alt="Vandages" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">VANDAGES</h5>
                <p class="card-text">Wrap your hands with our elastic and semi-elastic vandages. Available at 2, 3, 4 and
                  4.5m long.</p>
                <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
                  now</a>
              </div>
            </div>
          </div>

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{maxWidth: '30rem'}}>
              <img src={MouthPiecesImg} class="card-img-top" alt="Mouthpieces" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">MOUTHPIECES</h5>
                <p class="card-text">Keep your precious teeth intact from inminent danger with our amazing mouthpieces.</p>
                <a href="" class="btn btn-outline-dark btn-sm mt-auto m-1"><i class="bi bi-cart2"></i>&nbsp;&nbsp;shop
                  now</a>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="container-fluid bg-light p-5" id="footer">

        <div class="row">

          <div class="col-lg col-md-12">
          </div>

          <div class="col-lg col-md-12">
          </div>

          <div class="col-lg-4 col-md-12">
            <div class="row">
              <div class="footerContentCol col p-0">
                <h3 class="h6 text-dark m-0 mb-3">ABOUT US</h3>
                <div class="row m-0">
                  <a class="p-0" href="">About Plus Ultra</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Best Sellers</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Careers</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Reviews</a>
                </div>
              </div>

              <div class="footerContentCol col p-0">
                <h3 class="h6 text-dark m-0 mb-3">HELP</h3>
                <div class="row m-0">
                  <a class="p-0" href="">Delivery status</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Returns & Exchanges</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Warranty information</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Payment options</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">Size charts</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href="">FAQ</a>
                </div>
              </div>

              <div class="footerContentCol col p-0">
                <h3 class="h6 text-dark m-0 mb-3">CONTACT US</h3>
                <div class="row m-0">
                  <a class="p-0" href=""><i class="bi bi-facebook"></i>  Facebook</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href=""><i class="bi bi-twitter"></i>  Twitter</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href=""><i class="bi bi-instagram"></i>  Instagram</a>
                </div>
                <div class="row m-0">
                  <a class="p-0" href=""><i class="bi bi-youtube"></i>  Youtube</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg col-md-12">
          </div>

          <div class="col-lg col-md-12">
          </div>

        </div>

      </div>

    </div>

  );
}

export default App;
