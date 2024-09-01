import { MENU_URL} from "../utils/contents";
import { useEffect, useState } from 'react';



const useRestaurantMenu = (resID)=>{

    const [resInfo, setresInfo] = useState(null);
    

    useEffect(()=>{
        fetchdata();
      },[])
    
      const fetchdata = async()=>{
          const data = await fetch(MENU_URL+resID);
          const json = await data.json();
          console.log(json);
    
          
    
          setresInfo(json.data)
        }

    return resInfo;

}

export default useRestaurantMenu;