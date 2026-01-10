import { useRef } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const TopRestaurantChains = ({ restaurants, show, onToggle }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    if (!restaurants || restaurants.length === 0) return <Shimmer />;

    return (
        <div className="px-5 mt-6 border-black">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold items-center gap-2">
                    Top restaurant chains in Hyderabad
                </h2>

                <button
                    onClick={onToggle}
                    className="text-lg font-bold transition-transform duration-300"
                    style={{
                        transform: show ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    ^
                </button>

                <div className="flex gap-2">
                    <button
                        onClick={scrollLeft}
                        className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                        ←
                    </button>

                    <button
                        onClick={scrollRight}
                        className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                        →
                    </button>
                </div>
            </div>
            {show && (
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-hidden"
                >
                    {restaurants.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                            className="flex-shrink-0"
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopRestaurantChains;
