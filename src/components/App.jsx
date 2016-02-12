import React from 'react';

const App = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>+</button><button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
});

export default App;
