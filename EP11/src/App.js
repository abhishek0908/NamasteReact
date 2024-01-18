import React, { Suspense, lazy, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import ContactUs from './components/ContactUs'
import { Router, RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom'      
import UserNameContext from './utils/UserNameContext'

const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout =()=>{
    const[userName,setUserName] = useState();
    useEffect(()=>{
        const data = {
            name:"Abhishek Udiya",
        }
        setUserName(data.name)
    },[]);
    return (
        <><UserNameContext.Provider value={{ loggingUser: userName,setUserName }}>
               
               <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserNameContext.Provider>
        </> 
    )
}

//diffrent way to create a route checkout
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children : [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback= {<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/resmenu/:resId",
                element:<RestaurantMenu/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter} />);