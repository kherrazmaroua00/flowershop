import React from "react";
import "./BouquetCard.css";
import { useCart } from "../../CartContext";

const BouquetCard = ({ image, category, name, price }) => {
  const { addToCart } = useCart();

  const handleAddBouquet = () => {
    addToCart({ image, category, name, price });
  };
  return (
    <div className="bouquet-card">
      <div className="bouquet-image-container">
        <img src={image} alt={name} className="bouquet-image" />{" "}
        <button
          onClick={handleAddBouquet}
          style={{
            borderRadius: "20px",
            backgroundColor: "#e7dcd4",
            color: "#2d0c0c",
            padding: "10px 20px",
            margin: "10px 0",
          }}
        >
          Add to Cart
        </button>
      </div>
      <div className="bouquet-category">{category}</div>
      <div className="bouquet-name">{name}</div>
      <div className="bouquet-price"> {price} DA</div>
    </div>
  );
};

export default BouquetCard;
