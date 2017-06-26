import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { buttonText, className, style, onClick } = props;
  return (
    <button
      className={" w3-button w3-green " + className}
      style={style}
      onClick={onClick}
    >
      {buttonText}{" "}
    </button>
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
  className: "",
  style: {}
};

export default Button;
