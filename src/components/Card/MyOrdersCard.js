import React, { useEffect, useState } from "react";

import MyOrdersProductCard from "./MyOrdersProductCard";

const MyOrdersCard = () => {

    const [idList, setIdList] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [ordersCards, setOrdersCards] = useState([]);
    const [productsCards, setProductsCards] = useState([]);

    useEffect(() => {
        fetchOrdersData();
    }, []);

    useEffect(() => {
        setOrdersDetails(orders);
        console.log("[LOG][MyOrdersCard][useEffect] orders:", orders);
    }, [orders]);

    useEffect(() => {
        fetchProductDataById(idList);
        console.log("[LOG][MyOrdersCard][useEffect] idList:", idList);
    }, [idList]);

    useEffect(() => {
    }, [ordersCards]);

    function fetchOrdersData() {
        fetch('http://localhost:8080/react/v1/orders',
            {
                method: 'GET',
                mode: 'cors'
            })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                //setIdList(getOrderIds(data));
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    function fetchProductDataById(productsId) {
        fetch('http://localhost:8080/react/v1/products/selectedProductsById',
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(productsId),
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProductList(data);
                console.log("[LOG][MyOrdersCard][fetchProductDataById] data:", data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    function getProductsByIds(products) {
        var idList = [];
        products.forEach(product => {
            idList.push(product.purchasedProduct)
        }
        );
        return idList;
    };

    function setOrdersDetails(orders) {
        console.log("[LOG][MyOrdersCard][setOrdersDetails] orders:", orders);
        var ordersList = [];
        orders.forEach(order => {
            ordersList.push(
                <div className="card p-0" style={{ maxWidth: '18rem' }}>
                    <div className="row g-0">
                        <div className="row g-0">
                            <div className="col-8 col-lg-10">
                                <div className="card-body">
                                        <div className="col">
                                            <h5 className="card-title">Order id: {order.orderId}</h5>
                                            <p className="card-text p-0 m-0">Customer id: {order.customerId}</p>
                                            <p className="card-text p-0 m-0">Address: Night City</p>
                                        </div>
                                    <div className="flex-row">
                                        Products
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="card-footer">
                                <p className="card-text text-end fw-bolder">Order total: {order.totalAmount}€</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        setOrdersCards(ordersList);
        //console.log("[LOG][MyOrdersCard][setOrdersDetails] ordersList:", ordersList);
    };

    const setProductList = (orderItems) => {
        let list = [];
        console.log(orderItems);
        orderItems.forEach(item => list.push(
            <MyOrdersProductCard
                key={item.id}
                id={item.id}
                img={`/img/${item.img}`}
                title={item.name}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
            />
        ));

        setProducts(list);
    };

    return (
        <div className="card m-1 w-100 border-black">
            <div className="card-body">
                <h5 className="card-title">My Orders</h5>
                <hr className="bg-dark border-2 border-top border-black" />

                <div className="row justify-content-center">
                    {products}
                    {ordersCards}
                </div>

            </div>
        </div>
    );
};

export default MyOrdersCard;