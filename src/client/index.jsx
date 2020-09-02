import React from 'react';
import ReactDOM from 'react-dom';
import AllTweets from './AllTweet.jsx'
import NavBar from './NavBar.jsx'
import UserTweetHeader from './UserTweetHeader.jsx'

import tweets from 'tweets'



class App extends React.Component {
  render() {
    return (
      <div>
        <UserTweetHeader username={tweets.tweets[0].user.name}/>
        <NavBar />
        <AllTweets tweets={tweets.tweets}/>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//