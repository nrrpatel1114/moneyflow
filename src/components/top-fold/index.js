import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./top-fold.css";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          {/* <div className="searchbar">
            <i class="fi-rr-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div> */}
        <div className="box">
          <input type="checkbox" id="check"/>
          <div className="search-box">
          <input 
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}/>
          <label for="check" class="icon">
            <i className="fas fa-search"></i>
          </label>
          </div>
        </div>

          <Link to="/add-expense">
            <div className="add-button">
            <i class="fa-solid fa-file-circle-plus"></i>
             <span>Add an expense</span>
            </div>
          </Link>
        </div>
      ) : (
        // <div className="project">
        //         <div className='proj-button'>
        //             <a href='https://nikunjpatel.netlify.app/#home' target="_blank" rel="noopener noreferrer" >
        //             <div className='icon'><i className="fa-solid fa-globe"></i></div>
        //             <span>View more projects</span>
        //             </a>
        //         </div>
        //     </div>
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
            <i class="fa-solid fa-angle-left"></i>
              <span>Back</span>
            </div>
          </Link>
          <Link to="/">
            <div className="cancel-topfold-button">
            <i class="fa-solid fa-x"></i>
              <span>Cancel</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
