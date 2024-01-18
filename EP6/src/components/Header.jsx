import { useState } from "react";
import LOGO_URL from "../utils/constants"

const Header = ()=>{
    const[login,setlogin] = useState("login")
    return (
        <div className="header">
            <div className='logo-container'>
                <img className = 'logo' src={LOGO_URL}></img>
            </div>
            <div className="div">
                <h1>Welcome! Order Now Your Favourite Food</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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