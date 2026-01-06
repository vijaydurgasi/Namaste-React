import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantApi from "../../Utils/useRestaurantApi";

const Body = () => {

  const [searchText, setSearchText] = useState("");

  const {
    listOfRestaurants,
    filteredRestaurant,
    setfilteredRestaurant,
    loading
  } = useRestaurantApi();

  if (loading) {
    return <Shimmer />;
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
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="res-link"><RestaurantCard
            resData={restaurant}
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


