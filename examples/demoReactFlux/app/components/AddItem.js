var React = require('react');

var AddItem = React.createClass({
  getInitialState: function() {
    return {
      newItem: ''
    }    
  },

  _handleSubmit: function(e){
    if(e.keyCode === 13){
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      })
    }
  },

  _handleChange: function(e) {
    this.setState({
      newItem: e.target.value
    });
  },

  render: function(){
    return (
      <div>
        <input  type="text" 
                className="form-control" 
                placeholder="New Item" 
                value={this.state.newItem}  
                onChange={this._handleChange}
                onKeyDown={this._handleSubmit}  />
      </div>
    )
  }
});

module.exports = AddItem;