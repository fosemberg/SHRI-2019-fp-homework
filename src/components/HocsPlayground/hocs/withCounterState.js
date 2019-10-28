import {withHandlers, withState} from 'recompose';

export default withState({
    onClick: ({setOuterColor, incrementOn, counter}) => () => {
      incrementOn();
      console.log(counter);
      setOuterColor('blue');
    },
});
