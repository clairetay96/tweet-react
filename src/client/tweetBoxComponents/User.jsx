import React from 'react';
import ReactDOM from 'react-dom';

class UsernameCard extends React.Component {
  render() {
    let timePostedStr = this.props.usernameInfo.timePosted
    return (
      <div className="row user-details">
        <div className="col-md-5 col-sm-5 col-5 username">{this.props.usernameInfo.name} <span className="screen-name">{"@" + this.props.usernameInfo.screenName}</span></div>
        <div className="col-md-4 col-sm-4 col-4 offset-md-3 offset-sm-3 offset-3 date">{timePostedStr.slice(4,10) + ", " + timePostedStr.slice(timePostedStr.length - 4,timePostedStr.length)}</div>
      </div>
    );
  }
}

export default UsernameCard