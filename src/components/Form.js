import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";
import isMobile from "./IsMobile";

const onFieldChange = (id, res) => {};
const getTheme = () => {
  let theme = "browser";
  if (isMobile.iOS()) {
    theme = "ios";
  } else if (isMobile.Android()) {
    theme = "android";
  } else if (isMobile.Windows()) {
    theme = "win";
  }
  console.log(navigator.userAgent);
  console.log(theme);
  return theme;
};
const Form = props => {
  const { schema } = props,
    { component, children } = schema,
    theme = getTheme();
  return (
    <form className="w3-form" {...schema.props}>
      {React.createElement(component, { ...schema.props }, [schema.text])}
      {children.map(comp => {
        if (React.DOM.hasOwnProperty(comp.component)) {
          return React.createElement(comp.component, { ...comp.props }, [
            comp.text
          ]);
        } else {
          return (
            <BaseInput
              {...comp.props}
              key={comp.props.id}
              theme={theme}
              onChange={onFieldChange}
            />
          );
        }
      })}
    </form>
  );
};

Form.prototype = {
  schema: PropTypes.object.required
};

export default Form;
