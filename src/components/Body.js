import { useState, useEffect } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantApi from "../../Utils/useRestaurantApi";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Recommend from "./Recommend";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    listOfRestaurants,
    filteredRestaurant,
    loading,
    searchRestaurants,
    filterTopRated,
    resetRestaurants,
  } = useRestaurantApi();

  const onlineStatus = useOnlineStatus();
  const [showTopChains, setShowTopChains] = useState(false);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  // 🔥 Listen for Home reset
  useEffect(() => {
    const handleReset = () => {
      setSearchText("");
      resetRestaurants();
    };

    window.addEventListener("resetHome", handleReset);

    return () => {
      window.removeEventListener("resetHome", handleReset);
    };
  }, [listOfRestaurants, resetRestaurants]);

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
      {/* 🔍 Search Section */}
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        <div className="flex w-full sm:w-auto gap-2">
          <input
            type="text"
            data-testid="search-input"
            className="w-full sm:w-64 px-4 py-2 text-sm border border-gray-300 rounded-md outline-none"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100 whitespace-nowrap"
            onClick={() => searchRestaurants(searchText)}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100 whitespace-nowrap"
          onClick={filterTopRated}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 md:p-6">
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