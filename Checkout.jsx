function Checkout({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully 🎉");
  };

  return (
    <div className="checkout">
      <h2>Checkout 🧾</h2>

      {cart.map(item => (
        <p key={item.id}>
          {item.name} x {item.qty} = ₹{item.price * item.qty}
        </p>
      ))}

      <h3>Total Amount: ₹{total}</h3>

      <button onClick={placeOrder} className="checkout-btn">
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
