import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

const Input = props => {
  return (
    <p>
      <label className={props.labelClass} style={props.labelStyle}>
        {props.labelText}
      </label>
      <input
        {...props}
        className={getClass(props)}
        style={props.inputStyle}
        onChange={e => {
          props.onChange(e.target.value);
        }}
        onBlur={event => props.onBlur(props.id, event.target.value)}
      />
    </p>
  );
};

const getClass = props => {
  let inputCls = props.inputClass;
  if (props.showBorder) {
    inputCls = inputCls + " w3-border";
  }
  if (props.showRoundBorder) {
    inputCls = inputCls + " w3-round-large";
  }
  if (props.noBorder) {
    inputCls = inputCls + " w3-border-0";
  }
  if (props.showAnimation) {
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
  id: uuid.v4(),
  onChange: () => {},
  onBlur: () => {}
};

export default Input;
