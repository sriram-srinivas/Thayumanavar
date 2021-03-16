import React from "react";
import {Button} from "@material-ui/core"

const Home = props =>{
    return(
        <div className="Home">
            <div className="HomeText">
                <label>Lorem ipsum dolor</label>
                <p>Sit amet, consectetur adipiscing elit. Donec quis nunc non arcu tincidunt sodales. Fusce egestas purus et malesuada dictum. 
                    Fusce molestie lectus arcu, eu molestie tellus pellentesque tristique.
                </p>
                <Button variant="outlined" className="whiteButton">Learn More</Button>
            </div>
        </div>
    )
}

export default Home