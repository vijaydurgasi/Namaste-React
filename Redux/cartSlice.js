import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const payload = action.payload;
            const itemWithId = {
                ...payload,
                id: payload.id ?? crypto.randomUUID(),
                quantity: payload.quantity ?? 1,
            };

            state.items.push(itemWithId);
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
