import PaypalCheckoutButton from "./PaypalCheckoutButton";

const Checkout = () => {
  const product = {
    description: "BackTick Coins",
    price: 19
  };

  return (
    <div>
      <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
      </div>
    </div>
  );
};

export default Checkout;