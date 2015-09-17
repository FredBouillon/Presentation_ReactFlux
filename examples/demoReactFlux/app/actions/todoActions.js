var AppDispatcher = require('../dispatcher/AppDispatcher');

var todoActions = {
  addItem: function(item){
    AppDispatcher.handleAction({
      actionType: 'ADD_ITEM',
      data: item
    });
  },
  removeItem: function(index){
    AppDispatcher.handleAction({
      actionType: 'REMOVE_ITEM',
      data: index
    })
  }
};

module.exports = todoActions;

