var React = require('react');
var todoStore = require('../stores/todoStore');

var Counter = React.createClass({
  getInitialState: function(){
    return {
      counter: todoStore.getListCounter()
    }
  },
  componentWillMount: function(){
    todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    todoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
		this.setState({
			counter: todoStore.getListCounter()
		})
  },

  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3" style={{'textAlign': 'center'}}>
        <div className="col-sm-12">
      	 {this._renderCounter()}
        </div>
      </div>
    )
  },

  _renderCounter: function() {
  	if (this.state.counter > 0) {
  		return <p>Items: {this.state.counter}</p>
  	}
  	return <p>No active items</p>
  }
});

module.exports = Counter;

