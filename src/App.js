import React, { Component } from "react";
import BaseInput from "./components/BaseInput";

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <div className="App-header">
          <BaseInput type="checkbox" checked="checked"  />
          <BaseInput placeholder="Test 2" floatLabel={true} />
        </div>
      </div>
    );
  }
}

export default App;
