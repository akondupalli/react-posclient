import React from "react";
import "./ItemScreen.css";
import { connect } from "react-redux";

class ItemScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newState: "item",
      newSubstate: "initial",
      itemCount: props.itemCount
    };
    this.onAddItem = this.addItem;
    this.onRemoveItem = this.removeItem;
    this.returnButtonText = this.state.itemCount === 0 ? "Back" : "Cancel";
  }

  onBack = () => {
    if (this.state.itemCount > 0) {
      let canCancel = window.confirm("Do you want to cancel current cart?");
      if (!canCancel) {
        return;
      }
    }
    this.props.dispatch({
      type: "CANCEL",
      payload: { newState: "welcome", newSubstate: "initial", itemCount: 0 }
    });
    this.props.history.push("/"); // Navigate to Welcome screen
  };

  onTotals = () => {
    this.props.dispatch({
      type: "TOTALS",
      payload: {
        newState: this.state.newState,
        newSubstate: this.state.newSubstate,
        itemCount: this.state.itemCount
      }
    });
    this.props.history.push("/Tender"); // Navigate to Tender screen
  };

  addItem = () => {
    this.returnButtonText = "Cancel";
    // this.setState is always recommended while updating the state instead of
    // directly updating the state like this.state = {'key': 'value'}
    this.setState({
      newState: "item",
      newSubstate: "added",
      itemCount: this.state.itemCount + 1
    });
  };

  removeItem = () => {
    if (this.state.itemCount === 1) {
      this.returnButtonText = "Back";
    }
    this.setState({
      newState: "item",
      newSubstate: "removed",
      itemCount: this.state.itemCount - 1
    });
  };

  updateState = () => {
    this.setState({
      newState: "item",
      newSubstate: "initial",
      itemCount: this.props.itemCount
    });
  };
  render() {
    return (
      <div>
        <div className="ItemScreen">
          <h1>Item Screen</h1>
          <p>
            State={this.state.newState} Substate={this.state.newSubstate}
          </p>
          <p>Item Count={this.state.itemCount}</p>
          <button id="addItem" onClick={this.onAddItem}>
            AddItem
          </button>
          <button
            id="removeItem"
            disabled={this.state.itemCount === 0}
            onClick={this.onRemoveItem}
          >
            RemoveItem
          </button>
        </div>
        <div className="Footer">
          <button id="back" onClick={this.onBack}>
            {this.returnButtonText}
          </button>
          <button
            id="totals"
            disabled={this.state.itemCount === 0}
            onClick={this.onTotals}
          >
            Finish&Pay
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemScreen);
