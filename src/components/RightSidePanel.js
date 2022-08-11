import React from "react";
import Product from "./Product";
import "./RightSidePanel.css";

export default function RightSidePanel() {
  const [listOfItems, setListOfItems] = React.useState([]);

  React.useEffect(() => {
    let list = [
      {
        image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UL320_.jpg",
        name: "Apple iPhone 13 Pro Max (128GB) - Sierra Blue",
        rating: "⭐⭐⭐⭐181,221",
        currency: "₹",
        disPrice: "115,221",
        actualPrice: "₹1,29,900",
        discount: "18",
      },
      {
        image: "https://m.media-amazon.com/images/I/71uuDYxn3XL._AC_UL320_.jpg",
        name: "Apple iPhone 12 Mini (128GB) - Black",
        rating: "⭐⭐⭐5,802 ",
        currency: "₹",
        disPrice: "59,999",
        actualPrice: "₹64,900",
        discount: "8",
      },
      {
        image: "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UL320_.jpg",
        name: "Apple iPhone 11 Pro Max (128GB) - Black",
        rating: "⭐⭐⭐⭐181,221",
        currency: "₹",
        disPrice: "115,221",
        actualPrice: "₹1,29,900",
        discount: "18",
      },
      {
        image: "https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UL320_.jpg",
        name: "Apple iPhone 13 Pro Max (128GB) - Sierra Blue",
        rating: "⭐⭐⭐⭐181,221",
        currency: "₹",
        disPrice: "115,221",
        actualPrice: "₹1,29,900",
        discount: "18",
      },
    ];
    setListOfItems(list);
  });
  const searchedItems = listOfItems.map((item) => (
    <Product definition={item} />
  ));
  return <div className="rightSide">{searchedItems}</div>;
}
