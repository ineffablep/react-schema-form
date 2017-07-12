var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "onChange",
    value: function onChange(event) {
      this.setState({ checked: event.target.checked });
      this.props.onValueChange(this.props.id, event.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          inputStyle = _props.inputStyle,
          inputClass = _props.inputClass,
          onValueChange = _props.onValueChange,
          labelClass = _props.labelClass,
          labelStyle = _props.labelStyle,
          labelText = _props.labelText,
          showBorder = _props.showBorder,
          showRoundBorder = _props.showRoundBorder,
          noBorder = _props.noBorder,
          showAnimation = _props.showAnimation,
          borderClass = _props.borderClass,
          borderStyle = _props.borderStyle,
          floatLabel = _props.floatLabel,
          theme = _props.theme,
          checked = _props.checked,
          rest = _objectWithoutProperties(_props, ["id", "inputStyle", "inputClass", "onValueChange", "labelClass", "labelStyle", "labelText", "showBorder", "showRoundBorder", "noBorder", "showAnimation", "borderClass", "borderStyle", "floatLabel", "theme", "checked"]);

      return React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          { htmlFor: id, className: labelClass, style: labelStyle },
          labelText
        ),
        React.createElement(
          "label",
          { className: "switch" },
          React.createElement("input", Object.assign({
            type: "checkbox",
            checked: this.state.checked
          }, rest, {
            id: id,
            onChange: this.onChange
          })),
          React.createElement("span", {
            className: "switch-btn " + inputClass + " " + theme,
            style: inputStyle
          })
        )
      );
    }
  }]);

  return Switch;
}(React.Component);

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
  onValueChange: function onValueChange() {}
};

export default Switch;