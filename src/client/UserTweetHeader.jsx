import React from 'react';
import ReactDOM from 'react-dom';


class UserTweetHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <p>&#8592;    {this.props.username}</p>
      </div>
    );
  }
}

export default UserTweetHeader