function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Input from "./Input";
import FloatInput from "./FloatInput";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

var BaseInput = function BaseInput(props) {
  var type = props.type,
      inputStyle = props.inputStyle,
      inputClass = props.inputClass,
      onValueChange = props.onValueChange,
      labelClass = props.labelClass,
      labelStyle = props.labelStyle,
      labelText = props.labelText,
      showBorder = props.showBorder,
      showRoundBorder = props.showRoundBorder,
      noBorder = props.noBorder,
      showAnimation = props.showAnimation,
      floatLabel = props.floatLabel,
      borderClass = props.borderClass,
      theme = props.theme,
      validateOn = props.validateOn,
      validateRules = props.validateRules,
      borderStyle = props.borderStyle,
      radioBtnClassName = props.radioBtnClassName,
      radioBtnStyle = props.radioBtnStyle,
      radioTextClassName = props.radioTextClassName,
      radioTextStyle = props.radioTextStyle,
      radioGroupName = props.radioGroupName,
      radioOptions = props.radioOptions,
      defaultValue = props.defaultValue,
      rest = _objectWithoutProperties(props, ["type", "inputStyle", "inputClass", "onValueChange", "labelClass", "labelStyle", "labelText", "showBorder", "showRoundBorder", "noBorder", "showAnimation", "floatLabel", "borderClass", "theme", "validateOn", "validateRules", "borderStyle", "radioBtnClassName", "radioBtnStyle", "radioTextClassName", "radioTextStyle", "radioGroupName", "radioOptions", "defaultValue"]);

  var id = props.id ? props.id : uuid.v4();

  if (props.type === "checkbox") return React.createElement(Checkbox, Object.assign({
    labelClass: labelClass,
    labelText: labelText,
    labelStyle: labelStyle,
    inputStyle: inputStyle,
    inputClass: inputClass,
    onValueChange: onValueChange,
    id: id,
    theme: theme
  }, rest));
  if (type === "radio") return React.createElement(Radio, {
    labelClass: labelClass,
    labelText: labelText,
    labelStyle: labelStyle,
    radioBtnClassName: radioBtnClassName,
    radioBtnStyle: radioBtnStyle,
    radioTextClassName: radioTextClassName,
    radioTextStyle: radioTextStyle,
    radioGroupName: radioGroupName,
    onValueChange: onValueChange,
    radioOptions: radioOptions,
    defaultValue: defaultValue,
    theme: theme
  });
  return floatLabel || theme === "android" ? React.createElement(FloatInput, Object.assign({
    labelClass: labelClass,
    labelText: labelText,
    labelStyle: labelStyle,
    inputStyle: inputStyle,
    inputClass: inputClass,
    borderClass: borderClass,
    borderStyle: borderStyle,
    onValueChange: onValueChange,
    id: id,
    type: type,
    validateOn: validateOn,
    validateRules: validateRules
  }, rest)) : React.createElement(Input, Object.assign({
    labelClass: labelClass,
    labelText: labelText,
    labelStyle: labelStyle,
    inputStyle: inputStyle,
    inputClass: inputClass,
    showBorder: showBorder,
    showRoundBorder: showRoundBorder,
    noBorder: noBorder,
    showAnimation: showAnimation,
    onValueChange: onValueChange,
    theme: theme,
    type: type,
    validateOn: validateOn,
    validateRules: validateRules
  }, rest, {
    id: id
  }));
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
  defaultOptionMessage: PropTypes.string,
  radioBtnClassName: PropTypes.string,
  radioBtnStyle: PropTypes.object,
  radioTextClassName: PropTypes.string,
  radioTextStyle: PropTypes.object,
  radioGroupName: PropTypes.string,
  radioOptions: PropTypes.array,
  defaultValue: PropTypes.string
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