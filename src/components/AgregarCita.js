import React, {Component} from 'react';
import uuid from  'uuid';
import PropTypes from 'prop-types';


class AgregarCita extends Component{
    constructor(){
        super();
    }

    //Refs
    nombreMascotaRef = React.createRef();
    nombreDuenioRef = React.createRef();
    fechaCitaRef = React.createRef();
    horaCitaRef = React.createRef();
    sintomasRef = React.createRef();


    state = {
        error : false
    }

    altaCitaVeterinario = (e) => {
        e.preventDefault();

        const nombreMascota = this.nombreMascotaRef.current.value,
            nombreDuenio = this.nombreDuenioRef.current.value,
            fechaCita = this.fechaCitaRef.current.value,
            horaCita = this.horaCitaRef.current.value,
            sintomas = this.sintomasRef.current.value;
        
        if( nombreMascota==='' || nombreDuenio==='' || fechaCita==='' || horaCita==='' || sintomas === ''){
            this.setState({
                error : true
            });
        }else{
            let cita = {
                id: uuid(),
                nombreMascota : nombreMascota,
                nombreDuenio : nombreDuenio,
                fechaCita : fechaCita,
                horaCita : horaCita,
                sintomas : sintomas
            }
            //Se envia el objeto hacia el padre para actualizar el state
            this.props.agregarCita(cita);
            e.target.reset();
            this.setState({
                error : false
            });
        }
    }

   render(){
       const error = this.state.error;
       return(
           <div className="card mt-5"> 
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar las Citas Aquí</h2>
                    <form onSubmit={this.altaCitaVeterinario}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascotaRef}  type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreDuenioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechaCitaRef} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.horaCitaRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {error? <div className='alert alert-danger text-center'>Todos los campos son obligatorios</div> : ''}
                </div>
           </div>
       );
   }
}

AgregarCita.propTypes = {
    agregarCita: PropTypes.func.isRequired
}
export default AgregarCita;