import React from 'react';
import data from '../data' 
import {Link} from 'react-router-dom';
// import Footer from '../Footer';


function HomeScreen(Props){

    return(
<div>
<div>
    
         <ul className="products">
         { data.products.map(product=>
         <li>
           <div className="product">
                <img src={product.image} className="product-image" alt="product" />
                <div className="product-name">
                <Link to={"/product/"+product._id}>{product.name}</Link> 
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}$</div>
                <div className="product-rating">{product.rating} stars ({product.review})</div>

            </div>
         </li>
         )
           
         }
         
         </ul>
       </div>
         <ul>
           

         </ul>
      
         {/* <Footer />; */}
</div>

);
}
export default HomeScreen;