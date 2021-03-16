import React from "react";
import {withRouter} from "react-router-dom"

const NavBar = props =>{
    const menuList=[{Name:"Home",route:"/"},{Name:"Catalouge",route:"/catalouge"},{Name:"About Us",route:"/about"},{Name:"Contact",route:"/contact"}]
    const nav = route =>{
        props.history.push(route)
    }
    return(
        <div className="navbar"> 
            <ul className="navList">
                {menuList.map((menuItem,index) => {
                    return(<li className="navItem" onClick={() => nav(menuItem.route)} key={index}>{menuItem.Name}</li>)
                })}
            </ul>
        </div>
    )
}

export default withRouter(NavBar);