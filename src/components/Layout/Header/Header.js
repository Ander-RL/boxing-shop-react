import React from "react";
import Container from "../../UI/Container";
import Carousel from "../../Carousel/Carousel";

const Header = () => {
    return (
        <Container type="fluid" style="p-0" id="intro">
            <Carousel />
        </Container>
    );
};

export default Header;