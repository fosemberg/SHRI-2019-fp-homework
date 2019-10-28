import {withHandlers, withStateHandlers} from 'recompose';
import React from "react";
import {all, pipe} from "ramda";

const isOdd = number => number % 2 === 0;

export default withHandlers({
  onClick: ({setOuterColor, setInnerColor, counter, increment}) => () => {
    const setColor = color => {
        setInnerColor(color);
        setOuterColor(color);
    }
    isOdd(counter)
      ? setColor('gray')
      : setColor('green');
    increment();
  },
});