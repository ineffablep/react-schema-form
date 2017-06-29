import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { buttonText, className, style, onClick } = props;
  return (
    <button
      className={" w3-btn  w3-ripple " + className}
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
  className: "w3-green",
  style: {}
};

export default Button;
