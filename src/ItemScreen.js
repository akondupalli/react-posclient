import React from 'react';
import './ItemScreen.css';

class ItemScreen extends React.Component {

constructor() {
  super();
  this.state = {
    newState: "item",
    newSubstate: "initial",
    itemCount: 0
  };
  this.onAddItem = this.addItem;
  this.onRemoveItem = this.removeItem;
}

  onBack = () => {
    this.props.history.push('/'); // Navigate to Welcome screen
  }

  onTotals = () => {
     this.props.history.push('/Tender'); // Navigate to Tender screen
  }

  addItem = () => {
     // this.setState is always recommended while updating the state instead of
     // directly updating the state like this.state = {'key': 'value'}
     this.setState({newState: "item",
     newSubstate: "added",
    itemCount: this.state.itemCount+1})
  }

  removeItem = () => {
    this.setState({newState: "item",
    newSubstate: "removed",
    itemCount: this.state.itemCount-1})
  }
  render() {
    return (
      <div>
      <div className="ItemScreen">
         <h1>Item screen</h1>
         <p>State={this.state.newState} Substate={this.state.newSubstate}</p>
         <p>Item Count={this.state.itemCount}</p>
         <button onClick={this.onAddItem}>AddItem</button>
         <button  disabled={this.state.itemCount === 0} onClick={this.onRemoveItem}>RemoveItem</button>
         </div>
         <div className="Footer" >
         <button onClick={this.onBack}>Back</button>
         <button disabled={this.state.itemCount === 0}
         onClick={this.onTotals}>Finish&Pay</button>
         </div>
      </div>
    )
  }
}

export default ItemScreen
