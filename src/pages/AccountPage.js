import React from "react";

import Container from "../components/UI/Container";
import AccountInfoCard from "../components/Card/AccountInfoCard";
import AccountTab from "../components/Card/AccountTab";


const AccountPage = () => {

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="d-flex flex-column d-sm-flex flex-sm-row">

                    <div className="col">

                        <div className="d-flex flex-column d-sm-flex flex-sm-row">
                            <div className="card m-1 w-100">

                                <AccountTab tabSelected="dark" tabName="Account information"/>
                                <AccountTab tabSelected="secondary-emphasis" tabName="My orders"/>
                                <AccountTab tabSelected="secondary-emphasis" tabName="Address book"/>
                                <AccountTab tabSelected="secondary-emphasis" tabName="Wishlist"/>
                                <AccountTab tabSelected="secondary-emphasis" tabName="Change password"/>

                            </div>
                        </div>
                        
                    </div>


                    <div className="col-lg-10 col-md-10 col-sm-10">

                        <AccountInfoCard/>

                    </div>


                </div>
            </Container>
        </React.Fragment >
    );
};

export default AccountPage;