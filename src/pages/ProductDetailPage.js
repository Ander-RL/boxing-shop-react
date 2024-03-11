import React from "react";
import { useParams } from 'react-router-dom';


export function ProductDetailPage() {

    const { productId } = useParams();

    return (
        <>
            <h2>Product detail page</h2>
            <h3>{productId}</h3>
        </>
    );
}