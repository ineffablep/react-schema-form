var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";

/**
 * 
 * React Input that renders based on device o.s theme and validate
 * @class Input
 * @extends {React.Component}
 */

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      validationMessage: "",
      value: _this.props.value
    };
    _this.validateInput = _this.validateInput.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: "getClass",
    value: function getClass() {
      var _props = this.props,
          showBorder = _props.showBorder,
          noBorder = _props.noBorder,
          showAnimation = _props.showAnimation,
          showRoundBorder = _props.showRoundBorder,
          theme = _props.theme;

      var inputCls = this.props.inputClass;
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
  }, {
    key: "validateInput",
    value: function validateInput(e) {
      var value = e.target.value;
      this.setState({ value: value });
      if (this.props.validateOn && (this.props.validateOn.trim().toLowerCase() === "onchange" || this.props.validateOn.trim().toLowerCase() === "onblur")) {
        var error = validate(this.props.validateRules, value);
        if (error === "") {
          this.props.onValueChange && this.props.onValueChange(this.props.id, value);
          this.setState({ validationMessage: "" });
        } else {
          this.setState({ validationMessage: error });
        }
      } else {
        this.props.onValueChange && this.props.onValueChange(this.props.id, value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          labelClass = _props2.labelClass,
          labelStyle = _props2.labelStyle,
          labelText = _props2.labelText,
          inputStyle = _props2.inputStyle,
          inputClass = _props2.inputClass,
          showBorder = _props2.showBorder,
          showRoundBorder = _props2.showRoundBorder,
          noBorder = _props2.noBorder,
          showAnimation = _props2.showAnimation,
          theme = _props2.theme,
          validateOn = _props2.validateOn,
          validateRules = _props2.validateRules,
          onValueChange = _props2.onValueChange,
          id = _props2.id,
          type = _props2.type,
          value = _props2.value,
          rest = _objectWithoutProperties(_props2, ["labelClass", "labelStyle", "labelText", "inputStyle", "inputClass", "showBorder", "showRoundBorder", "noBorder", "showAnimation", "theme", "validateOn", "validateRules", "onValueChange", "id", "type", "value"]),
          clasName = this.getClass();

      return React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          { htmlFor: id, className: labelClass, style: labelStyle },
          labelText
        ),
        React.createElement("input", Object.assign({
          id: id,
          className: clasName,
          style: inputStyle,
          type: type,
          value: this.state.value
        }, rest, {
          onChange: this.validateInput,
          onBlur: this.validateInput
        })),
        this.state.validationMessage !== "" && React.createElement(
          "span",
          { className: "w3-text-red" },
          " ",
          this.state.validationMessage
        )
      );
    }
  }]);

  return Input;
}(React.Component);

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