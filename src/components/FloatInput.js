import React from "react";
import PropTypes from "prop-types";

const FloatInput = props => {
  const {
    labelText,
    placeholder,
    onChange,
    onBlur,
    inputClass,
    inputStyle,
    labelStyle,
    labelClass,
    showBorder,
    theme,
    showRoundBorder,
    noBorder,
    showAnimation,
    floatLabel,
    borderClass,
    borderStyle,
    id,
    ...rest
  } = props;
  return (
    <div className="float-group">
      <input
        id={id}
        className={
          inputClass && inputClass !== "" ? inputClass : " float-input"
        }
        style={inputStyle}
        {...rest}
        onChange={e => {
          onChange(e.target.value);
        }}
        required={true}
        onBlur={event => onBlur(id, event.target.value)}
      />
      <label
        htmlFor={id}
        className={
          labelClass && labelClass !== "" ? labelClass : "w3-text-theme"
        }
        style={labelStyle}
      >
        {labelText}
      </label>
      <span
        className={
          borderClass && borderClass !== "" ? borderClass : "w3-theme"
        }
        style={borderStyle}
      />
    </div>
  );
};

FloatInput.propTypes = {
  labelText: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  borderClass: PropTypes.string,
  inputStyle: PropTypes.object,
  borderStyle: PropTypes.object,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

FloatInput.defaultProps = {
  labelText: "Label",
  inputClass: "float-input",
  inputStyle: {},
  labelStyle: {},
  labelClass: "w3-text-theme",
  borderClass: "w3-theme",
  borderStyle: {},
  onChange: () => {},
  onBlur: () => {}
};

export default FloatInput;
