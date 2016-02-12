import { counter, todoApp } from '../src/reducer';
import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

describe('Counter Reducer', () => {

  it('handles INCREMENT_COUNTER', () => {
    const state = List([0, 10, 20]);
    const action = {type: 'INCREMENT_COUNTER', index: 1};
    const nextState = counter(state, action);
    expect(nextState).to.equal(fromJS([0, 11, 20]));
  });

  it('handles DECREMENT_COUNTER', () => {
    const state = List([0, 10, 20]);
    const action = {type: 'DECREMENT_COUNTER', index: 1};
    const nextState = counter(state, action);
    expect(nextState).to.equal(fromJS([0, 9, 20]));
  });

  it('handles ADD_COUNTER', () => {
    const state = List([]);
    const action = {type: 'ADD_COUNTER'};
    const nextState = counter(state, action);
    expect(nextState).to.equal(fromJS([0]));
  });

  it('handles REMOVE_COUNTER', () => {
    const state = List([0, 10, 20]);
    const action = {type: 'REMOVE_COUNTER', index: 1};
    const nextState = counter(state, action);
    expect(nextState).to.equal(fromJS([0, 20]));
  })

  it('handles unknown type', ()=> {
    const state = 1;
    const action = {type: 'UNKNOWN'};
    const nextState = counter(state, action);
    expect(nextState).to.equal(1);
  });

});

describe('Todo Reducer', () => {

  it('handles ADD_TODO', () => {
    const state = {
      todos: List([
        Map({
          id: 0,
          text: 'Learn Redux',
          completed: false
        })
      ]),
      visibilityFilter: 'SHOW_ALL'
    };
    const action = {
      type: 'ADD_TODO',
      id: 1,
      text: 'Learn Immutable'
    };
    const nextState = todoApp(state, action);

    expect(nextState === fromJS({
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Learn Immutable',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }));
  })

  it('handles TOGGLE_TODO', () => {
    const state = {
      todos: List([
        Map({
          id: 0,
          text: 'Learn Redux',
          completed: false
        }),
        Map({
          id: 1,
          text: 'Learn Immutable',
          completed: false
        })
      ]),
      visibilityFilter: 'SHOW_ALL'
    };
    const action = {type: 'TOGGLE_TODO', id: 0}
    const nextState = todoApp(state, action);

    expect(nextState === fromJS({
      todos: [
        {
          id: 0,
          text: 'Learn Redux',
          completed: true
        },
        {
          id: 1,
          text: 'Learn Immutable',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }));
  });

  it('handles SET_VISIBILITY_FILTER', () => {
    const state = {
      todos:List([
        Map({
          id: 0,
          text: 'Learn Redux',
          completed: false
        })
      ]),
      visibilityFilter: 'SHOW_ALL'
    };
    const action = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'}
    const nextState = todoApp(state, action);

    expect(nextState === fromJS({
      todos:[
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_COMPLETED'
    }));
  });

});
