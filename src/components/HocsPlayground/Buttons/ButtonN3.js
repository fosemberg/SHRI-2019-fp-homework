/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import React from 'react';
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withPrimaryColor from "../hocs/withPrimaryColor";
import withOnClickIncreaseCounter from "../hocs/withOnClickIncreaseCounter";
import withCounter from "../hocs/withCounter";

const showCounterOnLeft =
  (BaseComponent) =>
    props => <BaseComponent {...props}>
      {props.counter}
      {' '}
      {props.children}
    </BaseComponent>

export default compose(
  withCounter,
  withOnClickIncreaseCounter,
  withPrimaryColor,
  showCounterOnLeft,
)(BaseButton)
