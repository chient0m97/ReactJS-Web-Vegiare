import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import logo from "./Image/logo.svg"
import call from "./Image/call-answer.png"
import vietnam from "./Image/vietnam.svg"
import english from "./Image/english.svg"
import Home from "./Home/Home"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav class="navbar navbar-expand-md navbar-light bg-light py-4 fixed-top">
            <div className="container">
              <a href="./" className="navbar-brand">
                <img src={logo} alt="logo"></img>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link active" href="./">VÉ NỘI ĐỊA</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">VÉ QUỐC TẾ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/meet">TIN KHUYẾN MẠI</a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <img height="28px" src={call} alt="call"></img>
                    <span style={{ fontSize: '24px' }}>1900 6526</span>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                        <div className="row lang">
                          <div className="cursor-pointer col-6 pr-1 vn">
                            <img width="30px" src={vietnam} alt="vietnam"></img>
                          </div>
                          <div className="cursor-pointer col-6 pl-1 en">
                            <img width="30px" src={english} alt="english"></img>
                          </div>
                        </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"><span style={{ fontSize: '13px' }}>Đăng kí</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"><span style={{ fontSize: '13px' }}>Đăng nhập</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact><Home></Home></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
