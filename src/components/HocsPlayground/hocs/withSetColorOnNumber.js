import {withHandlers} from "recompose";

export default (colorGetter = () => 'orange', number = 1) =>
  withHandlers({
    onClick: (
      {
        setOuterColor,
        setInnerColor,
        counter: currentCounter,
        onClick = () => {}
      }
    ) => () => {
      onClick();
      const setColor = color => {
        setInnerColor(color);
        setOuterColor(color);
      };
      currentCounter === number && setColor(colorGetter());
    },
  });