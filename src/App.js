import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Cart from "./components/pages/Cart";
import Blog from "./components/pages/Blog";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/contact";
import Products from "./components/pages/Products";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
