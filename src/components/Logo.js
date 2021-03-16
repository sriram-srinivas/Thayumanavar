import React from "react";
import {useHistory} from "react-router-dom"

const Logo = props =>{
    const history = useHistory()
    return(
        <div className="logo"> 
            <label className="logoText" onClick={() => history.push("/")}>Thayumanavar Padipagam</label>
        </div>
    )
}

export default Logo