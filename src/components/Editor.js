import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom'


class Editor extends Component {
  constructor(props) {
    super(props);

    this.setDay= this.setDay.bind(this);
  }

  setDay(){
    //Validar que los datos del formulario estan completos y/o correctos
    var json={
      date:"12/12/12",
      face:"1",
      message:"prueba"
    };
    this.props.handler(json);
  }

  render() {
    return (
      <div className="editor">
         <form>
            <div>
              <label for="calendary">Fecha</label>
              <input type="date" name="day" id="calendary" value="" />
            </div>
            <div>
              <label>Estado</label>
              <input type="radio" name="smiley" value="good" checked={true}/> :)
              <input type="radio" name="smiley" value="bad" /> :(
            </div>
            <div>
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" rows="2" cols="30" placeholder="¿Por qué es un buen día?"></textarea>
            </div>
            <button className="buttonSave" onClick={this.setDay}>Guardar</button>
            <Link to="/"><button className="buttonCancel">Cancelar</button></Link>
          </form>
       </div>
    );
  }
}

export default Editor;
