import React, { useState, useEffect} from 'react';

import axios from 'axios';

import urlConfig from '../settings/settings';

import StatusCard from '../components/status-card/StatusCard';

function Dashboard() {

    const [statusCards, setStattusCards] = useState([]);

    useEffect(() => {

        async function obtenerTalleres() {
            const res = await axios.get(`http://${urlConfig}:5000/api/cards`);
            setStattusCards(res.data);
        };

        obtenerTalleres();
    }, []);

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6">
                                    <StatusCard
                                        icon={item.icon}
                                        total={item.total}
                                        titulo={item.titulo}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
