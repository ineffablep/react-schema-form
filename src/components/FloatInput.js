import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

const FloatInput = props => {
  let placeholder = props.placeholder ? props.placeholder : props.labelText;
  return (
    <p>
      <input
        className="float-input"
        style={props.inputStyle}
        {...props}
        placeholder={placeholder}
        onChange={e => {
          props.onChange(e.target.value);
        }}
        onBlur={event => props.onBlur(props.id, event.target.value)}
      />
    </p>
  );
};

FloatInput.propTypes = {
  labelText: PropTypes.string,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

FloatInput.defaultProps = {
  labelText: "Label",
  inputClass: "w3-input",
  inputStyle: {},
  id: uuid.v4(),
  onChange: () => {},
  onBlur: () => {}
};

export default FloatInput;
