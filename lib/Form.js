var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";
import isMobile from "./IsMobile";
import Button from "./Button";
import Select from "./Select";
import uuid from "uuid";
import * as api from "./api";
import validate from "./validate";

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      message: "",
      type: ""
    };
    _this.valueMap = new Map();
    _this.onFieldChange = _this.onFieldChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onCloseAlertClick = _this.onCloseAlertClick.bind(_this);
    _this.onSuccessCallback = _this.onSuccessCallback.bind(_this);
    _this.onErrorCallback = _this.onErrorCallback.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: "onFieldChange",
    value: function onFieldChange(id, res) {
      this.valueMap.set(id, res);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var url = this.props.saveUrl,
          callBack = this.props.onSaveClick,
          formData = {};
      this.valueMap.forEach(function (val, key) {
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
  }, {
    key: "onSuccessCallback",
    value: function onSuccessCallback(response) {
      this.setState({
        message: this.props.successMessage,
        type: "success"
      });
      if (this.props.successCallback) {
        this.props.successCallback(response);
      }
    }
  }, {
    key: "onErrorCallback",
    value: function onErrorCallback(error) {
      this.setState({ message: this.props.errorMessage, type: "error" });
      if (this.props.errorCallback) {
        this.props.errorCallback(error);
      }
    }
  }, {
    key: "getTheme",
    value: function getTheme(defaultTheme) {
      if (defaultTheme) return defaultTheme.trim().toLowerCase();
      var theme = defaultTheme;
      if (isMobile.iOS()) {
        theme = "ios";
      } else if (isMobile.Android()) {
        theme = "android";
      } else if (isMobile.Windows()) {
        theme = "win";
      } else {
        theme = "browser";
      }
      return theme;
    }
  }, {
    key: "onCloseAlertClick",
    value: function onCloseAlertClick() {
      this.setState({ message: "", type: "" });
    }
  }, {
    key: "renderAlert",
    value: function renderAlert() {
      return this.message && this.message.length > 0 && React.createElement(
        "div",
        {
          className: "w3-panel w3-display-container " + this.state.type === "error" ? " w3-red" : " w3-green"
        },
        React.createElement(
          "span",
          {
            onClick: this.onCloseAlertClick,
            className: "w3-button w3-red w3-large w3-display-topright"
          },
          "\xD7"
        ),
        React.createElement(
          "p",
          null,
          this.state.message
        )
      );
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this2 = this;

      var message = "";
      this.props.schema.children.forEach(function (child) {
        if (child && child.validateRules) {
          message = message + validate(child.validateRules, _this2.valueMap.get(child.id));
        }
      });
      this.setState({ message: message, type: "error" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.schema) {
        return null;
      }
      var _props$schema = this.props.schema,
          component = _props$schema.component,
          children = _props$schema.children,
          defaultTheme = _props$schema.defaultTheme,
          theme = this.getTheme(defaultTheme);

      return React.createElement(
        "form",
        Object.assign({ className: "w3-form" }, this.props.schema.props),
        this.renderAlert(),
        React.createElement(component, Object.assign({}, this.props.schema.props), [this.props.schema.text]),
        children.map(function (comp) {
          if (comp.component.trim().toLowerCase() === "button") {
            return React.createElement(Button, Object.assign({ key: uuid.v4() }, comp.props, { onClick: _this3.onSubmit }));
          } else if (comp.component.trim().toLowerCase() === "select") {
            return React.createElement(Select, Object.assign({
              key: uuid.v4()
            }, comp.props, {
              onValueChange: _this3.onFieldChange
            }));
          } else if (React.DOM.hasOwnProperty(comp.component)) {
            return React.createElement(comp.component, Object.assign({}, comp.props), [comp.text]);
          } else {
            return React.createElement(BaseInput, Object.assign({}, comp.props, {
              key: comp.props.id,
              theme: theme,
              onValueChange: _this3.onFieldChange
            }));
          }
        })
      );
    }
  }]);

  return Form;
}(React.Component);

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