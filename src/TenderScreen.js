import React from 'react';
import './TenderScreen.css';

class TenderScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      newState: "tender",
      newSubstate: "initial"
    }
    this.onPay = this.pay;
  }

  onBack = () => {
    this.props.history.push('/Item'); // Navigate to Item screen
  }

  TenderComplete = () => {
    this.props.history.push('/'); // Navigate to Welcome screen
  }

  pay = () =>
  {
    this.setState({
      newState: "tender",
      newSubstate: "added"
    })
  }

  render() {
    return (
      <div>
       <div className="TenderScreen">
          <h1>Tender Screen</h1>
          <p>State={this.state.newState} Substate={this.state.newSubstate}</p>
          <button onClick={this.onPay}>Pay</button>
        </div>
          <div className="Footer">
          <button  onClick={this.onBack}>Back</button>
          <button  disabled={this.state.newState === "tender" &&
              this.state.newSubstate !== "added" }
              onClick={this.TenderComplete}>Tender Complete</button>
          </div>
      </div>
    )
  }
}

export default TenderScreen
