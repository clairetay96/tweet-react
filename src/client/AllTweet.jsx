import React from 'react';
import ReactDOM from 'react-dom';
import TweetBox from './TweetBox.jsx'


class AllTweets extends React.Component {
  render() {
    let tweetBoxes = this.props.tweets.map((item)=>{
        return <TweetBox tweetInfo={item}/>
    })
    return (
      <div>
        {tweetBoxes}
      </div>
    );
  }
}

export default AllTweets