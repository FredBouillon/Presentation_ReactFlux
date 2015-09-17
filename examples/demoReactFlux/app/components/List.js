var React = require('react');

var List = React.createClass({
  _getStyles: function() {
    return {
      uList: {
        paddingLeft: 0,
        listStyleType: "none"
      },
      listGroup: {
        margin: '5px 0',
        borderRadius: 5
      },
      removeItem: {
        fontSize: 20,
        float: "left",
        position: "absolute",
        top: 12,
        left: 6,
        cursor: "pointer",
        color: "rgb(222, 79, 79)"
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17
      }
    };
  },

  _renderListItems: function() {
    var styles = this._getStyles();
    var self = this;
    return this.props.items.map(function(item, index){
      return (
        <li key={index} className="list-group-item" style={styles.listGroup}>
          <span
            className="glyphicon glyphicon-remove"
            style={styles.removeItem}
            onClick={self.props.remove.bind(null, index)}>
          </span>
          <span style={styles.todoItem}>
            {item}
          </span>
        </li>
      )
    })
  },

  render: function(){
    var styles = this._getStyles();
    return (
      <ul style={styles.uList}>
        {this._renderListItems()}
      </ul>
    )
  }
});

module.exports = List;