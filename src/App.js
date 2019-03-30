import React, { Component } from 'react';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      citas: []
    }
  }

  componentDidMount(){
    console.log('Esta listo');
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentWillMount(){
    console.log('Yo me ejecuto antes');
  }

  
  componentWillUnmount(){
    console.log('Yo hasta que cierra');
  }

  componentDidUpdate(){
    console.log("Algo se actualizó. Guardando información de manera local.");
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    );
  }

  eliminarCita = (id) => {
    console.log(`Eliminando cita ...${id}`);
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter( cita => cita.id !== id);
    this.setState({
      citas
    });
  }
  
  agregarCita = (nuevaCita) => {
    console.log(nuevaCita);
    const citas = [...this.state.citas, nuevaCita];
    this.setState({
      citas: citas
    });
  }
  
  render() {
    
    return (
      <div className="container">
        <Header 
          title={'Administrador de Paciente de Veterinaria'}
          />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita
                agregarCita={this.agregarCita}
              />
            </div>
            <div className="col-md-6">
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
