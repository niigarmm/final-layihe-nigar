import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "../src/Favorites/Favorites";
import { useState } from "react";
import Login from "./Login/Login"
import LearnMore from "../src/LearnMore/LearnMore";

function App() {
  const [favorites, setFavorites] = useState([]);
  const productArray = [
    {
      id: 1,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240905-3_300x.jpg?v=1725508872",
      desc: "UHA Tokuno Milk 8.2 High Concentrated Candy ",
      price: 3.9,
    },
    {
      id: 2,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-146_900x.jpg?v=1724651243",
      desc: "Sweet Sakura Tea - Cherry Blossoms",
      price: 8.9,
    },
    {
      id: 3,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-197_2f9f69d5-e09e-4bc4-b9be-40e1e6681c85_300x.jpg?v=1724651074",
      desc: "Ojamajo Doremi Petit Collectible Can",
      price: 5.9,
    },
    {
      id: 4,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-203_300x.jpg?v=1724650580",
      desc: "Jagariko Potato Snack Memo Pad",
      price: 4.9,
    },
    {
      id: 5,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-186_300x.jpg?v=1724650210",
      desc: "Fuji Seika Mochi Candy - Energy Drink",
      price: 1.9,
    },
    {
      id: 6,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-188_300x.jpg?v=1724650012",
      desc: "Fuji Seika Mochi Candy - Peach",
      price: 1.9,
    },
    {
      id: 7,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-190_300x.jpg?v=1724649750",
      desc: "Fuji Seika Mochi Candy - Burnt Caramel",
      price: 1.9,
    },
    {
      id: 8,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-206_300x.jpg?v=1724649416",
      desc: "UHA Mikakuto Ninja Meshi Steel Gummy",
      price: 4.9,
    },
    {
      id: 9,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-120_300x.jpg?v=1724649158",
      desc: "Tohato Salty Caramel Corn x Fujiya Mini Home",
      price: 5.9,
    },
    {
      id: 10,
      photo:
        "https://www.blippo.com/cdn/shop/files/20240821-117_300x.jpg?v=1724648904",
      desc: "Milky Peko-Chan Candy",
      price: 3.9,
    },
  ];
  return (
    //  <Provider store={store}>
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home productArray={productArray} favorites={favorites} setFavorites={setFavorites} />} />
       <Route path="/favorites" element={<Favorite favorites={favorites} productArray={productArray} />} />
       <Route path="/login" element={<Login />} />
       <Route path="/learn-more" element={<LearnMore />} />
       </Routes>
     </BrowserRouter>
  //  </Provider>
  );
}

export default App;
