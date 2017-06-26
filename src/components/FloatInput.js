import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";

class FloatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: ""
    };
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(e) {
    let value = e.target.value;
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
      labelText,
      placeholder,
      onValueChange,
      inputClass,
      inputStyle,
      labelStyle,
      labelClass,
      showBorder,
      theme,
      showRoundBorder,
      noBorder,
      showAnimation,
      floatLabel,
      borderClass,
      validateOn,
      validateRules,
      borderStyle,
      id,
      ...rest
    } = this.props;
    return (
      <p className="float-group">
        <input
          id={id}
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
          className={
            borderClass && borderClass !== "" ? borderClass : "bar"
          }
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
  labelText: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  borderClass: PropTypes.string,
  inputStyle: PropTypes.object,
  borderStyle: PropTypes.object,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

FloatInput.defaultProps = {
  labelText: "Label",
  inputClass: "float-input",
  inputStyle: {},
  labelStyle: {},
  labelClass: "w3-text-theme",
  borderClass: "w3-theme",
  borderStyle: {},
  onChange: () => {},
  onBlur: () => {}
};

export default FloatInput;
