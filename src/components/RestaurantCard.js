import { CDN_URL, FALLBACK_IMAGE } from "../../Utils/constant";
import { useContext } from "react";
import UserContext from "../../Utils/UserContext";

export const RestaurantCard = ({ resData }) => {

    const { loggedInUser } = useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        cuisines = [],
        costForTwo,
        avgRating,
        sla
    } = resData?.info || {};

    return (
        <div
            data-testid="res-card"
            className="w-full bg-white border border-gray-200 p-3 
  flex flex-col rounded-xl 
  transition-transform duration-300 
  hover:scale-105 hover:shadow-xl"
        >
            <img
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-40 md:h-44 object-cover rounded-lg"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                }}
            />

            <h3 className="font-semibold mt-3 text-base md:text-lg text-left">
                {name}
            </h3>

            <p className="text-sm text-gray-600 mt-1 line-clamp-2 text-left">
                {(cuisines || []).join(", ")}
            </p>

            <h3 className="text-sm font-medium mt-1 text-left">
                {costForTwo}
            </h3>

            <div className="flex justify-between items-center mt-3">
                <span className="flex items-center gap-1 bg-green-700 text-white text-xs px-2 py-1 rounded-md font-semibold">
                    ★ {avgRating}
                </span>
                <span className="text-sm text-gray-600">
                    {sla?.deliveryTime ?? "--"} min
                </span>
            </div>
        </div>
    )
};

export const WithPromotedLabel = (RestaurantCard) => {
    return (resData) => {
        return (
            <div className="relative">
                <span className="bg-black text-white text-[11px] px-2 py-[2px] rounded-lg absolute top-2 left-2 z-10">
                    Promoted</span>
                <RestaurantCard{...resData} />
            </div>
        );
    };
};

export default RestaurantCard;


