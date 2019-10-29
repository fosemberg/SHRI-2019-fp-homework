/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose, withHandlers} from 'recompose';
import BaseButton from './BaseButton';
import withOnClickDecreaseCounter from "../hocs/withOnClickDecreaseCounter";
import withCounter from "../hocs/withCounter";
import withShowCounter from "../hocs/withShowCounter";
import withSize from "../hocs/withSize";
import withSmallSize from "../hocs/withSmallSize";
import withDefaultColor from "../hocs/withDefaultColor";

const withResetCounterOnZero = withHandlers({
  onClick: ({
              reset, counter, onClick = () => {
    }
            }) => () => {
    onClick();
    counter === 1 && reset();
  },
});

const withSetColorOnCounter = (color = 'orange', counter = 1) =>
  withHandlers({
    onClick: ({
                setOuterColor, setInnerColor, counter: currentCounter, onClick = () => {
      }
              }) => () => {
      onClick();
      const setColor = color => {
        setInnerColor(color);
        setOuterColor(color);
      }
      currentCounter === counter && setColor(color);
    },
  });

export default compose(
  withSmallSize,
  withDefaultColor,
  withCounter(5),
  withOnClickDecreaseCounter,
  withResetCounterOnZero,
  withSetColorOnCounter(),
  withShowCounter('top'),
)(BaseButton)
