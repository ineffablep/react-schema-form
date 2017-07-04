import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { buttonText, className, style, onClick, preIcon, postIcon , theme } = props;
  let content = "", btnClass= className;
  if (preIcon) content = <i className={preIcon}> </i>;
  if (buttonText) content = content + " " + buttonText;
  if (postIcon) content = content + " " + <i className={postIcon}> </i>;
  if(theme && theme==="ios") btnClass = btnClass+" w3-border w3-round-large"
  return (
    <button
      className={"w3-button  w3-ripple " + btnClass}
      style={style}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  preIcon: PropTypes.string,
  postIcon: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string
};

Button.defaultProps = {
  buttonText: "Submit",
  className: "w3-green",
  style: {},
  preIcon: "",
  postIcon: "",
  theme: "ios"
};

export default Button;
