const formSchema = {
  component: "h2",
  defaultTheme:"android",
  props: {
    className: "w3-form"
  },
  children: [
    {
      component: "BaseInput",
      props: {
        labelText: "User Name",
        placeholder: "Email address",
        labelClass: "w3-label",
        type: "text",
        required: "true",
        id: "userName",
        value:"test",
        validateOn: "onChange",
        validateRules: [
          {
            rule: "required",
            message: "Email address is required"
          },
          {
            rule: "regex",
            expression:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
            message: "Please enter valid email address",
            t:""
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
        value:"test",
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
        defaultValue: "female"
      }
    },
    {
      component: "Checkbox",
      props: {
        labelText: "Agree Terms & Conditions",
        type: "checkbox",
        checked:"checked",
        id: "agreeTerms"
      }
    },
    {
      component: "Button"
    }
  ]
};

export default formSchema;
