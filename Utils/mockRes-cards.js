const mockRestaurants = [
    {
        info: {
            id: "437301",
            name: "Pizza Hut",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/8393fe38-3d26-4e13-b87e-c3f3d22e671e_437301.JPG",
            cuisines: ["Pizzas"],
            costForTwo: "₹350 for two",
            avgRating: 4.5,
            sla: { deliveryTime: 24 },
        },
    },
    {
        info: {
            id: "17104",
            name: "KFC",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/bc206b3d-1b44-49a5-9691-74cc682495d8_17104.JPG",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            costForTwo: "₹400 for two",
            avgRating: 4.4,
            sla: { deliveryTime: 20 },
        },
    },
    {
        info: {
            id: "44934",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/43a4803c-b034-4aea-8951-6047b900e4bb_44934.JPG",
            cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
            costForTwo: "₹200 for two",
            avgRating: 4.6,
            sla: { deliveryTime: 38 },
        },
    },
    {
        info: {
            id: "24613",
            name: "Domino's Pizza",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/5be0bee9-f3b3-4e6a-8faf-630c14f25a40_24613.JPG",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            costForTwo: "₹400 for two",
            avgRating: 4.6,
            sla: { deliveryTime: 25 },
        },
    },
    {
        info: {
            id: "3324",
            name: "Srikanya",
            cloudinaryImageId: "tw4ytwle8yommmgdy4b0",
            cuisines: ["Biryani", "Andhra", "South Indian"],
            costForTwo: "₹250 for two",
            avgRating: 4.3,
            sla: { deliveryTime: 31 },
        },
    },
    {
        info: {
            id: "639526",
            name: "Dum Safar Biryani",
            cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
            cuisines: ["Biryani", "Hyderabadi", "Kebabs"],
            costForTwo: "₹500 for two",
            avgRating: 4.1,
            sla: { deliveryTime: 31 },
        },
    },
    {
        info: {
            id: "262087",
            name: "Imperial Multicuisine Restaurant",
            cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
            cuisines: ["Biryani", "Chinese", "Indian", "Kebabs"],
            costForTwo: "₹400 for two",
            avgRating: 4.3,
            sla: { deliveryTime: 34 },
        },
    },
    {
        info: {
            id: "547809",
            name: "Theobroma",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/17/e83dfc11-eec4-42f8-953c-2095da4f1897_547809.JPG",
            cuisines: ["Desserts"],
            costForTwo: "₹400 for two",
            avgRating: 4.5,
            sla: { deliveryTime: 19 },
        },
    },
    {
        info: {
            id: "2796",
            name: "Blue Fox",
            cloudinaryImageId: "67a049690883e2a8cc66975daa3e40fd",
            cuisines: ["Biryani", "Chinese", "Tandoor"],
            costForTwo: "₹800 for two",
            avgRating: 4.4,
            sla: { deliveryTime: 25 },
        },
    },
    {
        info: {
            id: "7003",
            name: "Almond House",
            cloudinaryImageId: "sewngcxy3c0h9atmav2l",
            cuisines: ["Sweets", "Desserts"],
            costForTwo: "₹500 for two",
            avgRating: 4.7,
            sla: { deliveryTime: 24 },
        },
    },
    {
        info: {
            id: "25251",
            name: "Meridian Restaurant",
            cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
            cuisines: ["Biryani", "Chinese", "Kebabs"],
            costForTwo: "₹400 for two",
            avgRating: 4.4,
            sla: { deliveryTime: 31 },
        },
    },
    {
        info: {
            id: "7203",
            name: "Taj Mahal-Abids",
            cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d",
            cuisines: ["South Indian", "North Indian", "Biryani"],
            costForTwo: "₹400 for two",
            avgRating: 4.6,
            sla: { deliveryTime: 35 },
        },
    },
    {
        info: {
            id: "6498",
            name: "Hotel Sandarshini",
            cloudinaryImageId: "9f5783b9975a73ec001560327065a01c",
            cuisines: ["Chinese", "South Indian"],
            costForTwo: "₹200 for two",
            avgRating: 4.6,
            sla: { deliveryTime: 31 },
        },
    },
    {
        info: {
            id: "53796",
            name: "Jaggu Mithai",
            cloudinaryImageId: "n7fhclyf7wngqusam2he",
            cuisines: ["Desserts", "Chaat"],
            costForTwo: "₹250 for two",
            avgRating: 4.5,
            sla: { deliveryTime: 28 },
        },
    },
    {
        info: {
            id: "662646",
            name: "Starbucks Coffee",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/6/adf6be11-9f6c-4a7d-ac41-028ffb9c5eb5_662646.JPG",
            cuisines: ["Beverages", "Cafe", "Snacks"],
            costForTwo: "₹400 for two",
            avgRating: 4.4,
            sla: { deliveryTime: 35 },
        },
    },
    {
        info: {
            id: "798573",
            name: "Krispy Kreme",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/6/db89a9d2-daca-4441-ae60-a1bcc61189d1_798573.JPG",
            cuisines: ["Desserts", "Cafe", "Bakery"],
            costForTwo: "₹170 for two",
            avgRating: 4.5,
            sla: { deliveryTime: 32 },
        },
    },
    {
        info: {
            id: "12046",
            name: "Subway",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/5815ca5f-c602-4459-aaff-0f19c753f150_12046.jpg",
            cuisines: ["Sandwich", "Salads", "Healthy Food"],
            costForTwo: "₹350 for two",
            avgRating: 4.1,
            sla: { deliveryTime: 24 },
        },
    },
    {
        info: {
            id: "23707",
            name: "McDonald's",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/a3543e0e-9ce1-4444-a9a1-ad4167e54dc2_23707.JPG",
            cuisines: ["Burgers", "Cafe", "Desserts"],
            costForTwo: "₹400 for two",
            avgRating: 4.4,
            sla: { deliveryTime: 20 },
        },
    },
    {
        info: {
            id: "518650",
            name: "Burger King",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b93955b1-55d2-44d8-a641-66a2e10cbe4d_518650.jpg",
            cuisines: ["Burgers", "American"],
            costForTwo: "₹350 for two",
            avgRating: 4.2,
            sla: { deliveryTime: 30 },
        },
    },
    {
        info: {
            id: "74979",
            name: "Ohri's Cake Nation",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/30/912bb7f1-a98e-4300-b6bd-7ff18fc8070a_74979.JPG",
            cuisines: ["Bakery", "Desserts", "Beverages"],
            costForTwo: "₹450 for two",
            avgRating: 4.4,
            sla: {
                deliveryTime: 20,
            },
        },
    },
];

export default mockRestaurants;