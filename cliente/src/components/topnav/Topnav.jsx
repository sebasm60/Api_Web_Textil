import React from 'react';

import './topnav.css';

import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown';

import notifications from '../../assets/JsonData/notification.json';

function renderNotificationItem(item, index){
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
};

function Topnav(){
    return (
        <div className="topnav">
            <div className="top__nav-search">
                <input type="text" placeholder="Buscar"/>
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-user'
                    />
                </div>
                <div className="topnav__right-item">
                     <Dropdown
                        icon='bx bx-bell'
                        badge='0'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown/>
                </div>
            </div>
        </div>
    );
};

export default Topnav;
