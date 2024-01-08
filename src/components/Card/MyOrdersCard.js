import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

const AddressBookCard = () => {

    const [idList, setIdList] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchOrdersData();
    }, []);

    useEffect(() => {
        fetchProductDataById(idList);
    }, [idList]);

    function fetchOrdersData() {
        fetch('http://localhost:8080/react/v1/orders',
            {
                method: 'GET',
                mode: 'cors'
            })
            .then((res) => res.json())
            .then((data) => {
                setIdList(getOrderIds(data));
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
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    function getOrderIds(order) {
        var idList = [];
        order.forEach(product => {
            idList.push(product.idProduct);
        });

        return idList;
    };

    const setProductList = (orderItems) => {
        let list = [];
        orderItems.forEach(item => list.push(
            <ProductCard
                key={item.id}
                id={item.id}
                img={`/img/${item.img}`}
                title={item.name}
                description={item.description}
                price={item.price}
            />
        ));

        setProducts(list);
    };

    return (
        <div className="card m-1 w-100 border-black">
            <div className="card-body">
                <h5 className="card-title">My Orders</h5>
                <hr className="bg-dark border-2 border-top border-black" />

                <div className="card m-1 w-100 border-black">
                    <div className="card-body">
                        <h5 className="card-title">My Order Nº1</h5>
                    </div>
                </div>

                {products}

            </div>
        </div>
    );
};

export default AddressBookCard;