import Rescard from "./Rescard";
import { useEffect, useState, useContext } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/contents";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoggedInUserContext from "../utils/LoggedInUserContext";


const Body = () => {
    const [listofRes, setlistofRes] = useState([]);

    const [searchText, setsearchText] = useState("");

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const{ loggedInUser, setUserName } = useContext(LoggedInUserContext);

  

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.79400&lng=77.86530&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("hello",json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("res",restaurants);
        setlistofRes(restaurants ? restaurants : []); // Ensure it's always an array
        setFilteredRestaurant(restaurants ? restaurants : []); // Ensure it's always an array
        
    };


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return(
            <h1>Looks like you are Oflline, please connect to the internet</h1>
    )


    return  (!listofRes || listofRes===0) ? (
        <Shimer/>): (
        <div className="body">
            {console.log("render")}

            <div className="filter flex">
              <div className=" search m-4 px-8 ">
                <input type="text" 
                className="border border-solid border-black"
                 value = {searchText} onChange={(e)=>{
                  setsearchText(e.target.value);

                }}/>
                <button className="px-4 bg-slate-400 "
                onClick={()=>{
                  const filteredRes = listofRes.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                 setFilteredRestaurant(filteredRes);
                }}>Search</button>
                 <button
                    className="filter-btn px-4 bg-slate-500 mx-8 py-2 rounded-lg text-white"
                    onClick={() => {
                        const filtered = filteredRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filtered);
                        
                    }}>
                    Top rated Restaurants
                </button>

                <input type="text" 
                className="border border-solid border-black"
                 value = {loggedInUser} onChange={(e)=>{
                  setUserName(e.target.value);

                }}/>
              </div>
               
            </div>
            {console.log(filteredRestaurant)}
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    
                    <Link key={restaurant.info.id} 
                    to={"/restaurants/"+restaurant.info.id}>
                    <Rescard  resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
