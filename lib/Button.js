import React from "react";
import PropTypes from "prop-types";
/**
 * React Button Component with default theme  Android but it support iOS  and Windows themes as well
 * You can override theme by setting theme prop
 * @param {*} props 
 */
var Button = function Button(props) {
  var buttonText = props.buttonText,
      className = props.className,
      style = props.style,
      onClick = props.onClick,
      preIcon = props.preIcon,
      postIcon = props.postIcon,
      theme = props.theme;

  var btnClass = "w3-button  w3-ripple ";
  if (theme && theme === "ios") btnClass = btnClass + " w3-border w3-round-large";
  if (theme && theme === "android") btnClass = btnClass + "  w3-white w3-border w3-border-green";
  btnClass = btnClass + " " + className;
  return React.createElement(
    "button",
    { className: btnClass, style: style, onClick: onClick },
    React.createElement(
      "i",
      { className: preIcon },
      " "
    ),
    " ",
    buttonText,
    " ",
    React.createElement(
      "i",
      { className: postIcon },
      " "
    )
  );
};

Button.propTypes = {
  /**
   * Text to display as button content , default value is Submit
   */
  buttonText: PropTypes.string,
  /**
   *  Icon for Button content , adds  before buttonText(Content)
   * Please note you have to load respective Icon style sheet  and send only icons that support
   * <i className={preIcon}> </i>  format
   */
  preIcon: PropTypes.string,
  /**
   *  Icon for Button content , adds  after  buttonText(Content)
   * Please note you have to load respective Icon style sheet  and send only icons that support
   * <i className={postIcon}> </i>  format
   */
  postIcon: PropTypes.string,
  /**
   * Button  CSS ClassName, Please note this will be append to default button css class 
   */
  className: PropTypes.string,
  /**
  * Override button style with your custom style object
  * example : let style ={color:'red'}
  */
  style: PropTypes.object,
  /**
   * On Button Click callback Function, this is a required property
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Button theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme
   */
  theme: PropTypes.string
};

Button.defaultProps = {
  buttonText: "Submit",
  className: "w3-green",
  style: {},
  preIcon: "",
  postIcon: "",
  theme: "android"
};

export default Button;