import { useState } from 'react';
import axios from 'axios';
import { Formik, /*ErrorMessage,*/ Field, Form } from 'formik';
import Swal from 'sweetalert2';

function Delete() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="container mt-5 ">
            <h1 className="display-5 mb-4">Eliminar prenda</h1>
            <Formik
                initialValues={{
                    id_prenda: ''
                }}

                validate={(values) => {
                    const errors = {};

                    return errors;
                }}

                onSubmit={async (values, formikBag) => {
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
                            title: `¿Seguro que desea eliminar el registro?`,
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Eliminar',
                            text: `Id prenda: ${res.data[0].id_prenda}`
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    axios.delete(`http://localhost:5000/api/deletePrenda/${values.id_prenda}`);
                                    swalBootstrap.fire({
                                        title: 'Eliminado',
                                        text: 'Registro borrado correctamente',
                                        icon: 'success'
                                    });
                                } else {
                                    swalBootstrap.fire({
                                        title: 'Cancelado',
                                        text: 'Tu registro esta seguro :)',
                                        icon: 'error'
                                    });
                                };
                            })
                    } else {
                        Swal.fire({
                            title: 'Error',
                            text: 'Registro no encontrado',
                            icon: 'error'
                        })
                    };

                }}
            >
                {() => (
                    <Form>
                        <div className="input-group mb-2">
                            <span className="input-group-text">Id  de la prenda</span>
                            <Field
                                className="form-control"
                                name="id_prenda"
                                id="id_prenda"
                                type="text"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`submit btn btn-primary ${isSubmitting ? 'disabled' : ''}`}
                            disabled={isSubmitting}>
                            Buscar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Delete;