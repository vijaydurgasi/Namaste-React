import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");


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
  };

 
  if (listOfRestaurants.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filteredSearch = listOfRestaurants.filter(
                (res) =>
                  res.info &&
                  res.info.name &&
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredSearch);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info && res.info.avgRating > 4.5
            );
            setfilteredRestaurant(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <RestaurantCard
            // key={`${restaurant.info.id}-${index}`}
            key={restaurant.info.id}

            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;


