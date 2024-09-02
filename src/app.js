import React, { lazy, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import LoggedInUserContext from "./utils/LoggedInUserContext";
import LoginRegister from "./components/LoginRegister";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";



const AppLayout = ()=>{

  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "",
    };

    setUserName(data.name)
    
  },[])

    return(
    <Provider store = {appStore}>
          <LoggedInUserContext.Provider value={{loggedInUser: userName, setUserName}}>
          <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
            
        </div>
        </LoggedInUserContext.Provider>
    </Provider>
    )
}

const appRouter =createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout/>,
    children:([
      {
        path: "/restaurants/:resID",
        element: <Restaurant/>,
      },
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      
      {
        path: "/auth",  // Add this route for login/register
        element: <LoginRegister />,
      },
      
      {
        path: "/cart",  
        element: <Cart/>,
      }
    ]),
    errorElement: <Error/>
  }
  
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
