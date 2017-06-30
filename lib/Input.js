var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      validationMessage: ""
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
      if (inputCls === "") {
        inputCls = "w3-input";
      }
      if (showBorder) {
        inputCls = inputCls + " w3-border";
      }
      if (showRoundBorder || theme === "ios") {
        inputCls = inputCls + " w3-round-large";
      }
      if (noBorder) {
        inputCls = inputCls + " w3-border-0";
      }
      if (showAnimation) {
        inputCls = inputCls + " w3-animate-input";
      }
      return inputCls;
    }
  }, {
    key: "validateInput",
    value: function validateInput(e) {
      var value = e.target.value;
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
          rest = _objectWithoutProperties(_props2, ["labelClass", "labelStyle", "labelText", "inputStyle", "inputClass", "showBorder", "showRoundBorder", "noBorder", "showAnimation", "theme", "validateOn", "validateRules", "onValueChange", "id", "type"]),
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
          type: type
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
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  showBorder: PropTypes.bool,
  showRoundBorder: PropTypes.bool,
  noBorder: PropTypes.bool,
  showAnimation: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
  onValueChange: PropTypes.func
};

Input.defaultProps = {
  labelText: "Label",
  inputClass: "w3-input",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  showBorder: true,
  showRoundBorder: false,
  noBorder: false,
  showAnimation: false,
  type: "text"
};

export default Input;