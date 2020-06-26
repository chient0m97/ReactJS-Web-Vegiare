import React, { Component } from "react"
import First from "./First/First"
import Second from "./Second/Second"
import Third from "./Third/Third"
import Four from "./Four/Four"
import Five from "./Five/Five"
import Footer from "./Footer/Footer"
class Home extends Component {
    render() {
        return (
            <div>
                <First></First>
                <Second></Second>
                <Third></Third>
                <Four></Four>
                <Five></Five>
                <Footer></Footer>
            </div>
        )
    }
}
export default Home;