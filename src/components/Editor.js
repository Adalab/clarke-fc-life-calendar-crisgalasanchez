import React, { Component } from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';


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

  setDay(event){
    let validation = true;
    let date = document.getElementsByName('date');
    let face = document.getElementsByName('face');
    let message = document.getElementsByName('message');

    if( date[0].value == "" ){
      validation = false;
    }

    if(validation){
      let json={
        date:date[0].value,
        face:face[0].value,
        message:message[0].value
      };
      this.props.handler(json);
    }else{
      let error = document.querySelector('.error');
      error.classList.remove('disabled');
      error.classList.remove('enabled');
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="editor">
         <form>
            <div className="day" >
              <label htmlFor="calendary">Fecha</label>
              <input className="input" type="date" name="date" id="calendary" required="true" />
              <p className="error disabled">Debe introducir una fecha</p>
            </div>
            <div>
              <label>Estado</label>
              <input className="selected" type="radio" name="face" value="good" onClick={this.disabledMessage} onChange={this.props.handleOnClickMood} checked/> :)
              <input className="selected" type="radio" name="face" value="bad" onClick={this.disabledMessage} onChange={this.props.handleOnClickMood} /> :(
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea className="input" name="message" id="message" rows="2"  cols="30"  placeholder="¿Por qué es un buen día?" onChange={this.props.handleOnChangeMsg} ></textarea>
            </div>
            <div className="editor__buttons">
              <Link className="link" to="/"><input type="submit" className="button--save" value="GUARDAR" onClick={this.setDay}/></Link>
              <Link className="link" to="/"><button className="button--cancel">Cancelar</button></Link>
            </div>
          </form>
       </div>
    );
  }
}

export default Editor;
