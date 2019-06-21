import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";
const { Header } = Layout;
import "./styles.css"

export default class App extends Component {
  render() {
    debugger;

    return (
      <div>
        <Header>
          <div className='brand'>
            <span >React BoilerPlate</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <Menu mode='horizontal'>
              <Menu.Item key='mail'>
                <Icon type='user' /> by @royalbhati
              </Menu.Item>
            </Menu>
          </div>
        </Header>
      </div>
    );
  }
}
