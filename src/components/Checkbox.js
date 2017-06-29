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
    ...rest
  } = props;
  return (
    <p>
      <label htmlFor={id} className={labelClass + " m-r-10"} style={labelStyle}>
        {labelText}
      </label>
      <input
        id={id}
        type="checkbox"
        className={inputClass + " w3-check"}
        style={inputStyle}
        {...rest}
        onChange={event => onValueChange(id, event.target.checked)}
      />

    </p>
  );
};

Checkbox.propTypes = {
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  onValueChange: PropTypes.func,
  theme: PropTypes.string
};

Checkbox.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "ios",
  onValueChange: () => {}
};

export default Checkbox;
