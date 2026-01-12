import { useParams } from "react-router-dom";
import mockMenu from "../../Utils/mockMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const menuData = mockMenu[resId];

  if (!menuData) {
    return <h2 className="text-center">Yet to add the menu in mockMenu!!!</h2>
  }

  return (
    <div className="text-center">
      <h1 className="font-bold">{menuData.restaurantName}</h1>
      {menuData.menu?.map((category) => (
        <div key={category.category}>

          {category.items.map((item) => (
            <div key={item.id} className="px-2 py-2">
              <h1 className="gap-4">{item.name} ₹{item.price}</h1>
              <p className="font-light">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;