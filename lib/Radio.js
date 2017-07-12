var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
/**
 * 
 * React Radio Component , Pass radio Options for Group of Radio Buttons
 * @class Radio
 * @extends {React.Component}
 */

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.state = { checked: _this.props.defaultValue };
    _this.onRaidoChange = _this.onRaidoChange.bind(_this);
    return _this;
  }

  _createClass(Radio, [{
    key: "onRaidoChange",
    value: function onRaidoChange(e) {
      this.setState({ checked: e.currentTarget.value });
      this.props.onValueChange(e.currentTarget.name, e.currentTarget.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          radioBtnClassName = _props.radioBtnClassName,
          radioBtnStyle = _props.radioBtnStyle,
          radioTextClassName = _props.radioTextClassName,
          radioTextStyle = _props.radioTextStyle,
          radioGroupName = _props.radioGroupName,
          labelClass = _props.labelClass,
          labelStyle = _props.labelStyle,
          labelText = _props.labelText,
          theme = _props.theme,
          radioOptions = _props.radioOptions;

      var btnClass = "btn w3-ripple ";
      if (theme && theme === "ios") btnClass = btnClass + " w3-border w3-round-large";
      if (theme && theme === "android") btnClass = btnClass + "  w3-white w3-border w3-border-green";
      btnClass = btnClass + " " + radioBtnClassName;

      return React.createElement(
        "p",
        { className: "radio-btn" },
        React.createElement(
          "label",
          { className: labelClass + " label", style: labelStyle },
          labelText
        ),
        radioOptions.map(function (radio) {
          return React.createElement(
            "label",
            { key: radio.value, className: btnClass, style: radioBtnStyle },
            React.createElement("input", {
              type: "radio",
              name: radioGroupName,
              checked: _this2.state.checked === radio.value,
              value: radio.value,
              onChange: _this2.onRaidoChange,
              disabled: radio.disabled
            }),
            React.createElement(
              "span",
              { className: radioTextClassName, style: radioTextStyle },
              radio.text
            )
          );
        })
      );
    }
  }]);

  return Radio;
}(React.Component);

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
  onValueChange: function onValueChange() {}
};

export default Radio;