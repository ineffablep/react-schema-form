import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => {
  return (
    <p>
      <input
        className={props.inputClass + " w3-check"}
        style={props.inputStyle}
        {...props}
        onChange={event => props.onChange(event.target.checked)}
      />
      <label className={props.labelClass} style={props.labelStyle}>
        {props.labelText}
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
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  onChange: () => {}
};

export default Checkbox;
