import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
  cita: {
    mascota: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
}

class AgregarCita extends Component {
  state = { ...stateInicial }

  // Cuando el usuario escribe en los inputs
  handleChange = (e) => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  }

  // Cuando se envia el formulario
  handleSubmit = (e) => {
    e.preventDefault();

    // Extraer los valores del state
    const { mascota, duenio, fecha, hora, sintomas } = this.state.cita;

    // Validar que los campos estén llenos
    if (mascota === '' || duenio === '' || fecha === '' || hora === '' || sintomas === '') {
      this.setState({
        error: true
      });

      return;
    }

    // Generar objetos con los datos
    const nuevaCita = {...this.state.cita};
    nuevaCita.id = uuid();

    // Agregar la cita al state de App
    this.props.crearNuevaCita(nuevaCita);

    // Colocar el state al stateInicial
    this.setState({
      ...stateInicial
    })

  }

  render() {

    const { error } = this.state;

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el Formulario para Agregar Citas
          </h2>

          { error ? <div className="alert alert-danger text-center mt-2 mb-5">Todos los campos son obligatorios</div> : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  // ref={this.nombreMascotaRef}
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  // ref={this.nombreDuenioRef}
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                  name="duenio"
                  onChange={this.handleChange}
                  value={this.state.cita.duenio}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  type="date"
                  // ref={this.fechaRef}
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  // ref={this.horaRef}
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  // ref={this.sintomasRef}
                  className="form-control"
                  name="sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                >
                </textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="">
                <input
                  type="submit"
                  className="py-3 mt-2 btn btn-success btn-block"
                  value="Agregar Nueva Cita"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

AgregarCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
}

export default AgregarCita;
