import { CDN_URL } from "../utils/contents";

const ItemList =({items})=>{

    console.log(items)

   

    return (
        <div className="p-2">
           {items.map((item) =>{
             const imgID = item?.card?.info?.imageId;
            
          return (
            <div key = {item.card.info.id}
            className="p-2 m-2 border-black border-b-2 text-left flex justify-between">
            <div className="w-9/12">
           <div className="py-2">
            
           <span className="text-lg py-2">{item.card.info.name}</span>
                <span className="text-lg py-2"> -  ₹{item.card.info.price/100}</span>
               
           </div>
               
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            <div className="w-3/12 p-4" >
            <div className="absolute">
            <button className="p-2 mx-16 rounded-lg bg-white shadow-lg  m-auto">
                    Add +
                </button>
            </div>
               
            {
                   (!imgID)? <p></p>:  <img src= {CDN_URL+imgID} className="w-full"></img>
                }
            </div>
           </div>
          )
        })}
        </div>
    )

}

export default ItemList;