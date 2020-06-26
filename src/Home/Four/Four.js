import React, { Component } from 'react'
import viettin from "../../Image/viettinbank.svg"
import acb from "../../Image/acbbank.svg"
import vietcom from "../../Image/vietcombank.svg"
import mb from "../../Image/mbbank.svg"
import hd from "../../Image/hdbank.svg"
import donga from "../../Image/dongabank.svg"
import techcom from "../../Image/techcombank.svg"
import msb from "../../Image/msb-bank.svg"
import haianh from "../../Image/hai-anh.svg"
import lananh from "../../Image/lan-anh.svg"
import myngoc from "../../Image/my-ngoc.png"
import img_lananh from "../../Image/image-lan-anh.png"
import img_haianh from "../../Image/image-hai-anh.png"
import img_myngoc from "../../Image/image-my-ngoc.png"
import dantri from "../../Image/Dan_tri_logo.svg"
import baomoi from "../../Image/baomoi-logo.svg"
import vietnamnet from "../../Image/vietnamnet-logo.svg"
import ict from "../../Image/ict-logo.svg"
import vna from "../../Image/vna.svg"
import vietjet from "../../Image/vietjet.svg"
import jetstar from "../../Image/Jetstar.svg"
import bamboo from "../../Image/bamboo.svg"
import "./style.css"

