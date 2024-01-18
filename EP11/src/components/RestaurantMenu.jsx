import Shimmer from "./Shimmer"
import { IMG_URL } from "../utils/constants"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from './RestaurantCategory'
import { useState } from "react"
const RestaurantMenu = ()=>{
    const [showIndex,setShowIndex] = useState(null)
    const{resId} =useParams();
    const resMenu = useRestaurantMenu(resId)
    if(resMenu==null) return <Shimmer></Shimmer>
    const {name,cuisines,areaName,avgRatingString,totalRatingsString,costForTwo} = resMenu.cards[0].card.card.info;
    const {deliveryTime}  = resMenu.cards[0].card.card.info.nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla;
    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    });
    return(
        <>
        <div className="menu">
            <div className="resname-bar">
                <div className="left">
                <h3>{name}</h3>
                <h5>{cuisines.join(',')}</h5>
                <h5>{areaName}</h5>
                </div>
                <div className="right">
                <h6>Rating : {avgRatingString}</h6>
                <h5>{totalRatingsString}</h5>
                </div>
            </div>
            <div className="thin-line"></div>
            <div className="middlesection">
            <h4> {deliveryTime} Mins </h4>
            <h4>
            ₹{costForTwo/100} for two
            </h4>
            </div>
            {categories.map((category,index)=>{
                console.log(showIndex," Hello",index)
                return <RestaurantCategory key = {category.card.card.title} data = {category.card.card} showItem = {showIndex===index?true:false}  setShowIndex={() => setShowIndex(showIndex === index ? null : index)}/>
            })}
            </div>

            </>
        
)}
export default RestaurantMenu