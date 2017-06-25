import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const {
    id,
    inputStyle,
    inputClass,
    onChange,
    onBlur,
    labelClass,
    labelStyle,
    labelText,
    showBorder,
    showRoundBorder,
    noBorder,
    showAnimation,
    floatLabel,
    borderClass,
    theme,
    borderStyle,
    ...rest
  } = props,
    clasName = getClass(
      inputClass,
      showBorder,
      showRoundBorder,
      noBorder,
      theme,
      showAnimation
    );

  return (
    <p>
      <label htmlFor={id} className={labelClass} style={labelStyle}>
        {labelText}
      </label>
      <input
        id={id}
        className={clasName}
        style={inputStyle}
        {...rest}
        onChange={e => {
          onChange(e.target.value);
        }}
        onBlur={event => onBlur(id, event.target.value)}
      />
    </p>
  );
};

const getClass = (
  inputCls,
  showBorder,
  showRoundBorder,
  noBorder,
  theme,
  showAnimation
) => {
  if (inputCls === "") {
    inputCls = "w3-input";
  }
  if (showBorder) {
    inputCls = inputCls + " w3-border";
  }
  if (showRoundBorder || theme === "ios") {
    inputCls = inputCls + " w3-round-large";
  }
  if (noBorder) {
    inputCls = inputCls + " w3-border-0";
  }
  if (showAnimation) {
    inputCls = inputCls + " w3-animate-input";
  }
  return inputCls;
};

Input.propTypes = {
  labelText: PropTypes.string,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  showBorder: PropTypes.bool,
  showRoundBorder: PropTypes.bool,
  noBorder: PropTypes.bool,
  showAnimation: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

Input.defaultProps = {
  labelText: "Label",
  inputClass: "w3-input",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  showBorder: true,
  showRoundBorder: false,
  noBorder: false,
  showAnimation: false,
  onChange: () => {},
  onBlur: () => {}
};

export default Input;
