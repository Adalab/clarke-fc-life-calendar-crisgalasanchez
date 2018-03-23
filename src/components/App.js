import React, { Component } from 'react';
import Editor from './Editor';
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.handlerEditor= this.handlerEditor.bind(this);

    this.state = {
      calendarData: []
  	}
  }

  componentWillMount() {
    let registry = localStorage.getItem("registry");
    if(registry != null){
      this.setState({
        calendarData: registry
      });
    }
  }

  handlerEditor(json){
    let registry = localStorage.getItem("registry");
    if(registry == null){
      registry = new Array();
    }
    registry.push(JSON.stringify(json));
    localStorage.setItem("registry",JSON.stringify(registry));
    this.setState({
      calendarData: registry
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
					<Route exact path='/' render={ () => <Calendar data={this.state.calendarData}/> } />
					<Route path='/editor' render={ () => <Editor
              handler={this.handlerEditor}/> } />
				</Switch>
      </div>
    );
  }
}

export default App;
