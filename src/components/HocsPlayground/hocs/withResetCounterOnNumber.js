import {withHandlers} from "recompose";

export default (number = 0) => withHandlers({
  onClick: ({
              reset, counter, onClick = () => {
    }
            }) => () => {
    onClick();
    counter === number && reset();
  },
});