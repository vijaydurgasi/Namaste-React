import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantApi from "../../Utils/useRestaurantApi";
import useOnlineStatus from "../../Utils/useOnlineStatus";

const Body = () => {

  const [searchText, setSearchText] = useState("");

  const {
    listOfRestaurants,
    filteredRestaurant,
    setfilteredRestaurant,
    loading,
  } = useRestaurantApi();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you're Offline please check your Network connection</h1>

  if (loading) {
    return <Shimmer />;
  };

  return (
    <div className="body">
      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-[1px]">
          <input
            type="text"
            className="w-[260px] px-4 py-2 text-sm border border-gray-300 rounded-md outline-none"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 text-sm rounded-md cursor-pointer border transition hover:bg-gray-100"
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
          className="px-4 py-2 text-sm rounded-md cursor-pointer border transition hover:bg-gray-100"
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

      <div className="flex flex-wrap gap-5 p-5">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="no-underline text-black"><RestaurantCard
            resData={restaurant}
          /></Link>
        ))}
      </div>

    </div>
  );
};

export default Body;


