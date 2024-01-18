import { IMG_URL } from "../utils/constants"
const RestaurantCard = (props)=>{
    const{resData} =props
   
    return (<div className='res-card'>
       <img className='res-logo' src={`${IMG_URL}${resData.info.cloudinaryImageId}`} alt="Restaurant Logo" />
        <h4>{resData.info.name}</h4>
        <h6>{resData.info.cuisines.join(', ')}</h6>
        <h4>Rating : {resData.info.avgRating}</h4>
        <h4>Delivery Time: {resData.info.sla.deliveryTime}</h4>
    </div>)
}

export const withPromotedLabel = (RestaurantCard)=>{
return(props) =>(
    <div >
        <label className="promoted">Best Restaurant</label>
        <RestaurantCard {...props}/>
    </div>
)
}
export default RestaurantCard