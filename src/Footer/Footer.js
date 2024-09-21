import "../Footer/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-column">
        <h4>Help</h4>
        <a href="">Contact Us</a>
        <a href="">Order Tracking</a>
        <a href="">Shipping</a>
        <a href="">Returns</a>
      </div>
      <div className="footer-first-column">
        <h4>Learn Morep</h4>
        <a href="">About Us</a>
        <a href="">Rewards Program</a>
        <a href="">Refer a Friend</a>
        <a href="">Affiliate Program</a>
        <a href="">For Creators</a>
        <a href="">Character News Blog</a>
        <a href="">Reviews</a>
      </div>
      <div className="footer-first-column">
        <h4>Shop</h4>
        <a href="">Gift Cards</a>
        <a href="">Fukubukuro</a>
        <a href="">Kawaii Box</a>
      </div>
      <div className="footer-first-column">
        <h4>Be the first to know!</h4>
        <input type="email" placeholder="Email" className="email-input"/>
        <p>Receive the latest kawaii news and deals!</p>
      </div>
      <p className="last-p">Copyright © 2024 Blippo® - Member of Kawaii Group - Terms & Conditions - Privacy Policy</p>
    </div>
  );
}
