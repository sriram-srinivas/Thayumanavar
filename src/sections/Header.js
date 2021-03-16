import React from "react";
import Logo from "../components/Logo"
import NavBar from "./navbar"

const Header = props =>{
    return(
        <div className="Header"> 
            <Logo/>
            <NavBar/>
        </div>
    )
}

export default Header