import React, { useState } from "react";
import "./Box.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../CartContext";

const Box = ({ selectedFlowers, setSelectedFlowers }) => {
  const { addToCart } = useCart();
  const [giftMessage, setGiftMessage] = useState(false);
  const [selectedShape, setSelectedShape] = useState(null);

  const handleRemoveFlower = (flowername) => {
    setSelectedFlowers((prev) =>
      prev.filter((item) => item.name !== flowername)
    );
  };

  const handleAddCustomBouquetToCart = () => {
    if (selectedFlowers.length === 0) return;

    const totalFlowersPrice = selectedFlowers.reduce(
      (sum, flower) => sum + flower.price * (flower.quantity || 1),
      0
    );
    const finalPrice = totalFlowersPrice + (giftMessage ? 500 : 0);

    const customBouquet = {
      id: Date.now(),
      type: "custom",
      name: "Custom Bouquet",
      price: totalFlowersPrice,
      flowers: selectedFlowers,
    };

    addToCart(customBouquet);
  };

  const shapes = ["ROUND", "CASCADE", "PAGEANT", "HOOP", "POSY"];

  const totalFlowersPrice = selectedFlowers.reduce(
    (sum, flower) => sum + flower.price * (flower.quantity || 1),
    0
  );
  const finalPrice = totalFlowersPrice + (giftMessage ? 500 : 0);
  return (
    <div className="box">
      {/* Bouquet Shape */}
      <h2>BOUQUET SHAPE :</h2>
      <div className="shape-buttons">
        {shapes.map((shape) => (
          <button
            key={shape}
            onClick={() => setSelectedShape(shape)}
            className={selectedShape === shape ? "active" : ""}
          >
            {shape}
          </button>
        ))}
      </div>

      {/* Selected Flowers */}
      <h3>SELECTED FLOWERS :</h3>
      <div className="selected-flowers">
        {selectedFlowers.map((flower) => (
          <div key={flower.id} className="flower-tag">
            <span>{flower.name}</span>
            <span style={{ fontFamily: "monospace", fontWeight: "bold" }}>
              x{flower.quantity}
            </span>
            <IconButton
              aria-label="delete"
              onClick={() => handleRemoveFlower(flower.name)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Gift Message */}
      <div className="gift-section">
        <h2>
          ADD A GIFT MESSAGE :(optional)
          <input
            type="checkbox"
            checked={giftMessage}
            onChange={() => setGiftMessage(!giftMessage)}
          />
        </h2>
        {giftMessage && (
          <textarea placeholder="Write your message here..."></textarea>
        )}
      </div>

      {/* Price */}
      <div className="price-box">
        <span>TOTAL PRICE{giftMessage ? " (+500 DA)" : ""}:</span>
        <span className="price">{finalPrice} DA</span>
      </div>

      {/* Buttons */}
      <div className="actions">
        <button
          className="button cancel"
          onClick={() => {
            setSelectedFlowers([]);
            setSelectedShape(null);
            setGiftMessage(false);
          }}
        >
          cancel
        </button>
        <button className="button add" onClick={handleAddCustomBouquetToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Box;
