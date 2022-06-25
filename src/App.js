import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home/index";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={AddExpense} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;