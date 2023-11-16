import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        items: []
    },
    reducers: {
        getShopItems(state, action) {
            state.items = action.payload;
            console.log("[LOG][shop-slice] state", state);
            console.log("[LOG][shop-slice] action", action);
        }
    }
});

export const shopActions = shopSlice.actions;
export default shopSlice;