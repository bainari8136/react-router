import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';



function Home(){
  return  (
    <div>
      <h2>Home</h2>
      <p>welcome to our homepage</p>
    </div>
  );
  }
function Categories(){
    return (
    <div>
      <h2>Categories</h2>
      <p>Browse items by category</p>
    </div>
  );
  }
function Products(){
    return (
    <div>
      <h2>Products</h2>
      <p>Browse individual products</p>
    </div>
  );
}

function App(){
  
  
  return (
    
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/categories" element={<Categories/>}/>
         <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
    
  );
}

export default App;