import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Input from "./Input";
import FloatInput from "./FloatInput";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

const BaseInput = props => {
  const {
    type,
    inputStyle,
    inputClass,
    onValueChange,
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
    validateOn,
    validateRules,
    borderStyle,
    radioBtnClassName,
    radioBtnStyle,
    radioTextClassName,
    radioTextStyle,
    radioGroupName,
    radioOptions,
    defaultValue,
    ...rest
  } = props;
  let id = props.id ? props.id : uuid.v4();

  if (props.type === "checkbox")
    return (
      <Checkbox
        labelClass={labelClass}
        labelText={labelText}
        labelStyle={labelStyle}
        inputStyle={inputStyle}
        inputClass={inputClass}
        onValueChange={onValueChange}
        id={id}
        theme={theme}
        {...rest}
      />
    );
  if (type === "radio")
    return (
      <Radio
        labelClass={labelClass}
        labelText={labelText}
        labelStyle={labelStyle}
        radioBtnClassName={radioBtnClassName}
        radioBtnStyle={radioBtnStyle}
        radioTextClassName={radioTextClassName}
        radioTextStyle={radioTextStyle}
        radioGroupName={radioGroupName}
        onValueChange={onValueChange}
        radioOptions={radioOptions}
        defaultValue={defaultValue}
        theme={theme}
      />
    );
  return floatLabel || theme === "android"
    ? <FloatInput
        labelClass={labelClass}
        labelText={labelText}
        labelStyle={labelStyle}
        inputStyle={inputStyle}
        inputClass={inputClass}
        borderClass={borderClass}
        borderStyle={borderStyle}
        onValueChange={onValueChange}
        id={id}
        type={type}
        validateOn={validateOn}
        validateRules={validateRules}
        {...rest}
      />
    : <Input
        labelClass={labelClass}
        labelText={labelText}
        labelStyle={labelStyle}
        inputStyle={inputStyle}
        inputClass={inputClass}
        showBorder={showBorder}
        showRoundBorder={showRoundBorder}
        noBorder={noBorder}
        showAnimation={showAnimation}
        onValueChange={onValueChange}
        theme={theme}
        type={type}
        validateOn={validateOn}
        validateRules={validateRules}
        {...rest}
        id={id}
      />;
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
  theme: "android"
};

export default BaseInput;
