import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import ContactUs from './components/ContactUs'
import { Router, RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom'      
const AppLayout =()=>{
    return (

        <div className="app">
            <Header/>
           <Outlet/>
        </div>
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
                path:"/resmenu/:resId",
                element:<RestaurantMenu/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter} />);