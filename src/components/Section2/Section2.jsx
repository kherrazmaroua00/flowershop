import React, { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Section2.css";
import hd from "/public/img/hd.png";
import w from "/public/img/w.png";
import b1 from "/public/img/b1.png";
import b3 from "/public/img/b2.png";
import yb from "/public/img/yb.png";
import pinb from "/public/img/pinb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BouquetCard from "../BouquetCard/BouquetCard";
import { useState } from "react";
export const Section2 = () => {
  const bouquets = [
    {
      id: 1,
      name: "Red flowers",
      price: 29990,
      image: w,
      category: "wedding",
    },

    {
      id: 3,
      name: "purple flowers",
      price: 19990,
      image: b3,
      category: "funeral",
    },
    {
      id: 4,
      name: "Yellow flowers",
      price: 34990,
      image: yb,
      category: "graduation",
    },
    {
      id: 5,
      name: "Pink flowers",
      price: 39990,
      image: pinb,
      category: "valentine's day",
    },
    {
      id: 6,
      name: "Blue flowers",
      price: 49990,
      image: hd,
      category: "home decoration",
    },

    {
      id: 8,
      name: "Mixed flowers",
      price: 54990,
      image: b1,
      category: "birthday",
    },
  ];
  const [filter, setFilter] = useState("all");
  const [selectedBouquet, setSelectedBouquet] = useState([]);
  const filterBouquets =
    filter === "all"
      ? bouquets
      : bouquets.filter((bouquet) => bouquet.category === filter);
  const getvalue = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="s2">
      <div className="head">
        <h1 style={{ padding: "1rem" }}>Available Bouquets</h1>
        <hr
          style={{
            margin: "0rem 0 2rem 0rem ",
            border: "none",
            borderTop: "3px solid #e7dcd4",
          }}
        />
      </div>
      <div className="filters">
        <button className="button button filter" value="all" onClick={getvalue}>
          All
        </button>
        <button
          className="button filter"
          value="home decoration"
          onClick={getvalue}
        >
          Home Decoration
        </button>
        <button className="button filter" value="wedding" onClick={getvalue}>
          Wedding
        </button>
        <button className="button filter" value="birthday" onClick={getvalue}>
          Birthday
        </button>
        <button className="button filter" value="funeral" onClick={getvalue}>
          Funeral
        </button>
        <button
          className="button filter"
          value="valentine's day"
          onClick={getvalue}
        >
          Valentine's Day
        </button>
        <button className="button filter" value="graduation" onClick={getvalue}>
          Graduation
        </button>

        <button
          className="button"
          style={{ display: "flex", alignItems: "center" }}
        >
          <a
            style={{
              color: "inherit",
              textDecoration: "none",
              all: "unset",
            }}
            href="#ordernow"
          >
            Made your own bouquet
          </a>
          <AddIcon />
        </button>
      </div>
      {/* Custom navigation buttons above Swiper */}

      <div className="bouquets">
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          style={{ display: "flex", gap: "40px", justifyContent: "center" }}
        >
          {filterBouquets.map((bouquet) => (
            <SwiperSlide key={bouquet.id} style={{ margin: "0 10px" }}>
              <BouquetCard
                image={bouquet.image}
                category={bouquet.category}
                name={bouquet.name}
                price={bouquet.price}
                selectedBouquet={selectedBouquet}
                setSelectedBouquet={setSelectedBouquet}
              />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
