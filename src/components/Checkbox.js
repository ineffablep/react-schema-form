import React from "react";
import PropTypes from "prop-types";
import Switch from "./Switch";

const Checkbox = props => {
  if (
    props.theme === "ios" ||
    props.theme === "win" ||
    props.theme === "android"
  ) {
    return <Switch {...props} />;
  }
  const {
    id,
    theme,
    inputStyle,
    inputClass,
    onValueChange,
    labelClass,
    labelStyle,
    labelText,
    showBorder,
    showRoundBorder,
    noBorder,
    showAnimation,
    borderClass,
    borderStyle,
    floatLabel,
    ...rest
  } = props;
  return (
    <p>
      <input
        id={id}
        className={inputClass + " w3-check"}
        style={inputStyle}
        {...rest}
        onChange={event => onValueChange(id, event.target.checked)}
      />
      <label htmlFor={id} className={labelClass} style={labelStyle}>
        {labelText}
      </label>
    </p>
  );
};

Checkbox.propTypes = {
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
  theme: PropTypes.string
};

Checkbox.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "ios",
  onChange: () => {}
};

export default Checkbox;
