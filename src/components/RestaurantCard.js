import { CDN_URL } from "../../Utils/constant";

const RestaurantCard = ({ resData }) => {
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
         hover:shadow-xl cursor-pointer">

            <img
                className="w-full aspect-[4/3] object-cover rounded-lg"
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-semibold mt-2" >{name}</h3>
            <p className="text-sm text-gray-600 min-h-[40px] leading-5 line-clamp-2">{(cuisines || []).join(", ")}</p>
            <h3 className="text-sm font-medium ">{costForTwo}</h3>
            <div className="flex justify-between items-center mt-auto">
                <span className="bg-[#267E3E] text-white px-2 py-1 rounded-md text-sm font-semibold">{avgRating}⭐</span>
                <span className="text-sm text-gray-600">{sla?.deliveryTime ?? "--"}min</span>
            </div>

        </div>
    )
};

export default RestaurantCard;