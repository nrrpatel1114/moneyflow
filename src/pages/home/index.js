import React from "react";
import ExpenseList from "../../components/expense-list";


import TopFold from "../../components/top-fold";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
      
    </div>
  );
};

export default Home;
