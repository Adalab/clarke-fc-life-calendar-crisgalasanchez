import React, { Component } from 'react';
import {Render} from 'react-dom';
import {Router, Route, Link, Switch} from 'react-router-dom';
import good from '../images/good.jpg';
import bad from '../images/bad.jpg';


class Calendar extends Component {
  constructor(props) {
    super(props);

    this.paintSmileys= this.paintSmileys.bind(this);
  }

  paintSmileys(){
    let data = this.props.data;
    if(data != null && data != undefined && data.length > 0){
      data = JSON.parse(data);
      return (
  			<ul className="list--mood">
  				{data.map(
  					day =>
              <li className="list--smiley">
                {JSON.parse(day).face == 'good'?<img className="mood"src={good} alt="Good smiley"/>:<img className="mood" src={bad} alt="Bad smiley"/>}
              </li>
  				)}
  			</ul>
      );
    }
  }

  render() {
    return (
      <div className="calendar">
        <Link className="link" to="/editor" ><button className="button--plus" >+</button></Link>
        <div className="smileys">
        {this.paintSmileys()}
        </div>
      </div>
    );
  }
}

export default Calendar;
