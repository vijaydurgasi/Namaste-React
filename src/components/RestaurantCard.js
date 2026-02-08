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
        <div data-testid="res-card" className="ml-2 w-[180px] h-[320px] border border-[#dbcdcd] p-2.5 bg-white
        flex flex-col text-center transition-transform duration-300 
        hover:scale-105 hover:shadow-xl cursor-pointer rounded-xl">

            <img
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-[140px] object-cover rounded-lg"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMAGE;
                }}
            />

            <h3 className="font-semibold mt-2" >{name}</h3>
            <p className="text-sm text-gray-600 min-h-[40px] leading-5 line-clamp-2">{(cuisines || []).join(", ")}</p>
            <h3 className="text-sm font-medium ">{costForTwo}</h3>
            <div className="flex justify-between items-center mt-auto">
                <span className="flex items-center gap-[2px] bg-green-700 text-white text-[12px] px-2 py-[2px] rounded-md font-semibold">
                    ★ {avgRating}
                </span>
                <span className="text-sm text-gray-600">{sla?.deliveryTime ?? "--"}min</span>
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


