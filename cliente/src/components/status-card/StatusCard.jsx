import React from 'react';

import './statuscard.css';


function StatusCard(props) {
    return (
        <div className="status-card">
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>   
            <div className="status-card__info">
                <h4>{props.total}</h4>
                <span>{props.titulo}</span>
            </div> 
        </div>
    );
};

export default StatusCard;
