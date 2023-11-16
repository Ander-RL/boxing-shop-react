// Action Creator Thunk
// Can be used instead of doing it inside the component ShopPage.js
// for handling HTTP requests in Redux

import { shopActions } from "./shop-slice";

export const fetchShopData = () => {
    return async (dispatch) => {

        async function fetchData() {

            const response = await fetch(
                'http://localhost:8080/react/v1/products', { method: 'GET', mode: 'cors' }
                );

            if (!response.ok) {
                throw new Error('GET request failed.');
            }

            const responseData = await response.json();

            dispatch(shopActions.getShopItems(responseData));
            console.log("[LOG][shop-thunk] dispatch(shopActions.getShopItems(responseData))");
            console.log("[LOG][shop-thunk] responseData: ", responseData);
        }

        await fetchData().catch(error => {
            //dispatch(console.log("Error fetching product data"));
        });
    }
}
