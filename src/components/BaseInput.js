import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Input from "./Input";
import FloatInput from "./FloatInput";
import Checkbox from "./Checkbox";
const BaseInput = props => {
  if (props.type === "checkbox") return <Checkbox {...props} />;
  return props.floatLabel ? <Input {...props} /> : <FloatInput {...props} />;
};

BaseInput.propTypes = {
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

BaseInput.defaultProps = {
  labelText: "Label",
  inputClass: "",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  placeholder: "",
  showBorder: true,
  showRoundBorder: false,
  noBorder: false,
  showAnimation: false,
  floatLabel: false,
  id: uuid.v4()
};

export default BaseInput;
