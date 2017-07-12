var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChange",
    value: function onChange(event) {
      this.setState({ checked: event.target.checked });
      this.props.onValueChange(this.props.id, event.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.theme === "ios" || this.props.theme === "win" || this.props.theme === "android") {
        return React.createElement(Switch, this.props);
      }

      var _props = this.props,
          id = _props.id,
          theme = _props.theme,
          inputStyle = _props.inputStyle,
          inputClass = _props.inputClass,
          onValueChange = _props.onValueChange,
          labelClass = _props.labelClass,
          labelStyle = _props.labelStyle,
          labelText = _props.labelText,
          checked = _props.checked,
          rest = _objectWithoutProperties(_props, ["id", "theme", "inputStyle", "inputClass", "onValueChange", "labelClass", "labelStyle", "labelText", "checked"]);

      return React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          {
            htmlFor: id,
            className: labelClass + " m-r-10",
            style: labelStyle
          },
          labelText
        ),
        React.createElement("input", Object.assign({
          id: id,
          type: "checkbox",
          className: inputClass + " w3-check",
          style: inputStyle,
          checked: this.state.checked
        }, rest, {
          onChange: this.onChange
        }))
      );
    }
  }]);

  return Checkbox;
}(React.Component);

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
  onValueChange: function onValueChange() {}
};

export default Checkbox;