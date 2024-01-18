import React from 'react'
import ReactDOM from 'react-dom/client'
const resObj = 
    {
        "cuisine": "Chinese,Fast Food",
        "restaurant": {
          "name": "Spice Route",
          "rating": 4.2
        },
        "estimatedDeliveryTime": "45 minutes"
      }
      
const Body=()=>{
    return (
        <div className='body'>
            <div className='searchBar'>
                <input type='text' placeholder='Search Food'></input>
                <button>Search</button>
            </div>
            <div className='res-container'>
                <RestaurantCard resData = {resObj} />
                {/* <RestaurantCard deliverytime = "38min" rating ="4.8 stars" resName = "Moolchand"  cuisins = "Parota" link = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&usqp=CAU' / >
                <RestaurantCard/>
                <RestaurantCard/> */}
                
            </div>
        </div>
        
    )
}
{/* Resturant Card */}
const RestaurantCard = (props)=>{
    const{resData} =props
    return (<div className='res-card'>
        <img className='res-logo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoHaGv_mOSKyT_t6dDoWom_wbIi_FB4UEAjQEc1HsQg&s'></img>
        <h4>{resData.restaurant.name}</h4>
        <h6>{resData.cuisine}</h6>
        <h4>{resData.restaurant.rating}</h4>
        <h4>{resData.estimatedDeliveryTime}</h4>
    </div>)
}
{/* Header */}
const Header = ()=>{
    return (
        <div className="header">
            <div className='logo-container'>
                <img className = 'logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
{/* main app */}
const AppLayout =()=>{
    return (

        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)