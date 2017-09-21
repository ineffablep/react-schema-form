var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

var PlaceInput = function (_React$Component) {
  _inherits(PlaceInput, _React$Component);

  function PlaceInput(props) {
    _classCallCheck(this, PlaceInput);

    var _this = _possibleConstructorReturn(this, (PlaceInput.__proto__ || Object.getPrototypeOf(PlaceInput)).call(this, props));

    _this.state = { value: "", autocompleteItems: [] };
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.googleService = null;
    return _this;
  }

  _createClass(PlaceInput, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.setState({
        value: e.target.value
      });

      if (!e.target.value) {
        this.clearAutocomplete();
        return;
      }
      this.getPredictions(e.target.value);
    }
  }, {
    key: "getPredictions",
    value: function getPredictions(value) {
      var _this2 = this;

      if (value.length) {
        if (window.google) {
          if (!this.googleService) {
            this.googleService = new window.google.maps.places.AutocompleteService();
          }
          this.googleService.getPlacePredictions({ input: value }, function (predictions, status) {
            if (status !== _this2.autocompleteOK) {
              _this2.clearAutocomplete();
            }
            if (predictions && predictions.length > 0) {
              _this2.setState({
                autocompleteItems: predictions.map(function (_) {
                  return {
                    suggestion: _.description,
                    placeId: _.place_id,
                    address: _.structured_formatting.main_text + " " + _.structured_formatting.secondary_text
                  };
                })
              });
            }
          });
        }
      }
    }
  }, {
    key: "clearAutocomplete",
    value: function clearAutocomplete() {
      this.setState({ autocompleteItems: [] });
    }
  }, {
    key: "getClass",
    value: function getClass() {
      var _props = this.props,
          showBorder = _props.showBorder,
          noBorder = _props.noBorder,
          showAnimation = _props.showAnimation,
          showRoundBorder = _props.showRoundBorder,
          theme = _props.theme;

      var inputCls = this.props.inputClass;
      inputCls = inputCls + " w3-input";
      if (showBorder) {
        inputCls = inputCls + " w3-border";
      } else if (showRoundBorder || theme === "ios") {
        inputCls = inputCls + " w3-round-large";
      } else if (noBorder) {
        inputCls = inputCls + " w3-border-0";
      } else if (showAnimation) {
        inputCls = inputCls + " w3-animate-input";
      }
      return inputCls;
    }
  }, {
    key: "renderSuggest",
    value: function renderSuggest(item) {
      var _this3 = this;

      return React.createElement(
        "li",
        {
          key: uuid.v4(),
          className: "autoPlace pointer",
          onClick: function onClick() {
            return _this3.handleSelect(item);
          }
        },
        React.createElement(
          "span",
          null,
          React.createElement(
            "i",
            { className: "fa fa-map-marker" },
            " "
          )
        ),
        React.createElement(
          "span",
          { className: "address " },
          item.address
        )
      );
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(item) {
      var value = item.suggestion;
      this.setState({ value: value });
      this.getLangLat(item);
      this.clearAutocomplete();
    }
  }, {
    key: "getLangLat",
    value: function getLangLat(item) {
      var _this4 = this;

      var geocoder = new window.google.maps.Geocoder();
      var OK = window.google.maps.GeocoderStatus.OK;
      var placeId = item.placeId;
      geocoder.geocode({ placeId: placeId }, function (results, status) {
        if (status === OK) {
          item.lat = results[0].geometry.location.lat();
          item.lng = results[0].geometry.location.lng();
          item.fullAddress = results[0].formatted_address;
        }
        _this4.props.onValueChange(_this4.props.id, item);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          labelClass = _props2.labelClass,
          labelStyle = _props2.labelStyle,
          labelText = _props2.labelText,
          inputStyle = _props2.inputStyle,
          inputClass = _props2.inputClass,
          key = _props2.key,
          showBorder = _props2.showBorder,
          showRoundBorder = _props2.showRoundBorder,
          noBorder = _props2.noBorder,
          showAnimation = _props2.showAnimation,
          theme = _props2.theme,
          validateOn = _props2.validateOn,
          validateRules = _props2.validateRules,
          onValueChange = _props2.onValueChange,
          id = _props2.id,
          type = _props2.type,
          value = _props2.value,
          placeholder = _props2.placeholder,
          rest = _objectWithoutProperties(_props2, ["labelClass", "labelStyle", "labelText", "inputStyle", "inputClass", "key", "showBorder", "showRoundBorder", "noBorder", "showAnimation", "theme", "validateOn", "validateRules", "onValueChange", "id", "type", "value", "placeholder"]),
          autocompleteItems = this.state.autocompleteItems,
          className = this.getClass();

      return React.createElement(
        "div",
        { className: "w3-row" },
        React.createElement(
          "label",
          { htmlFor: id, className: labelClass, style: labelStyle },
          labelText
        ),
        React.createElement("input", Object.assign({
          id: id,
          style: inputStyle,
          type: "search",
          className: className,
          value: this.state.value,
          onChange: this.handleInputChange,
          placeholder: placeholder || "Search Places..."
        }, rest)),
        autocompleteItems.length > 0 && React.createElement(
          "ul",
          { className: "w3-ul autoPlaceContainer" },
          autocompleteItems.map(function (_) {
            return _this5.renderSuggest(_);
          })
        )
      );
    }
  }]);

  return PlaceInput;
}(React.Component);

PlaceInput.propTypes = {
  /**
   * Label Text to display
   */
  labelText: PropTypes.string,
  /**
   * Style label with css class
   */
  labelClass: PropTypes.string,
  /**
   * Style Label with React style object
   */
  labelStyle: PropTypes.object,
  /**
   * Style input with css class
   */
  inputClass: PropTypes.string,
  /**
   *  Style Input with  React Style Object
   */
  inputStyle: PropTypes.object,
  /**
   * Show bordered input
   */
  showBorder: PropTypes.bool,
  /**
   * Set true show rounded border as in iOS
   */
  showRoundBorder: PropTypes.bool,
  /**
   * Set true remove Border from input box 
   */
  noBorder: PropTypes.bool,
  /**
   * Set true animate input
   */
  showAnimation: PropTypes.bool,
  /**
   * Input Unique Identifier , 
   * Id will be passed  with OnChange / OnBlur events to Uniquely Identify from Multiple Inputs
   */
  id: PropTypes.string.isRequired,
  /**
   * Input theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme
   */
  theme: PropTypes.string,
  /**
   * On  value change callback Function raised for onBlur and onChange, this is a required property
   */
  onValueChange: PropTypes.func.isRequired
};

PlaceInput.defaultProps = {
  labelText: "Label",
  inputClass: "",
  inputStyle: {},
  labelClass: "",
  labelStyle: {},
  showBorder: false,
  showRoundBorder: false,
  noBorder: false,
  showAnimation: false,
  theme: "android"
};
export default PlaceInput;