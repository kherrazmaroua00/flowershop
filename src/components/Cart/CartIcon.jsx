import { useState } from "react";
import { useCart } from "../../CartContext";
import { PiShoppingCartDuotone } from "react-icons/pi";
import "./CartIcon.css";

const CartDropdown = () => {
  const { cart, removeFromCart, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart-dropdown-container">
      {/* Cart Icon */}
      <button className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
        <PiShoppingCartDuotone size={30} /> ({cart.length})
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="cart-dropdown">
          <h2 className="cart-title" style={{ fontSize: "35px" }}>
            My Cart :
          </h2>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    {item.type === "custom" ? (
                      <div>
                        <strong>Your bouquet</strong>
                        <br />
                        {item.flowers.map((flower) => (
                          <p
                            style={{
                              fontFamily: "monospace",
                              fontSize: "12px",
                            }}
                            key={flower.id}
                          >
                            {flower.name} x {flower.quantity}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <span>{item.name}</span>
                    )}

                    <span style={{ fontFamily: "monospace", fontSize: "15px" }}>
                      {item.price} DA
                    </span>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="remove-btn"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>

              <hr />
              <div
                className="f"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "20px",
                }}
              >
                <p className="cart-total">
                  <b>Total:</b> {total} DA
                </p>
                <button className="button ">
                  {" "}
                  <a href="#Contact">confirm</a>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
