import { useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants"
const Header =()=>{
    // let btnName = "Login";
    const [logbtn, setlogbtn] = useState("Login")

    return (
        <div className="nav-items">
            <img className="nav-img" src={LOGO_URL} alt=""/>
            <div className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link>
                <Link className="nav-link" to="/">Cart</Link>
                 <button onClick={()=>{ 
                   logbtn=== "Login"
                   ? setlogbtn("Logout") 
                   :setlogbtn("Login"); }  } className="login-btn"
                 >{logbtn}</button>
            </div>
        </div>
    )
};
export default Header;