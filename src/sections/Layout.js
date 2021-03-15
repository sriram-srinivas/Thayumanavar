import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
const Layout = props =>{
    return(
        <React.Fragment>
            <Header/>
            <Content/>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout