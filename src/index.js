import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  componentDidMount() {
    const domain = "meet.jit.si";
    const options = {
      roomName: "testasfasg",
      width: 700,
      height: 700,
      parentNode: document.querySelector("#meet")
    };
    const api = new window.JitsiMeetExternalAPI(domain, options);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <div id="meet" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
