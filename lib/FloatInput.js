var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";

var FloatInput = function (_React$Component) {
  _inherits(FloatInput, _React$Component);

  function FloatInput(props) {
    _classCallCheck(this, FloatInput);

    var _this = _possibleConstructorReturn(this, (FloatInput.__proto__ || Object.getPrototypeOf(FloatInput)).call(this, props));

    _this.state = {
      validationMessage: ""
    };
    _this.validateInput = _this.validateInput.bind(_this);
    return _this;
  }

  _createClass(FloatInput, [{
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
      var _props = this.props,
          labelClass = _props.labelClass,
          labelText = _props.labelText,
          labelStyle = _props.labelStyle,
          inputStyle = _props.inputStyle,
          inputClass = _props.inputClass,
          borderClass = _props.borderClass,
          borderStyle = _props.borderStyle,
          onValueChange = _props.onValueChange,
          id = _props.id,
          type = _props.type,
          validateOn = _props.validateOn,
          validateRules = _props.validateRules,
          placeholder = _props.placeholder,
          rest = _objectWithoutProperties(_props, ["labelClass", "labelText", "labelStyle", "inputStyle", "inputClass", "borderClass", "borderStyle", "onValueChange", "id", "type", "validateOn", "validateRules", "placeholder"]);

      return React.createElement(
        "p",
        { className: "float-group" },
        React.createElement("input", Object.assign({
          id: id,
          type: type,
          className: inputClass && inputClass !== "" ? inputClass : " float-input",
          style: inputStyle
        }, rest, {
          onChange: this.validateInput,
          onBlur: this.validateInput
        })),
        React.createElement(
          "label",
          {
            htmlFor: id,
            className: labelClass && labelClass !== "" ? labelClass : "w3-text-theme",
            style: labelStyle
          },
          labelText
        ),
        React.createElement("span", {
          className: borderClass && borderClass !== "" ? borderClass : "bar",
          style: borderStyle
        }),
        this.state.validationMessage !== "" && React.createElement(
          "span",
          { className: "w3-text-red" },
          " ",
          this.state.validationMessage
        )
      );
    }
  }]);

  return FloatInput;
}(React.Component);

FloatInput.propTypes = {
  labelText: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  borderClass: PropTypes.string,
  borderStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
  onValueChange: PropTypes.func,
  validateOn: PropTypes.string,
  validateRules: PropTypes.array
};

FloatInput.defaultProps = {
  labelText: "Label",
  inputClass: "float-input",
  inputStyle: {},
  labelStyle: {},
  labelClass: "w3-text-theme",
  borderClass: "w3-theme",
  borderStyle: {},
  type: "text",
  onValueChange: function onValueChange() {}
};

export default FloatInput;