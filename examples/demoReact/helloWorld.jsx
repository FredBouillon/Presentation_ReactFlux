// helloWorld.jsx
var HelloWorld = React.createClass({
	getInitialState: function() {
		return {
			name: 'Euricom'
		}
	},
  render: function(){
    return (
    	<div>
				<h1>Hello {this.state.name}</h1>
				<input type="text" value={this.state.name} onChange={this._handleChange}/>
    	</div>
      
    )
  },

  _handleChange: function(e) {
		this.setState({
			name: e.target.value
		})
  }
});

React.render(<HelloWorld />, document.getElementById('app'));