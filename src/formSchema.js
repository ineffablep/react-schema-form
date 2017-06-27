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
        id: "passworrd",
        validateOn: "onChange",
        validateRules: [
          {
            rule: "required",
            message: "Password is required"
          }
        ]
      }
    },
    {
      component: "Select",
      props: {
        labelText: "I am a",
        required: "true",
        labelClass: "w3-select",
        id: "userRole",
        validateOn: "onChange",
        validateRules: [
          {
            rule: "required",
            message: "User Role is required"
          }
        ],
        options:[
          {value:"doctor",text:"Doctor"},
          {value:"nurse",text:"Nurse"},
        ],
        value:"doctor"
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
