import React from "react";
import PropTypes from "prop-types";
import validate from "./validate";
import uuid from "uuid";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessage: ""
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = { value: this.props.value };
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
      selectCls = selectCls + " w3-round-large";
    }
    if (this.props.noBorder) {
      selectCls = selectCls + " w3-border-0";
    }
    return selectCls;
  }

  onSelectChange(e) {
    let value = e.target.value;
    this.setState({ value: value });
    if (
      this.props.validateOn &&
      (this.props.validateOn.trim().toLowerCase() === "onchange" ||
        this.props.validateOn.trim().toLowerCase() === "onblur")
    ) {
      let error = validate(this.props.validateRules, value);
      if (error === "") {
        this.props.onValueChange &&
          this.props.onValueChange(this.props.id, value);
        this.setState({ validationMessage: "" });
      } else {
        this.setState({ validationMessage: error });
      }
    } else {
      this.props.onValueChange &&
        this.props.onValueChange(this.props.id, value);
    }
  }

  renderOptions() {
    if (this.props.options && this.props.options.length > 0) {
      return this.props.options.map(opt => {
        return <option key={uuid.v4()} value={opt.value}> {opt.text} </option>;
      });
    } else if (this.props.optionsUrl && this.props.optionsUrl !== "") {
    }
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
      options,
      optionsUrl,
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
          <option value="" disabled selected>Choose your option</option>
          {this.renderOptions()}
        </select>

        {this.state.validationMessage !== "" &&
          <span className="w3-text-red"> {this.state.validationMessage}</span>}
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
  value: PropTypes.any
};

Select.defaultProps = {
  selectClass: "w3-select",
  selectStyle: {},
  labelText: "Label",
  labelClass: "",
  labelStyle: {},
  showBorder: true,
  showRoundBorder: false,
  noBorder: false,
  defaultOptionMessage: "Choose your option",
  options: [],
  optionsUrl: ""
};

export default Select;
