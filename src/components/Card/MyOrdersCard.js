import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

import MyOrdersProductCard from "./MyOrdersProductCard";
import OrderCard from "./OrderCard";
import CheckoutProductModalCard from "./CheckoutProductModalCard";

const MyOrdersCard = () => {

    const [idList, setIdList] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [ordersCards, setOrdersCards] = useState([]);
    const [productsCards, setProductsCards] = useState([]);
    const [showProductModal, setShowProductModal] = useState(false);

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

    function showProductsModal() {
        setShowProductModal(true);
    }

    function setOrdersDetails(orders) {
        console.log("[LOG][MyOrdersCard][setOrdersDetails] orders:", orders);
        var ordersList = [];
        orders.forEach(order => {
            ordersList.push(
                <OrderCard
                    id={order.orderId}
                    orderId={order.orderId}
                    customerId={order.customerId}
                    totalAmount={order.totalAmount}
                    clickHandler={showProductsModal}
                />
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

    const handleClose = () => {
        setShowProductModal(false);
    };

    const productsModal = (
        <Modal show={showProductModal} onHide={handleClose} size="m" backdrop='static' centered='true' scrollable='true'>
            <Modal.Header closeButton>
                <Modal.Title>Products details</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <CheckoutProductModalCard />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

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

            {showProductModal && productsModal}
        </div>
    );
};

export default MyOrdersCard;