import React from "react"
import { Popover, Input, Select, Collapse, Icon } from "antd"
import icon from "../../Image/icon-chieu-di.svg"
const { Option } = Select;
const { Panel } = Collapse;
const provinceData = ["England", "Germany", "Spain"];
const cityData = {
    England: ["Liverpool", "London", "Blackpool", "Manchester", "Birmingham"],
    Germany: ["Berlin", "Munich", "Dortmund", "Stugard"],
    Spain: ["Madrid", "Barcelona", "Bilbao"]
};
class PoPoVer_Go_Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MienBac: ["Hà Nội", "Hải Phòng", "Quảng Ninh", "Điện Biên Phủ"],
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
    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        })
    }
    handleSecondCityChange = value => {
        this.setState({
            secondCity: value,
        })
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
        } else {
            this.setState({
                come: item,
                visible: false
            })
        }
    }
    onChose = () => {
        this.setState({
            visible: false,
            go: this.state.secondCity
        })
    }
    onClickSearch = item => {
        console.log(`selected ${item}`);
        this.setState({
            go: item
        })
    }
    Comeback = () => {
        this.setState({
            visible: false
        })
    }
    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render() {
        const { isDeparture } = this.props
        const headerVN = (
            <div>
                <strong style={{ color: '#F47920' }}>VIỆT NAM</strong>
                <div className="float-right"><i style={{ color: '#F47920' }} className="fas fa-caret-right"></i></div>
            </div>
        )
        const headerQT = (
            <div>
                <strong style={{ color: '#F47920' }}>QUỐC TẾ</strong>
                <div className="float-right"><i style={{ color: '#F47920' }} className="fas fa-caret-right"></i></div>
            </div>
        )
        const vietnam = (
            <div className="row">
                <div className="col-4">
                    <p style={{ color: '#F47920' }}>MIỀN BẮC</p>
                    {
                        this.state.MienBac.map((item, index) => (
                            <div style={{ fontSize: '12px', color: 'black' }} className="py-1" onClick={this.ClickMe.bind(this, item)}>{item}</div>
                        ))
                    }
                </div>
                <div className="col-4">
                    <p style={{ color: '#F47920' }}>MIỀN TRUNG</p>
                    {
                        this.state.MienTrung.map((item, index) => (
                            <div style={{ fontSize: '12px', color: 'black' }} className="py-1" onClick={this.ClickMe.bind(this, item)}>{item}</div>
                        ))
                    }
                </div>
                <div className="col-4">
                    <p style={{ color: '#F47920' }}>MIỀN NAM</p>
                    {
                        this.state.MienNam.map((item, index) => (
                            <div style={{ fontSize: '12px', color: 'black' }} className="py-1" onClick={this.ClickMe.bind(this, item)}>{item}</div>
                        ))
                    }
                </div>
            </div>
        )
        const quocte = (
            <div className="row">
                <div className="col-12 py-2">
                    <p style={{ fontWeight: 'bold', color: 'black', fontSize: 12 }}>Chọn đất nước</p>
                    <Select
                        className="selectbox"
                        style={{ width: '100%' }}
                        defaultValue={provinceData[0]}
                        onChange={this.handleProvinceChange}
                        onSearch={this.onSearch}
                        showSearch
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {provinceData.map(province => (
                            <Option key={province}>{province}</Option>
                        ))}
                    </Select>
                </div>
                <div className="col-12 py-2">
                    <p style={{ fontWeight: 'bold', color: 'black', fontSize: 12 }}>Chọn thành phố hoặc sân bay</p>
                    <Select
                        className="selectbox"
                        style={{ width: '100%' }}
                        value={this.state.secondCity}
                        onChange={this.handleSecondCityChange}
                        onSearch={this.onSearch}
                        showSearch
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {this.state.cities.map(city => (
                            <Option key={city}>{city}</Option>
                        ))}
                    </Select>
                </div>
                <div className="col-12 pt-3">
                    <button onClick={this.onChose} className="btn btn-primary btn-chose btn-block">
                        Chọn
                        </button>
                </div>
            </div>
        )
        const title_go_mobile = (
            <div className="d-flex">
                <button onClick={this.Comeback} className="btn btn-primary btn-back">Quay lại</button>
                <div className="text-dark align-self-center ml-5">
                    CHỌN ĐIỂM ĐI
                </div>
            </div>
        );
        const content_go_mobile = (
            <div>
                <Select
                    showSearch
                    className="selectBox"
                    style={{ width: "100%", }}
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
                <div className="pt-2">
                    <Collapse>
                        <Panel className='panel' header={headerVN} style={{ background: 'white' }}>
                            <p>{vietnam}</p>
                        </Panel>
                    </Collapse>
                    <Collapse>
                        <Panel className='panel' header={headerQT} style={{ background: 'white' }}>
                            <p>{quocte}</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
        return (
            <Popover
                placement="bottomLeft"
                className="w-100"
                content={content_go_mobile}
                title={title_go_mobile}
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
export default PoPoVer_Go_Mobile;