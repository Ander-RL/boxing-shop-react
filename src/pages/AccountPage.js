import React, { useEffect, useState } from "react";

import Container from "../components/UI/Container";
import AccountInfoCard from "../components/Card/AccountInfoCard";
import AccountTab from "../components/Card/AccountTab";
import AddressBookCard from "../components/Card/AddressBookCard";
import MyOrdersCard from "../components/Card/MyOrdersCard";


const AccountPage = () => {

    var isInfo = "dark";
    var isOrders = "secondary-emphasis";
    var isBook = "secondary-emphasis";
    var isWishlist = "secondary-emphasis";
    var isPassword = "secondary-emphasis";

    const components = {
        "AccountInfoCard": <AccountInfoCard />,
        "AddressBookCard": <AddressBookCard />,
        "MyOrdersCard": <MyOrdersCard />
    };

    const [tabs, setTabs] = useState([isInfo, isOrders, isBook, isWishlist, isPassword]);
    const [component, setComponent] = useState(components.AccountInfoCard);
    const [error, setError] = useState();

    var tempTabs = [isInfo, isOrders, isBook, isWishlist, isPassword];

    useEffect(() => {
    }, [tabs]);

    const toggleActiveTab = (currentTab) => {
        for (var i = 0; i < tabs.length; i++) {
            i !== currentTab ? tempTabs[i] = "secondary-emphasis" : tempTabs[i] = "dark";
        };
        setTabs(tempTabs);
    };

    const getOrders = () => {

        fetch('http://localhost:8080/react/v1/orders',
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to process order.');
                return res.json();
            })
            .then((data) => {
                console.log("[LOG][AccountPage][getOrders] data:", data);
            })
            .catch((err) => {
                console.log("[LOG][AccountPage][getOrders] error:", err.message);
                setError(err);
            });
    };

    const setTabActive = (tabName) => {
        switch (tabName) {
            case "Account information":
                toggleActiveTab(0);
                setComponent(components.AccountInfoCard);
                break;
            case "My orders":
                toggleActiveTab(1);
                setComponent(components.MyOrdersCard);
                getOrders();
                break;
            case "Address book":
                toggleActiveTab(2);
                setComponent(components.AddressBookCard);
                break;
            case "Wishlist":
                toggleActiveTab(3);
                break;
            case "Change password":
                toggleActiveTab(4);
                break;
            default:
                toggleActiveTab(0);
        }
    };

    const isSelectedHandled = (tab) => {
        setTabActive(tab.target.textContent);
    };

    return (
        <React.Fragment>
            <Container type="fluid" id="checkout">

                <div className="row p-2 pt-3 justify-content-end">
                    <div className="d-flex flex-column d-sm-flex flex-sm-row">

                        <div className="col">

                            <div className="d-flex flex-column d-sm-flex flex-sm-row">
                                <div className="card m-1 w-100 border-0">

                                    <AccountTab isSelected={isSelectedHandled} tabSelected={tabs[0]} tabName="Account information" />
                                    <AccountTab isSelected={isSelectedHandled} tabSelected={tabs[1]} tabName="My orders" />
                                    <AccountTab isSelected={isSelectedHandled} tabSelected={tabs[2]} tabName="Address book" />
                                    <AccountTab isSelected={isSelectedHandled} tabSelected={tabs[3]} tabName="Wishlist" />
                                    <AccountTab isSelected={isSelectedHandled} tabSelected={tabs[4]} tabName="Change password" />

                                </div>
                            </div>

                        </div>


                        <div className="col-lg-10 col-md-10 col-sm-10">

                            {component}

                        </div>


                    </div>
                </div>
            </Container>
        </React.Fragment >
    );
};

export default AccountPage;