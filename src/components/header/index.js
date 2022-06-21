import React from 'react'
import './header.css';


const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className="content">
                <h2>MoneyFlow </h2>
                <h2>MoneyFlow</h2>
                 <i class="fa-solid fa-money-bill-trend-up"></i>
                 
            </div>
           
            <div className="project">
                <div className='proj-button'>
                    <a href='https://nikunjpatel.netlify.app/#home' target="_blank" rel="noopener noreferrer" >
                    <div className='icon'><i className="fa-solid fa-globe"></i></div>
                    <span>View more projects</span>
                    </a>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}


export default Header;
