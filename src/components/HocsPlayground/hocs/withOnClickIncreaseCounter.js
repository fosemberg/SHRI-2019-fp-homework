import {withHandlers} from 'recompose';
import React from "react";

export default withHandlers({
  onClick: ({increment, onClick = () => {}}) => () => {
    onClick();
    increment();
  },
});