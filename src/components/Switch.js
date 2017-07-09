import React from "react";
import PropTypes from "prop-types";
/**
 * 
 * Switch  component support iOS, Windows and Android style switches
 * Default theme is Android
 * You can override  by supplying theme : iOS or win
 * @class Switch
 * @extends {React.Component}
 */
class Switch extends React.Component {
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
    const {
      id,
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
      borderClass,
      borderStyle,
      floatLabel,
      theme,
      checked,
      ...rest
    } = this.props;
    return (
      <p>
        <label htmlFor={id} className={labelClass} style={labelStyle}>
          {labelText}
        </label>

        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.checked}
            {...rest}
            id={id}
            onChange={this.onChange}
          />
          <span
            className={"switch-btn " + inputClass + " " + theme}
            style={inputStyle}
          />
        </label>
      </p>
    );
  }
}

Switch.propTypes = {
  /**
   * Label Text to display
   */
  labelText: PropTypes.string,
  /**
   * Style label with css className by supplying labelClass 
   */
  labelClass: PropTypes.string,
  /**
   * Override labelStyle by supplying labelStyle
   */
  labelStyle: PropTypes.object,
  /**
   * Style input with css className by supplying inputClass 
   */
  inputClass: PropTypes.string,
  /**
   * Override Switch Style by supplying inputStyle
   */
  inputStyle: PropTypes.object,
  /**
   * On Switch value change callback Function, this is a required property
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * Button theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme
   */
  theme: PropTypes.string
};

Switch.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "android",
  onValueChange: () => {}
};

export default Switch;
