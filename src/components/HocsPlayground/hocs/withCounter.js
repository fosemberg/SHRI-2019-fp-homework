import {withHandlers, withState, compose} from 'recompose';

export default (initialState = 0) => compose(
  withState('counter', 'setCounter', initialState),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () =>  setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(initialState)
  })
)
