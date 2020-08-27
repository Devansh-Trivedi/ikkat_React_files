import React from 'react';
import {BrowserRouter,Route,Link,Redirect} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Home from './Home';
function Header(){
    const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
    return(
       
        
         <div id="header-2">
        
        <header>
        <div className="about-container">
        <div class="container">
            <input type="checkbox" name="" id="check" />
            
            
            <div class="logo-container">
            
            <div className="sidebar-logo">
             <button onClick={openMenu}>
                 &#9776;
            </button>
          </div>
          <Link to="/"> <h3 class="logo">MIRROR</h3></Link>
                
            </div>
            

                   
                   




           
            

            <div class="nav-btn">
                <div class="nav-links">
                    <ul>
                        <li class="nav-link active">
                            <Link to="/home">Home</Link>
                        </li>
                        <li class="nav-link" >
                            <a  href="#">About</a>
                        </li>
                        <li class="nav-link">
                            <a href="#">Trending</a>
                        </li>
                        <li class="nav-link">
                            <a href="#">Customize</a>
                        </li>
                        <li class="nav-link">
                            <a href="/">Shop</a>
                        </li>

                        <li class="nav-link">
                            <a href="#">Account<i class="fas fa-caret-down"></i></a>
                            <div class="dropdown">
                                <ul>
                                    <li class="dropdown-link">
                                        <a href="#">My Account</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">My Order</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Settings</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">LogOut</a>
                                    </li>
                                    <div class="arrow"></div>
                                </ul>
                            </div>
                        </li>
                    </ul>
                      
                
      
                   
   
            </div>

                <div class="log-sign">
                    

            <div class="searchBox">

            <input class="searchInput"type="text" name="" placeholder="Search" />
            <button class="searchButton" href="#">
                <i class="fa fa-search">
                   
                </i>
            </button>
        </div>

        <a href="#" class="fa fa-bell" ></a>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" class="fa fa-heart">
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" class="fa fa-shopping-cart">
                </a>
                </div>
            </div>

            <div class="hamburger-menu-container">
                <div class="hamburger-menu">
                    <div></div>
                </div>
            </div>
            </div>
            </div>    
    </header>
   
     <br />
     </div>
       







    );
    }
export default Header;