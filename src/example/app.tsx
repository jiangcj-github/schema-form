import React from 'react';
import 'antd/dist/antd.css';
import "./assets/app.less";
import { HashRouter, NavLink, Route } from 'react-router-dom';
import AntdForm from "./antd-form";
import KpcForm from "./kpc-form";

function App() {

    return (
        <HashRouter>
            <div className="container">
                <div className="sider">
                    <div className="logo">Schema配置表单</div>
                    <div className="menu">
                        <NavLink to="/antd" activeClassName="active">antd示例</NavLink>
                        <NavLink to="/kpc" activeClassName="active">kpc示例</NavLink>
                    </div>
                </div>
                <div className="content">
                    <Route path="/antd" component={AntdForm} />
                    <Route path="/kpc" component={KpcForm} />
                </div>
            </div>
        </HashRouter>
    )
}

export default App;