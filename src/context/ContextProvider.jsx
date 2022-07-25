import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Handle add to cart
  const handleAddToCart = (prod) => {
    setCart((prev) => {
      const findProduuctInCart = prev.find((item) => item.id === prod.id);
      if (findProduuctInCart) {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      //First
      return [...prev, { ...prod, amount: 1 }];
    });
  };
  // Handle remove from cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;
          return [...cal, { ...item, amount: item.amount - 1 }];
        }
        return [...cal, { ...item }];
      }, []);
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();

        console.log(products, "this is data");
        setProducts(products);
      } catch (err) {}
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, handleAddToCart, cart, handleRemoveFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
