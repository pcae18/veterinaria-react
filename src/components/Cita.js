import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Citas extends Component{

    eliminarCita = () => {
        this.props.eliminarCita(this.props.cita.id);
    }

    render(){
        const{nombreMascota, nombreDuenio, fechaCita, horaCita, sintomas} = this.props.cita;
        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Nombre del dueño: </span> {nombreDuenio} </p>
                    <p className="card-text"><span>Fecha de la cita: </span> {fechaCita} </p>
                    <p className="card-text"><span>Hora de la cita: </span> {horaCita} </p>
                    <p className="card-text"><span>Síntomas: </span></p>
                    <p className="card-text">{sintomas}</p>
                    <button onClick={this.eliminarCita} className="btn btn-danger">Borrar</button>

                </div>
            </div>
        );
    }
}

Citas.propTypes = {
    cita : PropTypes.shape({
        nombreMascota : PropTypes.string.isRequired,
        nombreDuenio : PropTypes.string.isRequired,
        fechaCita : PropTypes.string.isRequired,
        horaCita : PropTypes.string.isRequired,
        sintomas : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
    }),
    eliminarCita : PropTypes.func.isRequired
}

export default Citas;