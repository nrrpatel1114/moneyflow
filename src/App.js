import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home/index";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename="/">
      <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
      <Footer />
      </Router>
    </HashRouter>
  );
};

export default App;