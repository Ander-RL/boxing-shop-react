import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        items: []
    },
    reducers: {
        getShopItems(state, action) {
            state.items = action.payload;
        }
    }
});

export const shopActions = shopSlice.actions;
export default shopSlice;