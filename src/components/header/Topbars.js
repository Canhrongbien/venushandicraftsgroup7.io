import React from "react";

import { useLocation, Link } from 'react-router-dom';
import "./TopBars.scss";
import Search from "./Search";
import LogoMain from "./LogoMain"
import '../../styles/VariableStyle.scss'
function TopBars({handleSeachProduct,indexofCart}) {
  let location = useLocation().pathname;
 
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <LogoMain />
      </div>
      <div className="top-bar-center">
        <Search handleSeachProduct={handleSeachProduct}/>
      </div>
      <div className="top-bar-right">
        <div className="top-bar-right-cart" >
          <Link to='/cart'>
            <i className="fa-solid fa-cart-plus cart" style={{color: location ==='/'?'': '#515151'}}>&emsp;</i>
          </Link>
          <div className="top-bar-right-cart-index" ><p style={{color: indexofCart===0? '#cecece' : null }}>+{indexofCart}</p></div>
        </div>
        <div className="top-bar-find" >
          <Link to='/stores'>
            <i className="fa-solid fa-location-dot cart" style={{color: location ==='/'?'': '#515151'}}>&emsp;</i>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default TopBars;