class Four extends Component {
    render() {
        return (
            <div className="four py-4" style={{ background: '#f3f3f3' }}>
                <div className="container">
                    <div className="row">
                        <div className="text-center col">
                            <h4>CÁC NGÂN HÀNG ĐỐI TÁC CỦA VEGIARE</h4>
                        </div>
                    </div>
                    <div className="row bank">
                        <div className="col-lg-3 col-md-6 col-6 mt-4 text-center">
                            <div><img className="h-100" src={viettin} alt="viettin"></img></div>
                            <div><img className="h-100 mt-3" src={acb} alt="acb"></img></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 mt-4 text-center">
                            <div><img className="h-100" src={vietcom} alt="vietcom"></img></div>
                            <div><img className="h-100 mt-3" src={mb} alt="mb"></img></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 mt-4 text-center">
                            <div><img className="h-100" src={hd} alt="hd"></img></div>
                            <div><img className="h-100 mt-3" src={donga} alt="donga"></img></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 mt-4 text-center">
                            <div><img className="h-100" src={techcom} alt="techcom"></img></div>
                            <div><img className="h-100 mt-3" src={msb} alt="msb"></img></div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="text-center col">
                            <h4>CÔNG CHÚNG NÓI GÌ VỀ VEGIARE</h4>
                            <p>Cùng chia sẻ với mọi người và hồi tưởng lại những khoảnh khắc đáng nhớ nhất trong chuyến đi của bạn</p>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-lg-4 col-md-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <img style={{ height: '80px' }} src={haianh} alt="haianh"></img>
                                        </div>
                                        <div className="col-8 mt-1">
                                            <div className="mt-2">
                                                <p style={{ fontSize: '17px' }}>Hải Anh</p>
                                            </div>
                                            <span style={{ fontSize: '12px' }}>31/02/2019</span>
                                            <span className="float-right">
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <img className="card-img-top" src={img_haianh} alt="img_haianh"></img>
                                <div className="card-body">
                                    <p style={{ fontSize: '14px' }}>Mình được biết vegiare qua một người bạn và mình cảm thấy cách phục vụ cũng như nhận vé và thanh toán rất ok. Vì vậy nên sau này mình sẽ tìm đến Vegiare mỗi khi mình có nhu cầu bay</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <img style={{ height: '80px' }} src={lananh} alt="lananh"></img>
                                        </div>
                                        <div className="col-8 mt-1">
                                            <div className="mt-2">
                                                <p style={{ fontSize: '17px' }}>Lan Anh</p>
                                            </div>
                                            <span style={{ fontSize: '12px' }}>11/02/2019</span>
                                            <span className="float-right">
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <img className="card-img-top" src={img_lananh} alt="img_lananh"></img>
                                <div className="card-body">
                                    <p style={{ fontSize: '14px' }}>Công ty tôi thường có nhu cầu đi công tác HCM, tôi được biết Vegiare qua google và liên hệ. Tôi thấy vegiare phục vụ nhiệt tình và giá vé rất hợp lí. Rất mong các bạn sẽ giữ nguyên phong độ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <img style={{ height: '80px' }} src={myngoc} alt="myngoc"></img>
                                        </div>
                                        <div className="col-8 mt-1">
                                            <div className="mt-2">
                                                <p style={{ fontSize: '17px' }}>Mỹ Ngọc</p>
                                            </div>
                                            <span style={{ fontSize: '12px' }}>31/02/2018</span>
                                            <span className="float-right">
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                                <i class="fas fa-star" style={{ color: 'orange' }}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <img className="card-img-top" src={img_myngoc} alt="img_myngoc"></img>
                                <div className="card-body">
                                    <p style={{ fontSize: '14px' }}>Qua google và một số người bạn tôi biết đến Vegiare. Dịch vụ nhanh chóng, nhân viên tư vấn nhiệt tình. Thanh toán thuận tiện
                                    <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row py-4 magazine">
                        <div className="col-lg-3 col-6 d-flex">
                            <span className="d-flex justify-content-center">
                                <img style={{ minHeight: "23px" }} src={dantri} alt="dantri"></img>
                            </span>
                            <span className="pl-3 text-left">
                                <p className='title' style={{ fontSize: '15px', fontWeight: 'bold' }}>DÂN TRÍ</p>
                                <p style={{ fontSize: '13px' }}>26/12/2018</p>
                                <p style={{ fontSize: '13px' }}>Chỉ cần chọn địa điểm, ngày khởi hành, Vegiare sẽ hiển thị giá của các nhà cung cấp để bạn lựa chọn</p>
                            </span>
                        </div>
                        <div className="col-lg-3 col-6 d-flex">
                            <span className="d-flex justify-content-center">
                                <img style={{ minHeight: "23px" }} src={ict} alt="ict"></img>
                            </span>
                            <span className="pl-3 text-left">
                                <p className='title' style={{ fontSize: '15px', fontWeight: 'bold' }}>ICT NEW</p>
                                <p style={{ fontSize: '13px' }}>05/02/2018</p>
                                <p style={{ fontSize: '13px' }}>Vegiare dùng công nghệ tìm kiếm, phân tích thông tin để mang lại những gói sản phẩm với giá hấp dẫn</p>
                            </span>
                        </div>
                        <div className="col-lg-3 col-6 d-flex">
                            <span className="d-flex justify-content-center">
                                <img style={{ minHeight: "23px" }} src={baomoi} alt="baomoi"></img>
                            </span>
                            <span className="pl-3 text-left">
                                <p className='title' style={{ fontSize: '15px', fontWeight: 'bold' }}>BÁO MỚI</p>
                                <p style={{ fontSize: '13px' }}>25/06/2017</p>
                                <p style={{ fontSize: '13px' }}>Chỉ cần chọn địa điểm, ngày khởi hành, Vegiare sẽ hiển thị giá của các nhà cung cấp để bạn lựa chọn</p>
                            </span>
                        </div>
                        <div className="col-lg-3 col-6 d-flex">
                            <span className="d-flex justify-content-center">
                                <img style={{ minHeight: "23px" }} src={vietnamnet} alt="vietnamnet"></img>
                            </span>
                            <span className="pl-3 text-left">
                                <p className='title' style={{ fontSize: '15px', fontWeight: 'bold' }}>VIETNAMNET</p>
                                <p style={{ fontSize: '13px' }}>26/12/2018</p>
                                <p style={{ fontSize: '13px' }}>Chỉ cần chọn địa điểm, ngày khởi hành, Vegiare sẽ hiển thị giá của các nhà cung cấp để bạn lựa chọn</p>
                            </span>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col text-center">
                            <h4>CÁC ĐỐI TÁC CHÍNH THỨC CỦA VEGIARE.VN</h4>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-lg-3 col-6 mt-5 text-center">
                            <div>
                                <img style={{ height: '25px' }} src={vna} alt="vna"></img>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-5 text-center">
                            <div>
                                <img className="h-100" src={vietjet} alt="vietjet"></img>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-5 text-center">
                            <div>
                                <img className="h-100" src={jetstar} alt="jetstar"></img>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-5 text-center">
                            <div>
                                <img className="h-100" src={bamboo} alt="bamboo"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Four;