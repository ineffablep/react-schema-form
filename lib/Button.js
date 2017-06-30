import React from "react";
import PropTypes from "prop-types";

var Button = function Button(props) {
  var buttonText = props.buttonText,
      className = props.className,
      style = props.style,
      onClick = props.onClick;

  return React.createElement(
    "button",
    {
      className: "w3-button  w3-ripple " + className,
      style: style,
      onClick: onClick
    },
    buttonText
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  buttonText: "Submit",
  className: "w3-green",
  style: {}
};

export default Button;