import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <img
        className="product-image"
        src="https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UY218_.jpg"
      />
      <div className="product-title">
        Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core
        Helio G25 Processor | 5000 mAh Battery
      </div>
      <div className="product-rating">⭐⭐⭐⭐181,221</div>
      <div className="product-price-section">
        <span className="product-discount-price">
          <sup>$</sup>6,999
        </span>
        <span className="product-actual-price">$8,499</span>
        <span className="product-discount">(18% off)</span>
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
