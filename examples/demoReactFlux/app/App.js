var React = require('react');
var ListContainer = require('./components/ListContainer');
var Counter = require('./components/Counter');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
        <div className="row">
          <Counter />
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)