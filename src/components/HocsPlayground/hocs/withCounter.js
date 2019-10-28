import {withHandlers, withState, compose} from 'recompose';

export default compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () =>  setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
)
