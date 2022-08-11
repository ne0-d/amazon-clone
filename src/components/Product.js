import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <img className="product-image" src={props.definition.image} />
      <div className="product-title">{props.definition.name}</div>
      <div className="product-rating">⭐⭐⭐⭐{props.definition.rating}</div>
      <div className="product-price-section">
        <span className="product-discount-price">
          <sup>₹</sup>
          {props.definition.disPrice}
        </span>
        <span className="product-actual-price">
          {props.definition.actualPrice}
        </span>
        <span className="product-discount">
          ({props.definition.discount}% off)
        </span>
      </div>
      <div className="product-cardOffers">
        <p>10% Off on SBI Credit Cards</p>
      </div>
      <div className="product-dilevery-time">
        <img
          className="prime-logo"
          src="https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png"
        />
        <span>
          Get it by <strong>Monday, August 15</strong>
        </span>
        <p>FREE Delivery by Amazon</p>
      </div>
    </div>
  );
}
