import {withHandlers, withStateHandlers} from 'recompose';
import React from "react";

export default withHandlers({
  onClick: ({decrement, onClick = () => {}}) => () => {
    onClick();
    decrement();
  },
});