import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "pages/Detail";

function App() {
  return (
    <Router>
      <Header />
          <Route exact path="/"  component={Home} />
          <Route path="/movie/:id" component={Detail} />
      <Footer />
    </Router>
  );
}

export default App;
