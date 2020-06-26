import React, { Component } from "react"
import noel from "../../Image/banner_noel.jpg"
import tet from "../../Image/banner_tet.jpg"
import banner2 from "../../Image/bannerweb2.jpg"
import banner3 from "../../Image/bannerweb3.jpg"
import banner4 from "../../Image/bannerweb4.jpg"
import Carousel from 'react-bootstrap/Carousel'
class First extends Component {
    render() {
        return (
            <div className="first py-5" style={{marginTop:'50px'}}>
                <Carousel>
                    <Carousel.Item>
                        <img className="w-100 d-block" src={noel} alt="noel"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 d-block" src={tet} alt="tet"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 d-block" src={banner2} alt="banner2"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 d-block" src={banner3} alt="banner3"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 d-block" src={banner4} alt="banner4"></img>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default First;