import "./ProductFullView.css";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";

export default function ProductFullView() {
  return (
    <div className="productFull">
      <Grid container>
        <Grid item xs={6}>
          <img
            className="productFull-image"
            src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
          />
        </Grid>
        <Grid item xs={3}>
          <div className="productFull-description">
            <p className="title">Apple iPhone 13 (128GB) - Green</p>
            <div className="rating">
              <Rating
                name="read-only"
                value="3"
                readOnly
                className="star-rating"
                style={{ fontSize: "17px" }}
              />
              <span className="rating-count">35,999</span>
            </div>
            <hr></hr>
            <div className="price-section">
              <span className="product-discount">-11% </span>
              <span className="product-discount-price">
                <sup>₹</sup>
                70,990
              </span>
              <p className="product-actual-price">
                <span className="mrp">M.R.P: </span>₹79,900.00
              </p>
              <p className="product-tax">Inclusive of all taxes</p>
              <p className="product-tax">
                EMI starts at ₹3,342. No Cost EMI available EMI options
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper variant="outlined" className="productFull-order">
            <button className="productFull-addToCart">Add to Cart</button>
            <button className="productFull-buyNow">Buy Now</button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
