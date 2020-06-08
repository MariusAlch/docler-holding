import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { ChatView } from "./views/ChatView";
import React from "react";
import { SettingsView } from "./views/SettingsView/index";
import { StoreProvider } from "./lib/Store";

// TODO: handle blinking title
// TODO: add tests
// TODO: add readme

function App() {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
