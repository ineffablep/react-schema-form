import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

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
      radioOptions
    } = this.props;
    return (
      <p className="radio-btn">
          <label className={labelClass + " label"} style={labelStyle}>
            {labelText}
          </label>
          {radioOptions.map(radio => {
            return (
              <label key={radio.value} className={radioBtnClassName + " btn"} style={radioBtnStyle}>
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
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  radioBtnClassName: PropTypes.string,
  radioBtnStyle: PropTypes.object,
  radioTextClassName: PropTypes.string,
  radioTextStyle: PropTypes.object,
  radioGroupName: PropTypes.string,
  radioOptions: PropTypes.array,
  theme: PropTypes.string,
  onValueChange: PropTypes.func,
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
  theme: "ios",
  defaultValue: "",
  radioOptions: [],
  onValueChange: () => {}
};
export default Radio;
