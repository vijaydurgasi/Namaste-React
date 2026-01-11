import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_URL } from "../../Utils/constant";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();

      setResInfo(json);

      if (json?.status === false) {
        setMenuSections([]);
        return;
      }

      const cards = json?.data?.cards ?? [];

      // ✅ Restaurant basic info (if present)
      const infoCard = cards.find(
        (c) => c?.card?.card?.info
      )?.card?.card?.info;

      setRestaurantInfo(infoCard || null);

      // ✅ Actual menu items
      const menuCards = cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setMenuSections(menuCards);
    } catch (err) {
      console.error("Menu API error", err);
      setMenuSections([]);
    }
  };

  // ✅ Shimmer ONLY while API is loading
  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Restaurant Info */}
      {restaurantInfo && (
        <div className="mb-6 border-b pb-4">
          <img
            src={CDN_URL + restaurantInfo.cloudinaryImageId}
            alt={restaurantInfo.name}
            className="w-48 rounded-lg mb-3"
          />

          <h1 className="text-2xl font-bold">{restaurantInfo.name}</h1>
          <p className="text-gray-600">
            {restaurantInfo.cuisines?.join(", ")}
          </p>
          <p className="text-sm text-gray-500">
            {restaurantInfo.areaName}
          </p>

          <div className="flex gap-4 mt-2 text-sm">
            <span>⭐ {restaurantInfo.avgRating}</span>
            <span>{restaurantInfo.totalRatingsString}</span>
          </div>
        </div>
      )}

      {/* Menu Section */}
      <h2 className="text-xl font-semibold mb-4">Menu</h2>

      {menuSections.length > 0 ? (
        menuSections.map((section) => (
          <div key={section.card.card.title} className="mb-6">
            <h3 className="font-semibold text-lg mb-2">
              {section.card.card.title}
            </h3>

            <ul className="space-y-2">
              {section.card.card.itemCards.map((item) => (
                <li
                  key={item.card.info.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span>
                    {item.card.info.name}{" "}
                    {item.card.info.isVeg ? "🟢" : "🔴"}
                  </span>
                  <span>
                    ₹
                    {(item.card.info.price ??
                      item.card.info.defaultPrice) / 100}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          Menu not available for this restaurant
        </p>
      )}
    </div>
  );
};

export default RestaurantMenu;
