import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.name === item.name);
      if (exist) {
        return prev;
      }
      return [...prev, item];
    });
  };

  // إزالة عنصر
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // مسح الكارت كامل
  const clearCart = () => setCart([]);

  // حساب المجموع
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook صغير باش نستعملو context بسهولة
export const useCart = () => useContext(CartContext);
