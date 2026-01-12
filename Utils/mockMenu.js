const mockMenu = {
  "547809": {
    restaurantName: "Theobroma",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: "t1", name: "Brownie", description: "Rich chocolate brownie", price: 180, isVeg: true },
          { id: "t2", name: "Chocolate Cake", description: "Soft chocolate sponge", price: 320, isVeg: true },
          { id: "t3", name: "Chocolate Truffle Pastry", description: "Layers of chocolate cream", price: 250, isVeg: true },
          { id: "t4", name: "Red Velvet Brownie", description: "Velvety red brownie with cream cheese", price: 200, isVeg: true },
          { id: "t5", name: "Nutella Brownie", description: "Brownie with hazelnut spread", price: 220, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "t6", name: "Red Velvet Cake", description: "Cream cheese frosting", price: 350, isVeg: true },
          { id: "t7", name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: 300, isVeg: true },
          { id: "t8", name: "Cheesecake", description: "Creamy baked cheesecake", price: 280, isVeg: true },
          { id: "t9", name: "Fruit Tart", description: "Fresh fruits on custard base", price: 260, isVeg: true },
          { id: "t10", name: "Lemon Tart", description: "Tangy lemon filling", price: 240, isVeg: true },
        ],
      },
      {
        category: "Pastries",
        items: [
          { id: "t11", name: "Butterscotch Pastry", description: "Caramel and cream layers", price: 220, isVeg: true },
          { id: "t12", name: "Black Forest Pastry", description: "Cherry and chocolate", price: 250, isVeg: true },
          { id: "t13", name: "Pineapple Pastry", description: "Tropical pineapple flavor", price: 210, isVeg: true },
          { id: "t14", name: "Strawberry Pastry", description: "Fresh strawberry delight", price: 230, isVeg: true },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "t15", name: "Hot Chocolate", description: "Rich hot cocoa", price: 150, isVeg: true },
          { id: "t16", name: "Cappuccino", description: "Frothy coffee", price: 180, isVeg: true },
          { id: "t17", name: "Iced Mocha", description: "Chilled chocolate coffee", price: 200, isVeg: true },
          { id: "t18", name: "Green Tea", description: "Refreshing herbal tea", price: 120, isVeg: true },
          { id: "t19", name: "Lemonade", description: "Fresh lemon drink", price: 140, isVeg: true },
        ],
      },
    ],
  },

  "142670": {
    restaurantName: "Shah Ghouse Hotel & Restaurant",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: "sg1", name: "Mutton Biryani", description: "Hyderabadi dum biryani", price: 450, isVeg: false },
          { id: "sg2", name: "Chicken Biryani", description: "Classic chicken dum biryani", price: 350, isVeg: false },
          { id: "sg3", name: "Prawn Biryani", description: "Spicy prawn rice", price: 500, isVeg: false },
          { id: "sg4", name: "Veg Biryani", description: "Mixed vegetable biryani", price: 300, isVeg: true },
          { id: "sg5", name: "Egg Biryani", description: "Biryani with boiled eggs", price: 320, isVeg: false },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "sg6", name: "Chicken 65", description: "Spicy fried chicken", price: 280, isVeg: false },
          { id: "sg7", name: "Mutton Seekh Kebab", description: "Minced mutton skewers", price: 350, isVeg: false },
          { id: "sg8", name: "Apollo Fish", description: "Crispy fish fry", price: 400, isVeg: false },
          { id: "sg9", name: "Paneer Tikka", description: "Grilled paneer cubes", price: 250, isVeg: true },
          { id: "sg10", name: "Hara Bhara Kebab", description: "Veg kebabs with greens", price: 220, isVeg: true },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "sg11", name: "Butter Chicken", description: "Creamy chicken curry", price: 320, isVeg: false },
          { id: "sg12", name: "Mutton Rogan Josh", description: "Spicy mutton gravy", price: 400, isVeg: false },
          { id: "sg13", name: "Dal Fry", description: "Tempered lentils", price: 200, isVeg: true },
          { id: "sg14", name: "Paneer Butter Masala", description: "Rich paneer dish", price: 280, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "sg15", name: "Qubani Ka Meetha", description: "Apricot dessert", price: 150, isVeg: true },
          { id: "sg16", name: "Double Ka Meetha", description: "Bread pudding", price: 140, isVeg: true },
          { id: "sg17", name: "Falooda", description: "Rose milk with vermicelli", price: 180, isVeg: true },
          { id: "sg18", name: "Gulab Jamun", description: "Sweet milk balls", price: 120, isVeg: true },
          { id: "sg19", name: "Kulfi", description: "Traditional ice cream", price: 130, isVeg: true },
        ],
      },
    ],
  },

  "2769": {
    restaurantName: "Blue Fox",
    menu: [
      {
        category: "Chinese",
        items: [
          { id: "bf1", name: "Chicken Fried Rice", description: "Chinese style fried rice", price: 220, isVeg: false },
          { id: "bf2", name: "Veg Manchurian", description: "Crispy veg balls", price: 180, isVeg: true },
          { id: "bf3", name: "Schezwan Noodles", description: "Spicy schezwan sauce noodles", price: 200, isVeg: true },
          { id: "bf4", name: "Chilli Chicken", description: "Indo-Chinese chilli chicken", price: 250, isVeg: false },
          { id: "bf5", name: "Veg Hakka Noodles", description: "Stir-fried veg noodles", price: 190, isVeg: true },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "bf6", name: "Spring Rolls", description: "Crispy veg rolls", price: 160, isVeg: true },
          { id: "bf7", name: "Chicken Lollipop", description: "Fried chicken wings", price: 240, isVeg: false },
          { id: "bf8", name: "Prawn Crackers", description: "Crispy prawn snacks", price: 220, isVeg: false },
          { id: "bf9", name: "Corn Soup", description: "Sweet corn soup", price: 150, isVeg: true },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "bf10", name: "Kung Pao Chicken", description: "Spicy stir-fry chicken", price: 280, isVeg: false },
          { id: "bf11", name: "Veg Chow Mein", description: "Stir-fried noodles", price: 200, isVeg: true },
          { id: "bf12", name: "Sweet and Sour Prawns", description: "Tangy prawn dish", price: 350, isVeg: false },
          { id: "bf13", name: "Mushroom Pepper Fry", description: "Spicy mushrooms", price: 220, isVeg: true },
          { id: "bf14", name: "Chicken Manchurian", description: "Chicken in tangy sauce", price: 260, isVeg: false },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "bf15", name: "Honey Noodles", description: "Crispy noodles with honey", price: 180, isVeg: true },
          { id: "bf16", name: "Date Pancakes", description: "Sweet date-filled pancakes", price: 160, isVeg: true },
          { id: "bf17", name: "Lychee Ice Cream", description: "Exotic lychee flavor", price: 140, isVeg: true },
          { id: "bf18", name: "Fried Ice Cream", description: "Deep-fried ice cream ball", price: 200, isVeg: true },
        ],
      },
    ],
  },

  "3324": {
    restaurantName: "Sri Kanya",
    menu: [
      {
        category: "Andhra Specials",
        items: [
          { id: "sk1", name: "Andhra Chicken Curry", description: "Spicy Andhra style", price: 320, isVeg: false },
          { id: "sk2", name: "Gongura Mutton", description: "Tangy gongura curry", price: 420, isVeg: false },
          { id: "sk3", name: "Natukodi Fry", description: "Country chicken fry", price: 380, isVeg: false },
          { id: "sk4", name: "Prawn Masala", description: "Spicy prawn curry", price: 450, isVeg: false },
          { id: "sk5", name: "Avakaya Veg Biryani", description: "Mango pickle flavored biryani", price: 280, isVeg: true },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "sk6", name: "Chicken 65", description: "Spicy fried chicken", price: 280, isVeg: false },
          { id: "sk7", name: "Fish Fry", description: "Crispy fried fish", price: 350, isVeg: false },
          { id: "sk8", name: "Gobi Manchurian", description: "Crispy cauliflower", price: 200, isVeg: true },
          { id: "sk9", name: "Baby Corn Fry", description: "Spicy corn starters", price: 220, isVeg: true },
        ],
      },
      {
        category: "Biryani",
        items: [
          { id: "sk10", name: "Chicken Biryani", description: "Aromatic chicken rice", price: 350, isVeg: false },
          { id: "sk11", name: "Mutton Biryani", description: "Tender mutton biryani", price: 420, isVeg: false },
          { id: "sk12", name: "Veg Biryani", description: "Mixed veg rice", price: 280, isVeg: true },
          { id: "sk13", name: "Egg Biryani", description: "Biryani with eggs", price: 300, isVeg: false },
          { id: "sk14", name: "Prawn Biryani", description: "Seafood biryani", price: 450, isVeg: false },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "sk15", name: "Pootharekulu", description: "Sweet rice paper rolls", price: 150, isVeg: true },
          { id: "sk16", name: "Bobbatlu", description: "Sweet stuffed flatbread", price: 120, isVeg: true },
          { id: "sk17", name: "Payasam", description: "Rice pudding", price: 100, isVeg: true },
          { id: "sk18", name: "Jalebi", description: "Syrupy swirls", price: 130, isVeg: true },
        ],
      },
    ],
  },

  "25251": {
    restaurantName: "Meridian Restaurant",
    menu: [
      {
        category: "Biryani",
        items: [
          { id: "m1", name: "Chicken Biryani", description: "Aromatic rice & chicken", price: 330, isVeg: false },
          { id: "m2", name: "Veg Biryani", description: "Mixed veg biryani", price: 260, isVeg: true },
          { id: "m3", name: "Mutton Biryani", description: "Tender mutton biryani", price: 400, isVeg: false },
          { id: "m4", name: "Prawn Biryani", description: "Seafood biryani", price: 450, isVeg: false },
          { id: "m5", name: "Egg Biryani", description: "Biryani with eggs", price: 290, isVeg: false },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "m6", name: "Chicken Tikka", description: "Grilled chicken skewers", price: 280, isVeg: false },
          { id: "m7", name: "Paneer Tikka", description: "Grilled paneer", price: 250, isVeg: true },
          { id: "m8", name: "Fish Fingers", description: "Crispy fish sticks", price: 320, isVeg: false },
          { id: "m9", name: "Veg Pakora", description: "Mixed veg fritters", price: 200, isVeg: true },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "m10", name: "Butter Chicken", description: "Creamy chicken curry", price: 350, isVeg: false },
          { id: "m11", name: "Palak Paneer", description: "Spinach and paneer", price: 280, isVeg: true },
          { id: "m12", name: "Mutton Curry", description: "Spicy mutton gravy", price: 400, isVeg: false },
          { id: "m13", name: "Dal Tadka", description: "Tempered lentils", price: 220, isVeg: true },
          { id: "m14", name: "Prawn Masala", description: "Spicy prawns", price: 420, isVeg: false },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "m15", name: "Gulab Jamun", description: "Sweet milk dumplings", price: 150, isVeg: true },
          { id: "m16", name: "Ras Malai", description: "Creamy cheese balls", price: 180, isVeg: true },
          { id: "m17", name: "Ice Cream", description: "Vanilla scoop", price: 120, isVeg: true },
          { id: "m18", name: "Brownie", description: "Chocolate brownie", price: 200, isVeg: true },
        ],
      },
    ],
  },

  "296084": {
    restaurantName: "Haidari Chinese Restaurant",
    menu: [
      {
        category: "Chinese",
        items: [
          { id: "hc1", name: "Chicken Noodles", description: "Street-style noodles", price: 210, isVeg: false },
          { id: "hc2", name: "Veg Fried Rice", description: "Classic fried rice", price: 180, isVeg: true },
          { id: "hc3", name: "Manchow Soup", description: "Spicy veg soup", price: 150, isVeg: true },
          { id: "hc4", name: "Dragon Chicken", description: "Sweet and spicy chicken", price: 260, isVeg: false },
          { id: "hc5", name: "Veg Spring Rolls", description: "Crispy rolls with veg filling", price: 160, isVeg: true },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "hc6", name: "Chilli Paneer", description: "Spicy paneer cubes", price: 220, isVeg: true },
          { id: "hc7", name: "Prawn Tempura", description: "Battered fried prawns", price: 300, isVeg: false },
          { id: "hc8", name: "Chicken Dumplings", description: "Steamed chicken momos", price: 250, isVeg: false },
          { id: "hc9", name: "Veg Dumplings", description: "Steamed veg momos", price: 200, isVeg: true },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "hc10", name: "Schezwan Chicken", description: "Fiery schezwan sauce", price: 280, isVeg: false },
          { id: "hc11", name: "Veg Ball Manchurian", description: "Veg balls in sauce", price: 220, isVeg: true },
          { id: "hc12", name: "Fish in Garlic Sauce", description: "Garlic flavored fish", price: 320, isVeg: false },
          { id: "hc13", name: "Mixed Veg Stir Fry", description: "Healthy veg mix", price: 200, isVeg: true },
          { id: "hc14", name: "Beef Chilli", description: "Spicy beef dish", price: 350, isVeg: false },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "hc15", name: "Fried Ice Cream", description: "Crispy outside, cold inside", price: 180, isVeg: true },
          { id: "hc16", name: "Banana Fritters", description: "Honey glazed bananas", price: 150, isVeg: true },
          { id: "hc17", name: "Mango Pudding", description: "Sweet mango dessert", price: 140, isVeg: true },
          { id: "hc18", name: "Coconut Jelly", description: "Refreshing coconut gel", price: 130, isVeg: true },
        ],
      },
    ],
  },

  "6498": {
    restaurantName: "Hotel Sandarshini",
    menu: [
      {
        category: "Tiffins",
        items: [
          { id: "hs1", name: "Masala Dosa", description: "Crispy dosa with potato filling", price: 90, isVeg: true },
          { id: "hs2", name: "Idli", description: "Soft steamed idlis", price: 60, isVeg: true },
          { id: "hs3", name: "Vada", description: "Crispy lentil donuts", price: 70, isVeg: true },
          { id: "hs4", name: "Pongal", description: "Savory rice and lentil porridge", price: 80, isVeg: true },
          { id: "hs5", name: "Upma", description: "Semolina cooked with veggies", price: 65, isVeg: true },
        ],
      },
      {
        category: "South Indian Specials",
        items: [
          { id: "hs6", name: "Plain Dosa", description: "Simple crispy dosa", price: 70, isVeg: true },
          { id: "hs7", name: "Onion Uttapam", description: "Thick pancake with onions", price: 85, isVeg: true },
          { id: "hs8", name: "Rava Dosa", description: "Crispy semolina dosa", price: 80, isVeg: true },
          { id: "hs9", name: "Pesarattu", description: "Green gram dosa", price: 75, isVeg: true },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "hs10", name: "Filter Coffee", description: "South Indian coffee", price: 40, isVeg: true },
          { id: "hs11", name: "Masala Tea", description: "Spiced tea", price: 30, isVeg: true },
          { id: "hs12", name: "Buttermilk", description: "Spiced yogurt drink", price: 25, isVeg: true },
          { id: "hs13", name: "Fresh Juice", description: "Seasonal fruit juice", price: 50, isVeg: true },
          { id: "hs14", name: "Lassi", description: "Sweet yogurt drink", price: 45, isVeg: true },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: "hs15", name: "Samosa", description: "Spicy potato pastry", price: 30, isVeg: true },
          { id: "hs16", name: "Pakoda", description: "Onion fritters", price: 40, isVeg: true },
          { id: "hs17", name: "Bonda", description: "Potato balls", price: 35, isVeg: true },
          { id: "hs18", name: "Mirchi Bajji", description: "Chilli fritters", price: 45, isVeg: true },
        ],
      },
    ],
  },

  "560732": {
    restaurantName: "Natural Ice Cream",
    menu: [
      {
        category: "Ice Creams",
        items: [
          { id: "ni1", name: "Tender Coconut", description: "Natural coconut ice cream", price: 110, isVeg: true },
          { id: "ni2", name: "Sitaphal", description: "Seasonal special", price: 120, isVeg: true },
          { id: "ni3", name: "Mango", description: "Fresh mango flavor", price: 130, isVeg: true },
          { id: "ni4", name: "Chikoo", description: "Sapodilla ice cream", price: 115, isVeg: true },
          { id: "ni5", name: "Jackfruit", description: "Tropical jackfruit", price: 125, isVeg: true },
        ],
      },
      {
        category: "Sundaes",
        items: [
          { id: "ni6", name: "Hot Chocolate Fudge Sundae", description: "With nuts and sauce", price: 200, isVeg: true },
          { id: "ni7", name: "Fruit Sundae", description: "Mixed fruits topping", price: 180, isVeg: true },
          { id: "ni8", name: "Caramel Sundae", description: "Caramel drizzle", price: 190, isVeg: true },
          { id: "ni9", name: "Brownie Sundae", description: "Brownie pieces", price: 220, isVeg: true },
        ],
      },
      {
        category: "Shakes",
        items: [
          { id: "ni10", name: "Mango Shake", description: "Thick mango milkshake", price: 150, isVeg: true },
          { id: "ni11", name: "Chocolate Shake", description: "Rich chocolate", price: 160, isVeg: true },
          { id: "ni12", name: "Strawberry Shake", description: "Fresh strawberry", price: 140, isVeg: true },
          { id: "ni13", name: "Vanilla Shake", description: "Classic vanilla", price: 130, isVeg: true },
          { id: "ni14", name: "Coffee Shake", description: "Iced coffee blend", price: 170, isVeg: true },
        ],
      },
      {
        category: "Special Flavors",
        items: [
          { id: "ni15", name: "Anjeer", description: "Fig ice cream", price: 140, isVeg: true },
          { id: "ni16", name: "Guava", description: "Tropical guava", price: 130, isVeg: true },
          { id: "ni17", name: "Watermelon", description: "Refreshing watermelon", price: 120, isVeg: true },
          { id: "ni18", name: "Pineapple", description: "Sweet pineapple", price: 125, isVeg: true },
        ],
      },
    ],
  },

  "356688": {
    restaurantName: "Baskin Robbins",
    menu: [
      {
        category: "Ice Creams",
        items: [
          { id: "br1", name: "Mississippi Mud", description: "Chocolate fudge ice cream", price: 190, isVeg: true },
          { id: "br2", name: "Pralines & Cream", description: "Caramel flavored ice cream", price: 200, isVeg: true },
          { id: "br3", name: "Mint Chocolate Chip", description: "Mint with chocolate chips", price: 180, isVeg: true },
          { id: "br4", name: "Very Berry Strawberry", description: "Strawberry ice cream", price: 170, isVeg: true },
          { id: "br5", name: "Cotton Candy", description: "Sweet candy flavor", price: 160, isVeg: true },
        ],
      },
      {
        category: "Sundaes",
        items: [
          { id: "br6", name: "Banana Split", description: "Classic banana sundae", price: 250, isVeg: true },
          { id: "br7", name: "Brownie Sundae", description: "With hot fudge", price: 220, isVeg: true },
          { id: "br8", name: "Oreo Sundae", description: "Cookie crumble", price: 230, isVeg: true },
          { id: "br9", name: "Nutty Professor", description: "Nuts and caramel", price: 240, isVeg: true },
        ],
      },
      {
        category: "Shakes",
        items: [
          { id: "br10", name: "Oreo Shake", description: "Cookie milkshake", price: 200, isVeg: true },
          { id: "br11", name: "Chocolate Shake", description: "Thick chocolate", price: 190, isVeg: true },
          { id: "br12", name: "Strawberry Shake", description: "Berry blend", price: 180, isVeg: true },
          { id: "br13", name: "Vanilla Shake", description: "Smooth vanilla", price: 170, isVeg: true },
          { id: "br14", name: "Caramel Shake", description: "Sweet caramel", price: 210, isVeg: true },
        ],
      },
      {
        category: "Cakes",
        items: [
          { id: "br15", name: "Ice Cream Cake", description: "Layered ice cream cake", price: 500, isVeg: true },
          { id: "br16", name: "Chocolate Cake", description: "Chocolate flavor cake", price: 450, isVeg: true },
          { id: "br17", name: "Strawberry Cake", description: "Berry cake", price: 480, isVeg: true },
          { id: "br18", name: "Custom Cake", description: "Personalized design", price: 600, isVeg: true },
        ],
      },
    ],
  },

  "5285": {
    restaurantName: "Chicha’s",
    menu: [
      {
        category: "Burgers",
        items: [
          { id: "c1", name: "Chicken Burger", description: "Juicy chicken patty", price: 180, isVeg: false },
          { id: "c2", name: "Veg Burger", description: "Crispy veg patty", price: 150, isVeg: true },
          { id: "c3", name: "Lamb Burger", description: "Grilled lamb patty", price: 220, isVeg: false },
          { id: "c4", name: "Cheese Burger", description: "Burger with melted cheese", price: 190, isVeg: false },
          { id: "c5", name: "Paneer Burger", description: "Paneer patty burger", price: 170, isVeg: true },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          { id: "c6", name: "Club Sandwich", description: "Layered sandwich", price: 200, isVeg: false },
          { id: "c7", name: "Veg Grilled Sandwich", description: "Toasted veg sandwich", price: 160, isVeg: true },
          { id: "c8", name: "Chicken Sandwich", description: "Grilled chicken", price: 180, isVeg: false },
          { id: "c9", name: "Egg Sandwich", description: "Boiled egg filling", price: 150, isVeg: false },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "c10", name: "French Fries", description: "Crispy fries", price: 100, isVeg: true },
          { id: "c11", name: "Onion Rings", description: "Fried onion circles", price: 120, isVeg: true },
          { id: "c12", name: "Chicken Nuggets", description: "Bite-sized chicken", price: 150, isVeg: false },
          { id: "c13", name: "Cheese Sticks", description: "Melted cheese fingers", price: 140, isVeg: true },
          { id: "c14", name: "Coleslaw", description: "Creamy cabbage salad", price: 80, isVeg: true },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "c15", name: "Coke", description: "Chilled cola", price: 50, isVeg: true },
          { id: "c16", name: "Lemonade", description: "Fresh lemon drink", price: 60, isVeg: true },
          { id: "c17", name: "Milkshake", description: "Thick shake", price: 120, isVeg: true },
          { id: "c18", name: "Iced Tea", description: "Refreshing tea", price: 70, isVeg: true },
        ],
      },
    ],
  },

  "16571": {
    restaurantName: "Subway",
    menu: [
      {
        category: "Subs",
        items: [
          { id: "sw1", name: "Veggie Delight", description: "Fresh veggie sub", price: 210, isVeg: true },
          { id: "sw2", name: "Chicken Teriyaki", description: "Sweet & spicy chicken", price: 260, isVeg: false },
          { id: "sw3", name: "Italian BMT", description: "Ham, pepperoni & salami", price: 280, isVeg: false },
          { id: "sw4", name: "Tuna", description: "Tuna salad sub", price: 250, isVeg: false },
          { id: "sw5", name: "Paneer Tikka", description: "Indian spiced paneer", price: 230, isVeg: true },
        ],
      },
      {
        category: "Salads",
        items: [
          { id: "sw6", name: "Veg Salad", description: "Fresh vegetables", price: 200, isVeg: true },
          { id: "sw7", name: "Chicken Salad", description: "Grilled chicken strips", price: 250, isVeg: false },
          { id: "sw8", name: "Tuna Salad", description: "Tuna with veggies", price: 240, isVeg: false },
          { id: "sw9", name: "Paneer Salad", description: "Paneer cubes salad", price: 220, isVeg: true },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "sw10", name: "Cookies", description: "Chocolate chip cookies", price: 50, isVeg: true },
          { id: "sw11", name: "Chips", description: "Potato crisps", price: 40, isVeg: true },
          { id: "sw12", name: "Hash Browns", description: "Crispy potato patties", price: 60, isVeg: true },
          { id: "sw13", name: "Cheese Toastie", description: "Grilled cheese", price: 80, isVeg: true },
          { id: "sw14", name: "Soup", description: "Vegetable soup", price: 100, isVeg: true },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "sw15", name: "Soft Drink", description: "Chilled soda", price: 50, isVeg: true },
          { id: "sw16", name: "Iced Tea", description: "Lemon flavored", price: 60, isVeg: true },
          { id: "sw17", name: "Coffee", description: "Hot coffee", price: 70, isVeg: true },
          { id: "sw18", name: "Bottled Water", description: "Mineral water", price: 30, isVeg: true },
        ],
      },
    ],
  },

  "17104": {
    restaurantName: "KFC",
    menu: [
      {
        category: "Chicken",
        items: [
          { id: "k1", name: "Hot & Crispy Chicken", description: "Crispy fried chicken", price: 299, isVeg: false },
          { id: "k2", name: "Chicken Popcorn", description: "Bite-sized chicken", price: 199, isVeg: false },
          { id: "k3", name: "Zinger Burger", description: "Spicy chicken burger", price: 229, isVeg: false },
          { id: "k4", name: "Chicken Bucket", description: "Mixed chicken pieces", price: 499, isVeg: false },
          { id: "k5", name: "Hot Wings", description: "Spicy chicken wings", price: 249, isVeg: false },
        ],
      },
      {
        category: "Burgers",
        items: [
          { id: "k6", name: "Veg Zinger", description: "Spicy veg burger", price: 179, isVeg: true },
          { id: "k7", name: "Chicken Cheese Burger", description: "Cheese topped chicken", price: 209, isVeg: false },
          { id: "k8", name: "Double Chicken Burger", description: "Two patties", price: 259, isVeg: false },
          { id: "k9", name: "Paneer Burger", description: "Paneer patty", price: 189, isVeg: true },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "k10", name: "French Fries", description: "Crispy fries", price: 99, isVeg: true },
          { id: "k11", name: "Coleslaw", description: "Creamy salad", price: 79, isVeg: true },
          { id: "k12", name: "Mashed Potatoes", description: "Creamy potatoes", price: 89, isVeg: true },
          { id: "k13", name: "Corn on the Cob", description: "Buttered corn", price: 69, isVeg: true },
          { id: "k14", name: "Onion Rings", description: "Fried onions", price: 109, isVeg: true },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "k15", name: "Pepsi", description: "Chilled cola", price: 59, isVeg: true },
          { id: "k16", name: "Lemonade", description: "Fresh lemon", price: 69, isVeg: true },
          { id: "k17", name: "Iced Tea", description: "Peach flavored", price: 79, isVeg: true },
          { id: "k18", name: "Coffee", description: "Hot brewed", price: 89, isVeg: true },
        ],
      },
    ],
  },

  "53796": {
    restaurantName: "Jaggu Mithai",
    menu: [
      {
        category: "Sweets",
        items: [
          { id: "jm1", name: "Gulab Jamun", description: "Soft milk dumplings", price: 140, isVeg: true },
          { id: "jm2", name: "Rasgulla", description: "Spongy syrup dessert", price: 130, isVeg: true },
          { id: "jm3", name: "Kaju Katli", description: "Cashew fudge", price: 500, isVeg: true },
          { id: "jm4", name: "Badam Halwa", description: "Almond sweet pudding", price: 300, isVeg: true },
          { id: "jm5", name: "Jalebi", description: "Crispy syrupy swirls", price: 150, isVeg: true },
        ],
      },
      {
        category: "Dry Sweets",
        items: [
          { id: "jm6", name: "Peda", description: "Milk sweet", price: 400, isVeg: true },
          { id: "jm7", name: "Barfi", description: "Coconut barfi", price: 350, isVeg: true },
          { id: "jm8", name: "Laddu", description: "Besan laddu", price: 300, isVeg: true },
          { id: "jm9", name: "Soan Papdi", description: "Flaky sweet", price: 250, isVeg: true },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: "jm10", name: "Mixture", description: "Spicy mix", price: 200, isVeg: true },
          { id: "jm11", name: "Chakli", description: "Spiral snack", price: 180, isVeg: true },
          { id: "jm12", name: "Murukku", description: "Crispy twists", price: 190, isVeg: true },
          { id: "jm13", name: "Kara Sev", description: "Spicy sev", price: 170, isVeg: true },
          { id: "jm14", name: "Boondi", description: "Gram flour balls", price: 160, isVeg: true },
        ],
      },
      {
        category: "Specials",
        items: [
          { id: "jm15", name: "Mysore Pak", description: "Ghee rich sweet", price: 400, isVeg: true },
          { id: "jm16", name: "Halwa", description: "Carrot halwa", price: 300, isVeg: true },
          { id: "jm17", name: "Ras Malai", description: "Creamy dessert", price: 200, isVeg: true },
          { id: "jm18", name: "Payasam", description: "Sweet kheer", price: 150, isVeg: true },
        ],
      },
    ],
  },

  "1111967": {
    restaurantName: "Mealy – Your Everyday Meal",
    menu: [
      {
        category: "Meals",
        items: [
          { id: "me1", name: "Veg Meal", description: "Rice, curry & dal", price: 180, isVeg: true },
          { id: "me2", name: "Chicken Meal", description: "Rice with chicken curry", price: 250, isVeg: false },
          { id: "me3", name: "Mutton Meal", description: "Rice with mutton gravy", price: 300, isVeg: false },
          { id: "me4", name: "Fish Meal", description: "Rice with fish curry", price: 280, isVeg: false },
          { id: "me5", name: "Egg Meal", description: "Rice with egg masala", price: 220, isVeg: false },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "me6", name: "Veg Soup", description: "Hot vegetable soup", price: 100, isVeg: true },
          { id: "me7", name: "Chicken Soup", description: "Chicken broth", price: 120, isVeg: false },
          { id: "me8", name: "Papad", description: "Crispy papad", price: 20, isVeg: true },
          { id: "me9", name: "Salad", description: "Fresh salad", price: 80, isVeg: true },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: "me10", name: "Chapati", description: "Whole wheat flatbread", price: 30, isVeg: true },
          { id: "me11", name: "Naan", description: "Soft naan bread", price: 40, isVeg: true },
          { id: "me12", name: "Paratha", description: "Layered paratha", price: 50, isVeg: true },
          { id: "me13", name: "Puri", description: "Fried puri", price: 40, isVeg: true },
          { id: "me14", name: "Roti", description: "Thin roti", price: 25, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "me15", name: "Gulab Jamun", description: "Sweet dumplings", price: 50, isVeg: true },
          { id: "me16", name: "Kheer", description: "Rice pudding", price: 60, isVeg: true },
          { id: "me17", name: "Fruit Salad", description: "Mixed fruits", price: 70, isVeg: true },
          { id: "me18", name: "Ice Cream", description: "Vanilla scoop", price: 80, isVeg: true },
        ],
      },
    ],
  },

  "237054": {
    restaurantName: "Cafe Bahar since 1973",
    menu: [
      {
        category: "Biryani",
        items: [
          { id: "cb1", name: "Chicken Biryani", description: "Signature biryani", price: 340, isVeg: false },
          { id: "cb2", name: "Mutton Biryani", description: "Tender mutton rice", price: 400, isVeg: false },
          { id: "cb3", name: "Veg Biryani", description: "Vegetable layered rice", price: 280, isVeg: true },
          { id: "cb4", name: "Prawn Biryani", description: "Seafood special biryani", price: 450, isVeg: false },
          { id: "cb5", name: "Egg Biryani", description: "Biryani with eggs", price: 300, isVeg: false },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "cb6", name: "Chicken 65", description: "Spicy fried chicken", price: 280, isVeg: false },
          { id: "cb7", name: "Mutton Kebab", description: "Grilled mutton", price: 350, isVeg: false },
          { id: "cb8", name: "Paneer Tikka", description: "Grilled paneer", price: 250, isVeg: true },
          { id: "cb9", name: "Fish Fry", description: "Crispy fish", price: 320, isVeg: false },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "cb10", name: "Butter Chicken", description: "Creamy curry", price: 320, isVeg: false },
          { id: "cb11", name: "Dal Fry", description: "Tempered dal", price: 200, isVeg: true },
          { id: "cb12", name: "Mutton Curry", description: "Spicy mutton", price: 380, isVeg: false },
          { id: "cb13", name: "Paneer Masala", description: "Spicy paneer", price: 280, isVeg: true },
          { id: "cb14", name: "Bagara Baingan", description: "Eggplant curry", price: 220, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "cb15", name: "Qubani Ka Meetha", description: "Apricot sweet", price: 150, isVeg: true },
          { id: "cb16", name: "Double Ka Meetha", description: "Bread sweet", price: 140, isVeg: true },
          { id: "cb17", name: "Falooda", description: "Rose dessert drink", price: 180, isVeg: true },
          { id: "cb18", name: "Kulfi", description: "Traditional ice cream", price: 130, isVeg: true },
        ],
      },
    ],
  },

  "1022488": {
    restaurantName: "Raju Gari Biryani",
    menu: [
      {
        category: "Biryani",
        items: [
          { id: "rg1", name: "Ulavacharu Chicken Biryani", description: "Special biryani", price: 380, isVeg: false },
          { id: "rg2", name: "Bamboo Chicken Biryani", description: "Unique bamboo flavor", price: 420, isVeg: false },
          { id: "rg3", name: "Mutton Biryani", description: "Rich mutton biryani", price: 450, isVeg: false },
          { id: "rg4", name: "Veg Ulavacharu Biryani", description: "Horse gram flavored veg", price: 320, isVeg: true },
          { id: "rg5", name: "Prawn Biryani", description: "Spicy prawn rice", price: 480, isVeg: false },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "rg6", name: "Chicken Fry", description: "Spicy chicken pieces", price: 280, isVeg: false },
          { id: "rg7", name: "Mutton Fry", description: "Dry mutton fry", price: 350, isVeg: false },
          { id: "rg8", name: "Prawn Fry", description: "Crispy prawns", price: 400, isVeg: false },
          { id: "rg9", name: "Veg Manchurian", description: "Crispy veg balls", price: 220, isVeg: true },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "rg10", name: "Chicken Curry", description: "Home style curry", price: 300, isVeg: false },
          { id: "rg11", name: "Mutton Curry", description: "Spicy gravy", price: 380, isVeg: false },
          { id: "rg12", name: "Egg Masala", description: "Boiled eggs in gravy", price: 250, isVeg: false },
          { id: "rg13", name: "Paneer Curry", description: "Creamy paneer", price: 280, isVeg: true },
          { id: "rg14", name: "Dal Tadka", description: "Lentil tempering", price: 200, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "rg15", name: "Gulab Jamun", description: "Sweet balls", price: 100, isVeg: true },
          { id: "rg16", name: "Rasgulla", description: "Syrupy cheese balls", price: 120, isVeg: true },
          { id: "rg17", name: "Payasam", description: "Sweet porridge", price: 80, isVeg: true },
          { id: "rg18", name: "Ice Cream", description: "Vanilla flavor", price: 90, isVeg: true },
        ],
      },
    ],
  },

  "100942": {
    restaurantName: "Lucky Multicuisine",
    menu: [
      {
        category: "North Indian",
        items: [
          { id: "lm1", name: "Butter Chicken", description: "Creamy chicken curry", price: 320, isVeg: false },
          { id: "lm2", name: "Paneer Butter Masala", description: "Creamy paneer dish", price: 280, isVeg: true },
          { id: "lm3", name: "Dal Makhani", description: "Buttery lentils", price: 250, isVeg: true },
          { id: "lm4", name: "Chicken Tikka Masala", description: "Grilled chicken in gravy", price: 350, isVeg: false },
          { id: "lm5", name: "Aloo Gobi", description: "Potato cauliflower curry", price: 220, isVeg: true },
        ],
      },
      {
        category: "Chinese",
        items: [
          { id: "lm6", name: "Fried Rice", description: "Veg fried rice", price: 200, isVeg: true },
          { id: "lm7", name: "Chilli Chicken", description: "Spicy chicken", price: 280, isVeg: false },
          { id: "lm8", name: "Noodles", description: "Veg hakka noodles", price: 220, isVeg: true },
          { id: "lm9", name: "Manchurian", description: "Veg manchurian", price: 240, isVeg: true },
        ],
      },
      {
        category: "South Indian",
        items: [
          { id: "lm10", name: "Masala Dosa", description: "Crispy dosa", price: 150, isVeg: true },
          { id: "lm11", name: "Idli Sambar", description: "Steamed idlis", price: 120, isVeg: true },
          { id: "lm12", name: "Vada", description: "Fried vada", price: 100, isVeg: true },
          { id: "lm13", name: "Uttapam", description: "Thick pancake", price: 140, isVeg: true },
          { id: "lm14", name: "Pongal", description: "Rice lentil dish", price: 130, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "lm15", name: "Gulab Jamun", description: "Sweet dumplings", price: 100, isVeg: true },
          { id: "lm16", name: "Ice Cream", description: "Assorted flavors", price: 120, isVeg: true },
          { id: "lm17", name: "Brownie", description: "Chocolate brownie", price: 150, isVeg: true },
          { id: "lm18", name: "Ras Malai", description: "Creamy sweet", price: 140, isVeg: true },
        ],
      },
    ],
  },

  "699984": {
    restaurantName: "Blue Sea Restaurant",
    menu: [
      {
        category: "Seafood",
        items: [
          { id: "bs1", name: "Fish Fry", description: "Crispy fried fish", price: 350, isVeg: false },
          { id: "bs2", name: "Prawn Masala", description: "Spicy prawn curry", price: 400, isVeg: false },
          { id: "bs3", name: "Crab Curry", description: "Tangy crab dish", price: 450, isVeg: false },
          { id: "bs4", name: "Lobster Thermidor", description: "Baked lobster", price: 600, isVeg: false },
          { id: "bs5", name: "Squid Rings", description: "Fried squid appetizers", price: 380, isVeg: false },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "bs6", name: "Prawn Cocktail", description: "Chilled prawns", price: 300, isVeg: false },
          { id: "bs7", name: "Fish Fingers", description: "Battered fish sticks", price: 280, isVeg: false },
          { id: "bs8", name: "Calamari", description: "Fried squid", price: 320, isVeg: false },
          { id: "bs9", name: "Seafood Soup", description: "Mixed seafood broth", price: 250, isVeg: false },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: "bs10", name: "Grilled Fish", description: "Herb marinated fish", price: 400, isVeg: false },
          { id: "bs11", name: "Prawn Biryani", description: "Seafood rice", price: 450, isVeg: false },
          { id: "bs12", name: "Crab Masala", description: "Spicy crab", price: 480, isVeg: false },
          { id: "bs13", name: "Fish Curry", description: "Coconut fish curry", price: 350, isVeg: false },
          { id: "bs14", name: "Lobster Curry", description: "Rich lobster dish", price: 650, isVeg: false },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "bs15", name: "Coconut Pudding", description: "Sweet coconut dessert", price: 150, isVeg: true },
          { id: "bs16", name: "Fruit Salad", description: "Fresh fruits", price: 120, isVeg: true },
          { id: "bs17", name: "Ice Cream", description: "Sea salt caramel", price: 180, isVeg: true },
          { id: "bs18", name: "Tiramisu", description: "Coffee dessert", price: 200, isVeg: true },
        ],
      },
    ],
  },

  "312800": {
    restaurantName: "Hillstar Restaurant",
    menu: [
      {
        category: "Indian",
        items: [
          { id: "hr1", name: "Paneer Butter Masala", description: "Creamy paneer curry", price: 280, isVeg: true },
          { id: "hr2", name: "Chicken Biryani", description: "Aromatic rice dish", price: 350, isVeg: false },
          { id: "hr3", name: "Veg Pulao", description: "Mixed vegetable rice", price: 250, isVeg: true },
          { id: "hr4", name: "Mutton Rogan Josh", description: "Kashmiri mutton curry", price: 400, isVeg: false },
          { id: "hr5", name: "Palak Paneer", description: "Spinach and paneer", price: 260, isVeg: true },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "hr6", name: "Chicken Tikka", description: "Grilled chicken", price: 300, isVeg: false },
          { id: "hr7", name: "Paneer Pakora", description: "Fried paneer", price: 220, isVeg: true },
          { id: "hr8", name: "Veg Spring Rolls", description: "Crispy rolls", price: 200, isVeg: true },
          { id: "hr9", name: "Fish Amritsari", description: "Spicy fish fry", price: 350, isVeg: false },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: "hr10", name: "Naan", description: "Soft naan", price: 50, isVeg: true },
          { id: "hr11", name: "Roti", description: "Whole wheat roti", price: 30, isVeg: true },
          { id: "hr12", name: "Paratha", description: "Stuffed paratha", price: 60, isVeg: true },
          { id: "hr13", name: "Kulcha", description: "Leavened bread", price: 70, isVeg: true },
          { id: "hr14", name: "Puri", description: "Fried puri", price: 40, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "hr15", name: "Gajar Halwa", description: "Carrot pudding", price: 150, isVeg: true },
          { id: "hr16", name: "Ras Malai", description: "Creamy balls", price: 180, isVeg: true },
          { id: "hr17", name: "Kheer", description: "Rice pudding", price: 120, isVeg: true },
          { id: "hr18", name: "Jalebi", description: "Syrupy dessert", price: 140, isVeg: true },
        ],
      },
    ],
  },

  "792059": {
    restaurantName: "California Burrito",
    menu: [
      {
        category: "Mexican",
        items: [
          { id: "cbt1", name: "Veg Burrito Bowl", description: "Mexican rice bowl", price: 290, isVeg: true },
          { id: "cbt2", name: "Chicken Burrito", description: "Grilled chicken wrap", price: 350, isVeg: false },
          { id: "cbt3", name: "Tacos", description: "Crispy tacos with filling", price: 250, isVeg: true },
          { id: "cbt4", name: "Quesadilla", description: "Cheese stuffed tortilla", price: 300, isVeg: true },
          { id: "cbt5", name: "Nachos", description: "Loaded nachos with salsa", price: 220, isVeg: true },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: "cbt6", name: "Guacamole", description: "Avocado dip", price: 150, isVeg: true },
          { id: "cbt7", name: "Chips and Salsa", description: "Crispy chips", price: 120, isVeg: true },
          { id: "cbt8", name: "Cheese Queso", description: "Melted cheese dip", price: 180, isVeg: true },
          { id: "cbt9", name: "Chicken Wings", description: "Mexican spiced wings", price: 250, isVeg: false },
        ],
      },
      {
        category: "Salads",
        items: [
          { id: "cbt10", name: "Veg Salad Bowl", description: "Fresh veggies", price: 200, isVeg: true },
          { id: "cbt11", name: "Chicken Salad", description: "Grilled chicken salad", price: 250, isVeg: false },
          { id: "cbt12", name: "Bean Salad", description: "Black bean mix", price: 180, isVeg: true },
          { id: "cbt13", name: "Avocado Salad", description: "Avocado and greens", price: 220, isVeg: true },
          { id: "cbt14", name: "Prawn Salad", description: "Seafood salad", price: 300, isVeg: false },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "cbt15", name: "Lime Soda", description: "Fresh lime", price: 80, isVeg: true },
          { id: "cbt16", name: "Margarita Mocktail", description: "Non-alcoholic margarita", price: 150, isVeg: true },
          { id: "cbt17", name: "Iced Tea", description: "Lemon iced tea", price: 100, isVeg: true },
          { id: "cbt18", name: "Soft Drink", description: "Cola", price: 60, isVeg: true },
        ],
      },
    ],
  },

  "1125892": {
    restaurantName: "Burger King",
    menu: [
      {
        category: "Burgers",
        items: [
          { id: "bk1", name: "Whopper", description: "Flame grilled burger", price: 199, isVeg: false },
          { id: "bk2", name: "Veg Whopper", description: "Veg patty burger", price: 179, isVeg: true },
          { id: "bk3", name: "Chicken Whopper", description: "Chicken patty whopper", price: 209, isVeg: false },
          { id: "bk4", name: "Crispy Veg Burger", description: "Crispy veg burger", price: 99, isVeg: true },
          { id: "bk5", name: "Cheese Burger", description: "Burger with cheese slice", price: 149, isVeg: false },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "bk6", name: "French Fries", description: "Crispy fries", price: 79, isVeg: true },
          { id: "bk7", name: "Onion Rings", description: "Fried onions", price: 99, isVeg: true },
          { id: "bk8", name: "Chicken Fries", description: "Chicken strips", price: 129, isVeg: false },
          { id: "bk9", name: "Hash Browns", description: "Potato patties", price: 69, isVeg: true },
        ],
      },
      {
        category: "Wraps",
        items: [
          { id: "bk10", name: "Veg Wrap", description: "Veg filling wrap", price: 149, isVeg: true },
          { id: "bk11", name: "Chicken Wrap", description: "Grilled chicken wrap", price: 169, isVeg: false },
          { id: "bk12", name: "Paneer Wrap", description: "Paneer spiced wrap", price: 159, isVeg: true },
          { id: "bk13", name: "Egg Wrap", description: "Egg and cheese wrap", price: 139, isVeg: false },
          { id: "bk14", name: "Lamb Wrap", description: "Lamb patty wrap", price: 189, isVeg: false },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "bk15", name: "Coke", description: "Chilled cola", price: 59, isVeg: true },
          { id: "bk16", name: "Thick Shake", description: "Chocolate shake", price: 129, isVeg: true },
          { id: "bk17", name: "Lemonade", description: "Fresh lemon", price: 69, isVeg: true },
          { id: "bk18", name: "Coffee", description: "Hot coffee", price: 79, isVeg: true },
        ],
      },
    ],
  },

  "437301": {
    restaurantName: "Pizza Hut",
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: "ph1", name: "Margherita Pizza", description: "Classic cheese and tomato", price: 299, isVeg: true },
          { id: "ph2", name: "Pepperoni Pizza", description: "Pepperoni slices on pizza", price: 399, isVeg: false },
          { id: "ph3", name: "Veggie Supreme", description: "Loaded with veggies", price: 349, isVeg: true },
          { id: "ph4", name: "Chicken Tikka Pizza", description: "Indian spiced chicken", price: 379, isVeg: false },
          { id: "ph5", name: "Paneer Pizza", description: "Paneer and capsicum", price: 329, isVeg: true },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "ph6", name: "Garlic Bread", description: "Toasted garlic bread", price: 149, isVeg: true },
          { id: "ph7", name: "Chicken Wings", description: "Spicy fried wings", price: 199, isVeg: false },
          { id: "ph8", name: "Cheese Sticks", description: "Mozzarella sticks", price: 179, isVeg: true },
          { id: "ph9", name: "Potato Wedges", description: "Crispy wedges", price: 129, isVeg: true },
          { id: "ph10", name: "Pasta", description: "Creamy white sauce pasta", price: 249, isVeg: true },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: "ph11", name: "Choco Lava Cake", description: "Molten chocolate cake", price: 99, isVeg: true },
          { id: "ph12", name: "Brownie", description: "Fudgy brownie", price: 89, isVeg: true },
          { id: "ph13", name: "Ice Cream Sundae", description: "Vanilla sundae", price: 119, isVeg: true },
          { id: "ph14", name: "Tiramisu", description: "Coffee dessert", price: 149, isVeg: true },
          { id: "ph15", name: "Cheesecake", description: "New York style", price: 139, isVeg: true },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "ph16", name: "Pepsi", description: "Chilled soda", price: 59, isVeg: true },
          { id: "ph17", name: "Lemonade", description: "Fresh lemon drink", price: 69, isVeg: true },
          { id: "ph18", name: "Iced Tea", description: "Peach iced tea", price: 79, isVeg: true },
          { id: "ph19", name: "Coffee", description: "Hot brewed coffee", price: 89, isVeg: true },
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
          { id: "ah1", name: "Badam Burfi", description: "Almond fudge", price: 500, isVeg: true },
          { id: "ah2", name: "Kaju Katli", description: "Cashew sweet", price: 550, isVeg: true },
          { id: "ah3", name: "Pista Roll", description: "Pistachio rolled sweet", price: 520, isVeg: true },
          { id: "ah4", name: "Dry Fruit Laddu", description: "Mixed dry fruits ball", price: 450, isVeg: true },
          { id: "ah5", name: "Almond Biscuits", description: "Crunchy almond cookies", price: 300, isVeg: true },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: "ah6", name: "Mixture", description: "Spicy savory mix", price: 200, isVeg: true },
          { id: "ah7", name: "Murukku", description: "Crispy rice flour snack", price: 180, isVeg: true },
          { id: "ah8", name: "Kara Boondi", description: "Spicy gram flour balls", price: 190, isVeg: true },
          { id: "ah9", name: "Chakli", description: "Spiral shaped snack", price: 170, isVeg: true },
          { id: "ah10", name: "Thattai", description: "Flat rice cracker", price: 160, isVeg: true },
        ],
      },
      {
        category: "Dry Fruits",
        items: [
          { id: "ah11", name: "Roasted Almonds", description: "Salted roasted almonds", price: 600, isVeg: true },
          { id: "ah12", name: "Cashew Nuts", description: "Plain cashews", price: 650, isVeg: true },
          { id: "ah13", name: "Pistachios", description: "Salted pistachios", price: 700, isVeg: true },
          { id: "ah14", name: "Walnuts", description: "Whole walnuts", price: 550, isVeg: true },
          { id: "ah15", name: "Raisins", description: "Dried grapes", price: 300, isVeg: true },
        ],
      },
      {
        category: "Specials",
        items: [
          { id: "ah16", name: "Dry Fruit Halwa", description: "Mixed nut pudding", price: 400, isVeg: true },
          { id: "ah17", name: "Anjeer Barfi", description: "Fig fudge", price: 450, isVeg: true },
          { id: "ah18", name: "Date Rolls", description: "Stuffed date rolls", price: 350, isVeg: true },
          { id: "ah19", name: "Apricot Delight", description: "Apricot sweet", price: 380, isVeg: true },
        ],
      },
    ],
  },

  "74979": {
    restaurantName: "Ohr's Cake Nation",
    menu: [
      {
        category: "Cakes",
        items: [
          { id: "oc1", name: "Chocolate Cake", description: "Rich chocolate sponge", price: 400, isVeg: true },
          { id: "oc2", name: "Vanilla Cake", description: "Classic vanilla flavor", price: 350, isVeg: true },
          { id: "oc3", name: "Red Velvet Cake", description: "Velvety red with cream", price: 450, isVeg: true },
          { id: "oc4", name: "Black Forest Cake", description: "Cherry and cream layers", price: 420, isVeg: true },
          { id: "oc5", name: "Pineapple Cake", description: "Tropical pineapple", price: 380, isVeg: true },
        ],
      },
      {
        category: "Pastries",
        items: [
          { id: "oc6", name: "Butterscotch Pastry", description: "Caramel flavored", price: 100, isVeg: true },
          { id: "oc7", name: "Strawberry Pastry", description: "Fresh strawberry", price: 110, isVeg: true },
          { id: "oc8", name: "Mango Pastry", description: "Seasonal mango", price: 120, isVeg: true },
          { id: "oc9", name: "Truffle Pastry", description: "Chocolate truffle", price: 130, isVeg: true },
          { id: "oc10", name: "Blueberry Pastry", description: "Berry delight", price: 140, isVeg: true },
        ],
      },
      {
        category: "Cupcakes",
        items: [
          { id: "oc11", name: "Chocolate Cupcake", description: "Mini chocolate cake", price: 80, isVeg: true },
          { id: "oc12", name: "Vanilla Cupcake", description: "Mini vanilla", price: 70, isVeg: true },
          { id: "oc13", name: "Red Velvet Cupcake", description: "Mini red velvet", price: 90, isVeg: true },
          { id: "oc14", name: "Lemon Cupcake", description: "Tangy lemon", price: 75, isVeg: true },
          { id: "oc15", name: "Oreo Cupcake", description: "With oreo crumbs", price: 85, isVeg: true },
        ],
      },
      {
        category: "Cookies",
        items: [
          { id: "oc16", name: "Chocolate Chip Cookies", description: "Crunchy cookies", price: 50, isVeg: true },
          { id: "oc17", name: "Oatmeal Cookies", description: "Healthy oats", price: 60, isVeg: true },
          { id: "oc18", name: "Butter Cookies", description: "Buttery delight", price: 40, isVeg: true },
          { id: "oc19", name: "Almond Cookies", description: "Nutty flavor", price: 70, isVeg: true },
        ],
      },
    ],
  },
};

export default mockMenu;