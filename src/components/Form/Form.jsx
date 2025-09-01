import React from "react";
import "./Form.css";

export default function OrderForm() {
  return (
    <div className="form-container" id="Contact">
      <form className="order-form">
        <input type="text" placeholder="FULL NAME" />
        <input type="tel" placeholder="PHONE NUMBER" />
        <input type="email" placeholder="EMAIL" />
        <input type="text" placeholder="ADDRESS" />
        <textarea placeholder="NOTES"></textarea>
        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
}
