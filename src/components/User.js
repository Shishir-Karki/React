import { useEffect, useState } from "react";

const User = (props)=>{

    const [fetchD, setfetchD] = useState();

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        const data = await fetch ("https://api.github.com/users/akshaymarch7");
        const json = data.json();

        console.log(json);
    }

    return (
        <div className="user-card"> 
            {/* <h1>Name: {json.name}</h1>
            <h2>Address: {props.address}</h2> */}
            <h3>Location: Roorkee</h3>
        </div>
    )
}

export default User;