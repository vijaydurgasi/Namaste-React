import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
// import resList from "../../Utils/mockData";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {fetchData()}, []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
   
    const restaurants =
    json?.data?.cards
      ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.flat()
      ?.filter(Boolean);

  setListOfRestaurants(restaurants);
  };

 if (ListOfRestaurants.length === 0) {
  return <Shimmer/>;
}


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info && res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {ListOfRestaurants
          .filter((restaurant) => restaurant.info && restaurant.info.id)
          .map((restaurant, index) => (
            <RestaurantCard
               key={`${restaurant.info.id}-${index}`}
              resData={restaurant}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;


