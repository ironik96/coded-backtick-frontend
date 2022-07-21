import { PayPalButtons } from "@paypal/react-paypal-js";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

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
export default PaypalCheckoutButton;