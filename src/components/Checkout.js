import Grid from "@material-ui/core/Grid";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
export default function Checkout() {
  return (
    <div className="checkout">
      <Grid container>
        <Grid item={10}>
          <div className="checkout-container">
            <div className="checkout-title">Shopping Cart</div>
            <div>
              <CheckoutItem />
              {/* <CheckoutItem /> */}
              {/* <CheckoutItem /> */}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div>
            <div>Subtotal (2 items): 1,01,998.00</div>
            <div>
              <button className="checkout_button"></button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
