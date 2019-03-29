import React, { Component } from 'react';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'

class App extends Component {
  
  agregarCita = () => {
    console.log("Desde app.js");
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
          </div>

      </div>
    );
  }
}

export default App;
