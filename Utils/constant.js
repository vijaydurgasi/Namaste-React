

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

export const MENU_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null%22";

const OriginalResList = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const getImageUrl = (cloudinaryImageId) => {
    if (!cloudinaryImageId) {
        return "https://via.placeholder.com/508x320?text=Food+Image";
    }

    if (cloudinaryImageId.startsWith("rng/")) {
        return CDN_URL + cloudinaryImageId;
    }

    return CDN_URL + cloudinaryImageId;
};