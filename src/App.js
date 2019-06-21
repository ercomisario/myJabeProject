import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {tareas}  from './tareas.json';
import FormTareas  from './components/FormTareas';
//console.log(tareas);

class App extends Component {
  constructor() {
    super();
    this.state={
      tareas:tareas
    }
    this.managerAddTareas=this.managerAddTareas.bind(this);
    this.managerRemoveTareas=this.managerRemoveTareas.bind(this);

  }
  managerAddTareas(tarea){
    this.setState({
      tareas : [...this.state.tareas, tarea]

    })

  }
  managerRemoveTareas(index){
    console.log(index);
    this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index
      })
    })


  }

  render(){

  const tareasv= this.state.tareas.map((tarea, i) =>{
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
            <h4> {tarea.titulo}</h4>
              <span className="badge badge-pill badge-success ml-2">
              {tarea.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p>{tarea.responsable}</p>
            </div>
            <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={this.managerRemoveTareas.bind(this, i)}
            >
            Borrar
            </button>
            </div>
          </div>
        </div>
      )

    }
    )

    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
      Tareas
      <span className="badge badge-pill badge-light ml-2">
      {this.state.tareas.length}
      </span>
        </a>
      </nav>
      <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
            <img src={logo} className="App-logo" alt="logo" />
                <FormTareas doAddTareas={this.managerAddTareas}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {tareasv}
              </div>

            </div>
          </div>
      </div>
       
      </div>
    );

  }
}
export default App;
