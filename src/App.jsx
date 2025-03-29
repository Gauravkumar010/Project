import React from "react";
import Navbar from "./Navbar";
import Hero from "./component/Hero";
import TopCollection from "./component/TopCollection";

import img1 from "./component/images/lather.jpg";
import img2 from "./component/images/photo1.jpg";
import img3 from "./component/images/pottery.jpg";
import img4 from "./component/images/photo2.jpg";
import img5 from "./component/images/lather2.jpg";

import { BrowserRouter, Route, Routes,useLocation} from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Shop from "./component/Shop";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import Product from "./component/Product/Product";
import Gaurav from "./Gaurav";
import Footer from "./component/Footer";


function Layout() {
  
  let slides = [
    // "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
    img2,
    img1,
    img3,
    img4,
    img5,
  ];

  const location = useLocation();

  // Hide Home component when not on "/" route
  const showHomeComponents = location.pathname === "/";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
      {/* Show Hero, TopCollection, and Product only on Home page */}

      {showHomeComponents && (
        <>
          <div className="w-full mx-auto">
        <Hero slides={slides} />
      </div>
          <TopCollection />
          <Product />

        </>
      )}
 <Footer/>
    </>
  );
}

function App() {


  return (
    <>
  <BrowserRouter> 
         <Layout/>
    </BrowserRouter>

   
    </>
  );
}

export default App;
