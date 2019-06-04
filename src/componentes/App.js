import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {
  state = {
    citas: []
  }

  // Cuando carga la aplicación
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');

    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  // Cuando eliminamos ó agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearNuevaCita = (datos) => {
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    });
  }

  eliminarCita = (idCita) => {
    // Copia del state
    const citasActuales = [...this.state.citas]

    // Eliminar cita utilizando filter
    const citas = citasActuales.filter(cita => cita.id !== idCita);

    // Actualizar state
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo="Administrador Pacientes Veterinaria"
        />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <AgregarCita
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
