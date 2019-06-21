import React, {Component} from 'react';

/*
function Navegador() {
  return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
        {this.titulo }
        </a>
      </nav>
  );
}*/

class Navegador extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
          {this.props.titulo }
          </a>
        </nav>
    );
  }
}

export default Navegador;
