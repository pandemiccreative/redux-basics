import { expect } from 'chai';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { counter } from '../src/reducer';

const store = createStore(counter);

describe('store', () => {

  it('handles getState()', () => {
    expect(store.getState()).to.equal(fromJS([0]))
  });

  it('handles dispatch()', () => {
    store.dispatch({type: 'INCREMENT_COUNTER', index:0});
    expect(store.getState()).to.equal(fromJS([1]));
  });

});
