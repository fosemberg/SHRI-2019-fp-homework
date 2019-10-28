/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import React from 'react';
import {compose, withHandlers} from 'recompose';
import BaseButton from './BaseButton';
import withPrimaryColor from "../hocs/withPrimaryColor";
import withOnClickIncreaseCounter from "../hocs/withOnClickIncreaseCounter";
import withCounter from "../hocs/withCounter";

const isOdd = number => number % 2 === 0;

const withOnClickToggleColor = withHandlers({
  onClick: ({setOuterColor, setInnerColor, counter, onClick = () => {}}) => () => {
    onClick();
    const setColor = color => {
      setInnerColor(color);
      setOuterColor(color);
    }
    isOdd(counter)
      ? setColor('green')
      : setColor('gray');
  },
});

const withShowCounterOnLeft =
  (BaseComponent) =>
    props => <BaseComponent {...props}>
      {props.counter}
      {' '}
      {props.children}
    </BaseComponent>

export default compose(
  withPrimaryColor,
  withCounter,
  withOnClickIncreaseCounter,
  withOnClickToggleColor,
  withShowCounterOnLeft,
)(BaseButton)
