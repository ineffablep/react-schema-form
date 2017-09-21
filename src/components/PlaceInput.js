import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

class PlaceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", autocompleteItems: [] };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.googleService = null;
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });

    if (!e.target.value) {
      this.clearAutocomplete();
      return;
    }
    this.getPredictions(e.target.value);
  }

  getPredictions(value) {
    if (value.length) {
      if (window.google) {
        if (!this.googleService) {
          this.googleService = new window.google.maps.places
            .AutocompleteService();
        }
        this.googleService.getPlacePredictions(
          { input: value },
          (predictions, status) => {
            if (status !== this.autocompleteOK) {
              this.clearAutocomplete();
            }
            if (predictions && predictions.length > 0) {
              this.setState({
                autocompleteItems: predictions.map(_ => ({
                  suggestion: _.description,
                  placeId: _.place_id,
                  address: `${_.structured_formatting.main_text} ${_
                    .structured_formatting.secondary_text}`
                }))
              });
            }
          }
        );
      }
    }
  }

  clearAutocomplete() {
    this.setState({ autocompleteItems: [] });
  }

  getClass() {
    const {
      showBorder,
      noBorder,
      showAnimation,
      showRoundBorder,
      theme
    } = this.props;
    let inputCls = this.props.inputClass;
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

  renderSuggest(item) {
    return (
      <li
        key={uuid.v4()}
        className="autoPlace pointer"
        onClick={() => this.handleSelect(item)}
      >
        <span>
          <i className="fa fa-map-marker"> </i>
        </span>

        <span className="address ">
          {item.address}
        </span>
      </li>
    );
  }

  handleSelect(item) {
    const value = item.suggestion;
    this.setState({ value: value });
    this.getLangLat(item);
    this.clearAutocomplete();
  }
  getLangLat(item) {
    const geocoder = new window.google.maps.Geocoder()
    const OK = window.google.maps.GeocoderStatus.OK
    const placeId = item.placeId;
    geocoder.geocode({ placeId }, (results, status) => {
      if (status === OK) {
        item.lat = results[0].geometry.location.lat();
        item.lng = results[0].geometry.location.lng();
        item.fullAddress= results[0].formatted_address;
      }
      this.props.onValueChange(this.props.id, item);
    });
  }

  render() {
    const {
        labelClass,
      labelStyle,
      labelText,
      inputStyle,
      inputClass,
      key,
      showBorder,
      showRoundBorder,
      noBorder,
      showAnimation,
      theme,
      validateOn,
      validateRules,
      onValueChange,
      id,
      type,
      value,
      placeholder,
      ...rest
      } = this.props,
      { autocompleteItems } = this.state,
      className = this.getClass();
    return (
      <div className="w3-row">
        <label htmlFor={id} className={labelClass} style={labelStyle}>
          {labelText}
        </label>
        <input
          id={id}
          style={inputStyle}
          type="search"
          className={className}
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder={placeholder || "Search Places..."}
          {...rest}
        />
        {autocompleteItems.length > 0 &&
          <ul className="w3-ul autoPlaceContainer">
            {autocompleteItems.map(_ => this.renderSuggest(_))}
          </ul>}
      </div>
    );
  }
}

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
