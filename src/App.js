import './App.css';

import BoxingGlovesImg from "./assets/img/Gloves.jpg";
import PunchingBagImg from "./assets/img/HookBag.jpg";
import TrainingPadsImg from "./assets/img/Pads.png";
import HeadGuardImg from "./assets/img/Headguard.jpg";
import Vandages from "./assets/img/Vandages.jpg";
import MouthPiecesImg from "./assets/img/Mouthpiece.jpg";

import Navbar from './components/Toolbar/Navbar';
import Container from './components/UI/Container';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <div>
      <Navbar />

      <Container type="fluid" style="p-0" id="intro">
        <Carousel />
      </Container>

      <Container type="fluid" style="p-4 pb-0" id="about">
        <div class="row">

          <div class="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
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
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
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
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
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
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
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
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
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
            <div class="card text-bg-light mb-4 shadow p-3 bg-white rounded" style={{ maxWidth: '30rem' }}>
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
      </Container>


      <Container type="fluid" style="bg-light p-5" id="footer">
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
      </Container>

    </div>

  );
}

export default App;
