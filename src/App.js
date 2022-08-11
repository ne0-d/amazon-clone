import "./App.css";
import Checkout from "./components/Checkout";
import DisplayContent from "./components/DisplayContent";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductFullView from "./components/ProductFullView";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <DisplayContent /> */}
      {/* <ProductFullView /> */}
      <Checkout />
    </div>
  );
}

export default App;
