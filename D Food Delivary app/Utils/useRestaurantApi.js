import { useState, useEffect } from "react";

const useRestaurantApi = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        const restaurants =
            json?.data?.cards
                ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                ?.flat()
                ?.filter(Boolean);

        const uniqueRestaurants = Array.from(
            new Map(restaurants.map((r) => [r.info.id, r])).values()
        );
        setfilteredRestaurant(uniqueRestaurants);
        setlistOfRestaurants(uniqueRestaurants);
        setLoading(false);
    };
    return {
        listOfRestaurants,
        filteredRestaurant,
        setfilteredRestaurant,
        loading
    };
};

export default useRestaurantApi;