import "./LearnMore.css";
import BgImage from "../Image/bg-image.webp";
import KawaiiLogo from "../Image/kawaii-logo.webp";
import StarIcon from "../Image/star-icon.png";
import first from "../Image/first.webp";
import second from "../Image/second.webp";
import secondBg from "../Image/second-bg.webp";
import pinkHeart from "../Image/pink-heart.png";
import Smile from "../Image/smile.png";
import pinkStar from "../Image/pink-star.png";
import Carousel from "../Carousel/Carousel";
import { slides } from "../data/Data";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
export default function LearnMore() {
  return (
    <>
      <div className="upper-part">
        <Link to = "/">
          <img src={KawaiiLogo} alt="" />
        </Link>

        <div className="menu">
          <p>Subscribe</p>
          <p>What's In My Box</p>
          <p>As Seen On Tv</p>
          <p>About</p>
          <p>Blog</p>
        </div>
      </div>
      <div class="homepage-introbox">
        <h1>KAWAII-fy your life!</h1>
        <h3>The cutest monthly surprise</h3>
        <p>
          Each box is filled with kawaii items. Straight from Japan to your door
          with Free shipping!
        </p>
        <button>Get It Now</button>
      </div>
      <h1 className="contempt">HEAR FROM HAPPY SUBSCRIBERS</h1>
      <div className="rated">
        <p>Our subscribers have rated Kawaii Box</p>
        <img src={StarIcon} alt="" className="star" />
        <img src={StarIcon} alt="" className="star" />
        <img src={StarIcon} alt="" className="star" />
        <img src={StarIcon} alt="" className="star" />
        <img src={StarIcon} alt="" className="star" />
        <p> (1003 verified reviews).</p>
      </div>
      <div className="customer-comment">
        <div className="laura">
          <img src={second} alt="" className="laura-img" />
          <p>Laura</p>
          <div className="star-div">
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
          </div>
        </div>
        <p className="laure-comment">
          Thos box was soo cute. The Sakura Pompompurin was absolutely perfect!
          Very cute selection. You can never go wrong with sanrio or pokemon …
        </p>
        <div className="morganna">
          <img src={first} alt="" className="laura-img" />
          <p>Morganna</p>
          <div className="star-div">
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
            <img src={StarIcon} alt="" className="star" />
          </div>
        </div>
        <p className="laure-comment">
          This was a Christmas present from my Mom and I was so excited. I liked
          being able to track the status of the box all month long, looking …
        </p>
      </div>
      <div className="tastebanner">
        <img src={secondBg} alt="" className="second-bg" />
        <div>
          <div className="pink-heart">
            <img src={pinkHeart} alt="" />
            <div>
              <h1>100% Super Cute & Kawaii</h1>
              <p>
                Your kawaii subscription box is filled with thoughtfully curated
                super cute things from Japan.
              </p>
            </div>
          </div>
          <div className="pink-star">
            <img src={pinkStar} alt="" />
            <div>
              <h1>Free Shipping Worldwide</h1>
              <p>
                The shipping is always FREE to any country in the world! Your
                first box will be sent immediately.
              </p>
            </div>
          </div>
          <div className="pink-smile">
            <img src={Smile} alt="" />
            <div>
              <h1>Guaranteed Happiness</h1>
              <p>
                These cute things from Japan are guaranteed to put a smile on
                your face. Month after month!
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text">WHAT'S IN YOUR BOX?</h2>
      <p className="check">
        Check out what kind of super cute stuff & authentic kawaii characters we
        include in each kawaii subscription box!
      </p>
      <Carousel images={slides} />
      <Footer />
    </>
  );
}
