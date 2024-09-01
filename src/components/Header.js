import { useState, useContext, useEffect} from "react";
import { LOGO_URL } from "../utils/contents";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoggedInUserContext from "../utils/LoggedInUserContext";
const Header =()=>{

    const [loginBtn, setloginBtn] = useState("Login");
    const [user, setUser] = useState(null);
    const onlineStatus = useOnlineStatus();

    const{ loggedInUser } = useContext(LoggedInUserContext);
    useEffect(() => {
        setUser(loggedInUser);
    }, [loggedInUser]);
    

    return (
        <div className="flex justify-between bg-red-300 shadow-lg  sm:bg-yellow-50  lg:bg-pink-200">
            <div className="logo-container" >
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-8 m-8 ">
                <li className="px-8">
                    Online Status : {onlineStatus ? "🟢": "🔴"}
                </li>
                <li  className="px-8">
                    <Link to="/">Home</Link>
                </li>
                <li  className="px-8">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-8">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-8">
                    <Link to="/grocery">Grocery</Link>
                </li>
               
                <li className="px-8">Cart</li>
                    <button className="login-btn" onClick={()=>{
                          if (loginBtn === "Login") {
                            setloginBtn("LogOut");
                            setUser("No User");
                        } else {
                            setloginBtn("Login");
                            setUser(loggedInUser);
                        }

                    }
                       
                    }>{loginBtn}</button>

                <li className="p-2 font-bold">{ user } </li>
                    

                  


                </ul>
            </div>
        </div>
    )
}

export default Header;