import { useState ,useEffect} from "react"
import { MENU_URL } from "./constants"
const useRestaurantMenu = (resId)=>{
    const[resMenu,setResMenu]=useState(null)
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async()=>{
        const data = await fetch(`${MENU_URL}${resId}`);
        const menudata = await data.json()
        setResMenu(menudata.data)
    }
    return resMenu
}
export default useRestaurantMenu
