import React from "react"
import { Radio, DatePicker, Icon, Form, Row, Col, Input, Button } from 'antd'
import hcm from "../../Image/hochiminh.jpg"
import danang from "../../Image/danang.jpg"
import hue from "../../Image/hue.jpg"
import singapore from "../../Image/singapore.jpg"
import japan from "../../Image/japan.jpg"
import korea from "../../Image/korea.jpg"
import "./style.css"
import "antd/dist/antd.css"
import PoPoVer_SoKhach from "./PoPoVer_Khach"
import PoPoVer from "./PoPoVer"
import PoPoVer_Mobile from "./PoPoVer_Mobile"
import moment from "moment"
class Second extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioVeMotChieu: "Vé một chiều",
            radioVeKhuHoi: "Vé khứ hồi",
            visible: true,
            ngaydi: moment(),
            ngayve: moment()
        }
    }
    disabledDate = (current) => {
        if (this.state.ngaydi === undefined) {
            return current && current < moment().endOf('day');
        } else {
            return current && current < this.state.ngaydi.endOf('day')
        }
    }
    handleChange = (e) => {
        this.setState({
            ngaydi: e,
            ngayve: e
        })
    };
    handleChangeComeBack = (e) => {
        this.setState({
            ngayve: e
        })
    };
    click_rd_motchieu = () => {
        if (this.state.radioVeMotChieu) {
            this.setState({
                visible: true
            })
        }
    }
    click_rd_khuhoi = () => {
        if (this.state.radioVeKhuHoi) {
            this.setState({
                visible: false
            })
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="second" style={{ marginTop: "-80px" }}>
                <div className="container card-container">
                    <div className="row">
                        <div className="col">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <Form style={{ background: "white" }}>
                                        <Row gutter={24}>
                                            <Col span={24} className="text-center">
                                                <Form.Item>
                                                    <Radio.Group name="radiogroup" defaultValue={1}>
                                                        <Radio onClick={this.click_rd_motchieu} value={1}>{this.state.radioVeMotChieu}</Radio>
                                                        <Radio onClick={this.click_rd_khuhoi} value={2}>{this.state.radioVeKhuHoi}</Radio>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row gutter={24}>
                                            <Col lg={4} md={12} col={24}>
                                                <Form.Item label='Điểm đi'>
                                                    {getFieldDecorator('diemdi', {
                                                        rules: [{ required: 'true' }]
                                                    })(
                                                        <div>
                                                            <div className="desktop">
                                                                <PoPoVer isDeparture={true}></PoPoVer>
                                                            </div>
                                                            <div className="mobile">
                                                                <PoPoVer_Mobile isDeparture={true} />
                                                            </div>
                                                        </div>
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col lg={4} md={12} col={24}>
                                                <Form.Item label='Điểm đến'>
                                                    {getFieldDecorator('diemden', {
                                                        rules: [{ required: 'true' }]
                                                    })(
                                                        <div>
                                                            <div className="desktop">
                                                                <PoPoVer isDeparture={false}></PoPoVer>
                                                            </div>
                                                            <div className="mobile">
                                                                <PoPoVer_Mobile isDeparture={false} key="1" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col lg={4} md={12} col={24}>
                                                <Form.Item label='Ngày đi'>
                                                    {getFieldDecorator('ngaydi', {
                                                        rules: [{ required: 'true' }]
                                                    })(
                                                        <div>
                                                            <DatePicker className="w-100"
                                                                format="DD/MM/YYYY"
                                                                disabledDate={this.disabledDate}
                                                                defaultValue={moment()}
                                                                allowClear={false}
                                                                onChange={this.handleChange}
                                                                value={this.state.ngaydi}
                                                            >
                                                            </DatePicker>
                                                        </div>
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col lg={4} md={12} col={24}>
                                                <Form.Item label='Ngày về'>
                                                    {getFieldDecorator('ngayve', {
                                                        rules: [{ required: 'true' }]
                                                    })(
                                                        <div>
                                                            <DatePicker className="w-100"
                                                                disabled={this.state.visible}
                                                                format="DD/MM/YYYY"
                                                                disabledDate={this.disabledDate}
                                                                defaultValue={moment()}
                                                                allowClear={false}
                                                                onChange={this.handleChangeComeBack}
                                                                value={this.state.ngayve}
                                                            >
                                                            </DatePicker>
                                                        </div>
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col lg={4} md={12} col={24}>
                                                <Form.Item label='Số khách'>
                                                    {getFieldDecorator('sokhach', {
                                                        rules: [{ required: 'true' }]
                                                    })(
                                                        <PoPoVer_SoKhach />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col lg={4} md={12} col={24}>
                                                <Form.Item style={{ paddingTop: 47 }}>
                                                    <button className="btn search btn-sm btn-block text-light">
                                                        TÌM KIẾM VÉ
                                                    </button>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content py-5">
                        <div className="row">
                            <div className="col text-center">
                                <h4>CHUYẾN BAY NỘI ĐỊA</h4>
                                <p>Rất nhiều các chuyến bay giá rẻ được cập nhật liên tục xuất phát từ các địa danh phổ biến trong nước để bạn lựa chọn</p>
                            </div>
                            <div className="col-12"><div className="info-header text-center"></div></div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-md-6 mt-3 ">
                                <div className="card rounded-0" style={{ borderBottom: "#e8e8e8 1px solid" }}>
                                    <div>
                                        <div className="hover-image w-100" style={{ position: "absolute", height: 300 }}>
                                        </div>
                                        <div className="w-100" style={{ position: "absolute", height: 300 }}>
                                            <div className="text-center">
                                                <h3 className="text-white" style={{ fontWeight: 'bold', marginTop: 120 }}>TP HỒ CHÍ MINH</h3>
                                            </div>
                                            <div style={{ marginLeft: 10, marginTop: 110 }}>
                                                <span className="text-white" style={{ fontWeight: 'bold' }}>Chỉ từ</span>
                                                <span className="text-white" style={{ fontWeight: 'bold', fontSize: '20px' }}> 24</span>
                                                <span className="text-white" style={{ fontWeight: 'bold' }}> đ / người</span>
                                            </div>
                                        </div>
                                        <img className="card-img-top w-100 image-fluid hover-img" height="300px" src={hcm} alt="hcm"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">TP HỒ CHÍ MINH</h5>
                                        <span className="float-left">
                                            <p style={{ fontSize: 13 }}>ĐÁNH GIÁ</p>
                                        </span>
                                        <span className="float-right">
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                        </span>
                                        <div className="float-left">
                                            <p style={{ fontSize: '12.5px' }} className="text-muted">Thành phố Hồ Chí Minh hay còn gọi là Sài Gòn háp dẫn khách du lịch bởi sức trẻ, sự nhộn nhịp, sôi động tưởng như không bao giờ ngừng lại.</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-0 btn btn-block"><p className="mt-2" style={{ fontSize: 16 }}>ĐẶT VÉ</p></button>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-3 ">
                                <div className="card rounded-0" style={{ borderBottom: "#e8e8e8 1px solid" }}>
                                    <div>
                                        <div className="hover-image w-100" style={{ position: "absolute", height: 300 }}>
                                        </div>
                                        <div className="w-100" style={{ position: "absolute", height: 300 }}>
                                            <div className="text-center">
                                                <h3 className="text-white" style={{ fontWeight: 'bold', marginTop: 120 }}>ĐÀ NẴNG</h3>
                                            </div>
                                            <div style={{ marginLeft: 10, marginTop: 110 }}>
                                                <span className="text-white" style={{ fontWeight: 'bold' }}>Chỉ từ</span>
                                                <span className="text-white" style={{ fontWeight: 'bold', fontSize: '20px' }}> 483.900</span>
                                                <span className="text-white" style={{ fontWeight: 'bold' }}> đ / người</span>
                                            </div>
                                        </div>
                                        <img className="card-img-top w-100 image-fluid hover-img" height="300px" src={danang} alt="danang"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">ĐÀ NẴNG</h5>
                                        <span className="float-left">
                                            <p style={{ fontSize: 13 }}>ĐÁNH GIÁ</p>
                                        </span>
                                        <span className="float-right">
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                        </span>
                                        <div className="float-left">
                                            <p style={{ fontSize: '12.5px' }} className="text-muted">Nằm ở trung tâm của dải dất miền Trung đầy nắng và gió, Đà Nẵng là một trong những điểm du lịch hấp dẫn trên cả nước</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-0 btn btn-block"><p className="mt-2" style={{ fontSize: 16 }}>ĐẶT VÉ</p></button>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-3 ">
                                <div className="card rounded-0" style={{ borderBottom: "#e8e8e8 1px solid" }}>
                                    <div>
                                        <div className="hover-image w-100" style={{ position: "absolute", height: 300 }}>
                                        </div>
                                        <div className="w-100" style={{ position: "absolute", height: 300 }}>
                                            <div className="text-center">
                                                <h3 className="text-white" style={{ fontWeight: 'bold', marginTop: 120 }}>HUẾ</h3>
                                            </div>
                                            <div style={{ marginLeft: 10, marginTop: 110 }}>
                                                <span className="text-white" style={{ fontWeight: 'bold' }}>Chỉ từ</span>
                                                <span className="text-white" style={{ fontWeight: 'bold', fontSize: '20px' }}> 518.900</span>
                                                <span className="text-white" style={{ fontWeight: 'bold' }}> đ / người</span>
                                            </div>
                                        </div>
                                        <img className="card-img-top w-100 image-fluid hover-img" height="300px" src={hue} alt="hue"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">HUẾ</h5>
                                        <span className="float-left">
                                            <p style={{ fontSize: 13 }}>ĐÁNH GIÁ</p>
                                        </span>
                                        <span className="float-right">
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                        </span>
                                        <div className="float-left">
                                            <p style={{ fontSize: '12.5px' }} className="text-muted">Là kinh đô cuối cùng của nhà nước phong kiến tập quyền Việt Nam, Huế vẫn còn bảo lưu được một cách nguyên vẹn những công trình kiến trúc cung đình...</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-0 btn btn-block"><p className="mt-2" style={{ fontSize: 16 }}>ĐẶT VÉ</p></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ********************************************************************************************************************************** */}
                    <div className="content py-4">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h4>TÌM VÉ MÁY BAY TỚI CÁC ĐỊA ĐIỂM PHỔ BIẾN</h4>
                                <p>Tìm và đặt máy bay tới các địa điểm phổ biến nhất châu Á cũng như trên toàn thế giới</p>
                            </div>
                            <div className="col"><div className="info-header text-center"></div></div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-4 col-md-6 mt-3 ">
                                <div className="card rounded-0" style={{ borderBottom: "#e8e8e8 1px solid" }}>
                                    <div>
                                        <div className="hover-image w-100" style={{ position: "absolute", height: 300 }}>
                                        </div>
                                        <div className="w-100" style={{ position: "absolute", height: 300 }}>
                                            <div className="text-center">
                                                <h3 className="text-white" style={{ fontWeight: 'bold', marginTop: 120 }}>SINGAPORE</h3>
                                            </div>
                                        </div>
                                        <img className="card-img-top w-100 image-fluid hover-img" height="300px" src={singapore} alt="singapore"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">SINGAPORE</h5>
                                        <span className="float-left">
                                            <p style={{ fontSize: 13 }}>ĐÁNH GIÁ</p>
                                        </span>
                                        <span className="float-right">
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                        </span>
                                        <div className="float-left">
                                            <p style={{ fontSize: '12.5px' }} className="text-muted">Singapore không chỉ thương cảng phát triển bậc nhất châu Á mà còn là điểm du lịch nổi tiếng trong khu vực</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-0 btn btn-block"><p className="mt-2" style={{ fontSize: 16 }}>ĐẶT VÉ</p></button>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-3 ">
                                <div className="card rounded-0" style={{ borderBottom: "#e8e8e8 1px solid" }}>
                                    <div>
                                        <div className="hover-image w-100" style={{ position: "absolute", height: 300 }}>
                                        </div>
                                        <div className="w-100" style={{ position: "absolute", height: 300 }}>
                                            <div className="text-center">
                                                <h3 className="text-white" style={{ fontWeight: 'bold', marginTop: 120 }}>NHẬT BẢN</h3>
                                            </div>
                                        </div>
                                        <img className="card-img-top w-100 image-fluid hover-img" height="300px" src={japan} alt="japan"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">NHẬT BẢN</h5>
                                        <span className="float-left">
                                            <p style={{ fontSize: 13 }}>ĐÁNH GIÁ</p>
                                        </span>
                                        <span className="float-right">
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                        </span>
                                        <div className="float-left">
                                            <p style={{ fontSize: '12.5px' }} className="text-muted">Là một quần đảo nhỏ thuộc Thái Bình Dương, Nhật Bản là một trong những đất nước có truyền thống lâu đời mang đậm bản sắc đặc trưng cùng cảnh quan...</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-0 btn btn-block"><p className="mt-2" style={{ fontSize: 16 }}>ĐẶT VÉ</p></button>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-3 ">
                                <div className="card rounded-0" style={{ borderBottom: "#e8e8e8 1px solid" }}>
                                    <div>
                                        <div className="hover-image w-100" style={{ position: "absolute", height: 300 }}>
                                        </div>
                                        <div className="w-100" style={{ position: "absolute", height: 300 }}>
                                            <div className="text-center">
                                                <h3 className="text-white" style={{ fontWeight: 'bold', marginTop: 120 }}>HÀN QUỐC</h3>
                                            </div>
                                        </div>
                                        <img className="card-img-top w-100 image-fluid hover-img" height="300px" src={korea} alt="korea"></img>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">HÀN QUỐC</h5>
                                        <span className="float-left">
                                            <p style={{ fontSize: 13 }}>ĐÁNH GIÁ</p>
                                        </span>
                                        <span className="float-right">
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="filled" />
                                            <Icon className="px-1" type="star" theme="outlined" />
                                        </span>
                                        <div className="float-left">
                                            <p style={{ fontSize: '12.5px' }} className="text-muted">Nếu ai đã một lần được đặt chân đến đất nước Hàn Quốc sẽ nhớ mãi một xứ sở Kim Chi với cảnh quan thiên nhiên tươi đẹp, con người thân thiện và ...</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-0 btn btn-block"><p className="mt-2" style={{ fontSize: 16 }}>ĐẶT VÉ</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default Form.create({ name: 'normal_login' })(Second);