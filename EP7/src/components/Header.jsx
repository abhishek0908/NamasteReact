import { useState } from "react";
import LOGO_URL from "../utils/constants"
import { Link } from 'react-router-dom';


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
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">Cart</Link></li>

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