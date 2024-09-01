import React, { useEffect, useState } from 'react';
import Shimer from './Shimer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams} from 'react-router-dom';
import Rescategories from './Rescategories';


 
const Restaurant = () => {
const {resID} = useParams();
const resInfo = useRestaurantMenu(resID);

const [showIndex, setShowIndex] = useState(null);


  if (resInfo===null) return <Shimer/>; 

  const {name, costForTwoMessage, cuisines, avgRating,area}  = resInfo.cards[2]?.card?.card?.info;

  const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"]=== 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );



  
  const handleSetShowIndex = (index) => {
    setShowIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the index
};


  return (
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <h3  className='font-bold'>
          {cuisines}-{ costForTwoMessage}
          </h3>
        {/*categories accordians */}
        {categories.map((category, index)=>(
          <Rescategories key = {category?.card?.card?.title}
         
          data = {category?.card?.card}
          showItems = {index===showIndex ? true:false}
          setShowIndex = {handleSetShowIndex}
          index = {index}
          
          />
        ))}
</div>
  )
}

export default Restaurant;