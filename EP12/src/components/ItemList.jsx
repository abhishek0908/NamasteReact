const ItemList = ({item})=>{
    return(
        <div className="menuitem">
            <div className="itemname">{item.name}</div>
            <div className="itemprice">₹{item.price}</div>
            <div className="itemdesc">{item.description}</div>
        </div>
    )
}
export default ItemList