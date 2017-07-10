import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";

/**
 * 
 * React Input that renders based on device o.s theme and validate
 * @class Input
 * @extends {React.Component}
 */
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: "",
      value: this.props.value
    };
    this.validateInput = this.validateInput.bind(this);
  }

  getClass() {
    const {
      showBorder,
      noBorder,
      showAnimation,
      showRoundBorder,
      theme
    } = this.props;
    let inputCls = this.props.inputClass;
    inputCls = inputCls + " w3-input";
    if (showBorder) {
      inputCls = inputCls + " w3-border";
    } else if (showRoundBorder || theme === "ios") {
      inputCls = inputCls + " w3-round-large";
    } else if (noBorder) {
      inputCls = inputCls + " w3-border-0";
    } else if (showAnimation) {
      inputCls = inputCls + " w3-animate-input";
    }
    return inputCls;
  }

  validateInput(e) {
    let value = e.target.value;
    this.setState({ value: value });
    if (
      this.props.validateOn &&
      (this.props.validateOn.trim().toLowerCase() === "onchange" ||
        this.props.validateOn.trim().toLowerCase() === "onblur")
    ) {
      let error = validate(this.props.validateRules, value);
      if (error === "") {
        this.props.onValueChange &&
          this.props.onValueChange(this.props.id, value);
        this.setState({ validationMessage: "" });
      } else {
        this.setState({ validationMessage: error });
      }
    } else {
      this.props.onValueChange &&
        this.props.onValueChange(this.props.id, value);
    }
  }
  render() {
    const {
        labelClass,
        labelStyle,
        labelText,
        inputStyle,
        inputClass,
        showBorder,
        showRoundBorder,
        noBorder,
        showAnimation,
        theme,
        validateOn,
        validateRules,
        onValueChange,
        id,
        type,
        value,
        ...rest
      } = this.props,
      clasName = this.getClass();

    return (
      <p>
        <label htmlFor={id} className={labelClass} style={labelStyle}>
          {labelText}
        </label>
        <input
          id={id}
          className={clasName}
          style={inputStyle}
          type={type}
          value={this.state.value}
          {...rest}
          onChange={this.validateInput}
          onBlur={this.validateInput}
        />
        {this.state.validationMessage !== "" &&
          <span className="w3-text-red">
            {" "}{this.state.validationMessage}
          </span>}
      </p>
    );
  }
}

Input.propTypes = {
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
   * Input Unique Identifier , 
   * Id will be passed  with OnChange / OnBlur events to Uniquely Identify from Multiple Inputs
   */
  id: PropTypes.string.isRequired,
  /**
   * Input type 
   */
  type: PropTypes.string,
  /**
   * Input theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme
   */
  theme: PropTypes.string,
  /**
   * On  value change callback Function raised for onBlur and onChange, this is a required property
   */
  onValueChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  labelText: "Label",
  inputClass: "",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  showBorder: false,
  showRoundBorder: false,
  noBorder: false,
  showAnimation: false,
  type: "text",
  theme: "android"
};

export default Input;
