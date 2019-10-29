/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose, withHandlers} from 'recompose';
import BaseButton from './BaseButton';
import withLargeSize from "../hocs/withLargeSize";
import withPrimaryColor from "../hocs/withPrimaryColor";
import withCounter from "../hocs/withCounter";
import withOnClickDecreaseCounter from "../hocs/withOnClickDecreaseCounter";
import React from "react";
import withResetCounterOnNumber from "../hocs/withResetCounterOnNumber";
import withSetColorOnNumber from "../hocs/withSetColorOnNumber";

const withRotateOnCounterChange = (deg = 30) =>
  (BaseComponent) =>
    props =>
      <div
        style={{
          transform: `rotate(${props.counter * deg}deg)`,
          width: 'fit-content'
        }}
      >
        <BaseComponent{...props}>
          {props.children}
        </BaseComponent>
      </div>

const deg = 30;

const colors = [
  'orange',
  'red',
  'blue',
  'green',
  'gray',
  'black',
  'yellow',
];

const getRandomFromArray = (items) => items[Math.floor(Math.random() * items.length)];

export default compose(
  withLargeSize,
  withPrimaryColor,
  withCounter(360 / deg),
  withOnClickDecreaseCounter,
  withResetCounterOnNumber(1),
  withSetColorOnNumber(() => getRandomFromArray(colors)),
  withRotateOnCounterChange(deg),
)(BaseButton)
