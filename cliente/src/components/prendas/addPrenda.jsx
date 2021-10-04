import { Formik, /*ErrorMessage,*/ Field, Form } from 'formik';
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';

function AddPrenda() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="container mt-5">
            <Formik
                initialValues={{
                    id_prenda: '',
                    lote: '',
                    genero_prenda: '',
                    tipo_prenda: '',
                    talla_prenda: '',
                    muestra_fisica: '',
                    tipo_empaque: '',
                    cantidad_existente: '',
                    cliente_prenda: '',
                    taller_prenda: ''
                }}

                validate={(values) => {
                    const errors = {};

                    return errors;
                }}

                onSubmit={async (values) => {
                    setIsSubmitting(false);

                    const res = await axios.post(`http://localhost:5000/api/getprenda`, values);

                    const swalBootstrap = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger'
                        },
                        buttonsStyling: false
                    });

                    if (res.data.length > 0) {
                        swalBootstrap.fire({
                            title: 'Error',
                            text: 'El registro ya existe',
                            icon: 'error'
                        });
                    } else {
                        await axios.post(`http://localhost:5000/api/addPrenda`, values);
                        swalBootstrap.fire({
                            title: 'Guardado',
                            text: 'Se guardo exitosamente',
                            icon: 'success'
                        });
                    };
                }}
            >
                {() => (
                    <Form>
                        <h1 className="display-5 mb-4">Agregar prenda</h1>
                        <div className="input-group mb-2">
                            <span className="input-group-text">Id  de la prenda</span>
                            <Field
                                className="form-control"
                                name="id_prenda"
                                id="id_prenda"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Lote</span>
                            <Field
                                className="form-control"
                                name="lote"
                                id="lote"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Genero de la prenda</span>
                            <Field
                                className="form-control"
                                name="genero_prenda"
                                id="genero_prenda"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Tipo de prenda</span>
                            <Field
                                className="form-control"
                                name="tipo_prenda"
                                id="tipo_prenda"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Talla de la prenda</span>
                            <Field
                                className="form-control"
                                name="talla_prenda"
                                id="talla_prenda"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Muestra fisica</span>
                            <Field
                                className="form-control"
                                name="muestra_fisica"
                                id="muestra_fisica"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Tipo de empaque</span>
                            <Field
                                className="form-control"
                                name="tipo_empaque"
                                id="tipo_empaque"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Cantidad existente</span>
                            <Field
                                className="form-control"
                                name="cantidad_existente"
                                id="cantidad_existente"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Cliente de la prenda</span>
                            <Field
                                className="form-control"
                                name="cliente_prenda"
                                id="cliente_prenda"
                                type="text"
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text">Taller de la prenda</span>
                            <Field
                                className="form-control"
                                name="taller_prenda"
                                id="taller_prenda"
                                type="text"
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className={`submit btn btn-primary ${isSubmitting ? 'disabled' : ''}`}
                                disabled={isSubmitting}>
                                Agregar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddPrenda;