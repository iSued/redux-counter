import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.scss';
import redux from 'redux';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
  count: 0,
};

const incrementValue = () => ({
  type: INCREMENT,
});

const INCREMENT = 'INCREMENT';
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, increment } = this.props;
    console.log({ count, increment });
    return (
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}
//Allow to take what we want froms store
const mapStateToProps = (state) => {
  return state;
};
//
const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(incrementValue());
    },
  };
};

connect()(Counter);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);
