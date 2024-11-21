import favoritIcon from "../../assets/favorite-icon.svg";
import favoritIconFilld from "../../assets/favorite-icon-filld.svg";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext, useState} from "react";

export default function Product(props) {
  const { id, title, brand, price, image, isFavorite, quantity } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [favorite, setFavorite] = useState(isFavorite || false);
  const navigate = useNavigate();
  
  const cartItemAmount = cartItems[id];


  const toggleFavoriteBtn = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };



  return (
    <article  className="product" key={id}>
      <img src={image} alt={title} className="product_image" />
      <h2 className="product_title">{title}</h2>
      <p>Price {price}kr</p>
      <p className="product_brand">{brand}</p>
      <footer>
        <div className="favorite_btn_container">
          <img
            src={favorite ? favoritIconFilld : favoritIcon}
            alt="favorite icon"
            className="favorite_icon"
            onClick={toggleFavoriteBtn}
            
          />
        </div>

        <span className="separator"></span>
        <div className="add_and_more_info_container">
          <button onClick={() => addToCart(id)} className="product_button">
            Add to cart {cartItemAmount > 0 && <></>}
          </button>

          <a onClick={() =>{navigate(`/products/${title}`)}}>more Info</a>
        </div>
      </footer>
    </article>
  );
}
