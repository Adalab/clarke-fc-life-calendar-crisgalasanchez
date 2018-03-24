import React, { Component } from 'react';
import Editor from './Editor';
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.handlerEditor= this.handlerEditor.bind(this);
    this.handleOnClickMood = this.handleOnClickMood.bind(this);
    this.handleOnChangeMsg = this.handleOnChangeMsg.bind(this);
    this.state = {
      calendarData: [],
      moodValue: '',
      msgValue: ''
  	}
  }

  handleOnClickMood (e) {
      const moodValue = e.target.value;
      this.setState({
        moodValue: moodValue
      })
    }

    handleOnChangeMsg (e) {
      const msgValue = e.target.value;
      this.setState({
        msgValue: msgValue
      })
    }
    handlerEditor(json){
      let registry = localStorage.getItem("registry");
      if(registry == null){
        registry = new Array();
      }else{
        registry = JSON.parse(registry);
      }
      registry.push(JSON.stringify(json));
      localStorage.setItem("registry",JSON.stringify(registry));
      this.setState({
        calendarData: JSON.stringify(registry)
      });
    }
  componentWillMount() {
    let registry = localStorage.getItem("registry");
    if(registry != null){
      this.setState({
        calendarData: registry
      });
    }
  }



  render() {
    return (
      <div className="App">
        <Switch>
					<Route exact path='/' render={ () => <Calendar data={this.state.calendarData}/> } />
					<Route path='/editor' render={ () => <Editor
              handler={this.handlerEditor}
              moodValue = {this.state.moodValue}
              msgValue = {this.state.msgValue}
              handleOnClickMood = {this.handleOnClickMood}
              handleOnChangeMsg = {this.handleOnChangeMsg}/> } />
				</Switch>
      </div>
    );
  }
}

export default App;
