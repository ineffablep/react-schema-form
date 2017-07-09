import React from "react";
import PropTypes from "prop-types";
import Switch from "./Switch";
/**
 * 
 * React Checkbox component that support iOS, Android and Windows style switches
 * Default style is Android
 * To Override set theme:'win' for Windows theme , theme:'ios' for IOS theme 
 * TO show HTML checkbox set theme:'browser'
 * Set all  HTML5 input checkbox attributes by passing with props
 * @class Checkbox
 * @extends {React.Component}
 */
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      checked: this.props.checked
    };
  }

  onChange(event) {
    this.setState({ checked: event.target.checked });
    this.props.onValueChange(this.props.id, event.target.checked);
  }

  render() {
    if (
      this.props.theme === "ios" ||
      this.props.theme === "win" ||
      this.props.theme === "android"
    ) {
      return <Switch {...this.props} />;
    }
    const {
      id,
      theme,
      inputStyle,
      inputClass,
      onValueChange,
      labelClass,
      labelStyle,
      labelText,
      checked,
      ...rest
    } = this.props;
    return (
      <p>
        <label
          htmlFor={id}
          className={labelClass + " m-r-10"}
          style={labelStyle}
        >
          {labelText}
        </label>
        <input
          id={id}
          type="checkbox"
          className={inputClass + " w3-check"}
          style={inputStyle}
          checked={this.state.checked}
          {...rest}
          onChange={this.onChange}
        />
      </p>
    );
  }
}

Checkbox.propTypes = {
  /**
  * Checkbox Label Content/ Text to display
  */
  labelText: PropTypes.string,
  /**
   * Checkbox label Css Class
   */
  labelClass: PropTypes.string,
  /**
   * Checkbox label Style Object to set inline styles
   */
  labelStyle: PropTypes.object,
  /**
   * CheckBox input css class
   */
  inputClass: PropTypes.string,
  /**
   * Checkbox input Style to set inline style
   */
  inputStyle: PropTypes.object,
  /**
   * On Check value change callback Function, this is a required property
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * Button theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme , browser to show HTML5 checkbox
   */
  theme: PropTypes.string
};

Checkbox.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "android",
  onValueChange: () => {}
};

export default Checkbox;
