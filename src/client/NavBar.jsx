import React from 'react';
import ReactDOM from 'react-dom';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-inline nav-bar">
        <li className="list-inline-item"><a href="#">Tweets</a></li>
        <li className="list-inline-item"><a href="#">Tweets & Replies</a></li>
        <li className="list-inline-item"><a href="#">Media</a></li>
        <li className="list-inline-item"><a href="#">Likes</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar