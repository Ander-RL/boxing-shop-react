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
    const [showProductModal, setShowProductModal] = useState(false);

    useEffect(() => {
        fetchOrdersData();
    }, []);

    useEffect(() => {
        setOrdersDetails(orders);
    }, [orders]);

    useEffect(() => {
        if (products.length !== 0) showProductsModal();
    }, [products]);

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
                console.log("[LOG][MyOrdersCard][fetchOrdersData] orders:", data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    function fetchProductDataById(productsId, order) {
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
                setProductList(data, order);
                console.log("[LOG][MyOrdersCard][fetchProductDataById] data:", data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    function getProductsIds(products) {
        var idList = [];
        products.forEach(product => {
            idList.push(product.purchasedProduct)
        }
        );
        return idList;
    };

    function getOrderProducts(order) {
        fetchProductDataById(getProductsIds(order.products), order);
    }

    function showProductsModal() {
        setShowProductModal(true);
    }

    function setOrdersDetails(orders) {
        var ordersList = [];
        orders.forEach(order => {
            ordersList.push(
                <OrderCard
                    id={order.orderId}
                    orderId={order.orderId}
                    customerId={order.customerId}
                    totalAmount={order.totalAmount}
                    clickHandler={() => getOrderProducts(order)}
                />
            )
        });
        setOrdersCards(ordersList);
    };

    const setProductList = (orderItems, order) => {
        let list = [];
        var index = 0;
        orderItems.forEach(item => {
            var quantity = order.products[index].quantity;
            var fullPrice = item.unitaryAmount * quantity;
            console.log("ITEM", item, index);
            list.push(
                <CheckoutProductModalCard
                    id={item.id}
                    img={`/img/${item.img}`}
                    title={item.name}
                    description={item.description}
                    quantity={quantity}
                    totalPrice={fullPrice}
                />
            )
            index++;
        }
        );

        setProducts(list);
    };

    const handleClose = () => {
        setShowProductModal(false);
        setProducts([]);
    };

    const productsModal = (
        <Modal show={showProductModal} onHide={handleClose} size="m" backdrop='static' centered='true' scrollable='true'>
            <Modal.Header closeButton>
                <Modal.Title>Products details</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {products}

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
                    {ordersCards}
                </div>

            </div>

            {showProductModal && productsModal}
        </div>
    );
};

export default MyOrdersCard;