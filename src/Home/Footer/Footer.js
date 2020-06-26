import React, { Component } from 'react'
import "./style.css"
import notifi from "../../Image/notifi.svg"
import logo from "../../Image/image-vegiare.svg"
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row start py-4">
                        <div className="col-lg-6 mt-5">
                            <div className="d-flex">
                                <div className="mr-3">
                                    <p className="font-weight-bold">Về Vegiare</p>
                                    <p style={{ fontSize: '13px' }}>Giới thiệu</p>
                                    <p style={{ fontSize: '13px' }}>Đánh giá</p>
                                </div>
                                <div className="ml-5">
                                    <p className="font-weight-bold">Điều khoản sử dụng</p>
                                    <p style={{ fontSize: '13px' }}>Điều khoản & điều kiện</p>
                                    <p style={{ fontSize: '13px' }}>Chính sách riêng tư</p>
                                </div>
                                <div className="ml-5">
                                    <p className="font-weight-bold">Hướng dẫn</p>
                                    <p style={{ fontSize: '13px' }}>Hướng dẫn thanh toán trực tuyến</p>
                                    <p style={{ fontSize: '13px' }}>Hướng dẫn sử dụng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 ">
                            <div className="d-flex">
                                <div style={{ marginTop: '38px' }}>
                                    <img src={notifi} alt="notify"></img>
                                </div>
                                <div className="ml-3">
                                    <img className="image-footer" style={{ height: '85px' }} src={logo} alt="logo"></img>
                                    <div className="mt-4">
                                        <div>
                                            <span><i style={{ color: 'orange' }} className="fas fa-map-marker-alt"></i></span>
                                            <span className="text-light ml-2">Địa chỉ: Số 278 Thụy Khuê, Tây Hồ, Hà Nội</span>
                                        </div>
                                        <div className="mt-2">
                                            <span><i style={{ color: 'orange' }} className="fas fa-phone-volume"></i></span>
                                            <span className="text-light ml-2">Điện thoại: 02499993636</span>
                                        </div>
                                        <div className="mt-2">
                                            <span><i style={{ color: 'orange' }} className="fas fa-envelope"></i></span>
                                            <span className="text-light ml-2">Email: support@vegiare.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col">
                            <p>Copyright &copy; 2017 - Công Ty Cổ Phần Vé Giá Rẻ.</p>
                            <p>Giấy chứng nhận Đăng ký Kinh doanh số 0105633553. Nơi cấp: Phòng đăng ký kinh doanh - Sở Kế hoạch và đầu tư Thành phố Hà Nội</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;