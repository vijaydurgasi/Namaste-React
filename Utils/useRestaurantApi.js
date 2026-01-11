import { useState, useEffect } from "react";

const useRestaurantApi = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await res.json();

        const restaurants =
            json?.data?.cards
                ?.map(
                    (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )
                ?.flat()
                ?.filter(Boolean) || [];

        const uniqueRestaurants = Array.from(
            new Map(
                restaurants.map((res) => [res.info.id, res])
            ).values()
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
