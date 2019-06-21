import React, {Component} from 'react';

class FormTareas extends Component {
  constructor() {
    super();
    this.state={
      titulo : '',
      responsable : '',
      descripcion : '',
      prioridad : 'low'
    };
    this.managerInput=this.managerInput.bind(this);
    this.managerSubmit=this.managerSubmit.bind(this);
    
  }

managerSubmit(e){
  e.preventDefault();
  this.props.doAddTareas(this.state);
  this.setState({
      titulo: '',
      responsable: '',
      descripcion: '',
      prioridad: 'low'
    });


}
managerInput(e){

  const {value, name}=e.target;
  console.log(value, name);
  this.setState({
    [name]:value
  })
  
}

render() {
    return (
      <div className="card mt-4">
        <form onSubmit={this.managerSubmit} className="card-body">
            <div className="form-group">
            <input
              type="text"
              name="titulo"
              value={this.state.titulo}
              onChange={this.managerInput}
              className="form-control"
              placeholder="Titulo"
              />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="descripcion"
              value={this.state.descripcion}
              onChange={this.managerInput}
              className="form-control"
              placeholder="Descripción"
              />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="responsable"
              value={this.state.responsable}
              onChange={this.managerInput}
              className="form-control"
              placeholder="Responsable"
              />
            </div>
            <div className="form-group">
            <select
              name="prioridad"
              value={this.state.prioridad}
              onChange={this.managerInput}
              className="form-control"
              >
                <option value="hight">Hight</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              </div>
            <button type="submit" className="btn btn-primary">Crear</button>

        </form>
      </div>
    );
  }
}

export default FormTareas;
