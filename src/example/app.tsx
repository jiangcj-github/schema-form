import React from 'react';
import "./assets/app.less";
import { HashRouter, Route, NavLink } from 'react-router-dom';

const AntdForm = React.lazy(() => import("./antd-form"));
const AntdFormInline = React.lazy(() => import("./antd-form-inline"));
const KpcForm = React.lazy(() => import("./kpc-form"));

function App() {

    const linkTo = (path: string) => {
        window.history.replaceState(null, "", path);
        window.location.reload();
    }

    return (
        <HashRouter>
            <div className="container">
                <div className="sider">
                    <div className="logo">Schema配置表单</div>
                    <div className="menu">
                        <NavLink to="/antd" activeClassName="active">
                            <span className="menu-item" onClick={() => linkTo(`#/antd`)} >antd示例一</span>
                        </NavLink>
                        <NavLink to="/antd2" activeClassName="active">
                            <span className="menu-item" onClick={() => linkTo(`#/antd2`)} >antd示例二</span>
                        </NavLink>
                        <NavLink to="/kpc" activeClassName="active">
                            <span className="menu-item" onClick={() => linkTo(`#/kpc`)} >kpc示例</span>
                        </NavLink>
                    </div>
                </div>
                <div className="content">
                    <React.Suspense fallback={null}>
                        <Route path="/antd" component={AntdForm} />
                        <Route path="/antd2" component={AntdFormInline} />
                        <Route path="/kpc" component={KpcForm} />
                    </React.Suspense>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;