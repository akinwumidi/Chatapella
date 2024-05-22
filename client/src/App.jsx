import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

import { NavBar, Footer } from "./Components";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return (
      <>
        <NavBar />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <NavBar />
        <Footer />
      </>

    )
  }
}

export default App;