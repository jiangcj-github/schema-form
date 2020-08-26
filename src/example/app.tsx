import React from 'react';
import "./assets/app.less";
import { HashRouter, Route, NavLink } from 'react-router-dom';

const AntdForm = React.lazy(() => import("./antd-form"));
const KpcForm = React.lazy(() => import("./kpc-form"));

function App() {

    const linkTo = (path: string) => {
        window.location.href = path;
        window.location.reload();
    }

    return (
        <HashRouter>
            <div className="container">
                <div className="sider">
                    <div className="logo">Schema配置表单</div>
                    <div className="menu">
                        <NavLink to="/antd" activeClassName="active">
                            <span className="menu-item" onClick={() => linkTo(`#/antd`)} >antd示例</span>
                        </NavLink>
                        <NavLink to="/kpc" activeClassName="active">
                            <span className="menu-item" onClick={() => linkTo(`#/kpc`)} >kpc示例</span>
                        </NavLink>
                    </div>
                </div>
                <div className="content">
                    <React.Suspense fallback={<div>loading...</div>}>
                        <Route path="/antd" component={AntdForm} />
                        <Route path="/kpc" component={KpcForm} />
                    </React.Suspense>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;