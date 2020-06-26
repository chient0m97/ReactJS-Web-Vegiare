import React, { Component } from 'react'
import "./style.css"
import quocky from "../../Image/quoc-ky-viet-nam.svg"
import app from "../../Image/app-store.svg"
import ch from "../../Image/google-play.svg"
import phone from "../../Image/img_phone.png"

class Five extends Component {
    render() {
        return (
            <div className="five">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xs-12 mt-5 py-5 sign">
                            <p>NHẬP THÔNG TIN</p>
                            <p>ĐỂ NHẬN KHUYỄN MẠI HẤP DẪN NHẤT</p>
                            <div className="d-flex mavung">
                                <div className="card pr-5 mr-1">
                                    <div className="d-flex">
                                        <div className="px-2 py-2">
                                            <img className="mr-auto" src={quocky} alt="quocky"></img>
                                        </div>
                                        <p className="text-dark" style={{ fontSize: '18px', marginTop: '10px' }}>+84</p>
                                    </div>
                                </div>
                                <input className="input-group input-group-lg pl-5 ml-1 rounded" placeholder="Nhập số điện thọai"></input>
                            </div>
                            <p className="mt-3">HOẶC</p>
                            <input className="input-group rounded"></input>
                            <div className="float-right">
                                <button className="btn mt-3 text-right">Nhận khuyến mại</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12 download" style={{ marginTop: "185px" }}>
                            <p>TẢI ỨNG DỤNG MIỄN PHÍ ĐỂ KHÔNG BỎ LỠ NHỮNG KHUYẾN MẠI HẤP DẪN</p>
                            <div className="d-flex">
                                <div className="mr-2">
                                    <img className="w-100" src={app} alt="app"></img>
                                </div>
                                <div className="ml-2">
                                    <img className="w-100" src={ch} alt="ch"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mt-5 phone">
                            <img style={{ height: '360px' }} src={phone} alt="phone"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Five;