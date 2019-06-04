import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

  render() {

    const {mascota, propietario, fecha, hora, sintomas, id} = this.props.cita;

    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{mascota}</h3>
          <p className="card-text"><span>Nombre del Dueño: </span>{propietario}</p>
          <p className="card-text"><span>Fecha: </span> {fecha}</p>
          <p className="card-text"><span>Hora: </span> {hora}</p>
          <p className="card-text"><span>Sintomas: </span></p>
          <p className="card-text">{sintomas}</p>

          <button onClick={() => this.props.eliminarCita(id)} className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    );
  }
}

Cita.propTypes = {
  cita: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mascota: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired
  }),
  eliminarCita: PropTypes.func.isRequired
}

export default Cita;
