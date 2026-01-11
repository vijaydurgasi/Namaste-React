import { useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantApi from "../../Utils/useRestaurantApi";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Recommend from "./Recommend";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [showTopChains, setShowTopChains] = useState(false);

  const {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    loading,
  } = useRestaurantApi();

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  // 🔹 Recommend logic
  const recommendRestaurants = listOfRestaurants.filter(
    (res) => res.info?.avgRating >= 4
  );

  if (!onlineStatus) {
    return <h1>Looks like you're Offline. Please check your connection.</h1>;
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* 🔍 Search + Filter */}
      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-[2px]">
          <input
            type="text"
            className="w-[260px] px-4 py-2 text-sm border border-gray-300 rounded-md outline-none"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) =>
                  res.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* ⭐ Top Rated Button */}
        <button
          className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info?.avgRating >= 4.7
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* ⭐ Recommend Section */}
      <Recommend
        restaurants={recommendRestaurants}
        show={showTopChains}
        onToggle={() => setShowTopChains((prev) => !prev)}
      />

      {/* 🍽 Restaurant Grid */}
      <div className="flex flex-wrap gap-5 p-5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="no-underline text-black"
          >
            {restaurant.info.avgRating >= 4.7 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
