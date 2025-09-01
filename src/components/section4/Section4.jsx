import React from "react";
import "./Section4.css";
import { TbFlower } from "react-icons/tb";
import { PiFlowerLotusBold } from "react-icons/pi";
import { GiVanillaFlower } from "react-icons/gi";
import { TbFlowerFilled } from "react-icons/tb";
export default function Section4() {
  const points = [
    {
      icon: <TbFlower className="icon green" />,
      title: "High Quality",
      desc: "We provide top-quality designs with attention to detail.",
    },
    {
      icon: <PiFlowerLotusBold className="icon green" />,
      title: "Affordable Prices",
      desc: "Our services are budget-friendly with no hidden costs.",
    },
    {
      icon: <GiVanillaFlower className="icon green" />,
      title: "Fast Delivery",
      desc: "We deliver projects on time without compromising quality.",
    },
    {
      icon: <TbFlowerFilled className="icon green" />,
      title: "Customer Support",
      desc: "We stay connected with our clients and support them anytime.",
    },
  ];

  return (
    <section className="whyus" id="About">
      <h2 className="title">Why Us?</h2>

      <div className="cards">
        {points.map((item, i) => (
          <div key={i} className="card">
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
