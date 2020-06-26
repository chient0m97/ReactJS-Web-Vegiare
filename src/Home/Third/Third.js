import React, { Component } from "react"
import "./style.css"
import cash from "../../Image/image-payment-cash.svg"
import home from "../../Image/image-payment-home.svg"
import card from "../../Image/debit-card.svg"
import online from "../../Image/online-payment.svg"
class Third extends Component {
    render() {
        return (
            <div className="third py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4>VEGIARE CÁC HÌNH THỨC THANH TOÁN</h4>
                            <p style={{ fontSize: '15px' }} className="text-muted">Chúng tôi luôn đồng hành chia sẻ với mọi người trong từng chuyến đi để tạo nên hành trình đáng nhớ nhất trong chuyến đi của bạn</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="lead text-center mb-3" style={{fontSize:'15px'}}>THANH TOÁN BẰNG TIỀN MẶT TẠI VĂN PHÒNG VEGIARE</h5>
                                    <div className="text-center">
                                        <img className="w-50 h-50 img-fluid mb-4" src={cash} alt="cash"></img>
                                    </div>
                                    <p className="text-center" style={{fontSize:'14px'}}>Sau khi đặt hàng thanh công. Quý khách vui lòng qua văn phòng vegiare để thanh toán và nhận vé</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="lead text-center mb-3" style={{fontSize:'15px'}}>THANH TOÁN TẠI NHÀ</h5>
                                    <div className="text-center">
                                        <img className="w-50 h-50 img-fluid mb-4" src={home} alt="home"></img>
                                    </div>
                                    <p className="text-center" style={{fontSize:'14px'}}>Nhân viên VEGIARE sẽ giao vé & thu tiền tại nhà theo địa chỉ Quý khách cung cấp</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="lead text-center mb-3" style={{fontSize:'15px'}}>THANH TOÁN QUA CÁC CỔNG THANH TOÁN ĐIỆN TỬ</h5>
                                    <div className="text-center">
                                        <img className="w-50 h-50 img-fluid mb-3" src={online} alt="online"></img>
                                    </div>
                                    <p className="text-center" style={{fontSize:'14px'}}>Quý khách có thể thanh toán ngay (trực tuyến) thông qua cổng OnePay, Bảo Kim, Ngân Lượng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className="card border-box-shadow">
                                <div className="card-body">
                                    <h5 className="lead text-center mb-3" style={{fontSize:'15px'}}>THANH TOÁN QUA CHUYỂN KHOẢN</h5>
                                    <div className="text-center">
                                        <img className="w-50 h-50 img-fluid mb-3" src={card} alt="card"></img>
                                    </div>
                                    <p className="text-center" style={{fontSize:'14px'}}>Quý khách có thể thanh toán cho chúng tôi bằng cách chuyển khoản tại ngân hàng, chuyển qua thẻ ATM, hoặc qua Internet Banking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Third;