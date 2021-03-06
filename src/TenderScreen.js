import React from "react";
import "./TenderScreen.css";
import { connect } from "react-redux";

class TenderScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      newState: "tender",
      newSubstate: "initial"
    };
    this.onPay = this.pay;
  }

  onBack = () => {
    this.props.history.push("/Item"); // Navigate to Item screen
  };

  TenderComplete = () => {
    this.props.dispatch({
      type: "PAYCOMPLETE",
      payload: { newState: "welcome", newSubstate: "initial", itemCount: 0 }
    });
    this.props.history.push("/"); // Navigate to Welcome screen
  };

  pay = () => {
    this.setState({
      newState: "tender",
      newSubstate: "added"
    });
  };

  render() {
    return (
      <div>
        <div className="TenderScreen">
          <h1>Tender Screen</h1>
          <p>
            State={this.state.newState} Substate={this.state.newSubstate}
          </p>
          <button id="pay" onClick={this.onPay}>
            Pay
          </button>
        </div>
        <div className="Footer">
          <button id="back" onClick={this.onBack}>
            Back
          </button>
          <button
            id="tenderComplete"
            disabled={
              this.state.newState === "tender" &&
              this.state.newSubstate !== "added"
            }
            onClick={this.TenderComplete}
          >
            Tender Complete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapDispatchToProps)(TenderScreen);
