import React, { Component } from "react";
import Form from "./components/Form";
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
