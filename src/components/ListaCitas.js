import React, {Component} from 'react';
import Cita from './Cita'
import PropTypes from 'prop-types';

class ListasCitas extends Component{

    render(){
        console.log(this.props.citas);
        const numCitas = this.props.citas.length;
        const message = (numCitas === 0 ? 'No has agregado ninguna cita': 'Administra todas tus citas aquí');
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                cita={this.props.citas[cita]}
                                eliminarCita={this.props.eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListasCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default ListasCitas;