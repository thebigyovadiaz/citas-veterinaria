import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
  render() {

    const citas = this.props.citas;

    const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus citas aquí';

    return (
      <div className="card mt-2 py-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>

          <div className="lista-citas">
            {Object.keys(citas).map(key => (
              <Cita
                cita={this.props.citas[key]}
                key={key}
                eliminarCita={this.props.eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default ListaCitas;
