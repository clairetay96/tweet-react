import React from 'react';
import ReactDOM from 'react-dom';

class ProfilePic extends React.Component {
  render() {
    let imageStyle = {
        width: '70%',
        minWidth: '60px',
        borderRadius: '50%'
    }

    return (
      <div className="col-md-3 col-sm-3 col-3 profile-pic">
        <img src={this.props.imgURL} style={imageStyle}/>
      </div>
    );
  }
}

export default ProfilePic