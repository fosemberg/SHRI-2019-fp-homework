/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withOnClickDecreaseCounter from "../hocs/withOnClickDecreaseCounter";
import withCounter from "../hocs/withCounter";
import withShowCounter from "../hocs/withShowCounter";
import withSmallSize from "../hocs/withSmallSize";
import withDefaultColor from "../hocs/withDefaultColor";
import withResetCounterOnNumber from "../hocs/withResetCounterOnNumber";
import withSetColorOnNumber from "../hocs/withSetColorOnNumber";

export default compose(
  withSmallSize,
  withDefaultColor,
  withCounter(5),
  withOnClickDecreaseCounter,
  withResetCounterOnNumber(1),
  withSetColorOnNumber(),
  withShowCounter('top'),
)(BaseButton)
