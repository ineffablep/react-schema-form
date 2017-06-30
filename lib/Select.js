var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";
import uuid from "uuid";
import * as api from "./api";

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      validationMessage: "",
      value: _this.props.selectedValue,
      loadedOptions: _this.props.options ? _this.props.options : []
    };
    _this.onSelectChange = _this.onSelectChange.bind(_this);
    _this.successCallback = _this.successCallback.bind(_this);
    _this.errorCallback = _this.errorCallback.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((!this.props.options || this.props.options.length === 0) && this.props.optionsUrl) {
        api.get(this.props.optionsUrl, this.successCallback, this.errorCallback);
      }
    }
  }, {
    key: "getClass",
    value: function getClass() {
      var selectCls = this.props.selectClass;
      if (selectCls === "") {
        selectCls = "w3-select";
      }
      if (this.props.showBorder || this.props.theme === "win") {
        selectCls = selectCls + " w3-border";
      }
      if (this.props.showRoundBorder || this.props.theme === "ios") {
        selectCls = selectCls + " w3-border w3-round-large";
      }
      if (this.props.noBorder) {
        selectCls = selectCls + " w3-border-0";
      }
      return selectCls;
    }
  }, {
    key: "onSelectChange",
    value: function onSelectChange(e) {
      var value = e.target.value;
      if (this.props.validateOn && (this.props.validateOn.trim().toLowerCase() === "onchange" || this.props.validateOn.trim().toLowerCase() === "onblur")) {
        var error = validate(this.props.validateRules, value);
        if (error === "") {
          this.setState({ validationMessage: "", value: value });
          if (this.props.onValueChange) this.props.onValueChange(this.props.id, value);
        } else {
          this.setState({ validationMessage: error, value: value });
        }
      } else {
        this.setState({ validationMessage: "", value: value });
        if (this.props.onValueChange) this.props.onValueChange(this.props.id, value);
      }
    }
  }, {
    key: "successCallback",
    value: function successCallback(response) {
      this.setState({ loadedOptions: response });
    }
  }, {
    key: "errorCallback",
    value: function errorCallback(err) {
      console.log(err);
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      return this.state.loadedOptions.map(function (opt) {
        return React.createElement(
          "option",
          { key: uuid.v4(), value: opt.value },
          opt.text
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          selectStyle = _props.selectStyle,
          selectClass = _props.selectClass,
          onValueChange = _props.onValueChange,
          labelClass = _props.labelClass,
          labelStyle = _props.labelStyle,
          labelText = _props.labelText,
          showBorder = _props.showBorder,
          showRoundBorder = _props.showRoundBorder,
          noBorder = _props.noBorder,
          theme = _props.theme,
          validateOn = _props.validateOn,
          validateRules = _props.validateRules,
          selectedValue = _props.selectedValue,
          options = _props.options,
          optionsUrl = _props.optionsUrl,
          defaultOptionMessage = _props.defaultOptionMessage,
          rest = _objectWithoutProperties(_props, ["id", "selectStyle", "selectClass", "onValueChange", "labelClass", "labelStyle", "labelText", "showBorder", "showRoundBorder", "noBorder", "theme", "validateOn", "validateRules", "selectedValue", "options", "optionsUrl", "defaultOptionMessage"]),
          clasName = this.getClass();

      return React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          { htmlFor: id, className: labelClass, style: labelStyle },
          labelText
        ),
        React.createElement(
          "select",
          Object.assign({
            id: id,
            name: id,
            className: clasName,
            value: this.state.value,
            style: selectStyle
          }, rest, {
            onChange: this.onSelectChange
          }),
          React.createElement(
            "option",
            { value: "", disabled: true },
            "Choose your option"
          ),
          this.renderOptions()
        ),
        this.state.validationMessage !== "" && React.createElement(
          "span",
          { className: "w3-text-red" },
          " ",
          this.state.validationMessage
        )
      );
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  selectClass: PropTypes.string,
  selectStyle: PropTypes.object,
  labelText: PropTypes.string,
  labelClass: PropTypes.string,
  labelStyle: PropTypes.object,
  showBorder: PropTypes.bool,
  showRoundBorder: PropTypes.bool,
  noBorder: PropTypes.bool,
  id: PropTypes.string,
  defaultOptionMessage: PropTypes.string,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  optionsUrl: PropTypes.string,
  selectedValue: PropTypes.any,
  theme: PropTypes.string
};

Select.defaultProps = {
  selectClass: "w3-select",
  selectStyle: {},
  labelText: "Label",
  labelClass: "",
  labelStyle: {},
  showBorder: false,
  showRoundBorder: false,
  noBorder: false,
  defaultOptionMessage: "Choose your option",
  options: [],
  optionsUrl: "",
  theme: PropTypes.string
};

export default Select;