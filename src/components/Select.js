import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";
import uuid from "uuid";
import * as api from "./api";
/**
 * React Select Component with theme support to device native O.S look and feel for Android, iOS, Windows and default HTMl5 Select fro Browser
 * 
 * @class Select
 * @extends {React.Component}
 */
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: "",
      value: this.props.selectedValue,
      loadedOptions: this.props.options ? this.props.options : []
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }

  componentDidMount() {
    if (
      (!this.props.options || this.props.options.length === 0) &&
      this.props.optionsUrl
    ) {
      api.get(this.props.optionsUrl, this.successCallback, this.errorCallback);
    }
  }

  getClass() {
    let selectCls = this.props.selectClass;
    selectCls = selectCls + " w3-select ";

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

  onSelectChange(e) {
    let value = e.target.value;
    if (
      this.props.validateOn &&
      (this.props.validateOn.trim().toLowerCase() === "onchange" ||
        this.props.validateOn.trim().toLowerCase() === "onblur")
    ) {
      let error = validate(this.props.validateRules, value);
      if (error === "") {
        this.setState({ validationMessage: "", value: value });
        if (this.props.onValueChange)
          this.props.onValueChange(this.props.id, value);
      } else {
        this.setState({ validationMessage: error, value: value });
      }
    } else {
      this.setState({ validationMessage: "", value: value });
      if (this.props.onValueChange)
        this.props.onValueChange(this.props.id, value);
    }
  }
  successCallback(response) {
    this.setState({ loadedOptions: response });
  }
  errorCallback(err) {
    console.log(err);
  }
  renderOptions() {
    return this.state.loadedOptions.map(opt => {
      return (
        <option key={uuid.v4()} value={opt.value}>
          {opt.text}
        </option>
      );
    });
  }

  render() {
    const {
        id,
        selectStyle,
        selectClass,
        onValueChange,
        labelClass,
        labelStyle,
        labelText,
        showBorder,
        showRoundBorder,
        noBorder,
        theme,
        validateOn,
        validateRules,
        selectedValue,
        options,
        optionsUrl,
        defaultOptionMessage,
        ...rest
      } = this.props,
      clasName = this.getClass();

    return (
      <p>
        <label htmlFor={id} className={labelClass} style={labelStyle}>
          {labelText}
        </label>
        <select
          id={id}
          name={id}
          className={clasName}
          value={this.state.value}
          style={selectStyle}
          {...rest}
          onChange={this.onSelectChange}
        >
          <option value="" disabled>
            Choose your option
          </option>
          {this.renderOptions()}
        </select>

        {this.state.validationMessage !== "" &&
          <span className="w3-text-red">
            {" "}{this.state.validationMessage}
          </span>}
      </p>
    );
  }
}

Select.propTypes = {
  /**
   * Css Class for Styling 
   */
  selectClass: PropTypes.string,
  /**
   * React Style Object for Styling
   */
  selectStyle: PropTypes.object,
  /**
   * Label to display
   */
  labelText: PropTypes.string,
  /**
   * CSS Class to style label
   */
  labelClass: PropTypes.string,
  /**
   * React Style object to style label
   */
  labelStyle: PropTypes.object,
  /**
   * Set true to Show Bordered Select
   */
  showBorder: PropTypes.bool,
  /**
  * Set true to show rounded border as in iOS
  */
  showRoundBorder: PropTypes.bool,
  /**
   * Set true remove Border around Select
   */
  noBorder: PropTypes.bool,
  /**
   * Select Unique Identifier , 
   * Id will be passed  with OnChange / OnBlur events to Uniquely Identify from Multiple Inputs
   */
  id: PropTypes.string.isRequired,
  /**
   * Select Placeholder
   */
  defaultOptionMessage: PropTypes.string,
  /**
   * On  value change callback Function raised for onBlur and onChange, this is a required property
   */
  onValueChange: PropTypes.func.isRequired,
  /**
 * Select Options array [{value:'male', text:'Mable'}, {value:'female', text:'Female'}]
 */
  options: PropTypes.array,
  /**
   * URL fetch options data from AJAX/ HTML GET expected format is array of objects {value:'', text:''} 
   */
  optionsUrl: PropTypes.string,
  /**
    * Default Selected value- Ex:- male
    */
  selectedValue: PropTypes.string,
  /**
   * Select theme property 
   * You can override by passing theme
   * Default to Android theme
   *  override by supplying ios for IOS theme and win  for Windows theme
   */
  theme: PropTypes.string
};

Select.defaultProps = {
  selectClass: "",
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
  theme: "android"
};

export default Select;
