import { CDN_URL } from "../utils/constants";

const RestauCard = (props)=>{
    const {resData }=props;
    const {cloudinaryImageId, name, avgRating, deliveryTime, cuisines}=resData?.info;
    return(
        <div className="res-card">
            <img src={ CDN_URL +  cloudinaryImageId} />
            <div className="res-card-items">
            <h2>{ name}</h2> 
            
            <h4><span>{ avgRating} Stars</span> { deliveryTime}  </h4> 
            <h6>{ cuisines.join(", ")}</h6>
            
             
            </div>




        </div>
    )
}
export default RestauCard;