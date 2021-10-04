import React, { Component } from 'react';
import axios from 'axios';

class Listar extends Component {

    state = {
        prendas: []
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/listarprendas');
        this.setState({ prendas: res.data });
    }
    render() {
        return (
            <div className="container mt-5 table-responsive">
                <h1 className="display-5 mb-4"> Listar prendas </h1>
                <table className="table table-borderless">
                    <thead className="table-dark">
                        <tr>
                            <th>Id prenda</th>
                            <th>lote</th>
                            <th>Genero</th>
                            <th>Tipo prenda</th>
                            <th>Talla prenda</th>
                            <th>Muestra fisica</th>
                            <th>Tipo de empaque</th>
                            <th>Cantidad existente</th>
                            <th>Cliente prenda</th>
                            <th>Taller prenda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.prendas.map((prenda, index) => (
                            <tr className="" key={index}>
                                <td> {prenda.id_prenda}</td>
                                <td> {prenda.lote}</td>
                                <td> {prenda.genero_prenda}</td>
                                <td> {prenda.tipo_prenda}</td>
                                <td> {prenda.talla_prenda}</td>
                                <td> {prenda.muestra_fisica}</td>
                                <td> {prenda.tipo_empaque}</td>
                                <td> {prenda.cantidad_existente}</td>
                                <td> {prenda.cliente_prenda}</td>
                                <td> {prenda.taller_prenda}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Listar;