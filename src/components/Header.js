import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <nav>
      <div className="header">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
        />
        <div className="header-locator">
          <PlaceIcon className="header-locationIcon" />
          <div className="header-location">Raipur</div>
        </div>
        <div className="header-search">
          <select className="header-select">
            <option value="">All</option>
            <option value="">Mobile</option>
            <option value="">Groceries</option>
            <option value="">TV</option>
            <option value="">Playstation</option>
          </select>
          <input className="header-input" type="text" />
          <SearchIcon className="header-searchIcon" />
        </div>
        <div className="header-options">
          <div className="header-option">
            <span className="header-option-lineOne">Hello</span>
            <span className="header-option-lineTwo"> Sign in</span>
          </div>
          <div className="header-option">
            <span className="header-option-lineOne">Returns</span>
            <span className="header-option-lineTwo"> & Orders</span>
          </div>
          <div className="header-option">
            <span className="header-option-lineOne">Your</span>
            <span className="header-option-lineTwo"> Prime</span>
          </div>
          <div className="header-optionBasket">
            <ShoppingCartIcon className="header-basketIcon" />
            <span className="header-option-lineTwo cart-count">0</span>
          </div>
        </div>
      </div>
      <div className="header-footer">
        <MenuIcon className="header-footer-menuIcon" />
        <span className="header-footer-content all">All</span>
        <span className="header-footer-content">Best Sellers</span>
        <span className="header-footer-content">Today's Deal</span>
        <span className="header-footer-content">Mobiles</span>
        <span className="header-footer-content">Books</span>
        <span className="header-footer-content">Electronics</span>
      </div>
    </nav>
  );
}
