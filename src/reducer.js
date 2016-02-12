import { combineReducers } from 'redux';
import { List, Map } from 'immutable';

const increment = (state, index) => {
  return state.update(index, (val) => val + 1);
}

const decrement = (state, index) => {
  return state.update(index, (val) => val -1);
}

const addCounter = (state) => {
  return state.push(0);
}

const removeCounter = (state, index) => {
  return state.delete(index);
}

export const counter = (state = List([0]), action) => {
  switch(action.type){
    case 'INCREMENT_COUNTER':
      return increment(state, action.index);
    case 'DECREMENT_COUNTER':
      return decrement(state, action.index);
    case 'ADD_COUNTER':
      return addCounter(state);
    case 'REMOVE_COUNTER':
      return removeCounter(state, action.index);
    default:
      return state;
  }
}

const addTodo = (state, id, text) => {
  return state.push(Map({
    id: id,
    text: text,
    completed: false
  }));
}

const toggleTodo = (state, id) => {
  const index = state.findIndex((val) => val.get('id') === id)
  return state.updateIn([index, 'completed'], (val) => !val);
}

const todos = (state = List([]), action) => {
  switch(action.type){
    case 'ADD_TODO':
      return addTodo(state, action.id, action.text);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id);
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// export const todoApp = (state = Map({}), action) => {
//   return Map({
//     todos: todo(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   });
// };
