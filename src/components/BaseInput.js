import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Input from "./Input";
import FloatInput from "./FloatInput";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
/**
 * React Input  automatically check and render Switch, Radio, Checkbox and Input depending on type
 * @param {*} props 
 */
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
  /**
   * Label Text to display
   */
  labelText: PropTypes.string,
  /**
   * Style label with css class
   */
  labelClass: PropTypes.string,
  /**
   * Style Label with React style object
   */
  labelStyle: PropTypes.object,
  /**
   * Style input with css class
   */
  inputClass: PropTypes.string,
  /**
   *  Style Input with  React Style Object
   */
  inputStyle: PropTypes.object,
  /**
   * Show bordered input
   */
  showBorder: PropTypes.bool,
  /**
   * Set true show rounded border as in iOS
   */
  showRoundBorder: PropTypes.bool,
  /**
   * Set true remove Border from input box 
   */
  noBorder: PropTypes.bool,
  /**
   * Set true animate input
   */
  showAnimation: PropTypes.bool,
  /**
   * Float Input / Material Design or Android Input  Border bottom css Class
   */
  borderClass: PropTypes.string,
  /**
   * Float Input / Material Design or Android Input  Border bottom React Style Object
   */
  borderStyle: PropTypes.object,
  /**
   * Input Unique Identifier , 
   * Id will be passed  with OnChange / OnBlur events to Uniquely Identify from Multiple Inputs
   */
  id: PropTypes.string.isRequired,
  /**
   * On  value change callback Function raised for onBlur and onChange, this is a required property
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * Input theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme
   */
  theme: PropTypes.string,
  /**
   * Radio Button CSS Class Name to customize
   */
  radioBtnClassName: PropTypes.string,
  /**
   * Radio Button Style to customize
   */
  radioBtnStyle: PropTypes.object,
  /**
   * Radio button Text Css Class 
   */
  radioTextClassName: PropTypes.string,
  /**
   * Radio Button Text Style
   */
  radioTextStyle: PropTypes.object,
  /**
  * Radio Buttons Group Name
  */
  radioGroupName: PropTypes.string,
  /**
   * Array of Radio buttons with {value:'',disabled:'',text:''} objects in it
   */
  radioOptions: PropTypes.array,
  /**
   * Default Selected Radio Value
   */
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
  theme: ""
};

export default BaseInput;
