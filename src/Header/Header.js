import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import searchIcon from "../Image/icons8-search-30 (1).png";
import logo from "../Image/logo.avif";
import userIcon from "../Image/icons8-user-100.png";
import heartIcon from "../Image/icons8-heart-100.png";
import shopBag from "../Image/icons8-shopping-cart-100.png";
import arrow from "../Image/icons8-expand-arrow-50 (1).png";
import category from "../Image/category.png";
import { Link } from "react-router-dom";

const categories = [
  { title: "New", items: ["All New Products", "Exclusives", "Halloween"] },
  {
    title: "Plus & Toys",
    items: [
      "Plushies",
      "Gachapon Capsules",
      "Blind Boxes",
      "Collectibles",
      "Dolls & Figures",
      "Squishies",
      "Games & Toys",
      "DIY & Craft",
      "Gift Bags & Boxes",
    ],
  },
  {
    title: "Stationary",
    items: [
      "Pencil Cases",
      "Pens & Pencils",
      "Tapes & Stickers",
      "Highlighters & Markers",
      "Erasers",
      "Letters & Cards",
      "Notebooks & Pads",
      "Sticky Notes",
      "Office",
    ],
  },
  {
    title: "Accessories",
    items: [
      "Wallets & Purses",
      "Jewelry & Watches",
      "Phone Cases & Tech",
      "Lanyards & Card Holders",
      "Keychains & Charms",
      "Badges & Pins",
      "Hair Goods",
      "Travel",
      "Umbrellas",
      "Face Masks",
      "Headwear",
      "Beauty",
    ],
  },
  {
    title: "Bags",
    items: [
      "Backpacks",
      "Handbags",
      "Shoulder Bags",
      "Tote Bags",
      "Makeup Bags",
      "Lunch Bags",
      "Wallets & Purses",
      "Pouches",
    ],
  },
  {
    title: "Clothing",
    items: [
      "T-Shirts & Tops",
      "Bottoms",
      "Skirts",
      "Socks",
      "Slippers",
      "Loungewear",
      "Headwear",
    ],
  },
  {
    title: "Home",
    items: [
      "Bento & Lunch Boxes",
      "Drinkware",
      "Dining",
      "Kitchen",
      "Bath",
      "Beauty",
      "Office",
      "Home Goods",
    ],
  },
  {
    title: "Candy & Snacks",
    items: [
      "Candy",
      "Kawaii Candy",
      "DIY Candy",
      "Snacks",
      "Anime Snacks",
      "Cookies & Biscuits",
      "Chocolate",
      "Food & Drinks",
    ],
  },
  {
    title: "More links",
    items: ["Characters", "Brands", "Manufacturers", "Exclusives"],
  },
  {
    title: "Sale",
    items: [],
  },
];

const Dropdown = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div className="category-item">
      <button onClick={toggleDropdown} className="btn">
        <p className="new-p">{title}</p>
        <img src={arrow} alt="arrow icon" className="up-arrow" />
      </button>
      {isOpen && items.length > 0 && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <a href="#" key={index} className="dropdown-item">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 114;
      if (window.scrollY >= triggerHeight) {
        setIsFixed(true);
        setIsHidden(true);
      } else {
        setIsFixed(false);
        setIsHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="pink-part">
        <p>✨ Free Shipping US$50+ ✨</p>
      </div>
      <div className={`search-part ${isHidden ? "hidden" : ""}`}>
        <div className="search-input">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Search our store" />
        </div>
        <div className="hidden-category">
          <img src={category} alt="" className="category-img" />
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="shopping-icon">
          <Link to="/login">
            <img src={userIcon} alt="user icon" className="user" />
          </Link>
          <Link to="/favorites">
            <img src={heartIcon} alt="heart icon" className="heart" />
          </Link>{" "}
          <img src={shopBag} alt="shopping bag icon" className="bag" />
        </div>
      </div>
      <div className={`stable-part ${isFixed ? "fixed" : ""}`}>
        <div className="category">
          {categories.map((category, index) => (
            <Dropdown
              key={index}
              title={category.title}
              items={category.items}
              isOpen={openIndex === index}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
        </div>
        <div className="hidden-search-part">
          <input type="text" placeholder="Search" className="hidden-search" />
        </div>
        <div className="purple-part">💖 Get a FREE Kawaii Bottle! 💖</div>
      </div>
    </>
  );
}
