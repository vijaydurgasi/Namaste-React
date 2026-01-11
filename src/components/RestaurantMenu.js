import { useParams } from "react-router-dom";
import { useState } from "react";
import mockMenu from "../../Utils/mockMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = mockMenu[resId];

  const [openIndex, setOpenIndex] = useState(null);

  if (!menuData) {
    return (
      <h2 className="text-center mt-10 text-gray-500">
        Menu not available
      </h2>
    );
  }

  const toggleCategory = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-6">
        {menuData.restaurantName}
      </h1>

      {menuData.menu.map((section, index) => (
        <div
          key={section.category}
          className="border-b last:border-b-2 shadow-lg p-6 rounded-lg bg-gray-50"
        >

          <div
            onClick={() => toggleCategory(index)}
            className="flex justify-between items-center py-4 cursor-pointer"
          >
            <div className="font-bold text-lg">
              {section.category}
              <span className="text-gray-500 text-sm ml-2">
                ({section.items.length})
              </span>
            </div>

            <span
              className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                }`}
            >
              ⌄
            </span>
          </div>

          {openIndex === index && (
            <div className="pb-4 space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start"
                >
                  <div className="max-w-[75%]">
                    <div className="font-medium">
                      {item.isVeg ? "🟢" : "🔴"} {item.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </div>
                  </div>

                  <div className="font-semibold">
                    ₹{item.price}
                  </div>
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
