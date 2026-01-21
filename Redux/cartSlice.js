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

            const existingItem = state.items.find(
                (item) => item.id === itemWithId.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push(itemWithId);
            }
        },

    },
    removeItem: (state, action) => {
        state.items = state.items.filter(
            (item) => item.id !== action.payload
        );
    },

    clearCart: (state) => {
        state.items.length = 0;
    },
},
);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;