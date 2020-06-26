import React from "react"
import { Popover, Input, Select } from "antd"
import icon from "../../Image/icon-chieu-di.svg"
const { Option } = Select;
const provinceData = ["England", "Germany", "Spain"];
const cityData = {
    England: ["Liverpool", "London", "Blackpool", "Manchester", "Birmingham"],
    Germany: ["Berlin", "Munich", "Dortmund", "Stugard"],
    Spain: ["Madrid", "Barcelona", "Bilbao"]
};
class PoPoVer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MienBac: ["Hà Nội", "Hải Phòng", "Quảng Ninh", "Điện Biên Phủ"],
            // MienBac: [{ "id": "1", "name": "Hà Nội" }, { "id": "2", "name": "Hải Phòng" }],
            MienTrung: ["Đà Nẵng", "Huế", "Vinh", "Quy Nhơn", "Quảng Bình", "Quảng Nam", "Thanh Hóa"],
            MienNam: ["TP Hồ Chí Minh", "Đà Lạt", "Nha Trang", "Phú Quốc", "Cần Thơ"],
            visible: false,
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        }
    }
    onChange = (value) => {
        console.log(`selected ${value}`);
    }
    onSearch = (val) => {
        console.log('search:', val);
    }
    ClickMe = (item) => {
        const { isDeparture } = this.props
        console.log(`selected ${item}`);
        if (isDeparture === true) {
            this.setState({
                go: item,
                visible: false
            })
        }
        else {
            this.setState({
                come: item,
                visible: false
            })
        }
    }
    onClickSearch = item => {
        console.log(`selected ${item}`);
        this.setState({
            go: item,
            visible: false
        })
    }
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    handleChangeParent = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        })
    }
    handleChangeChild = (value) => {
        this.setState({
            secondCity: value,
        })
    }
    onChose = () => {
        this.setState({
            visible: false,
            go: this.state.secondCity
        })
    }
    render() {
        const title_go = (
            <div className="text-white">
                CHỌN ĐIỂM ĐI
            </div>
        );
        const { isDeparture } = this.props
        console.log('đây là điểm đi', isDeparture)
        const content_go = (
            <div style={{ width: 600 }}>
                <div className="row" style={{ borderBottom: "#cccccc 1px solid" }}>
                    <div className="col-3 py-2">
                        <p style={{ color: '#F47920', fontWeight: 'bold', fontSize: '13px' }}>TÌM KIẾM</p>
                    </div>
                    <div className="col-9">
                        <Select
                            showSearch
                            className="selectBox"
                            style={{ width: "100%" }}
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onSearch={this.onSearch}
                            placeholder="Hãy nhập vào tên thành phố hoặc mã sân bay"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                this.state.MienTrung.map((item, index) => {
                                    return (
                                        <Option onClick={this.onClickSearch.bind(this, item)} value={item}>{item}</Option>
                                    )
                                })
                            }
                        </Select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 py-3">
                        <strong style={{ color: '#F47920', fontSize: '13px' }}>Miền Bắc</strong>
                        {
                            this.state.MienBac.map((item, index) => (
                                <div style={{ fontSize: '12px', color: 'black' }} className="py-1" onClick={this.ClickMe.bind(this, item)}>{item}</div>
                            ))
                        }
                    </div>
                    <div className="col-2 py-3">
                        <strong style={{ color: '#F47920', fontSize: '13px' }}>Miền Trung</strong>
                        {
                            this.state.MienTrung.map((item, index) => (
                                <div style={{ fontSize: '12px', color: 'black' }} className="py-1" onClick={this.ClickMe.bind(this, item)}>{item}</div>
                            ))
                        }
                    </div>
                    <div className="col-2 py-3">
                        <strong style={{ color: '#F47920', fontSize: '13px' }}>Miền Nam</strong>
                        {
                            this.state.MienNam.map((item, index) => (
                                <div style={{ fontSize: '12px', color: 'black' }} className="py-1" onClick={this.ClickMe.bind(this, item)}>{item}</div>
                            ))
                        }
                    </div>
                    <div className="col-3 py-3">
                        <div className="pb-2">
                            <strong style={{ color: '#F47920', fontSize: '13px' }}>Đặt Vé Quốc Tế</strong>
                        </div>
                        <div className="pb-3">
                            <strong style={{ fontSize: 12, fontWeight: "bold", color: 'black' }}>Chọn đất nước</strong>
                        </div>
                        <div className="pb-2">
                            <Select
                                showSearch
                                className="selectbox"
                                style={{ width: 200 }}
                                defaultValue={provinceData[0]}
                                onChange={this.handleChangeParent}
                                onSearch={this.onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    provinceData.map((item, index) => {
                                        return (
                                            <Option value={item}>{item}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                        <div className="pb-3">
                            <strong style={{ fontSize: '12px', fontWeight: "bold", color: 'black' }}>Chọn thành phố hoặc sân bay</strong>
                        </div>
                        <div className="pb-2">
                            <Select
                                className="selectbox"
                                style={{ width: 200 }}
                                value={this.state.secondCity}
                                onChange={this.handleChangeChild}
                                onSearch={this.onSearch}
                                showSearch
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    this.state.cities.map((item) => {
                                        return (
                                            <Option value={item}>{item}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                        <button onClick={this.onChose} style={{ width: 200 }} onClick={this.onChose} className="btn btn-primary btn-chose btn-block pt-2">
                            Chọn
                        </button>
                    </div>
                </div>
            </div>
        )
        return (
            <Popover
                placement="bottomLeft"
                className="w-100"
                content={content_go}
                title={title_go}
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <div className="input-group input-group-sm">
                    <Input className="w-100" style={{ fontSize: '15px', color: 'black', paddingLeft: '32px' }} readOnly value={isDeparture ? (this.state.go ? this.state.go : this.state.MienBac[0]) : (this.state.come ? this.state.come : this.state.MienNam[0])}></Input>
                    <img src={icon} alt="icon" style={{ position: 'absolute' }} className="float-left px-2 pt-2"></img>
                </div>
            </Popover>
        )
    }
}
export default PoPoVer;