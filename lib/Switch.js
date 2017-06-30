function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";

var Switch = function Switch(props) {
  var id = props.id,
      inputStyle = props.inputStyle,
      inputClass = props.inputClass,
      onValueChange = props.onValueChange,
      labelClass = props.labelClass,
      labelStyle = props.labelStyle,
      labelText = props.labelText,
      showBorder = props.showBorder,
      showRoundBorder = props.showRoundBorder,
      noBorder = props.noBorder,
      showAnimation = props.showAnimation,
      borderClass = props.borderClass,
      borderStyle = props.borderStyle,
      floatLabel = props.floatLabel,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ["id", "inputStyle", "inputClass", "onValueChange", "labelClass", "labelStyle", "labelText", "showBorder", "showRoundBorder", "noBorder", "showAnimation", "borderClass", "borderStyle", "floatLabel", "theme"]);

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
        type: "checkbox"
      }, rest, {
        id: id,
        onChange: function onChange(event) {
          return onValueChange(id, event.target.checked);
        }
      })),
      React.createElement("span", {
        className: "switch-btn " + inputClass + " " + theme,
        style: inputStyle
      })
    )
  );
};

Switch.prototype = {
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
  theme: PropTypes.string
};

Switch.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "ios",
  onChange: function onChange() {}
};

export default Switch;