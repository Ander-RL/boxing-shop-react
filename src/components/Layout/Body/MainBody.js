import React from "react";

import Container from "../../UI/Container";
import ThemeCard from "../../Card/ThemeCard";

import BoxingGlovesImg from "../../../assets/img/Gloves.jpg";
import PunchingBagImg from "../../../assets/img/HookBag.jpg";
import TrainingPadsImg from "../../../assets/img/Pads.png";
import HeadGuardImg from "../../../assets/img/Headguard.jpg";
import Vandages from "../../../assets/img/Vandages.jpg";
import MouthPiecesImg from "../../../assets/img/Mouthpiece.jpg";

const MainBody = () => {
    return(
        <Container type="fluid" style="p-4 pb-0" id="about">
        <div className="row">

          <div className="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <ThemeCard
              img={PunchingBagImg}
              imgAlt="Punching bag"
              title="PUNCHING BAGS"
              description="Measure the distance and throw your most powerful punches against our punching bads. Don't worry, they can take it."
            />
          </div>

          <div className="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <ThemeCard
              img={BoxingGlovesImg}
              imgAlt="Boxing gloves"
              title="BOXING GLOVES"
              description="Protect your hands while you kill the heretic, burn the mutant and purge the unclean. 10, 12, 14 and 16 oz available."
            />
          </div>

          <div className="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <ThemeCard
              img={TrainingPadsImg}
              imgAlt="Pads"
              title="TRAINING PADS"
              description="Train with others, perfect your technic and make enemies using our top of the line pads. Suitable for punches, kicks and knee impacts."
            />
          </div>

          <div className="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <ThemeCard
              img={HeadGuardImg}
              imgAlt="Headguard"
              title="HEADGUARDS"
              description="Minimize neuron loses and broken noses using our high-tech headguards. All sizes available."
            />
          </div>

          <div className="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <ThemeCard
              img={Vandages}
              imgAlt="Vandages"
              title="VANDAGES"
              description="Wrap your hands with our elastic and semi-elastic vandages. Available at 2, 3, 4 and 4.5m long."
            />
          </div>

          <div className="cardColum col-lg-3 col-md-4 d-flex align-items-center justify-content-center align-items-stretch">
            <ThemeCard
              img={MouthPiecesImg}
              imgAlt="Mouthpieces"
              title="MOUTHPIECES"
              description="Keep your precious teeth intact from inminent danger with our amazing mouthpieces."
            />
          </div>

        </div>
      </Container>
    );
};

export default MainBody;