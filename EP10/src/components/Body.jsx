import useOnlineStatus from '../utils/useOnlineStatus'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
const Body=()=>{
    const [listOfRestaurant,setlistOfRestaurant] = useState([])
    const [filteredListOfRestaurant,setfilteredListOfRestaurant] = useState([])
    const [searchText,setSearchText] = useState("")
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        const cleandata = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setlistOfRestaurant(cleandata)
        setfilteredListOfRestaurant(cleandata)
    }
    
    const status = useOnlineStatus()
    if(status===false)return <h1>You Are Offline</h1>
    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }
    if(filteredListOfRestaurant.length==0){
        return <h1>Sorry! No Item According to your choice</h1>
    }
    return (
        <div className='body'>
            <div className='filter'>
            <div className="search-item">
                <input className="search-box" type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }} />
                <button className='search-btn'onClick={()=>{
                   const filteredList = listOfRestaurant.filter((res) => {
                    return res.info.name.toLowerCase().includes(searchText);
                });
                
                setfilteredListOfRestaurant(filteredList)
            }}>Search</button>
            </div>
            <button className='filter-btn' onClick={()=>{
    const filteredList = listOfRestaurant.filter((res)=>{
        console.log(res);
        return res.info.avgRating > 4.2;
    });
    setfilteredListOfRestaurant(filteredList);
}}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
            {filteredListOfRestaurant.map((restaurant) => (
        <Link to ={"resmenu/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
      ))}
                
    </div>
        </div>
        
    )
}

export default Body;