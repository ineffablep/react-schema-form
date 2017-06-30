# react-json-schema-form

`npm install react-json-schema-form`

This library constructs React elements from JSON by mapping JSON definitions to React components that you expose.

JSX is not a dependency for react-json-schema-form.

[Quick Documentation](https://github.com/ineffablep/react-schema-form)

### Full Documentation

* [Schema](#schema)
* [Rendering](#rendering)
* [Complete Example](#complete-example)
* [Try the Demo](#Try the Demo)

#### Schema
The primary resource needed is a defined schema in JSON or a JavaScript object literal. It's recommended that schema attributes mainly define React component props. 
*** This will check device OS and render native components  for Mobile devices (Android, iOS and Windows 10) and Browser based components for browser

*** Simply import
 ```js  
 import Form from "react-json-schema-form/Form";
 import Form from "react-json-schema-form/index.css";

```
Example JS schema (ES6)
```js
{
  component: "h2",
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
}

```
##### Rendering
You can render form where ever you want by calling <Form schema= {shcemaJson}/>


#### Complete Example

```js
import React, { Component } from "react";
import Form from "react-json-schema-form/Form";
import formSchema from "./formSchema";
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Form schema={formSchema} saveUrl="http://localhost:56772/api/values" />
        </div>
      </div>
    );
  }
}

export default App;


```


### Try the Demo

To run the demo
* `npm install`
* `npm start`
* The app will be served at http://localhost:3000
