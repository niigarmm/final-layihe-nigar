import "../Product/Product.css";
import whiteHeart from "../Image/white-heart.png";
import redHeart from "../Image/red-heart.png"

export default function Product({ photo, desc, price, id,isFavorite, toggleFavorite }) {
  
  return (
    <div className="product-div">
      <div className="product-cart">
      <img
          src={isFavorite ? redHeart : whiteHeart}
          alt="heart icon"
          className="white-heart"
          onClick={() => toggleFavorite(id)}
        />
        <img src={photo} alt="" className="photo" />
        <p className="desc">{desc}</p>
        <p className="price">US$ {price}</p>
      </div>
    </div>
  );
}
