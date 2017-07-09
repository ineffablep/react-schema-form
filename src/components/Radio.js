import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
/**
 * 
 * React Radio Component , Pass radio Options for Group of Radio Buttons
 * @class Radio
 * @extends {React.Component}
 */
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.defaultValue };
    this.onRaidoChange = this.onRaidoChange.bind(this);
  }

  onRaidoChange(e) {
    this.setState({ checked: e.currentTarget.value });
    this.props.onValueChange(e.currentTarget.name, e.currentTarget.value);
  }

  render() {
    const {
      radioBtnClassName,
      radioBtnStyle,
      radioTextClassName,
      radioTextStyle,
      radioGroupName,
      labelClass,
      labelStyle,
      labelText,
      theme,
      radioOptions
    } = this.props;
    let btnClass = "btn w3-ripple ";
    if (theme && theme === "ios")
      btnClass = btnClass + " w3-border w3-round-large";
    if (theme && theme === "android")
      btnClass = btnClass + "  w3-white w3-border w3-border-green";
    btnClass = btnClass + " " + radioBtnClassName;

    return (
      <p className="radio-btn">
        <label className={labelClass + " label"} style={labelStyle}>
          {labelText}
        </label>
        {radioOptions.map(radio => {
          return (
            <label key={radio.value} className={btnClass} style={radioBtnStyle}>
              <input
                type="radio"
                name={radioGroupName}
                checked={this.state.checked === radio.value}
                value={radio.value}
                onChange={this.onRaidoChange}
                disabled={radio.disabled}
              />
              <span className={radioTextClassName} style={radioTextStyle}>
                {radio.text}
              </span>
            </label>
          );
        })}
      </p>
    );
  }
}

Radio.propTypes = {
  /**
  *  Label Content/ Text to display
  */
  labelText: PropTypes.string,
  /**
   * Label Css Class
   */
  labelClass: PropTypes.string,
  /**
   * Label Style
   */
  labelStyle: PropTypes.object,
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
  radioGroupName: PropTypes.string.isRequired,
  /**
   * Array of Radio buttons with {value:'',disabled:'',text:''} objects in it
   */
  radioOptions: PropTypes.array.isRequired,
  /**
   * Button theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme , browser to show HTML5 checkbox
   */
  theme: PropTypes.string,
  /**
   * On Radio value change callback Function, this is a required property
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * Default Selected Radio Value
   */
  defaultValue: PropTypes.string
};

Radio.defaultProps = {
  labelText: "Label",
  labelClass: "",
  labelStyle: {},
  radioBtnClassName: "",
  radioBtnStyle: {},
  radioTextClassName: "",
  radioTextStyle: {},
  radioGroupName: uuid.v4(),
  theme: "android",
  defaultValue: "",
  radioOptions: [],
  onValueChange: () => {}
};

export default Radio;
