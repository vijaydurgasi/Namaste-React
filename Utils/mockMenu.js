const mockMenu = {
  "437301": {
    restaurantName: "Pizza Hut",
    menu: [
      {
        category: "Recommended",
        items: [
          {
            id: "p1",
            name: "Margherita Pizza",
            description: "Classic delight with 100% real mozzarella cheese",
            price: 199,
            isVeg: true,
            imageId: "pizza_margherita",
          },
          {
            id: "p2",
            name: "Pepperoni Pizza",
            description: "Loaded with pepperoni & cheese",
            price: 349,
            isVeg: false,
            imageId: "pizza_pepperoni",
          },
        ],
      },
      {
        category: "Sides",
        items: [
          {
            id: "s1",
            name: "Garlic Bread",
            description: "Freshly baked garlic bread",
            price: 129,
            isVeg: true,
          },
          {
            id: "s2",
            name: "Cheesy Dip",
            description: "Creamy cheese dip",
            price: 49,
            isVeg: true,
          },
        ],
      },
    ],
  },

  "367769": {
    restaurantName: "Lucky Restaurant",
    menu: [
      {
        category: "Starters",
        items: [
          {
            id: "l1",
            name: "Chicken 65",
            description: "Spicy deep fried chicken",
            price: 299,
            isVeg: false,
          },
          {
            id: "l2",
            name: "Paneer 65",
            description: "Crispy fried paneer cubes",
            price: 249,
            isVeg: true,
          },
        ],
      },
      {
        category: "Biryani",
        items: [
          {
            id: "l3",
            name: "Chicken Dum Biryani",
            description: "Hyderabadi style dum biryani",
            price: 399,
            isVeg: false,
          },
          {
            id: "l4",
            name: "Veg Biryani",
            description: "Aromatic basmati rice with vegetables",
            price: 299,
            isVeg: true,
          },
        ],
      },
    ],
  },

  "7003": {
    restaurantName: "Almond House",
    menu: [
      {
        category: "Sweets",
        items: [
          {
            id: "a1",
            name: "Kaju Katli",
            description: "Premium cashew sweet",
            price: 799,
            isVeg: true,
          },
          {
            id: "a2",
            name: "Badam Halwa",
            description: "Rich almond dessert",
            price: 699,
            isVeg: true,
          },
        ],
      },
    ],
  },
};

export default mockMenu;
