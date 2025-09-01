import React from "react";
import "./FlowerCard.css";
import { useCart } from "../../CartContext";
const FlowerCard = ({
  image,
  price,
  name,
  selectedFlowers,
  setSelectedFlowers,
}) => {
  const handleAddFlower = () => {
    setSelectedFlowers((prev) => {
      const exist = prev.find((item) => item.name === name);
      if (exist) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { name, price, image, quantity: 1 }];
      }
    });
  };

  const handleRemoveFlower = () => {
    setSelectedFlowers((prev) => {
      const exist = prev.find((item) => item.name === name);
      if (!exist) return prev;
      if (exist.quantity === 1) {
        return prev.filter((item) => item.name !== name);
      } else {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };
  const flower = selectedFlowers.find((item) => item.name === name);
  const count = flower ? flower.quantity : 0;
  return (
    <div className="card">
      <div className="card-quantity">x{count}</div>
      <img src={image} alt={name} className="card-image" />
      <div className="card-price">{price} DA</div>
      <div className="card-name">{name}</div>
      <button className="btn" onClick={handleAddFlower}>
        +
      </button>
      <button className="btn" onClick={handleRemoveFlower}>
        −
      </button>
    </div>
  );
};

export default FlowerCard;
