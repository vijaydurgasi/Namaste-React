import { useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Recommend = ({ restaurants, show, onToggle }) => {
    const scrollRef = useRef(null);

    if (!restaurants || restaurants.length === 0) return <Shimmer />;

    return (
        <div className="mx-5 mt-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm p-5">

            <div className="flex items-center justify-between mb-4">

                <button
                    onClick={onToggle}
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    Recommend
                    <span
                        className={`transition-transform duration-300 ${show ? "rotate-180" : "rotate-0"
                            }`}>
                        ⌃</span>
                </button>
            </div>

            <div className="h-px bg-gray-200 mb-4" />

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${show ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="overflow-x-auto scrollbar-hide">
                    <div
                        ref={scrollRef}
                        className="flex w-max gap-2 pb-2"
                    >
                        {restaurants.map((restaurant) => (
                            <div
                                key={restaurant.info.id}
                                className="flex-shrink-0 cursor-default"
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
