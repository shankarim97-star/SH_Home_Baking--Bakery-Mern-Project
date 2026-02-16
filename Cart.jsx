import { Link } from "react-router-dom";

function Cart({ cart, updateQty }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <div className="qty">
            <button onClick={() => updateQty(item.id,"dec")}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id,"inc")}>+</button>
          </div>

          <p>Subtotal: ₹{item.price * item.qty}</p>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
