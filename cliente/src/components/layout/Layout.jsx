import React from 'react';

import './layout.css';

import Sidebar from '../sidebar/sidebar';
import Topnav from '../topnav/Topnav';
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom';

function Layout() {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout">
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <Topnav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    );
};

export default Layout;
