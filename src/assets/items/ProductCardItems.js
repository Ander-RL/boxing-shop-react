import ProductCard from "../../components/Card/ProductCard";

import BoxingGlovesImg from "../img/Gloves.jpg";
import HeadGuard from "../img/Headguard.jpg";
import HookBag from "../img/HookBag.jpg";
import Vandages from "../img/Vandages.jpg";
import Pads from "../img/Pads.png";

const ProductCardList = [
    <ProductCard
        key="0"
        id="0"
        img={BoxingGlovesImg}
        title="10oz Boxing Gloves"
        description="10oz Boxing Gloves"
        price="40"
    />,
    <ProductCard
        key="1"
        id="1"
        img={BoxingGlovesImg}
        title="12oz Boxing Gloves"
        description="12oz Boxing Gloves"
        price="50"
    />,
    <ProductCard
        key="2"
        id="2"
        img={BoxingGlovesImg}
        title="14oz Boxing Gloves"
        description="14oz Boxing Gloves"
        price="60"
    />,
    <ProductCard
        key="3"
        id="3"
        img={HeadGuard}
        title="Male HeadGuard"
        description="Male HeadGuard"
        price="70"
    />,
    <ProductCard
        key="4"
        id="4"
        img={HeadGuard}
        title="Female HeadGuard"
        description="Female HeadGuard"
        price="70"
    />,
    <ProductCard
        key="5"
        id="5"
        img={HeadGuard}
        title="Child HeadGuard"
        description="Child HeadGuard"
        price="50"
    />,
    <ProductCard
        key="6"
        id="6"
        img={HookBag}
        title="Punching Bag"
        description="Punching bag for practicing hooks"
        price="200"
    />,
    <ProductCard
        key="7"
        id="7"
        img={HookBag}
        title="Common Punching Bag"
        description="Punching bag for general practicing"
        price="250"
    />,
    <ProductCard
        key="8"
        id="8"
        img={Vandages}
        title="5m Vandages"
        description="5m Vandages"
        price="25"
    />,
    <ProductCard
        key="9"
        id="9"
        img={Vandages}
        title="4m Vandages"
        description="4m Vandages"
        price="25"
    />,
    <ProductCard
        key="10"
        id="10"
        img={Vandages}
        title="3m Vandages"
        description="3m Vandages"
        price="20"
    />,
    <ProductCard
        key="11"
        id="11"
        img={Pads}
        title="Regular Hand Pads"
        description="Pads for practicing technic"
        price="50"
    />,
    <ProductCard
        key="12"
        id="12"
        img={Pads}
        title="Small Hand Pads"
        description="Pads for practicing technic"
        price="50"
    />,
];

export default ProductCardList;