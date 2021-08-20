import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Chat from "./components/Chat";
import Join from "./components/Join"


// const App = () => (); |Hence its a single return statement
const App =()=>{
  return(
      <div>
          <h1>React up and running </h1>
        <Router>
          <Route path="/" exact component={Chat} />
          <Route path="/chat" component={Join} />
      </Router>
      </div>
      
  )

}
export default App;