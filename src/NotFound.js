import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {

goHome = () => {
  this.props.history.push('/');
}

  render() {
    return(
      <div className="NotFound">
       <h1>404 <br/> Sorry, requested page was not found</h1>
       <button onClick={this.goHome}>Home</button>
      </div>
    )
  }
}


export default NotFound
