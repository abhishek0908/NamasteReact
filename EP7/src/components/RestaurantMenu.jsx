import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { IMG_URL, MENU_URL } from "../utils/constants"
import { useParams } from "react-router-dom"
const RestaurantMenu = ()=>{
    const[resMenu,setResMenu]=useState(null)
    const{resId} =useParams();
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async()=>{
        const data = await fetch(`${MENU_URL}${resId}`);
        const menudata = await data.json()
        console.log(menudata)
        setResMenu(menudata.data)
    }
    if(resMenu==null) return <Shimmer></Shimmer>
    const {name,cuisines,areaName,avgRatingString,totalRatingsString,costForTwo} = resMenu.cards[0].card.card.info;
    const {deliveryTime}  = resMenu.cards[0].card.card.info.nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla;
    const {itemCards} = resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    return(
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
            <h2>Recommended Item</h2>
            {itemCards.map((item) => {
    return (
        <>
            <div className="thin-line"></div>
            <div className="recomm-item">
                <div className="rec-left">
                    <h3>{item.card.info.name}</h3>
                    <h4>₹{item.card.info.price/100} </h4>
                    <div className="desc">{item.card.info.description}</div>
                </div>
                <div className="rec-right">
                    <img className="menu-item" src={`${IMG_URL}${item.card.info.imageId}`} alt="" />
                    
                </div>
            </div>
        </>
    );
})}

            
        </div>
    )
}
export default RestaurantMenu