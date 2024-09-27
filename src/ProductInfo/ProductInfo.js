import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import "../ProductInfo/ProductInfo.css";
import BoxIcon from "../Image/box-icon.png";
import AlertIcon from "../Image/alert-icon.png";
import MoneyIcon from "../Image/money-icon.png";
import Product from "../Product/Product";

const ProductInfo = ({ productArray }) => {
  const [addCart, setAddCart] = useState("Add To Cart");
  const addToCart = () => {
    setAddCart((prevText) =>
      prevText === "Add To Cart" ? "Added!" : "Add To Cart"
    );
  };
  const { id } = useParams();
  const product = productArray.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Header />
      <div className="product-detail">
        <div className="product-detail-item">
          <img src={product.photo} alt="" className="product-photo" />
          <div className="product-info-item">
            <p className="product-desc">{product.desc}</p>
            <p className="product-price">US$ {product.price}</p>
            <div className="long-row">
              <div className="alert-div">
                <img src={AlertIcon} alt="" />
                <p>Low stock - 8 in stock, ready to ship</p>
              </div>
              <div className="alert-div">
                <img src={BoxIcon} alt="" />
                <p> Free Shipping on Orders $50+</p>
              </div>
              <div className="alert-div">
                <img src={MoneyIcon} alt="" />
                <p>
                  {" "}
                  Earn 1190 <a href="">Kawaii Coins</a> from this product
                </p>
              </div>
            </div>
            <button className="add-cart" onClick={addToCart}>
              {addCart}
            </button>
            <Link to="/favorites">
              <button className="add-wishlist">Add to Wishlist</button>
            </Link>
            <p className="news">
              This super cute stationery looks like a CD but is actually a memo
              pad perfect for your short messages! It features illustrations of
              My Melody with a design from the Sanrio Y2K series, a collection
              that reminds us of the year 2000! This notepad even comes in a CD
              plastic case!
            </p>
          </div>
        </div>
      </div>
      <h1 className="for-you">Just For You</h1>
      <div className="product-div">
        {productArray.map((products) => (
          <Product
            key={products.id}
            product={products}
            photo={products.photo}
            desc={products.desc}
            price={products.price}
            id={products.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default ProductInfo;
