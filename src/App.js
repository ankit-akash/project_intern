import React, { useState } from "react";
import { ProductDetails } from "./Data/details";
import css from "./App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const App = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductDetails);
  const filter = (id) => {
    setMenuProducts(ProductDetails.filter((product) => product.id === id));
  };
  return (
    <div className="App">
      <div>
        <Sidebar>
          <Menu>
            <SubMenu label="List of items">
              <MenuItem onClick={() => filter(1)}> Shirt1 </MenuItem>
              <MenuItem onClick={() => filter(2)}> Shirt2 </MenuItem>
              <MenuItem onClick={() => filter(3)}> Shirt3 </MenuItem>
              <MenuItem onClick={() => filter(4)}> Shirt4 </MenuItem>
              <MenuItem onClick={() => filter(5)}> Shirt5 </MenuItem>
              <MenuItem onClick={() => filter(6)}> Shirt6 </MenuItem>
              <MenuItem onClick={() => filter(7)}> Trouser1 </MenuItem>
              <MenuItem onClick={() => filter(8)}> Trouser2 </MenuItem>
              <MenuItem onClick={() => filter(9)}> Trouser3 </MenuItem>
              <MenuItem onClick={() => filter(10)}> Trouser4 </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
      <div className="main">
        Card
        <div className="box">
          {MenuProducts.map((product, i) => (
            <div className={css.box}>
              <div className="item">
                <span>{product.Name}</span>
              </div>
              <div className="price">
                <span>Price:Rs. {product.Price}₹</span>
              </div>
              <div className="itemno">
                <span>Item Id: {product.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
