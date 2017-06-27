import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Input from "./Input";
import FloatInput from "./FloatInput";
import Checkbox from "./Checkbox";
const BaseInput = props => {
  let id = props.id ? props.id : uuid.v4();
  if (props.type === "checkbox") return <Checkbox {...props} id={id} />;
  return props.floatLabel || props.theme === "android"
    ? <FloatInput {...props} id={id} />
    : <Input {...props} id={id} />;
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
  borderClass: PropTypes.string,
  borderStyle: PropTypes.object,
  id: PropTypes.string,
  onValueChange: PropTypes.func,
  theme: PropTypes.string,
  defaultOptionMessage: PropTypes.string
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
  theme: "ios"
};

export default BaseInput;
