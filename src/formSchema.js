const formSchema = {
  component: "h2",
  props: {
    className: "w3-form"
  },
  text: "Schema Driven From!",
  children: [
    {
      component: "BaseInput",
      props: {
        labelText: "User Name",
        placeholder: "Phone number or Email address",
        labelClass: "w3-label",
        type: "text",
        required: "true",
        id: "userName",
        validateOn: "onChange",
        validateRules: [
          {
            rule: "required",
            message: "Phone number or Email address is required"
          }
        ]
      }
    },
    {
      component: "BaseInput",
      props: {
        labelText: "Password",
        type: "password",
        required: "true",
        labelClass: "w3-label",
        id: "passworrd"
      }
    },
    {
      component: "Checkbox",
      props: {
        labelText: "Remember Me",
        type: "checkbox",
        id: "rememberMe"
      }
    },
    {
      component: "Button"
    }
  ]
};

export default formSchema;
