import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";
/**
 * Android / Material Design React Input
 * Also Supports Validation onChange and onBlur
 * @class FloatInput
 * @extends {React.Component}
 */
class FloatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: "",
      value: this.props.value
    };
    this.validateInput = this.validateInput.bind(this);
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
      labelText,
      labelStyle,
      inputStyle,
      inputClass,
      borderClass,
      borderStyle,
      onValueChange,
      id,
      type,
      value,
      validateOn,
      validateRules,
      placeholder,
      ...rest
    } = this.props;
    return (
      <p className="float-group">
        <input
          id={id}
          value={this.state.value}
          type={type}
          className={
            inputClass && inputClass !== "" ? inputClass : " float-input"
          }
          style={inputStyle}
          {...rest}
          onChange={this.validateInput}
          onBlur={this.validateInput}
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
          className={borderClass && borderClass !== "" ? borderClass : "bar"}
          style={borderStyle}
        />

        {this.state.validationMessage !== "" &&
          <span className="w3-text-red">
            {" "}{this.state.validationMessage}
          </span>}
      </p>
    );
  }
}

FloatInput.propTypes = {
  /**
   * Input Unique Identifier , 
   * Id will be passed  with OnChange / OnBlur events to Uniquely Identify from Multiple Inputs
   */
  id: PropTypes.string.isRequired,
  /**
   * HTML5 Input Type 
   */
  type: PropTypes.string,
  /**
   * onChange / onBlur Event will fire 
   * Send ID and Changed Value if all Validations are Success
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * If value set to onchange / onblur run Validation before firing onValueChange event
   */
  validateOn: PropTypes.string,
  /**
   * Validation Rules Array
   * [
          {
            rule: "required",
            message: "This field  is required"
          }
        ]
   */
  validateRules: PropTypes.array,
  /**
   * Label Text / Content 
   */
  labelText: PropTypes.string,
  /**
   * Label CSS Class
   */
  labelClass: PropTypes.string,
  /**
   * Label Style React Style Object
   */
  labelStyle: PropTypes.object,
  /**
   * Material Design / Android Input Bottom Border CSS Class appends to default style class.
   * So use !important for override
   */
  borderClass: PropTypes.string,
  /**
   * Material Design / Android Input Bottom Border Style React Object
   */
  borderStyle: PropTypes.object,
  /**
   * Material Design / Android Input  CSS Class appends to default style class.
   * So use !important for override
   */
  inputClass: PropTypes.string,
  /**
   * Material Design / Android Input Style React Object
   */
  inputStyle: PropTypes.object
};

FloatInput.defaultProps = {
  labelText: "Label",
  inputClass: "float-input",
  inputStyle: {},
  labelStyle: {},
  labelClass: "",
  borderClass: "",
  borderStyle: {},
  validateOn: "onblur",
  validateRules: [],
  type: "text",
  onValueChange: () => {}
};

export default FloatInput;
