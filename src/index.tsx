import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { ChatView } from "./views/ChatView";
import React from "react";
import { SettingsView } from "./views/SettingsView/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ChatView />
        </Route>
        <Route exact path="/settings">
          <SettingsView />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
