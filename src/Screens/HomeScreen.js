import React, {useState, useEffect} from 'react';
import data from '../data.js' 
import {Link} from 'react-router-dom';
// import axios from "axios";
// import Footer from '../Footer';


function HomeScreen(props){

  // const [products, setProduct]=useState([]);

  // useEffect(()=>{
  //   const fetchData= async () => {
  //     const {data} = await axios.get("/api/products");
  //     setProduct(data);
  //   }
  //   fetchData();
  //   return () =>{

  //   };
  // }, [])


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