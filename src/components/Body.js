 
 import RestauCard from "./RestauCard";
 import { useState, useEffect } from "react";
 import resList from "../utils/mockData";
 import {Shimmer} from "./Shimmer";
 import { Link } from "react-router-dom";



const Body = ()=>{
  
   const [ListOfRest, setListOfRest] = useState([]);
   const [filteredrest, setFilteredRest] = useState([])

   const [searchText, setsearchText] = useState("");

   console.log("BodyRendered");

    useEffect(()=>{  
      fetchData();
    },
     []);
   const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.596994796379672&lng=77.29609969719853");
     
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.628210&lng=77.211052&page_type=DESKTOP-WEB-LISTING");

    const json = await data.json();
    console.log(json);
    // optional chaining
    // setListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRest(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRest(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
     

   }
   
  //  conditional rendering
  //  if (ListOfRest.length === 0){
  //   return  <Shimmer/>;
  //  }


    // turnery operator
    return ListOfRest.length===0? (<Shimmer/>) : (
      <div className="body">
        <div className="filter">
          <div className="search-box">
            <input
             type="text" className="search-input" 
             value={searchText}
              onChange={
              (e)=>setsearchText(e.target.value)
              } />
            <button 
              onClick={()=>{ 
              const filteredListofres = ListOfRest.filter(
                
                (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())); 

              setFilteredRest(filteredListofres); console.log(filteredListofres);

            }} className="search-btn">search</button>
          </div>
          <button className="filter-btn" onClick={()=>{

            const filteredList= ListOfRest.filter(
              (res)=>res.info.avgRating > 4.3);
           setListOfRest(filteredList); console.log(filteredList);
          }} >Top Rated Restaurants</button>
        </div>
        
        <div className="res-cards">
          {filteredrest.map((restaurant) => <Link className="res-link" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}> <RestauCard  resData={restaurant} /> </Link>)}
        </div>
      </div>
    )
}
export default Body;