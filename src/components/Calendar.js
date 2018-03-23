import React, { Component } from 'react';
import {Render} from 'react-dom';
import {Router, Route, Link, Switch} from 'react-router-dom'


class Calendar extends Component {
  constructor(props) {
    super(props);

    this.paintSmileys= this.paintSmileys.bind(this);
  }

  paintSmileys(){
    var data = this.props.data;
    if(data != null && data != undefined && data.length > 0){
      data = JSON.parse(data);
      return (
  			<ul className="list">{
  				data.map(
  					day => <li className="day"> {JSON.parse(day).date} </li>
  				)
  			}
  			</ul>
      );
    }
  }

  render() {
    return (
      <div className="calendar">
        <Link to="/editor" >+</Link>
        <div className="smileys">
        {this.paintSmileys()}
        </div>
      </div>
    );
  }
}

export default Calendar;
