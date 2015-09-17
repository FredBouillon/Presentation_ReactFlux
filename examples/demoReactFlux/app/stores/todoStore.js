var AppDispatcher = require('../dispatcher/AppDispatcher');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  list: []
};

var _addItem = function(item){
  _store.list.push(item);
};

var _removeItem = function(index){
  _store.list.splice(index, 1);
}

var todoStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
  getListCounter: function() {
    return _store.list.length;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case 'ADD_ITEM':
      _addItem(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    case 'REMOVE_ITEM':
      _removeItem(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = todoStore;
