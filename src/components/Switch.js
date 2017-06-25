import React from "react";
import PropTypes from "prop-types";

const Switch = props => {
  const {
    id,
    inputStyle,
    inputClass,
    onChange,
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
    theme,
    ...rest
  } = props;
  return (
    <p>

      <label htmlFor={id} className={labelClass} style={labelStyle}>
        {labelText}
      </label>

      <label className="switch">
        <input
          type="checkbox"
          {...rest}
          id={id}
          onChange={event => onChange(event.target.checked)}
        />
        <span
          className={"switch-btn " + inputClass + " " + theme}
          style={inputStyle}
        />
      </label>
    </p>
  );
};

Switch.prototype = {
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
  theme: PropTypes.string
};

Switch.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "ios",
  onChange: () => {}
};

export default Switch;
