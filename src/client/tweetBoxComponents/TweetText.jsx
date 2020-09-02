import React from 'react';
import ReactDOM from 'react-dom';

class TweetText extends React.Component {
  render() {
    return (
      <div className="tweet-text">
        <p>{this.props.tweetText}</p>
      </div>
    );
  }
}

export default TweetText