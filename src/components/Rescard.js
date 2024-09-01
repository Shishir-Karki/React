import { CDN_URL } from "../utils/contents";

const Rescard =(props)=>{

    const{resData} = props;

    const {cloudinaryImageId,name, cuisines, avgRating, costForTwo} = resData?.info;


    return(
        <div className="res-card m-4 p-4  w-[220px] h-[450px] bg-gray-100 hover:bg-gray-300 shadow-md" >
            <img 
            className="res-logo rounded-md"
            alt="resData.infoname"
            src={CDN_URL+resData.info.cloudinaryImageId}
            ></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} ⭐</h4>
            

        </div>
    )
}

export default Rescard;