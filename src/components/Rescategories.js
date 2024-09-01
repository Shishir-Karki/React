import { useState } from "react";

import ItemList from "./ItemList";

const Rescategories =({data, index, showItems, setShowIndex})=>{

    const handleClick = () => {
        setShowIndex(index); // Pass the index of the current category
    };

   
    return (
        
       <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick=
             {handleClick} 
        
           
        >
        <span className="font-bold ">
            {data.title}({data.itemCards.length}) </span>
        <span>⬇️</span>

        </div>
        { showItems && <ItemList items = {data.itemCards}/>}
       </div >
      

        

    )
}

export default Rescategories;