import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { counter, todoApp } from './reducer';
import App from './components/App';
import Todo from './components/Todo';

const counterStore = createStore(counter);
const renderCounter = () => {
  ReactDOM.render(
    <App value={counterStore.getState()}
         onIncrement={() => {counterStore.dispatch({type: 'INCREMENT_COUNTER', index: 0})}}
         onDecrement={() => {counterStore.dispatch({type: 'DECREMENT_COUNTER', index: 0})}} />,
    document.getElementById('app')
  );
};
counterStore.subscribe(renderCounter);
renderCounter();

const todoStore = createStore(todoApp);
// console.log(todoStore.getState().visibilityFilter);
const renderTodo = () => {
  ReactDOM.render(
    <Todo dispatch={todoStore.dispatch}
          {...todoStore.getState()} />,
    document.getElementById('todo')
  );
};
todoStore.subscribe(renderTodo);
renderTodo();
