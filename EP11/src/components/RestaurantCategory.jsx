import { useState } from "react"
import ItemList from "./ItemList"
const RestaurantCategory = ({data,showItem,setShowIndex})=>{
    // const[showItem,setShowItem] = useState(false);
    const handleClick = ()=>{
        console.log(setShowIndex)
        setShowIndex()
    }
     return(
        <div className="items">
            <div className="category" onClick={handleClick}>
            <div className="itemtext">{data.title}({data.itemCards.length})</div>
            <div className="itemlogo">⬇️</div>
            </div>
            {showItem && data.itemCards.map((item)=>{
                // console.log(item.card.info.name);
               return <ItemList key = {item.card.info.id} item = {item.card.info} />
            })}
        </div>
    )
}
export default RestaurantCategory