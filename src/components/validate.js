const validate = (validateRules, value) => {
  let errorMessage = "";
  validateRules.forEach(vr => {
    if (vr.rule === "required" && (!value || value === "")) {
      errorMessage = vr.message ? vr.message : "This is required field";
    }
  });
  return errorMessage;
};

export default validate;
