import { CDN_URL } from "../../Utils/constant";

const RestaurantCard = ({resData}) => {
    const {
    cloudinaryImageId,
    name,
    cuisines = [],
    costForTwo,
    avgRating,
    deliveryTime,
    sla
  } = resData?.info;
    return (
        <div className="res-card">

             <img
            className="res-logo"
            src={ CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <p className="res-middle">{(cuisines ||[]).join(", ")}</p>
            <h3>{costForTwo}</h3>
            <div className="res-footer">
           <span className="res-rating">{avgRating}⭐</span> 
            <span className="res-time">{sla?.deliveryTime?? "--"}min</span>
            </div>
            
        </div>
    )
};

export default RestaurantCard;