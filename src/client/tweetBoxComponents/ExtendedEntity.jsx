import React from 'react';
import ReactDOM from 'react-dom';

class ExtendedEntity extends React.Component {
  render() {
    let imageWidth = {
        width: '90%'
    }

    if(this.props.extendedEntity==undefined){
        return <div></div>
    } else {
        return (
          <div className="tweet-media">
            <img src={this.props.extendedEntity.media[0].media_url} style={imageWidth} />
          </div>
        );

    }
    x
  }
}

export default ExtendedEntity