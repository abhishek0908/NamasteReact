import RestaurantCard from './RestaurantCard'
import {React,useState} from 'react'
import resObj from '../utils/mockData'
const Body=()=>{
    const [listOfRestaurant,setlistOfRestaurant] = useState(resObj)
    return (
        <div className='body'>
            <div className='filter'>
            <button className='filter-btn' onClick={()=>{
    const filteredList = listOfRestaurant.filter((res)=>{
        console.log(res);
        return res.info.avgRating > 4.2;
    });
    setlistOfRestaurant(filteredList);
}}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
            {listOfRestaurant.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
                
    </div>
        </div>
        
    )
}

export default Body;