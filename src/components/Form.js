import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";
import isMobile from "./IsMobile";
import Button from "./Button";
import Select from "./Select";
import uuid from "uuid";
import * as api from "./api";
import validate from "./validate";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      type: ""
    };
    this.valueMap = new Map();
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCloseAlertClick = this.onCloseAlertClick.bind(this);
    this.onSuccessCallback = this.onSuccessCallback.bind(this);
    this.onErrorCallback = this.onErrorCallback.bind(this);
  }

  onFieldChange(id, res) {
    this.valueMap.set(id, res);
  }

  onSubmit(e) {
    e.preventDefault();
    let url = this.props.saveUrl,
      callBack = this.props.onSaveClick,
      formData = {};
    this.valueMap.forEach((val, key) => {
      formData[key] = val;
    });

    this.state = {
      message: "",
      type: ""
    };
    this.validateForm();
    if (this.state.message === "") {
      if (callBack) {
        callBack(formData);
      } else if (url) {
        api.post(url, formData, this.onSuccessCallback, this.onErrorCallback);
      }
    }
  }

  onSuccessCallback(response) {
    this.setState({
      message: this.props.successMessage,
      type: "success"
    });
    if (this.props.successCallback) {
      this.props.successCallback(response);
    }
  }

  onErrorCallback(error) {
    this.setState({ message: this.props.errorMessage, type: "error" });
    if (this.props.errorCallback) {
      this.props.errorCallback(error);
    }
  }

  getTheme(defaultTheme ) {
    if(defaultTheme)
          return defaultTheme.trim().toLowerCase();
    let theme = defaultTheme;
    if (isMobile.iOS()) {
      theme = "ios";
    } else if (isMobile.Android()) {
      theme = "android";
    } else if (isMobile.Windows()) {
      theme = "win";
    } else {
      theme="browser";
    }
    return theme;
  }

  onCloseAlertClick() {
    this.setState({ message: "", type: "" });
  }

  renderAlert() {
    return (
      this.message &&
      this.message.length > 0 &&
      <div
        className={
          "w3-panel w3-display-container " + this.state.type === "error"
            ? " w3-red"
            : " w3-green"
        }
      >
        <span
          onClick={this.onCloseAlertClick}
          className="w3-button w3-red w3-large w3-display-topright"
        >
          &times;
        </span>
        <p>{this.state.message}</p>
      </div>
    );
  }

  validateForm() {
    let message = "";
    this.props.schema.children.forEach(child => {
      if (child && child.validateRules) {
        message =
          message + validate(child.validateRules, this.valueMap.get(child.id));
      }
    });
    this.setState({ message: message, type: "error" });
  }

  render() {
    if (!this.props.schema) {
      return null;
    }
    const { component, children, defaultTheme } = this.props.schema,
      theme = this.getTheme(defaultTheme);
    return (
      <form className="w3-form" {...this.props.schema.props}>
        {this.renderAlert()}
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
              <Select
                key={uuid.v4()}
                {...comp.props}
                onValueChange={this.onFieldChange}
              />
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
  schema: PropTypes.object,
  onSaveClick: PropTypes.func,
  saveUrl: PropTypes.string,
  successCallback: PropTypes.func,
  errorCallback: PropTypes.func,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string
};

Form.defaultProps = {
  successMessage: "Successfully saved",
  errorMessage: "Error while saving !"
};

export default Form;
