import { useState, useEffect } from 'react';
import axios from 'axios';

import Add from './add';
import Listar from './listar';
import Delete from './delete';
import Buscar from './buscar';
import Editar from './editar';
import urlConfig from '../../settings/settings';

function Clientes() {
    const [toggleState, setToggleState] = useState(1);
    const [clientes, setClientes] = useState([]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {

        async function obtenerClientes() {
            const res = await axios.get(`http://${urlConfig}:5000/api/listarClientePrendas`);
            setClientes(res.data);
        };

        obtenerClientes();
    }, []);

    return (
        <>
            <div className="container-tabs">
                <div className="bloc-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                        Listar
                    </div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >
                        Agregar
                    </div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                        Editar
                    </div>
                    <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                        Buscar
                    </div>
                    <div className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
                        Delete
                    </div>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <Listar
                            clientes={clientes}
                        />
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <Add />
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <Editar />
                    </div>
                    <div className={toggleState === 4 ? "content active-content" : "content"}>
                        <Buscar />
                    </div>
                    <div className={toggleState === 5 ? "content active-content" : "content"}>
                        <Delete />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clientes;