import { CDN_URL } from "../../Utils/constant";
import { getImageUrl } from "../../Utils/constant";

export const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines = [],
        costForTwo,
        avgRating,
        sla
    } = resData?.info;
    return (
        <div className="w-[200px] h-[320] border border-[#dbcdcd] p-2.5 rounded-x1 bg-white
         flex flex-col text-center transition-all duratio-300 hover:scale-105 
         hover:shadow-xl cursor-pointer rounded-xl">

            <img
                className="w-full aspect-[4/3] object-cover rounded-lg"
                src={getImageUrl(cloudinaryImageId)}
                onError={(e) => {
                    e.currentTarget.src = "/images/food-placeholder.jpg";
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


