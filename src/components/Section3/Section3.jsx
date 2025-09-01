import React from "react";
import "./Section3.css";
import Box from "../Box/Box";
import FlowerCard from "../FlowerCard/FlowerCard";
import rose from "/public/img/rose.png";
import lily from "/public/img/lily.png";
import daisy from "/public/img/daisy.png";
import tulip from "/public/img/tulip.png";
import sunflower from "/public/img/sunflower.png";
import orchid from "/public/img/iris.png";
import iris from "/public/img/orchid.png";
import { useState } from "react";

export const Section3 = () => {
  const flowers = [
    {
      image: rose,
      price: 200,
      name: "ROSE",
      color: "red",
    },
    {
      image: lily,
      price: 250,
      name: "LILY",
      color: "pink",
    },
    {
      image: daisy,
      price: 200,
      name: "DAISY",
      color: "white",
    },
    {
      image: tulip,
      price: 300,
      name: "TULIP",
      color: "pink",
    },
    {
      image: sunflower,
      price: 150,
      name: "SUNFLOWER",
      color: "yellow",
    },
    {
      image: orchid,
      price: 400,
      name: "ORCHID",
      color: "purple",
    },
    { image: iris, price: 1000, name: "IRIS", color: "blue" },
  ];
  const [selectedFlowers, setSelectedFlowers] = useState([]);

  return (
    <div className="s3" id="ordernow">
      <div className="header">
        <h1>Your Bouquet</h1>
        <hr
          style={{
            margin: "0rem 0 2rem 0rem ",
            border: "none",
            borderTop: "3px solid #e7dcd4",
          }}
        />
      </div>
      <div className="content">
        <div className="s3left">
          <Box
            selectedFlowers={selectedFlowers}
            setSelectedFlowers={setSelectedFlowers}
          />
        </div>
        <div className="s3right">
          <div className="flower-list">
            {flowers.map((flower, index) => (
              <FlowerCard
                selectedFlowers={selectedFlowers}
                setSelectedFlowers={setSelectedFlowers}
                key={index}
                image={flower.image}
                name={flower.name}
                price={flower.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
