import React from "react";
import {withRouter} from "react-router-dom"
import {data} from "../resources/context/context"

const NavBar = props =>{
    const nav = route =>{
        props.history.push(route)
    }
    return(
        <div className="navbar"> 
            <ul className="navList">
                {data.menuList.map((menuItem,index) => {
                    return(<li className="navItem" onClick={() => nav(menuItem.route)} key={index}>{menuItem.Name}</li>)
                })}
            </ul>
        </div>
    )
}

export default withRouter(NavBar);