import "../Favorites/Favorites.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Favorites({ favorites, productArray }) {
  const favoriteProducts = productArray.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div>
      <Header />
      {favoriteProducts.length > 0 ? (
        <div className="product-div">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="product-cart">
              <img src={product.photo} alt={product.desc} className="photo" />
              <p className="desc">{product.desc}</p>
              <p className="price">Price: US$ {product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1 className="wishlist">WishList</h1>
          <p className="wishlist-p">You wishlist is empty</p>
        </>
      )}
      <Link to="/" className="link">
        <p className="go-back">Go Back</p>
      </Link>
      <Footer />
    </div>
  );
}
