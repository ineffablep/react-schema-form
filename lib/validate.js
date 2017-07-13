var validate = function validate(validateRules, value) {
  var errorMessage = "";
  validateRules.forEach(function(vr) {
    if (vr.rule === "required" && (!value || value === "")) {
      errorMessage = vr.message ? vr.message : "This is required field";
    } else if (vr.rule === "equal") {
    } else if (vr.rule === "regex") {
      let regex = new RegExp(vr.expression);
      if (!regex.test(value)) {
        errorMessage = vr.message ? vr.message : "Please enter valid values";
      }
    }
  });
  return errorMessage;
};

export default validate;
