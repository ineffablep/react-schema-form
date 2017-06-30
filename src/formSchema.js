const formSchema = {
  component: "h2",
  defaultTheme:"ios",
  props: {
    className: "w3-form"
  },
  text: "Schema Driven Registration Form!",
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
        id: "password",
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
        options: [
          { value: "doctor", text: "Doctor" },
          { value: "nurse", text: "Nurse" }
        ],
        optionsUrl:"http://localhost:56772/api/values",
        selectedValue: "nurse"
      }
    },
    {
      component: "Radio",
      props: {
        labelText: "Select Gender",
        type: "radio",
        id: "gender",
        radioGroupName: "gender",
        radioOptions: [
          { value: "male", text:"Male" },
          { value: "female",text:"Female" },
          { value: "notMentioned",text:"Don't want to mention" }
        ],
        defaultValue: "male"
      }
    },
    {
      component: "Checkbox",
      props: {
        labelText: "Agree Terms & Conditions",
        type: "checkbox",
        id: "agreeTerms"
      }
    },
    {
      component: "Button"
    }
  ]
};

export default formSchema;
