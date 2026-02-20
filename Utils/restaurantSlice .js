import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState: {
        listOfRestaurants: [],
        filteredRestaurants: [],
        searchText: "",
    },
    reducers: {
        setRestaurants: (state, action) => {
            state.listOfRestaurants = action.payload;
            state.filteredRestaurants = action.payload;
        },
        filterRestaurants: (state, action) => {
            state.searchText = action.payload;
            state.filteredRestaurants =
                state.listOfRestaurants.filter((res) =>
                    res.info.name
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );
        },
        resetRestaurants: (state) => {
            state.searchText = "";
            state.filteredRestaurants = state.listOfRestaurants;
        },
    },
});

export const {
    setRestaurants,
    filterRestaurants,
    resetRestaurants,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;