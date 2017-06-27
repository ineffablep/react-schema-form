import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";
import isMobile from "./IsMobile";
import Button from "./Button";
import Select from './Select';
import uuid from "uuid";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: ""
    };
    this.valueMap = new Map();
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChange(id, res) {
    this.valueMap.set(id, res);
  }

  onSubmit(e) {
    e.preventDefault();
    let url = this.props.submitUrl,
      callBack = this.props.onSubmitCallback,
      formData = {};
    this.valueMap.forEach((val, key) => {
      formData[key] = val;
    });
    if (callBack) {
      callBack(formData);
    } else if (url) {
    }
  }

  getTheme(defaultTheme = "browser") {
    let theme = defaultTheme;
    if (isMobile.iOS()) {
      theme = "ios";
    } else if (isMobile.Android()) {
      theme = "android";
    } else if (isMobile.Windows()) {
      theme = "win";
    }
    return theme;
  }

  render() {
    const { component, children, defaultTheme } = this.props.schema,
      theme = this.getTheme(defaultTheme);
    return (
      <form className="w3-form" {...this.props.schema.props}>
        {React.createElement(component, { ...this.props.schema.props }, [
          this.props.schema.text
        ])}
        {children.map(comp => {
          if (comp.component.trim().toLowerCase() === "button") {
            return (
              <Button key={uuid.v4()} {...comp.props} onClick={this.onSubmit} />
            );
          } else if (comp.component.trim().toLowerCase() === "select") {
            return (
              <Select key={uuid.v4()} {...comp.props} onValueChange={this.onFieldChange} />
            );
          } else if (React.DOM.hasOwnProperty(comp.component)) {
            return React.createElement(comp.component, { ...comp.props }, [
              comp.text
            ]);
          } else {
            return (
              <BaseInput
                {...comp.props}
                key={comp.props.id}
                theme={theme}
                onValueChange={this.onFieldChange}
              />
            );
          }
        })}
      </form>
    );
  }
}

Form.propTypes = {
  schema: PropTypes.object.required,
  onSubmitCallback: PropTypes.func
};

export default Form;
