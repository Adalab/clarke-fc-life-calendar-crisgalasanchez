import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom'


class Editor extends Component {
  constructor(props) {
    super(props);

    this.setDay= this.setDay.bind(this);
    this.disabledMessage= this.disabledMessage.bind(this);

  }
  disabledMessage(event) {
    let valueMessage = event.target.value;
    let message = document.querySelector('textarea[name="message"]');
    valueMessage == "good" ? message.disabled=false : message.disabled=true;
  }

  setDay(){
    let validation = true;
    let date = document.querySelector('.date');
    let face = document.querySelector('.face');
    let message = document.querySelector('.message');

    let regExp = ''

    if(date.value == "" ){
      validation == false;
    }


    let json={
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
              <input className="date" type="text" name="day" id="calendary"  />
            </div>
            <div>
              <label>Estado</label>
              <input type="radio" name="smiley" value="good" onClick={this.disabledMessage} checked={true}/> :)
              <input type="radio" name="smiley" value="bad" onClick={this.disabledMessage}  /> :(
            </div>
            <div>
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" rows="2"  cols="30"  placeholder="¿Por qué es un buen día?"></textarea>
            </div>
            <Link to="/"><button className="buttonSave" >Guardar</button></Link>
            <Link to="/"><button className="buttonCancel">Cancelar</button></Link>
          </form>
       </div>
    );
  }
}

export default Editor;
