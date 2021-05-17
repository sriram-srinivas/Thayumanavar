import React from "react";
import Backdrop from "../components/Backdrop";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home"
import Pages from "../components/Home/Pages";
import Catalouge from "../containers/Catalouge/Catalouge";
import Admin from "../containers/Admin/Admin"

const Content = props => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" name="Home"
                    render={(props) => (
                        <React.Fragment>
                            <div className="Content">
                                <Home {...props} />
                                <Backdrop />
                            </div>
                            <Pages />
                        </React.Fragment>
                    )} />
                <Route exact path="/catalouge" name="Catalouge" render={props => (
                    <Catalouge />)} />
                <Route exact path="/admins" name="AdminPanel" render={props => (
                    <Admin />)} />
            </Switch>
        </React.Fragment>
    )
}

export default Content