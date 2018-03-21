import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom'


class Editor extends Component {
  constructor(props) {
    super(props);
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
              <input type="radio" name="smiley" value="good" checked/> :)
              <input type="radio" name="smiley" value="bad" /> :(
            </div>
            <div>
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" rows="2" cols="30" placeholder="¿Por qué es un buen día?"></textarea>
            </div>
            <button className="buttonSave">Guardar</button>
            <button className="buttonCancel">Cancelar</button>
          </form>
       </div>
    );
  }
}

export default Editor;
