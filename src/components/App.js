import React, { Component } from 'react';
import Editor from './Editor';
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
  super(props);

  this.state = {

  }
}

componentWillMount() {
}
  render() {
    return (
      <div className="App">
        <Editor />
        <Calendary />
      </div>
    );
  }
}

export default App;
