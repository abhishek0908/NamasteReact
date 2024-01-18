import { useState } from "react";
import LOGO_URL from "../utils/constants"
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=>{
    const onlineStatus = useOnlineStatus()
    const[login,setlogin] = useState("login")
    return (
        <div className="flex justify-between space-y-6 bg-gray-400">
            <div className='logo-container'>
                <img className = 'w-24' src={LOGO_URL}></img>
            </div>
            <div>
                <h1 >Welcome! Order Now.</h1>
            </div>
            <div>
                <ul className="flex">
                    <li>Status : {onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>

                    <button className="login" onClick={()=>{
                        if(login=="login") setlogin("logout");
                        else setlogin("login")
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header