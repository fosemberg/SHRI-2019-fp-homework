import {withHandlers, withState, compose} from 'recompose';
import React from "react";

export default (side = 'left') =>
  (BaseComponent) =>
    props => <BaseComponent {...props}>
      {
        side === 'left' ? <span>{props.counter + ' '}</span>
        : side === 'top' ? <div>{props.counter}</div>
        : null
      }
      {props.children}
    </BaseComponent>
