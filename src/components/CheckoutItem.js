import "./CheckoutItem.css";

export default function CheckoutItem() {
  return (
    <div className="checkoutItem">
      <div className="checkoutItem-image">
        <img src="https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UL320_.jpg" />
      </div>
      <div className="checkoutItem-content">
        <div className="checkoutItem-product-title">
          Apple iPhone 13 Pro Max (128GB) - Sierra Blue
        </div>
        <p>In stock</p>
        <p>Eligible for FREE Shipping</p>
        <img
          className="fulfilled-badge"
          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
        />
        <label className="gitf-option">
          <input type="checkbox" />
          This will be a gift
        </label>
        <div className="more-actions">
          <label className="quantity action">
            <select id="cars" name="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          |
          <a href="#" className="action">
            Delete
          </a>
          <a href="#" className="action">
            Save for later
          </a>
          <a href="#" className="action">
            See more like this
          </a>
        </div>
      </div>
    </div>
  );
}
