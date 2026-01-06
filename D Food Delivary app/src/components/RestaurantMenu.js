import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../../Utils/constant";
import { MENU_URL } from "../../Utils/constant";
import Shimmer from "./shimmer";
import mockMenu from "../../Utils/mockMenu";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const menuData = mockMenu[resId];



  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  };

  const restaurantCards = resInfo?.cards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const restaurantInfo = restaurantCards
    ?.map((c) => c?.card?.card?.info)
    ?.find((info) => info?.id === resId);

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines = [],
    cloudinaryImageId,
    avgRating,
    areaName,
    availability,
    sla,
    totalRatingsString
  } = restaurantInfo;

  const isOpen = availability?.opened;
  const deliveryTime = sla?.slaString || `${sla?.deliveryTime} mins`;
  const nextCloseTime = availability?.nextCloseTime;

  return (
    <div className="res-menu">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} style={{ width: "200px", height: "auto" }} />
      <h1>{name}</h1>
      <p className="res-middle">{cuisines.join(", ")}</p>
      <p>Area Name : {areaName}</p>
      <p>status : {""}
        <span style={{ color: isOpen ? "green" : "red" }}>
          {isOpen ? "Open Now" : "closed"}
        </span>
      </p>
      <p>DeliveryTime : {deliveryTime}</p>
      {nextCloseTime && <p>Close at : {nextCloseTime}</p>}
      <p>Total Ratings : {totalRatingsString}</p>
      <span className="res-rating">{avgRating} ⭐</span>

      <h2>Menu</h2>

      {menuData?.menu?.length > 0 ? (
        menuData.menu.map((section) => (
          <div key={section.category} style={{ marginBottom: "25px" }}>
            <h3>{section.category}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item.id} style={{ marginLeft: "20px" }}>
                  {item.name} – ₹{item.price}{" "}
                  <span>{item.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p style={{ color: "gray" }}>
          Menu not available for this restaurant
        </p>
      )}

    </div>
  );
};

export default RestaurantMenu;
