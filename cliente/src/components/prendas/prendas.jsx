import { useState } from 'react';
import '../styles/tabs.css';
import AddPrenda from './addPrenda';
import Listar from './listar';
import Delete from './delete';
import Buscar from './buscar';
import Editar from './editar';
import Nav from '../navbar';

function prendas() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <Nav />
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
                        <Listar />
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <AddPrenda />
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <Editar/>
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

export default prendas;