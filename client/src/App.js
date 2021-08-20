import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";

// const App = () => (); |Hence its a single return statement
const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
};
export default App;
