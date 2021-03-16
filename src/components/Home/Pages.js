import React from "react";
import {Paper} from "@material-ui/core"
import {data} from "../../resources/context/context"
import * as icons from '@material-ui/icons';
import {Button} from "@material-ui/core"
import { withRouter } from "react-router";

const Pages = props =>{
    const nav = route =>{
        props.history.push(route)
    }
    return(
        <div className="Pages">
            {data.menuList.map((page,index) =>{
                if(!page.isHomePage){
                const IconComp = icons[page.Icon]; 
                return(
                    <Paper elevation={3} className="Paper">
                        <IconComp className="pageIcon"/>
                        <h2>{page.Name}</h2>
                        <p>{page.Description}</p>
                        <Button variant="outlined" className="pageButton" onClick={() => nav(page.route)}>More...</Button>
                    </Paper>
                )   
                }else{
                    return null
                }
            })}
            
        </div>
    )
}

export default withRouter(Pages) 