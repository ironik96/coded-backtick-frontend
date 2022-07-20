import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { product } = props;

  return (
    <PayPalButtons style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill"
      }} />
  );
}