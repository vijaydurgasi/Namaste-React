import { useState, useEffect } from "react";
import mockRestaurants from "./mockres-cards";

const useRestaurantApi = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔹 Load restaurants (mock or API)
    useEffect(() => {
        setListOfRestaurants(mockRestaurants);
        setFilteredRestaurant(mockRestaurants);
        setLoading(false);
    }, []);

    // 🔹 Search function
    const searchRestaurants = (searchText) => {
        const filtered = listOfRestaurants.filter((res) =>
            res.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
        );

        setFilteredRestaurant(filtered);
    };

    // 🔹 Top rated filter
    const filterTopRated = () => {
        const filtered = listOfRestaurants.filter(
            (res) => res.info?.avgRating >= 4.7
        );

        setFilteredRestaurant(filtered);
    };

    // 🔹 Reset to original list
    const resetRestaurants = () => {
        setFilteredRestaurant(listOfRestaurants);
    };

    return {
        listOfRestaurants,
        filteredRestaurant,
        loading,
        searchRestaurants,
        filterTopRated,
        resetRestaurants,
    };
};

export default useRestaurantApi;