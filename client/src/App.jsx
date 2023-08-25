import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

import { AuthPage, ChatsPage, NavBar, Footer } from "./Components";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return (
      <>
        <NavBar />
        <AuthPage onAuth={(user) => setUser(user)} />;
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <NavBar />
        <ChatsPage user={user} />;
        <Footer />
      </>

    )
  }
}

export default App;