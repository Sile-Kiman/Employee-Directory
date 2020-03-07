import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Home} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
