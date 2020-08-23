import React from 'react';
import './App.css';
import Header from './Header';
import Product from './Screens/ProductScreen';
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Footer';
import Home from './Home';
import Designer from './DesignerHome';

import './home-style.css';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div>
    
     <div className="grid-container">
     
     <Header />
           
     

      
      
      {/*
       ----------------Sidebar-----------------------
        */}



<div id="sidebar-1">
<aside className="sidebar">
<h2>Categories</h2>

<button className="sidebar-close-button" onClick={closeMenu}>
  x
</button>



{/* /*--------------------------*/ }
<div className='wrapper'>
<nav id="sidebar">
           
                
                


            <ul className="list-unstyled components">
                {/* <!-- <p>Dummy Heading</p> --> */}
                <li className="active">
                    <a href="#men" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Men</a>
                    <ul className="collapse list-unstyled" id="men">

                        <li>
                            <a href="#casual" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Casual Wear</a>
                            <ul className="collapse list-unstyled" id="casual">
                                <li>
                                    <Link to="./Screens/ProductScreen">T-shirts</Link>
                                </li>
                                <li>
                                    <Link href="#">Casual shirts</Link>
                                </li>
                                <li>
                                    <a href="#">Sweat shirts</a>
                                </li>
                                <li>
                                    <a href="#">Sweaters</a>
                                </li>
                                <li>
                                    <a href="#">Casual Trousers</a>
                                </li>
                                <li>
                                    <a href="#">Jackets</a>
                                </li>
                                <li>
                                    <a href="#">Shorts</a>
                                </li>
                            </ul>
                        </li>

                         <li>
                            <a href="#formal" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Formal Wear</a>
                            <ul className="collapse list-unstyled" id="formal">
                                <li>
                                        <a href="#"> Fora Trouser</a>
                                        </li>
                                        <li>
                                            <a href="#"> Suits</a>
                                        </li>
                                        <li>
                                            <a href="#">Blazers and Coats</a>
                                        </li>
                                        <li>
                                            <a href="#"> Formal Shirts</a>
                                        </li>
                                        <li>
                                            <a href="#"> Suits</a>
                                 </li>
                            </ul>
                        </li>

                         <li>
                            <a href="#ethnic" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Ethnic Wear</a>
                            <ul className="collapse list-unstyled" id="ethnic">
                                <li>
                                            <a href="#">Kurti's</a>
                                        </li>
                                        <li>
                                            <a href="#">Sherwanis</a>
                                        </li>
                                        <li>
                                            <a href="#">Dhotis</a>
                                        </li>
                            </ul>
                        </li>


                          
                    </ul>
                </li>

                {/* <!-- ------------------women-------------------------- --> */}

                <li>
                    <a href="#women" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Women</a>
                    <ul className="collapse list-unstyled" id="women">

                        <li>
                            <a href="#Wcasual" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Casual Wear</a>
                            <ul className="collapse list-unstyled" id="Wcasual">
                                <li>
                                            <a href="#">T-shirts</a>
                                        </li>
                                        <li>
                                            <a href="#">Casual Shirts</a>
                                        </li>
                                       <li>
                                            <a href="#">Jackets</a>
                                        </li>
                                        <li>
                                            <a href="#">Shorts</a>
                                        </li>
                            </ul>
                        </li>

                         <li>
                            <a href="#Wformal" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Formal Wear</a>
                            <ul className="collapse list-unstyled" id="Wformal">
                                  <li>
                                            <a href="#">Formal Skirts</a>
                                        </li>
                                        <li>
                                            <a href="#">Blazers and Coats</a>
                                        </li>
                                        <li>
                                            <a href="#"> Suits</a>
                                        </li>
                            </ul>
                        </li>

                         <li>
                            <a href="#Wethnic" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Ethnic Wear</a>
                            <ul className="collapse list-unstyled" id="Wethnic">
                                 <li>
                                        <a href="#">Anarkali</a>
                                        </li>
                                        <li>
                                            <a href="#">Saree</a>
                                        </li>
                                        <li>
                                            <a href="#">Salwar Suits</a>
                                        </li>
                            </ul>
                        </li>
                          
                    </ul>
                </li>

                {/* <!-- ------------------------------children------------------------------ --> */}

                <li>
                    <a href="#child" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Children</a>
                    <ul className="collapse list-unstyled" id="child">

                        <li>
                            <a href="#boys" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Boy's Clothing</a>
                            <ul className="collapse list-unstyled" id="boys">
                                <li>
                                            <a href="#">T-shirts</a>
                                        </li>
                                        <li>
                                            <a href="#">Casual Shirts</a>
                                        </li>
                                       <li>
                                            <a href="#">Jackets</a>
                                        </li>
                                        <li>
                                            <a href="#">Shorts</a>
                                        </li>
                            </ul>
                        </li>

                         <li>
                            <a href="#girls" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Girl's Clothing</a>
                            <ul className="collapse list-unstyled" id="girls">
                                <li>
                                            <a href="#">Anarkali</a>
                                        </li>
                                        <li>
                                            <a href="#">Saree</a>
                                        </li>
                                        <li>
                                            <a href="#">Salwar Suits</a>
                                        </li>
                            </ul>
                        </li>

  
                    </ul>
                </li>

               
                {/* <!-- <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li> --> */}
            </ul>

            {/* <!-- <ul className="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                </li>
            </ul> --> */}
        </nav>
</div>

{/* /*--------------------------*/ }

</aside>
</div>
<div id="productsid">
<main className="main">
       <div className="content">

</div>
</main>
      
</div>

  <Product />
</div>

<Route path='/products/:id' component={ProductScreen} />
<Route path='/' exact={true} component={HomeScreen} />

       
       <Route path="/home">
          <Home />
    </Route>
    <Route path="/DesignerHome">
          <Designer />
    </Route>
    <Footer />
     
     </div>
     
      </BrowserRouter>
  );
}

export default App;
