import React, { Component } from "react"
import { Popover, Icon, Input } from "antd"
class PoPoVer_Khach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countAdults: 1,
            countChild: 0,
            countBaby: 0,
        }
    }
    incrementAdults = (e) => {
        e.preventDefault();
        this.setState({
            countAdults: this.state.countAdults + 1,
        })
    }
    incrementChild = (e) => {
        e.preventDefault();
        this.setState({
            countChild: this.state.countChild + 1,
        })
    }
    incrementBaby = (e) => {
        e.preventDefault();
        this.setState({
            countBaby: this.state.countBaby + 1,
        })
    }
    unincrementAdults = (e) => {
        e.preventDefault();
        if (this.state.countAdults < 2) {
            this.setState({
                countAdults: 1
            })
        } else {
            this.setState({
                countAdults: this.state.countAdults - 1
            })
        }
    }
    unincrementChild = (e) => {
        e.preventDefault();
        if (this.state.countChild < 1) {
            this.setState({
                countChild: 0
            })
        } else {
            this.setState({
                countChild: this.state.countChild - 1
            })
        }
    }
    unincrementBaby = (e) => {
        e.preventDefault();
        if (this.state.countBaby < 1) {
            this.setState({
                countBaby: 0
            })
        } else {
            this.setState({
                countBaby: this.state.countBaby - 1
            })
        }
    }
    render() {
        const content = (
            <div>
                <div className="pb-3">
                    <strong style={{ color: '#F47920', fontSize: '15px' }}>Chọn khách du lịch</strong>
                </div>
                <div className="d-flex">
                    <p className="mr-2" style={{ marginBottom: '0px' }}>Người lớn (trên 12 tuổi)</p>
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <Icon onClick={this.incrementAdults} className="mr-2" type="plus-circle" />
                        </div>
                        <div className="mr-2">
                            {this.state.countAdults}
                        </div>
                        <div className="d-flex align-items-center">
                            <Icon onClick={this.unincrementAdults} className="mr-2" type="minus-circle" />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <p className="mr-2" style={{ marginBottom: '0px' }}>Trẻ em (từ 2 - 12 tuổi) &nbsp;&nbsp;</p>
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <Icon onClick={this.incrementChild} className="mr-2" type="plus-circle" />
                        </div>
                        <div className="mr-2">
                            {this.state.countChild}
                        </div>
                        <div className="d-flex align-items-center">
                            <Icon onClick={this.unincrementChild} className="mr-2" type="minus-circle" />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <p className="mr-3" style={{ marginBottom: '0px' }}>Em bé (dưới 2 tuổi) &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <Icon onClick={this.incrementBaby} className="mr-2" type="plus-circle" />
                        </div>
                        <div className="mr-2">
                            {this.state.countBaby}
                        </div>
                        <div className="d-flex align-items-center">
                            <Icon onClick={this.unincrementBaby} className="mr-2" type="minus-circle" />
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <Popover placement="bottomLeft" className="w-100" content={content} trigger="click" >
                <div className="input-group input-group-sm">
                    <Input className="px-2 w-100" readOnly value={this.state.countAdults + " " + "người lớn" + " " + "," + " " + this.state.countChild + " " + "trẻ em" + "," + " " + this.state.countBaby + " " + "em bé"}></Input>
                </div>
            </Popover>
        )
    }
}
export default PoPoVer_Khach;