import React from 'react';
import ReactDOM from 'react-dom';
import UsernameCard from './tweetBoxComponents/User.jsx'
import ProfilePic from './tweetBoxComponents/ProfilePic.jsx'
import TweetText from './tweetBoxComponents/TweetText.jsx'
import ExtendedEntity from './tweetBoxComponents/ExtendedEntity.jsx'


class TweetBox extends React.Component {
  render() {
    let userInfo={
        name: this.props.tweetInfo.user.name,
        screenName: this.props.tweetInfo.user.screen_name,
        timePosted: this.props.tweetInfo.created_at
    }

    let yeImage = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314"

    return (
      <div className="row tweetBox">
          <ProfilePic imgURL={yeImage}/>
            <div className="col-md-8 col-sm-8 col-xs-8">
              <UsernameCard usernameInfo={userInfo}/>
              <TweetText tweetText={this.props.tweetInfo.text} />
              <ExtendedEntity extendedEntity={this.props.tweetInfo.extended_entities}/>
          </div>
      </div>
    );
  }
}

export default TweetBox