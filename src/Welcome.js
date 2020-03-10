import React from 'react';

class Welcome extends React.Component {

  constructor() {
    super();
    this.state = {
      newState: "welcome",
      newSubstate: "initial"
    }
  }



  onStartTransaction = () => {
    this.props.history.push('/Item'); // Navigate to Item screen
  }

     render() {
       return (
         <div>
           <h1>Welcome Screen</h1>
           <img src={require('./pos.png')} />
           <p>State={this.state.newState} Substate={this.state.newSubstate}</p>
           <button onClick={this.onStartTransaction}>Start Transaction</button>
        </div>
       )
     }

}

export default Welcome
