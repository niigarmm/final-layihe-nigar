import "../Home/Home.css";
import Product from "../Product/Product";
import arrow from "../Image/icons8-expand-arrow-50 (1).png";
import present from "../Image/icons8-present-48.png";
import img from "../Image/Screenshot 2024-09-15 151539.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ productArray, favorites, setFavorites }) {
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  return (
    <>
      <Header />
      <div className="home">
        <p className="new-stuff">NEW KAWAII STUFF</p>
        <p className="discover">
          Discover the latest kawaii stuff straight from Japan! Shop{" "}
          <a href="">Cute Stationery</a> , new <a href="">Kawaii Plushies</a>,
          and <a href="">Kawaii Accessories</a> for your{" "}
          <a href="">Kawaii Outfit</a> !
        </p>
        <div className="filter-part">
          <div className="left-part">
            <div className="series">
              <p>Character / Series</p>
              <img src={arrow} alt="" className="arrow" />
            </div>
            <div className="hidden-filter">
              <p>Filter</p>
            </div>
            <div className="brand">
              <p>Brand</p>
              <img src={arrow} alt="" className="arrow" />
            </div>
            <div className="manufacturer">
              <p>Manufacturer</p>
              <img src={arrow} alt="" className="arrow" />
            </div>
            <div className="category-div">
              <p>Category</p>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
          <div className="right-part">
            <div>
              <p className="sort">Sort by</p>
              <p className="featured">Featured</p>
            </div>

            <img src={arrow} alt="" className="arrow" />
          </div>
        </div>
        <div className="fixed-part">
          <img src={present} alt="" className="present" />
          <p>Reward</p>
        </div>
        <div className="product-div">
          {productArray.map((products) => (
            <Product
              key={products.id}
              product={products}
              photo={products.photo}
              desc={products.desc}
              price={products.price}
              id={products.id}
              isFavorite={favorites.includes(products.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
        <div className="last-part">
          <div className="last-part-items">
            <img src={img} alt="" className="img" />
            <div className="left-part-items">
              <h1>Say Goodbye to Boring!</h1>
              <p>
                Kawaii-fy Your Life with a monthly Kawaii Box filled with
                cuteness from Japan!
              </p>
              <div className="button-div">
                <Link to="/learn-more">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
