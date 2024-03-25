import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
const RestaurantMenu=()=>{
    const[resInfo, setresInfo] = useState(null);
    const  {resId} = useParams();
    console.log(resId);
    
    
    useEffect(()=>{
        fetchMenu();
    }, []);
    const fetchMenu = async ()=>{
        // const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.596994796379672&lng=77.29609969719853&restaurantId=" + 637739  + "&isMenuUx4=true&submitAction=ENTER")
        const data = await fetch( MENU_API + resId + "&isMenuUx4=true&submitAction=ENTER")
        const json = await data.json()
        console.log(json);
        setresInfo(json?.data );
        // console.log(json?.data?.cards[2]?.card?.card?.info?.name);
    };
    
    if (resInfo===null) return <Shimmer/>;
    const {name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return  (
        <div className="menu">
            <div className="menu-top">
            <h1>{ name}</h1>
             
            <p>{ cuisines.join(", ")} -  
             { costForTwoMessage} </p>
              
             <span><h4>{ avgRating}</h4></span>
             <br/>
             <hr/>
             </div>
             
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=><ul className="menu-card" key={item.card.info.id} > {item.card.info.name} - 
                Rs {item.card.info.Price/100 || item.card.info.defaultPrice/100} -   <img className="items-img" src= {MENU_ITEM_IMG_URL + item.card.info.imageId} alt=""/>   </ul>)} 
                <div className="item-div">
                
                </div>
            </ul>
        </div>
    )
}
export default RestaurantMenu;