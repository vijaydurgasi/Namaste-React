import { useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Recommend = ({ restaurants, show, onToggle }) => {
    const scrollRef = useRef(null);

    if (!restaurants || restaurants.length === 0) return <Shimmer />;

    return (
        <div className="mx-3 sm:mx-5 md:mx-8 
                  mt-6 md:mt-8 
                  rounded-2xl 
                  bg-gray-50 
                  border border-gray-200 
                  shadow-sm 
                  p-3 sm:p-4 md:p-5">

            <div className="flex items-center justify-between mb-3 md:mb-4">
                <button
                    onClick={onToggle}
                    className="flex items-center gap-2 
                   text-base sm:text-lg 
                   font-semibold"
                >
                    Recommend
                    <span
                        className={`transition-transform duration-300 ${show ? "rotate-180" : "rotate-0"
                            }`}
                    >
                        ⌃
                    </span>
                </button>
            </div>

            <div className="h-px bg-gray-200 mb-3 md:mb-4" />

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${show ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="overflow-x-auto scrollbar-hide">
                    <div
                        ref={scrollRef}
                        className="flex gap-3 sm:gap-4 
                     snap-x snap-mandatory 
                     pb-2"
                    >
                        {restaurants.map((restaurant) => (
                            <div
                                key={restaurant.info.id}
                                className="flex-shrink-0 snap-start"
                            >
                                <RestaurantCard resData={restaurant} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Recommend;
