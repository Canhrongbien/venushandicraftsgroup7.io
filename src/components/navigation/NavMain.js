import './NavMain.scss'
import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import productList from '../products/Products/ProductMix.json';
import brands from '../products/Products/Brands.json'
import { CardList } from 'react-bootstrap-icons';

function NavMain() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const loadMenuData = () => {
    const data = require('./menu.json');
    setMenuData(data);
  };
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      loadMenuData();
    }
  };
  const menulist = productList;
  const BrandList = brands;
  let location = useLocation().pathname;
  return (
    <div className='nav'>
      <nav className='nav-main'>
        <ul className="nav-main-ul">
          <li className="side">
            <div className="dropdown-trigger" onClick={toggleDropdown}>
              <CardList size={40} ></CardList>
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {menuData.map((item) => (
                  <li className="dropdown-menu-list" key={item.id}>
                    <a href={item.url}>
                      {item.name}
                      {item.id==2 && productList.Material.map((item) =>
                      <li key={item.id} className='dropdown-menu-list-detail'>
                        <Link to={`products/${item.id}`}>
                          {item.Name}
                        </Link>
                      </li>
                      )}
                       {item.id==2 && productList.Decoration.map((item) =>
                      <li key={item.id} className='dropdown-menu-list-detail'>
                        <Link to={`products/${item.id}`}>
                          {item.Name}
                        </Link>
                      </li>
                      )}
                        {item.id==2 && productList.Usage.map((item) =>
                      <li key={item.id} className='dropdown-menu-list-detail'>
                        <Link to={`products/${item.id}`}>
                          {item.Name}
                        </Link>
                      </li>
                      )}
                         {item.id==2 && productList.Others.map((item) =>
                      <li key={item.id} className='dropdown-menu-list-detail'>
                        <Link to={`products/${item.id}`}> 
                          {item.Name}
                        </Link>
                      </li>
                      )}
                      {item.id==3 && brands.map((item) =>
                      <li key={item.id} className='dropdown-menu-list-detail'>
                        {/* <Link to={`${item.path}`}></Link> */}
                         <a>
                        <Link to={`brands/${item.id}`}> 
                          {item.Name}
                        </Link>
                        </a>
                      </li>
                      )}
                      {item.id==11 && 
                      <Link to = {`/DeliveryServices`}>
                      <div className='dropdown-menu-list-detail'>Delivery Service</div>
                      </Link>
                      }
                      {item.id==11 && 
                      <Link to = {`TechnologySupport`}>
                      <div className='dropdown-menu-list-detail'>Technology Support
                      </div>
                      </Link>
                      }
                      {item.id==10 && 
                      <Link to = {`/FAQstore`} >
                      <div className='dropdown-menu-list-detail'>FAQs</div>
                      </Link>}
                      {item.id==10 && 
                      <Link to = {`/warranties`} >
                      <div className='dropdown-menu-list-detail'>Warranties</div>
                      </Link>}
                      {item.id==10 && 
                      <Link to = {`/contact`} >
                      <div className='dropdown-menu-list-detail'>Feedback</div>
                      </Link>}
                      {item.id==10 && 
                      <Link to = {`/policy`} >
                      <div className='dropdown-menu-list-detail'>Policy</div>
                      </Link>}
                      {item.id==10 && 
                      <Link to = {`/product-recalls`} >
                      <div className='dropdown-menu-list-detail'>Product Recalls</div>
                      </Link>}
                    
                      {/* <ul className="dropdown-menu-list" >
                        {(item.id == 2) && [
                          ...menulist.Material,
                          ...menulist.Decoration,
                          ...menulist.Usage,
                          ...menulist.Others,
                        ].map((items) => {
                          return (
                            <li key={items.id} className='dropdown-menu-list-detail' >
                              <Link to={`products/${items.id}`}> {items.Name}</Link>
                            </li>
                          )
                        })}
                      </ul>
                      <ul className="nav-main-ul-li-dropdown-sub-list" >
                        {(item.id == 3) && brands.map((items, index) => {
                          return (
                            <li key={items.id} className='dropdown-menu-list-detail'>
                              <Link to={`products/${items.id}`} className='nav-main-ul-li-dropdown-sub-items'> {items.Name}</Link>
                            </li>
                          )
                        })}
                      </ul> */}
                    </a>
                  </li>
                ))
                }
              </ul>
            )}
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Home</NavLink>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="products" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Product List &nbsp;
              <i className="fa-solid fa-chevron-down icon-style"></i>
            </NavLink>
            <div className="nav-main-ul-li-dropdown" >
              <ul className="nav-main-ul-li-dropdown-sub">
                <li className="nav-main-ul-li-dropdown-sub-list">
                  <ul className="nav-main-ul-li-dropdown-sub-list" >
                    {menulist.Material.map((items, index) => {
                      return (
                        <li key={items.id} className='nav-main-ul-li-dropdown-sub-items' >
                          <Link to={`products/${items.id}`} className='nav-main-ul-li-dropdown-sub-items'> {items.Name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li className="nav-main-ul-li-dropdown-sub-list">
                  <ul className="nav-main-ul-li-dropdown-sub-list" >
                    {menulist.Decoration.map((items, index) => {
                      return (
                        <li key={items.id} className='nav-main-ul-li-dropdown-sub-items' >
                          <Link to={`products/${items.id}`} className='nav-main-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li className="nav-main-ul-li-dropdown-sub-list">
                  <ul className="nav-main-ul-li-dropdown-sub-list" >
                    {menulist.Usage.map((items, index) => {
                      return (
                        <li key={items.id} className='nav-main-ul-li-dropdown-sub-items' >
                          <Link to={`products/${items.id}`} className='nav-main-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li className="nav2">
                  <ul className="nav2" >
                    {menulist.Others.map((items, index) => {
                      return (
                        <li key={items.id} className='nav2' >
                          <Link to={`products/${items.id}`} className='nav-main-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>

              </ul>

            </div>

          </li>
          <li className="nav-main-ul-li">
            <NavLink to="brands" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Brands &nbsp;
              <i className="fa-solid fa-chevron-down icon-style"></i>
            </NavLink>
            <div className="nav-main-ul-li-dropdown"  >
              <ul className="nav-main-ul-li-dropdown-sub" style={{ maxWidth: 'fit-content' }}>
                <li className="nav-main-ul-li-dropdown-sub-list" >
                  <ul className="nav-main-ul-li-dropdown-sub-list" >
                    {BrandList.map((items, index) => {
                      return (
                        <li key={items.id} className='nav-main-ul-li-dropdown-sub-items' >
                          <Link to={`brands/${items.id}`} className='nav-main-ul-li-dropdown-sub-items' >  {items.Name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>

              </ul>
            </div>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/contact" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Contact</NavLink>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/about-us" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>About Us</NavLink>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/compare" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Compare</NavLink>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/Gallery" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Gallery</NavLink>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/FAQstore" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>FAQs</NavLink>
          </li>
          <li className="nav-main-ul-li">
            <NavLink to="/stores" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Store</NavLink>
          </li>

        </ul>
        {/* for mobie */}
        <div className="nav-main-mobile">
          <ul className="nav-main-mobile-ul">
            <li className="nav-main-mobile-ul-li">
              <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Home</NavLink>
            </li>
            <li className="nav-main-mobile-ul-li">
              <NavLink to="products" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Product List &nbsp;
                <i className="fa-solid fa-chevron-down icon-style"></i>
              </NavLink>
              <div className="nav-main-mobile-ul-li-dropdown" >
                <ul className="nav-main-mobile-ul-li-dropdown-sub">
                  <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                    <span> Tables</span>
                    <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                      {menulist.Material.map((items, index) => {
                        return (
                          <li key={items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                            <Link to={`products/${items.id}`} className='nav-main-mobile-ul-li-dropdown-sub-items'> {items.Name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                  <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                    {/* <img src={chairicon} alt="table" className='iconitems' /> */}
                    <span> Chairs</span>
                    <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                      {menulist.Decoration.map((items, index) => {
                        return (
                          <li key={items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                            <Link to={`products/${items.id}`} className='nav-main-mobile-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                  <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                    <span> Sofas</span>
                    <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                      {menulist.Usage.map((items, index) => {
                        return (
                          <li key={items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                            <Link to={`products/${items.id}`} className='nav-main-mobile-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                  <li className="nav-main-mobile-ul-li-dropdown-sub-list">s
                    <span> Storage</span>
                    <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                      {menulist.Others.map((items, index) => {
                        return (
                          <li key={items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                            <Link to={`products/${items.id}`} className='nav-main-mobile-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>

                </ul>

              </div>

            </li>
            <li className="nav-main-mobile-ul-li">
              <NavLink to="brands" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{ color: location === '/' ? '' : '#515151' }}>Brands &nbsp;
                <i className="fa-solid fa-chevron-down icon-style"></i>
              </NavLink>
              <div className="nav-main-mobile-ul-li-dropdown"  >
                <ul className="nav-main-mobile-ul-li-dropdown-sub" style={{ maxWidth: 'fit-content' }}>
                  <li className="nav-main-mobile-ul-li-dropdown-sub-list" >
                    <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                      {BrandList.map((items, index) => {
                        return (
                          <li key={items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                            <Link to={`brands/${items.id}`} className='nav-main-mobile-ul-li-dropdown-sub-items' >  {items.Name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>

                </ul>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </div >
  )
}

export default NavMain
