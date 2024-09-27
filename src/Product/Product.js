import "../Product/Product.css";
import whiteHeart from "../Image/white-heart.png";
import redHeart from "../Image/red-heart.png";
import { Link } from "react-router-dom";

export default function Product({
  photo,
  desc,
  price,
  id,
  isFavorite,
  toggleFavorite,
  product
}) {
  return (
    <div className="product-div">
      <div className="product-cart">
        <img
          src={isFavorite ? redHeart : whiteHeart}
          alt="heart icon"
          className="white-heart"
          onClick={() => toggleFavorite(id)}
        />
        <Link to={`/product-info/${product.id}`}>
          <img src={photo} alt="" className="photo" />
        </Link>
        <p className="desc">{desc}</p>
        <p className="price">US$ {price}</p>
      </div>
    </div>
  );
}
