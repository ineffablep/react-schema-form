var validate = function validate(validateRules, value) {
  var errorMessage = "";
  validateRules.forEach(function (vr) {
    if (vr.rule === "required" && (!value || value === "")) {
      errorMessage = vr.message ? vr.message : "This is required field";
    } else  if (vr.rule === "equal") {

    }
  });
  return errorMessage;
};

export default validate;