import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Menu, Icon, Layout } from "antd";
import "./styles.css";
const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <div className='brand'>
            <span>React Boilerplate</span>
          </div>
          <div style={{ textAlign: "center" }} />
        </Header>
        <div class='container'>
          <span class='react-logo'>
            <span class='nucleo' />
          </span>
        </div>

        <p class='title'>by @Royal Bhati</p>
      </div>
    );
  }
}
export default hot(module)(App);
