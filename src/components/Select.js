import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";
import uuid from "uuid";
import * as api from "./api";

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
