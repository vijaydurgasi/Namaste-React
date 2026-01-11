import { useState, useEffect } from "react";

const useRestaurantApi = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://namastedev.com/api/v1/listRestaurants"
        );
        const json = await data.json();
        console.log("FULL API RESPONSE:", json);


        const cards = json?.data?.data?.cards ?? [];

        const restaurantCard = cards.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
            restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

        const uniqueRestaurants = Array.from(
            new Map(restaurants.map((r) => [r.info.id, r])).values()
        );

        setListOfRestaurants(uniqueRestaurants);
        setFilteredRestaurant(uniqueRestaurants);
        setLoading(false);
    };

    return {
        listOfRestaurants,
        filteredRestaurant,
        setFilteredRestaurant,
        loading,
    };
};

export default useRestaurantApi;
