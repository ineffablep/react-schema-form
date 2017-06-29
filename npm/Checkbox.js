function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import Switch from "./Switch";

var Checkbox = function Checkbox(props) {
  if (props.theme === "ios" || props.theme === "win" || props.theme === "android") {
    return React.createElement(Switch, props);
  }

  var id = props.id,
      theme = props.theme,
      inputStyle = props.inputStyle,
      inputClass = props.inputClass,
      onValueChange = props.onValueChange,
      labelClass = props.labelClass,
      labelStyle = props.labelStyle,
      labelText = props.labelText,
      rest = _objectWithoutProperties(props, ["id", "theme", "inputStyle", "inputClass", "onValueChange", "labelClass", "labelStyle", "labelText"]);

  return React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      { htmlFor: id, className: labelClass + " m-r-10", style: labelStyle },
      labelText
    ),
    React.createElement("input", Object.assign({
      id: id,
      type: "checkbox",
      className: inputClass + " w3-check",
      style: inputStyle
    }, rest, {
      onChange: function onChange(event) {
        return onValueChange(id, event.target.checked);
      }
    }))
  );
};

Checkbox.propTypes = {
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  inputClass: PropTypes.string,
  inputStyle: PropTypes.object,
  onValueChange: PropTypes.func,
  theme: PropTypes.string
};

Checkbox.defaultProps = {
  labelText: "Label",
  inputClass: "w3-check",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  theme: "ios",
  onValueChange: function onValueChange() {}
};

export default Checkbox;