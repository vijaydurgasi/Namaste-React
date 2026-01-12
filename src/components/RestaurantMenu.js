import { useParams } from "react-router-dom";
import { useState } from "react";
import mockMenu from "../../Utils/mockMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [openCategory, setOpenCategory] = useState(null);

  const menuData = mockMenu[resId];

  if (!menuData) {
    return (
      <h2 className="text-center mt-10 text-gray-500">
        Yet to add the menu in mockMenu!!!
      </h2>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white rounded-xl shadow-lg">

      <h1 className="text-2xl font-bold text-center py-6 border-b">
        {menuData.restaurantName}
      </h1>

      {menuData.menu?.map((category) => (
        <div key={category.category}>

          <div
            onClick={() =>
              setOpenCategory(
                openCategory === category.category
                  ? null
                  : category.category
              )
            }
            className="flex justify-between items-center px-5 py-4 border-b cursor-pointer hover:bg-gray-50"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {category.category}
            </h2>

            <span
              className={`transition-transform duration-300 text-xl ${openCategory === category.category ? "rotate-180" : ""
                }`}
            >
              ^
            </span>
          </div>

          {openCategory === category.category && (
            <div className="bg-gray-50 px-5">
              {category.items?.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start py-5 border-b last:border-b-0"
                >
                  <div className="pr-4">
                    <h3 className="font-medium text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>

                    <p className="mt-2 font-semibold text-gray-800">
                      ₹{item.price}
                    </p>
                  </div>

                  <button className="border border-green-500 text-green-600 font-semibold px-5 py-1 rounded-lg text-sm hover:bg-green-50">
                    ADD
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
